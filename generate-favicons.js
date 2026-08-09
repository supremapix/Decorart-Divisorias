import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

// SVG Content for RealFaviconGenerator
const mainSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047" />
      <stop offset="45%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#856404" />
    </linearGradient>
    <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFE066" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#9C7C13" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Layer -->
  <rect width="512" height="512" rx="120" fill="url(#bgGrad)" />
  <rect x="12" y="12" width="488" height="488" rx="108" fill="none" stroke="url(#goldGrad)" stroke-width="10" stroke-opacity="0.5" />

  <!-- Partition Icon Main Group -->
  <g transform="translate(64, 64)">
    <!-- Outer Frame of Partition -->
    <rect x="16" y="16" width="352" height="352" rx="40" fill="none" stroke="url(#goldGrad)" stroke-width="24" filter="url(#glow)" />

    <!-- 3 Partition Panels (Eucatex/Drywall/Modular) -->
    <rect x="52" y="52" width="80" height="280" rx="12" fill="url(#panelGrad)" />
    <rect x="152" y="52" width="80" height="280" rx="12" fill="url(#panelGrad)" opacity="0.85" />
    <rect x="252" y="52" width="80" height="280" rx="12" fill="url(#panelGrad)" opacity="0.70" />

    <!-- Glass Visor Line -->
    <line x1="52" y1="168" x2="332" y2="168" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round" stroke-dasharray="20 12" opacity="0.95" />
  </g>
</svg>`;

// Safari Monochrome SVG
const safariSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="#000000" d="M120 32 C70 32 32 70 32 120 L32 392 C32 442 70 480 120 480 L392 480 C442 480 480 442 480 392 L480 120 C480 70 442 32 392 32 Z M80 80 L432 80 L432 432 L80 432 Z M120 112 L200 112 L200 400 L120 400 Z M216 112 L296 112 L296 400 L216 400 Z M312 112 L392 112 L392 400 L312 400 Z" />
</svg>`;

// Helper to render PNG buffer from SVG
function renderPng(svgStr, width, height) {
  const resvg = new Resvg(svgStr, {
    fitTo: {
      mode: 'width',
      value: width,
    },
  });
  const pngData = resvg.render();
  return pngData.asPng();
}

// Write SVG files
fs.writeFileSync('public/favicon.svg', mainSvg);
fs.writeFileSync('public/safari-pinned-tab.svg', safariSvg);
console.log('✔ Generated public/favicon.svg and public/safari-pinned-tab.svg');

// Render PNG sizes
const pngTargets = [
  { name: 'public/favicon-16x16.png', size: 16 },
  { name: 'public/favicon-32x32.png', size: 32 },
  { name: 'public/favicon-48x48.png', size: 48 },
  { name: 'public/apple-touch-icon.png', size: 180 },
  { name: 'public/android-chrome-192x192.png', size: 192 },
  { name: 'public/android-chrome-512x512.png', size: 512 },
  { name: 'public/mstile-150x150.png', size: 150 },
  { name: 'public/logo192.png', size: 192 },
  { name: 'public/logo512.png', size: 512 },
];

for (const target of pngTargets) {
  const pngBuffer = renderPng(mainSvg, target.size, target.size);
  fs.writeFileSync(target.name, pngBuffer);
  console.log(`✔ Generated ${target.name} (${target.size}x${target.size})`);
}

