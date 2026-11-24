import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, ChevronUp, MessageCircle } from 'lucide-react';
import { Logo } from '../components/Logo';
import { DRYWALL_BASE, DRYWALL_SITE, DRYWALL_SERVICES, DRYWALL_THEMES, DRYWALL_WHATSAPP, drywallPath, type DrywallService, type DrywallTheme } from '../drywall-services';

const hubTitle = 'Drywall, gesso e sistemas de fechamento';
const hubIntro = 'Consulte paredes e divisórias, forros, sancas, isolamento acústico e térmico, fechamentos externos e tratamento de juntas em Curitiba e Região Metropolitana.';
const themes = Object.entries(DRYWALL_THEMES) as [DrywallTheme, typeof DRYWALL_THEMES[DrywallTheme]][];
const specificArt = {
  'forro-plano': 'Forro de gesso plano em uma sala de trabalho, com luminárias lineares aparentes e uma tampa de acesso rente ao teto',
  'revestimento-interno': 'Parede interna parcialmente revestida com placas claras, com a alvenaria existente ainda visível ao lado',
} as const;
type ArtKey = DrywallTheme | 'cimenticia' | keyof typeof specificArt;
const isSpecificArt = (theme: ArtKey): theme is keyof typeof specificArt =>
  theme === 'forro-plano' || theme === 'revestimento-interno';
const imagePath = (theme: ArtKey, width = 1200) => '/imagens/drywall/' + (theme === 'sancas' ? 'forros' : theme) + '-' + width + (isSpecificArt(theme) ? '.webp' : '.png');
const imageAlt = (theme: ArtKey) => isSpecificArt(theme) ? specificArt[theme] : theme === 'cimenticia' ? 'Ilustração de fechamento com placas cimentícias sobre estrutura de suporte' : theme === 'forros' || theme === 'sancas' ? 'Ilustração de teto de gesso com rebaixo e iluminação indireta' : DRYWALL_THEMES[theme].alt;
const heroArt = (service?: DrywallService): ArtKey => {
  switch (service?.slug) {
    case 'forro-de-drywall': return 'forro-plano';
    case 'revestimentos-para-construcao-a-seco': return 'revestimento-interno';
    case 'fechamento-com-placas-cimenticias': return 'cimenticia';
    default: return service?.theme || 'paredes';
  }
};
const label = 'Orçamento de drywall e gesso pelo WhatsApp';
const panel = 'rounded-2xl border border-slate-200 bg-white p-5 sm:p-6';
const linkFocus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600';

