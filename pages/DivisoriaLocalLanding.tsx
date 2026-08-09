import React from 'react';
import { motion } from 'framer-motion';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ContactForm } from '../components/ContactForm';
import { SafeImage } from '../components/SafeImage';
import { BUSINESS_INFO, FAQ_ITEMS } from '../constants';
import { 
  Building2, MessageCircle, PhoneCall, Check, Layers, Layout
} from 'lucide-react';

interface LandingProps {
  slugKey: 'curitiba' | 'eucatex-curitiba' | 'escritorio-curitiba' | 'comerciais-curitiba' | 'sao-jose-dos-pinhais';
}

export const DivisoriaLocalLanding: React.FC<LandingProps> = ({ slugKey }) => {
  const configs = {
    'curitiba': {
      title: "Divisórias em Curitiba | Decorart Divisórias Especializada",
      h1: "Divisórias em Curitiba",
      description: "Empresa especializada em divisórias Eucatex, divisórias para escritórios, clínicas e empresas em Curitiba. Garantia de 5 anos e orçamento rápido.",
      canonical: "/divisorias-curitiba",
      subtitle: "Referência no fornecimento e montagem de divisórias para ambientes corporativos e comerciais em Curitiba.",
      heroImg: "https://scontent.xx.fbcdn.net/v/t39.105495-1/769412979_1400738358608292_6483490568402387167_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=100&_nc_ohc=m66DrTSIZK8Q7kNvwFnrqfe&sdl=0&ccb=14-4&oh=00_AQGgjWK5rVsVlL9ayKuzguZQCfXBK8lMlFtp7-ht7mdWyA&oe=6A7E741F&_nc_sid=a21977",
      badge: "LÍDER EM DIVISÓRIAS EM CURITIBA"
    },
    'eucatex-curitiba': {
      title: "Divisórias de Eucatex em Curitiba | Venda e Instalação Decorart",
      h1: "Divisórias de Eucatex em Curitiba",
      description: "Instalação de divisórias Eucatex modulares para escritórios e empresas em Curitiba. Preço direto de fábrica e montagem imediata.",
      canonical: "/divisorias-eucatex-curitiba",
      subtitle: "Painéis Eucatex de 35mm com perfis de aço galvanizado. A melhor solução modular para salas comerciais.",
      heroImg: "https://scontent.xx.fbcdn.net/v/t39.105495-1/769412979_1400738358608292_6483490568402387167_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=100&_nc_ohc=m66DrTSIZK8Q7kNvwFnrqfe&sdl=0&ccb=14-4&oh=00_AQGgjWK5rVsVlL9ayKuzguZQCfXBK8lMlFtp7-ht7mdWyA&oe=6A7E741F&_nc_sid=a21977",
      badge: "DIVISÓRIAS EUCATEX MODULARES"
    },
    'escritorio-curitiba': {
      title: "Divisórias para Escritórios em Curitiba | Decorart Divisórias",
      h1: "Divisórias para Escritórios em Curitiba",
      description: "Projetos de divisórias corporativas para escritórios no Batel, Centro, Rebouças e toda Curitiba. Privacidade acústica e elegância visual.",
      canonical: "/divisorias-escritorio-curitiba",
      subtitle: "Crie salas de reunião, gerências e recepções com rapidez e acabamento de padrão executivo.",
      heroImg: "https://scontent.xx.fbcdn.net/v/t39.105495-1/768310450_1629409275567951_4688024770134287593_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=103&_nc_ohc=K-dU_LXwGUkQ7kNvwG3YlwZ&sdl=0&ccb=14-4&oh=00_AQG7d3sbpTlSvCLS_gsj56wc-Mvmrsloo5rSg3gLf3aaVg&oe=6A7E63B8&_nc_sid=a21977",
      badge: "DIVISÓRIAS CORPORATIVAS"
    },
    'comerciais-curitiba': {
      title: "Divisórias Comerciais em Curitiba | Lojas, Clínicas e Empresas",
      h1: "Divisórias Comerciais em Curitiba",
      description: "Divisórias robustas para lojas, galpões, clínicas e consultórios em Curitiba. Agilidade na entrega sem interromper seus negócios.",
      canonical: "/divisorias-comerciais-curitiba",
      subtitle: "Soluções de separação espacial para comércios que precisam inaugurar ou reformar com urgência.",
      heroImg: "https://scontent.xx.fbcdn.net/v/t39.105495-1/767560602_1031414302832652_6825547820352328130_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=100&_nc_ohc=n3deeDxDq6kQ7kNvwE2GFv6&sdl=0&ccb=14-4&oh=00_AQFEMiWsg3HRKA_vrgldUkBCdwV4RhgC7b-isUJRlTQYLQ&oe=6A7E794F&_nc_sid=a21977",
      badge: "DIVISÓRIAS COMERCIAIS & INDUSTRIAIS"
    },
    'sao-jose-dos-pinhais': {
      title: "Divisórias em São José dos Pinhais | Decorart Divisórias",
      h1: "Divisórias em São José dos Pinhais",
      description: "Instalação profissional de divisórias Eucatex e Drywall para escritórios e empresas em São José dos Pinhais. Atendimento imediato.",
      canonical: "/divisorias-sao-jose-dos-pinhais",
      subtitle: "Atendimento prioritário para empresas, indústrias e escritórios de São José dos Pinhais.",
      heroImg: "https://scontent.xx.fbcdn.net/v/t39.105495-1/770756442_1578290340600530_6185038236087888169_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=102&_nc_ohc=y7io7SILIc4Q7kNvwGW0W_s&sdl=0&ccb=14-4&oh=00_AQHaMBLxtbaZWKW3GwBQKssj4PAsrmgYhozt63s0SAXmmw&oe=6A7E8097&_nc_sid=a21977",
      badge: "ATENDIMENTO SÃO JOSÉ DOS PINHAIS"
    }
  };

  const config = configs[slugKey] || configs['curitiba'];

  return (
    <div className="bg-white min-h-screen font-sans">
      <EnhancedSEO 
        title={config.title}
        description={config.description}
        canonical={config.canonical}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": `${BUSINESS_INFO.domain}/#organization`,
              "name": BUSINESS_INFO.name,
              "url": BUSINESS_INFO.domain,
              "telephone": BUSINESS_INFO.phones[0],
              "email": BUSINESS_INFO.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": BUSINESS_INFO.address,
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "addressCountry": "BR"
              },
              "areaServed": ["Curitiba", "São José dos Pinhais", "Região Metropolitana de Curitiba"]
            },
            {
              "@type": "WebPage",
              "@id": `${BUSINESS_INFO.domain}${config.canonical}/#webpage`,
              "url": `${BUSINESS_INFO.domain}${config.canonical}`,
              "name": config.h1,
              "description": config.description
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": BUSINESS_INFO.domain },
                { "@type": "ListItem", "position": 2, "name": "Divisórias", "item": `${BUSINESS_INFO.domain}/servicos` },
                { "@type": "ListItem", "position": 3, "name": config.h1, "item": `${BUSINESS_INFO.domain}${config.canonical}` }
              ]
            }
          ]
        }}
      />

      {/* Hero Dobra Principal com Fundo Real */}
      <section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage src={config.heroImg} alt={config.h1} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <div className="inline-flex items-center bg-gold/20 text-gold px-5 py-2 rounded-full mb-6 font-black text-xs md:text-sm border border-gold/40 tracking-widest uppercase">
            <Building2 size={16} className="mr-2" /> {config.badge}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight leading-tight">
            {config.h1}
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 mb-10 font-medium leading-relaxed max-w-3xl">
            {config.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={BUSINESS_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition-all flex items-center active:scale-95"
            >
              <MessageCircle size={18} className="mr-2" /> Orçamento
            </a>
            <a 
              href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} 
              className="bg-slate-900 border border-white/20 text-white hover:border-gold px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center"
            >
              <PhoneCall size={18} className="mr-2 text-gold" /> Ligar
            </a>
          </div>
        </div>
      </section>

      {/* Conteúdo Institucional */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase mb-6 tracking-tight">
                  Especialização em Divisórias em Curitiba
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  A <strong>Decorart Divisórias</strong> possui mais de 15 anos de atuação focada na fabricação, fornecimento e instalação de <strong>divisórias modulares e corporativas em Curitiba e RMC</strong>. Nosso processo é otimizado para garantir rapidez, limpeza na montagem e acabamento executivo.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Seja para adequar um andar corporativo no Batel, criar salas em um escritório comercial no Centro ou setorizar um galpão industrial, entregamos sistemas de divisórias pré-acabados de altíssima durabilidade.
                </p>
              </div>

              {/* Destaques Técnicos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                  <Layout className="text-gold mb-3" size={32} />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Divisórias Modulares Eucatex</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Painéis de 35mm com estrutura em perfis de aço zincado. Disponíveis em cores neutras e amadeiradas com portas e visores.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                  <Layers className="text-gold mb-3" size={32} />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Divisórias em Drywall Acústico</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Estrutura em gesso acartonado com miolo de lã de rocha para conforto acústico em salas de reunião e consultórios.
                  </p>
                </div>
              </div>

              {/* Diferenciais */}
              <div className="bg-slate-950 text-white p-8 rounded-3xl space-y-6 shadow-xl border border-gold/30">
                <h3 className="text-xl font-black uppercase text-gold tracking-tight">Diferenciais Decorart</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Montagem sem entulho e sem poeira",
                    "Visores de vidro para luz natural",
                    "Garantia estendida de 5 anos",
                    "Orçamento rápido via planta ou visita",
                    "Preço direto de fábrica por m²",
                    "Atendimento personalizado para empresas"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-gold mr-2.5 shrink-0 mt-0.5" size={18} />
                      <span className="text-xs md:text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase mb-6 tracking-tight">Dúvidas Frequentes</h3>
                <div className="space-y-4">
                  {FAQ_ITEMS.map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2 text-base">{faq.pergunta}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.resposta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar de Orçamento */}
            <aside className="space-y-8">
              <div className="sticky top-28 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl">
                <h3 className="text-xl font-black text-slate-900 mb-2 uppercase">Solicitar Cotação</h3>
                <p className="text-gray-500 text-xs mb-6">Orçamento direto para sua empresa em Curitiba e RMC.</p>
                <ContactForm />
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-slate-950 py-16 text-white text-center border-t border-gold/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tight">Divisórias para sua Empresa em Curitiba</h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">Fale com nossa equipe técnica e garanta preço direto de fábrica.</p>
          <a 
            href={BUSINESS_INFO.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all inline-block shadow-xl active:scale-95"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};
