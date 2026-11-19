import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { DrywallSection } from '../pages/DrywallServices';
import { DRYWALL_BASE, DRYWALL_SERVICES, DRYWALL_SITE, DRYWALL_WHATSAPP, drywallPath } from '../drywall-services';

const pageHtml = readFileSync('dist/index.html', 'utf8');
if (!/<div id="root"><\/div>/.test(pageHtml)) throw new Error('Vite did not emit the expected #root shell');
const htmlWithoutTitle = pageHtml.replace(/<title>[^<]*<\/title>/i, '');
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
const routes = [{ path: DRYWALL_BASE, file: 'central', service: undefined }, ...DRYWALL_SERVICES.map(service => ({
  path: drywallPath(service.slug), file: service.slug, service,
}))];
if (routes.length !== 17 || new Set(routes.map(route => route.path)).size !== 17) throw new Error('Drywall route list invalid');
const rewriteRules = JSON.parse(readFileSync('vercel.json', 'utf8')).rewrites as {source: string; destination: string}[];
mkdirSync('dist/_drywall', { recursive: true });
for (const {path, file, service} of routes) {
  const context = {} as { helmet: HelmetServerState };
  const body = renderToStaticMarkup(<HelmetProvider context={context}><DrywallSection service={service} /></HelmetProvider>);
  const meta = context.helmet;
  const head = [meta.title, meta.meta, meta.link, meta.script].map(item => item.toString()).join('\n');
  const html = htmlWithoutTitle.replace('</head>', head + '\n</head>').replace('<div id="root"></div>', () => '<div id="root">' + body + '</div>');
  const canonical = DRYWALL_SITE + path;
  const destination = '/_drywall/' + file + '.html';
  if (!head.includes('href="' + canonical + '"') ||
      !sitemap.includes('<loc>' + canonical + '</loc>') ||
      !rewriteRules.some(rule => rule.source === path && rule.destination === destination)) throw new Error('SEO or route mismatch: ' + path);
  const links = Array.from(body.matchAll(/href="((?:https:\/\/wa\.me\/|mailto:|tel:)[^"]+)"/g), match => match[1].replace(/&amp;/g, '&'));
  if (links.length < 3 || links.some(href => href !== DRYWALL_WHATSAPP)) throw new Error('Contact scope mismatch: ' + path);
  const assets = Array.from(body.matchAll(/src="(\/imagens\/drywall\/[^"]+)"/g), match => match[1]);
  if (!assets.length || assets.some(asset => !existsSync('dist' + asset))) throw new Error('Missing illustration: ' + path);
  if ((body.match(/<h1(?:>| )/g) || []).length !== 1 || !body.includes('Imagem ilustrativa gerada por IA')) throw new Error('Content markup missing: ' + path);
  writeFileSync('dist' + destination, html, 'utf8');
}
console.log('Validated and prerendered ' + routes.length + ' Decorart drywall routes');