function QuoteLink({ compact = false }: { compact?: boolean }) {
  return <a href={DRYWALL_WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label={label}
    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-300 px-4 py-3 text-sm font-bold text-slate-950 hover:bg-amber-200 ${linkFocus}`}>
    <MessageCircle size={19} aria-hidden="true" /> {compact ? 'Pedir orçamento' : 'Pedir orçamento pelo WhatsApp'}
  </a>;
}

function Art({ theme, priority = false }: { theme: ArtKey; priority?: boolean }) {
  return <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
    <img src={imagePath(theme)} srcSet={imagePath(theme, 640) + ' 640w, ' + imagePath(theme, 768) + ' 768w, ' + imagePath(theme) + ' 1200w'} sizes={priority ? '(max-width: 1023px) calc(100vw - 32px), 560px' : '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 375px'} alt={imageAlt(theme)} width="1200" height="800" loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'auto' : 'async'} className="block aspect-[3/2] w-full object-cover" />
    <figcaption className="bg-white px-4 py-2 text-xs font-medium text-slate-600">Imagem ilustrativa gerada por IA. Não representa uma obra executada.</figcaption>
  </figure>;
}

function Breadcrumbs({ service }: { service?: DrywallService }) {
  return <nav aria-label="Localização nesta página" className="mx-auto max-w-6xl px-4 py-4 text-sm text-slate-600 sm:px-6">
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <li><a className={`underline underline-offset-4 ${linkFocus}`} href="/">Início</a></li>
      <li aria-hidden="true">/</li>
      <li><a className={`underline underline-offset-4 ${linkFocus}`} href="/servicos">Serviços</a></li>
      <li aria-hidden="true">/</li>
      <li>{service ? <a className={`underline underline-offset-4 ${linkFocus}`} href={DRYWALL_BASE}>Drywall e gesso</a> : <span aria-current="page">Drywall e gesso</span>}</li>
      {service && <><li aria-hidden="true">/</li><li aria-current="page">{service.name}</li></>}
    </ol>
  </nav>;
}

function DrywallHead({ service }: { service?: DrywallService }) {
  const name = service?.name || hubTitle;
  const title = service ? `${name} em Curitiba | Decorart` : 'Drywall, gesso e fechamentos em Curitiba | Decorart';
  const description = service?.summary || hubIntro;
  const canonical = DRYWALL_SITE + (service ? drywallPath(service.slug) : DRYWALL_BASE);
  const img = DRYWALL_SITE + imagePath(heroArt(service));
  const trail = [
    { '@type': 'ListItem', position: 1, name: 'Início', item: DRYWALL_SITE + '/' },
    { '@type': 'ListItem', position: 2, name: 'Serviços', item: DRYWALL_SITE + '/servicos' },
    { '@type': 'ListItem', position: 3, name: hubTitle, item: DRYWALL_SITE + DRYWALL_BASE },
  ];
  if (service) trail.push({ '@type': 'ListItem', position: 4, name, item: canonical });
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': service ? 'WebPage' : 'CollectionPage', '@id': canonical + '#pagina', url: canonical, name, description, inLanguage: 'pt-BR', mainEntity: { '@id': canonical + '#conteudo' } },
      service
        ? { '@type': 'Service', '@id': canonical + '#conteudo', name, description, url: canonical, areaServed: { '@type': 'City', name: 'Curitiba' }, provider: { '@type': 'Organization', name: 'Decorart Divisórias', url: DRYWALL_SITE + '/' } }
        : { '@type': 'ItemList', '@id': canonical + '#conteudo', name: hubTitle, numberOfItems: DRYWALL_SERVICES.length, itemListElement: DRYWALL_SERVICES.map((item, idx) => ({ '@type': 'ListItem', position: idx + 1, name: item.name, url: DRYWALL_SITE + drywallPath(item.slug) })) },
      { '@type': 'BreadcrumbList', itemListElement: trail },
    ],
  };
  return <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Decorart Divisórias" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={img} />
    <meta property="og:image:alt" content={imageAlt(heroArt(service))} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={img} />
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>;
}

function Hero({ service }: { service?: DrywallService }) {
  return <section className="bg-slate-950 text-white">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-14">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">Decorart Divisórias · Curitiba e região</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{service?.name || hubTitle}</h1>
        <p className="my-5 max-w-xl text-lg leading-relaxed text-slate-200">{service?.summary || hubIntro}</p>
        <div className="flex flex-wrap items-center gap-3">
          <QuoteLink />
          {!service && <a href="#lista-drywall" className={`inline-flex min-h-12 items-center gap-2 rounded-xl border border-slate-500 px-4 py-3 text-sm font-bold text-white hover:border-amber-300 ${linkFocus}`}>Ver todos os 16 serviços <ArrowRight size={16} aria-hidden="true" /></a>}
        </div>
      </div>
      <Art theme={heroArt(service)} priority />
    </div>
  </section>;
}

function Directory() {
  const jumpThemes: DrywallTheme[] = ['paredes', 'forros', 'acustico', 'externo'];
  return <>
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Encontre o serviço pelo que sua obra precisa</h2>
      <p className="mt-2 text-base leading-relaxed text-slate-700">Escolha uma família para consultar aplicações e preparar as informações para o orçamento.</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {jumpThemes.map((theme, idx) => <a key={theme} href={theme === 'externo' ? drywallPath('fechamento-externo-em-glasroc') : theme === 'acustico' ? drywallPath('paredes-com-isolamento-acustico') : '#tema-' + theme} className={`inline-flex min-h-12 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-900 hover:border-amber-600 ${linkFocus}`}>
          {['Paredes e divisórias', 'Forro e sancas', 'Isolamento acústico', 'Fechamento em Glasroc'][idx]} <ArrowRight size={15} aria-hidden="true" />
        </a>)}
      </div>
    </section>
    <section id="lista-drywall" aria-label="Lista completa de 16 serviços" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-12 sm:px-6">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {themes.map(([id, theme]) => <article id={'tema-' + id} key={id} className="flex scroll-mt-20 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Art theme={id} />
          <div className="px-5 py-5">
            <p className="text-sm font-medium text-slate-600">{theme.label}</p>
            <h3 className="text-xl font-bold text-slate-900">{theme.name}</h3>
            <ul className="mt-4 divide-y divide-slate-200">
              {DRYWALL_SERVICES.filter(service => service.theme === id).map(service => <li key={service.slug}>
                <a className={`flex min-h-12 items-center justify-between gap-2 py-2 font-semibold text-slate-900 underline decoration-amber-500 underline-offset-4 hover:text-amber-900 ${linkFocus}`} href={drywallPath(service.slug)}>{service.name}<ArrowRight size={16} className="shrink-0" aria-hidden="true" /></a>
              </li>)}
            </ul>
          </div>
        </article>)}
      </div>
    </section>
    <section className="bg-slate-100 px-4 py-11 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-900">Três distinções que ajudam no orçamento</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className={panel}><h3 className="font-bold text-slate-900">Interior não é fachada</h3><p className="mt-2 text-slate-700">Chapas internas comuns e placas especificadas para exposição externa não são equivalentes. Informe se a superfície pega chuva ou vapor frequente.</p></article>
          <article className={panel}><h3 className="font-bold text-slate-900">Ruído não é calor</h3><p className="mt-2 text-slate-700">Anote se o objetivo é reduzir passagem de som, tratar temperatura ou combinar os dois. Cada objetivo pede critérios próprios.</p></article>
          <article className={panel}><h3 className="font-bold text-slate-900">Acabamento começa antes</h3><p className="mt-2 text-slate-700">Informe o que será instalado na parede ou no teto, onde ficam as aberturas e se alguma parte precisa continuar acessível.</p></article>
        </div>
      </div>
    </section>
  </>;
}

function ServiceBody({ service }: { service: DrywallService }) {
  const related = DRYWALL_SERVICES.filter(item => item.theme === service.theme && item.slug !== service.slug).slice(0, 3);
  const source = service.slug === 'fechamento-externo-em-glasroc' ? 'https://www.placo.com.br/glasroc-X' : undefined;
  return <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_340px]">
    <div className="space-y-5">
      <section className={panel}><h2 className="text-2xl font-bold text-slate-900">O que avaliar primeiro</h2><p className="mt-3 text-base leading-relaxed text-slate-700">{service.intro}</p></section>
      <section className={panel}><h2 className="text-2xl font-bold text-slate-900">O que muda na execução</h2><p className="mt-3 text-base leading-relaxed text-slate-700">{service.detail}</p>
        {source && <p className="mt-3 text-sm"><a className={`font-semibold text-slate-900 underline underline-offset-4 ${linkFocus}`} href={source} target="_blank" rel="noreferrer">Consultar especificações da Placo para Glasroc X</a></p>}
      </section>
      <section className={panel}><h2 className="text-2xl font-bold text-slate-900">Pergunta frequente</h2><h3 className="mt-3 font-bold text-slate-900">{service.question}</h3><p className="mt-2 text-base leading-relaxed text-slate-700">{service.answer}</p></section>
    </div>
    <aside className="space-y-5">
      <section className={panel}><h2 className="text-xl font-bold text-slate-900">O que enviar para orçamento</h2><p className="mb-4 mt-3 text-base leading-relaxed text-slate-700">{service.brief} Inclua também bairro ou cidade e a etapa atual da obra.</p><QuoteLink /></section>
      <section className={panel}><h2 className="text-xl font-bold text-slate-900">Serviços relacionados</h2><ul className="mt-2 divide-y divide-slate-200">{related.map(item => <li key={item.slug}>
        <a className={`flex min-h-12 items-center gap-2 font-semibold text-slate-900 underline underline-offset-4 ${linkFocus}`} href={drywallPath(item.slug)}>{item.name} <ArrowRight size={15} aria-hidden="true" /></a>
      </li>)}</ul><a href={DRYWALL_BASE} className={`mt-3 inline-flex min-h-12 items-center gap-2 font-semibold text-slate-900 underline underline-offset-4 ${linkFocus}`}><ArrowLeft size={16} aria-hidden="true" /> Voltar à central</a></section>
    </aside>
  </div>;
}

export function DrywallLandingTeaser() {
  return <section className="border-y border-amber-900/20 bg-slate-950 px-4 py-10 text-white sm:px-6" aria-labelledby="drywall-central-teaser">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
      <div><p className="text-sm font-bold uppercase tracking-widest text-amber-300">Central de serviços</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl" id="drywall-central-teaser">{hubTitle}</h2>
      <p className="mt-2 text-base text-slate-200">Paredes, forros, sancas, isolamento, placas para áreas externas e acabamento.</p></div>
      <a href={DRYWALL_BASE} className={`inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-300 px-4 py-3 font-bold text-slate-950 hover:bg-amber-200 ${linkFocus}`}>Ver todos os 16 serviços <ArrowRight size={18} aria-hidden="true" /></a>
    </div>
  </section>;
}

export function DrywallSection({ service }: { service?: DrywallService }) {
  return <div id="topo-drywall" className="min-h-screen bg-slate-50 font-sans">
    <DrywallHead service={service} />
    <a href="#conteudo-drywall" className="sr-only z-50 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:p-4 focus:text-slate-950">Ir ao conteúdo</a>
    <header className="border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="/" className={linkFocus} aria-label="Decorart Divisórias, início"><Logo className="h-10" /></a>
        <nav className="flex items-center gap-3" aria-label="Navegação">
          <a href="/servicos" className={`inline-flex min-h-12 items-center font-semibold text-slate-200 underline underline-offset-4 ${linkFocus}`}>Serviços</a>
          <QuoteLink compact />
        </nav>
      </div>
    </header>
    <main id="conteudo-drywall">
      <Breadcrumbs service={service} />
      <Hero service={service} />
      {service ? <ServiceBody service={service} /> : <Directory />}
    </main>
    <footer className="bg-slate-950 px-4 pb-24 pt-8 text-white sm:px-6 lg:pb-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <div><p className="font-bold">Decorart Divisórias</p><p className="mt-1 text-slate-300">Central de drywall, gesso e fechamentos em Curitiba e região.</p></div>
        <div className="flex flex-wrap items-center gap-3"><QuoteLink compact /><a href="#topo-drywall" className={`inline-flex min-h-12 items-center gap-2 rounded-xl border border-slate-600 px-3 py-2 font-semibold text-white ${linkFocus}`}><ChevronUp size={18} aria-hidden="true" /> Voltar ao topo</a></div>
      </div>
    </footer>
    <a href={DRYWALL_WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label={label}
      className={`fixed bottom-4 right-4 z-40 inline-flex min-h-12 max-w-[calc(100%-2rem)] items-center gap-2 rounded-full bg-green-800 px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-green-900 ${linkFocus}`}>
      <MessageCircle size={20} aria-hidden="true" /> WhatsApp de drywall
    </a>
  </div>;
}
