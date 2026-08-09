import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ContactForm } from '../components/ContactForm';
import { SafeImage } from '../components/SafeImage';
import { BUSINESS_INFO, FAQ_ITEMS, SERVICES } from '../constants';
import { 
  Building2, CheckCircle2, ShieldCheck, Clock, MessageCircle, PhoneCall, 
  Zap, Award, ArrowRight, Check, MapPin, Layers, Layout, Wrench
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
      subtitle: "Referência absoluta no fornecimento e montagem de divisórias de alta performance para ambientes corporativos e comerciais em Curitiba.",
      heroImg: "https://scontent.xx.fbcdn.net/v/t39.105495-1/769412979_1400738358608292_6483490568402387167_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=100&_nc_ohc=m66DrTSIZK8Q7kNvwFnrqfe&sdl=0&ccb=14-4&oh=00_AQGgjWK5rVsVlL9ayKuzguZQCfXBK8lMlFtp7-ht7mdWyA&oe=6A7E741F&_nc_sid=a21977",
      badge: "LÍDER EM DIVISÓRIAS EM CURITIBA"
    },
    'eucatex-curitiba': {
      title: "Divisórias de Eucatex em Curitiba | Venda e Instalação Decorart",
      h1: "Divisórias de Eucatex em Curitiba",
      description: "Instalação de divisórias Eucatex modulares para escritórios e empresas em Curitiba. Preço direto de fábrica e montagem imediata.",
      canonical: "/divisorias-eucatex-curitiba",
      subtitle: "Painéis Eucatex de 35mm com perfis de aço galvanizado. A melhor solução modular em custo-benefício para divisão de salas comerciais.",
      heroImg: "https://scontent.xx.fbcdn.net/v/t39.105495-1/769412979_1400738358608292_6483490568402387167_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=100&_nc_ohc=m66DrTSIZK8Q7kNvwFnrqfe&sdl=0&ccb=14-4&oh=00_AQGgjWK5rVsVlL9ayKuzguZQCfXBK8lMlFtp7-ht7mdWyA&oe=6A7E741F&_nc_sid=a21977",
      badge: "DIVISÓRIAS EUCATEX MODULARES"
    },
    'escritorio-curitiba': {
      title: "Divisórias para Escritórios em Curitiba | Decorart Divisórias",
      h1: "Divisórias para Escritórios em Curitiba",
      description: "Projetos de divisórias corporativas para escritórios no Batel, Centro, Rebouças e toda Curitiba. Privacidade acústica e elegância visual.",
      canonical: "/divisorias-escritorio-curitiba",
      subtitle: "Crie salas de reunião, gerências, recepções e estantes de trabalho com rapidez e acabamento de padrão executivo.",
      heroImg: "https://scontent.xx.fbcdn.net/v/t39.105495-1/768310450_1629409275567951_4688024770134287593_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=103&_nc_ohc=K-dU_LXwGUkQ7kNvwG3YlwZ&sdl=0&ccb=14-4&oh=00_AQG7d3sbpTlSvCLS_gsj56wc-Mvmrsloo5rSg3gLf3aaVg&oe=6A7E63B8&_nc_sid=a21977",
      badge: "DIVISÓRIAS CORPORATIVAS"
    },
    'comerciais-curitiba': {
      title: "Divisórias Comerciais em Curitiba | Lojas, Clínicas e Empresas",
      h1: "Divisórias Comerciais em Curitiba",
      description: "Divisórias robustas para lojas, galpões, clínicas e consultórios em Curitiba. Agilidade na entrega sem interromper seus negócios.",
      canonical: "/divisorias-comerciais-curitiba",
      subtitle: "Soluções de separação espacial para comércios que precisam inaugurar ou reformar com urgência e conformidade sanitária.",
      heroImg: "https://scontent.xx.fbcdn.net/v/t39.105495-1/767560602_1031414302832652_6825547820352328130_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=100&_nc_ohc=n3deeDxDq6kQ7kNvwE2GFv6&sdl=0&ccb=14-4&oh=00_AQFEMiWsg3HRKA_vrgldUkBCdwV4RhgC7b-isUJRlTQYLQ&oe=6A7E794F&_nc_sid=a21977",
      badge: "DIVISÓRIAS COMERCIAIS & INDUSTRIAIS"
    },
    'sao-jose-dos-pinhais': {
      title: "Divisórias em São José dos Pinhais | Decorart Divisórias",
      h1: "Divisórias em São José dos Pinhais",
      description: "Instalação profissional de divisórias Eucatex e Drywall para escritórios e empresas em São José dos Pinhais. Atendimento imediato.",
      canonical: "/divisorias-sao-jose-dos-pinhais",
      subtitle: "Atendimento prioritário para empresas, indústrias e escritórios da região central e polos industriais de São José dos Pinhais.",
      heroImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
      badge: "ATENDIMENTO SÃO JOSÉ DOS PINHAIS"
    }
  };

  const config = configs[slugKey] || configs['curitiba'];

  return (
    <div className="bg-white min-h-screen">
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

      {/* Hero Dobra Principal */}
      <section className="relative py-24 bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 z-0">
          <SafeImage src={config.heroImg} alt={config.h1} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-gold/20 text-gold px-4 py-2 rounded-full mb-6 font-bold text-sm border border-gold/30">
              <Building2 size={16} className="mr-2" /> {config.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
              {config.h1}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 font-medium leading-relaxed">
              {config.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={BUSINESS_INFO.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold hover:bg-yellow-800 text-white px-8 py-4 rounded-xl font-black text-lg shadow-2xl transition-all flex items-center"
              >
                <MessageCircle className="mr-2" /> SOLICITAR ORÇAMENTO DE DIVISÓRIAS
              </a>
              <a 
                href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} 
                className="bg-white text-blue-950 hover:bg-gray-100 px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center"
              >
                <PhoneCall className="mr-2 text-gold" /> {BUSINESS_INFO.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Institucional Denso - Especialização em Divisórias */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-blue-950 uppercase mb-6 tracking-tight">
                  Por que escolher a Decorart para Divisórias em Curitiba?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A <strong>Decorart Divisórias</strong> é uma empresa com mais de 15 anos de atuação focada prioritariamente na fabricação, fornecimento e instalação de <strong>divisórias modulares e corporativas em Curitiba e Região Metropolitana</strong>. Diferente de empreiteiras generalistas, nosso processo técnico é altamente otimizado para o segmento de <strong>divisórias</strong>, garantindo máxima rapidez, limpeza extrema na montagem e pontualidade exemplar.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Seja para adequar um andar corporativo no Batel, criar novas salas em um escritório comercial no Centro de Curitiba ou setorizar um galpão industrial em São José dos Pinhais, entregamos sistemas de divisórias pré-acabados ou em drywall que valorizam o seu investimento.
                </p>
              </div>

              {/* Destaques Técnicos das Divisórias */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <Layout className="text-gold mb-4" size={32} />
                  <h3 className="text-xl font-bold text-blue-950 mb-2">Divisórias Modulares Eucatex</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Painéis de 35mm com núcleo atóxico celulár e estrutura em perfis de aço zincado. Disponível nas cores areia, branco, cinza, carvalho e cristal, com portas e visores integrados.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <Layers className="text-gold mb-4" size={32} />
                  <h3 className="text-xl font-bold text-blue-950 mb-2">Divisórias em Drywall Acústico</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Estrutura em gesso acartonado com miolo de lã de rocha para absorção sonora de salas de reunião, consultórios médicos e escritórios executivos.
                  </p>
                </div>
              </div>

              {/* Tabela de Vantagens */}
              <div className="bg-blue-950 text-white p-8 md:p-10 rounded-3xl space-y-6">
                <h3 className="text-2xl font-black uppercase text-gold">Diferenciais Decorart Divisórias</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Montagem sem entulho e sem poeira",
                    "Aproveitamento de 100% da luz natural com visores de vidro",
                    "Garantia estendida de 5 anos com nota fiscal",
                    "Orçamento rápido via planta ou visita técnica",
                    "Preço direto de fábrica por metro quadrado",
                    "Atendimento fora do horário comercial se necessário"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-gold mr-3 shrink-0 mt-1" size={18} />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ da Página */}
              <div>
                <h3 className="text-2xl font-black text-blue-950 uppercase mb-8">Dúvidas Frequentes sobre Divisórias</h3>
                <div className="space-y-4">
                  {FAQ_ITEMS.map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-blue-950 mb-2">{faq.pergunta}</h4>
                      <p className="text-gray-600 text-sm">{faq.resposta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar de Orçamento */}
            <aside className="space-y-8">
              <div className="sticky top-28 bg-white p-8 rounded-3xl border border-gray-100 shadow-2xl">
                <h3 className="text-2xl font-black text-blue-950 mb-2 uppercase">Solicitar Cotação</h3>
                <p className="text-gray-500 text-xs mb-6">Receba orçamento personalizado para divisórias em até 24h.</p>
                <ContactForm />
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gold py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-4 uppercase">Precisa de Divisórias para sua Empresa em Curitiba?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">Fale diretamente com nossa equipe técnica e garanta o melhor preço por m² de Curitiba.</p>
          <a 
            href={BUSINESS_INFO.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-950 px-10 py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-all inline-block shadow-2xl"
          >
            Falar no WhatsApp Agora
          </a>
        </div>
      </section>
    </div>
  );
};
