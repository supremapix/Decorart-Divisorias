import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from '../components/Typewriter';
import { SERVICES, PROJECTS, BENEFITS, FAQ_ITEMS, BUSINESS_INFO, ARTICLES } from '../constants';
import { SafeImage } from '../components/SafeImage';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ChevronDown, MessageCircle, Phone, ArrowRight, ShieldCheck, Building2, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_SLIDER_IMAGES = [
  "https://img.supremasite.com.br/modern_office_curitiba.webp",
  "https://img.supremasite.com.br/batel_office_interior.webp",
  "https://img.supremasite.com.br/eucatex_office_curitiba.webp",
  "https://img.supremasite.com.br/showroom_modular_partitions.webp",
  "https://img.supremasite.com.br/corporate_hallway_curitiba.webp",
  "https://img.supremasite.com.br/drywall_office_installation.webp",
  "https://img.supremasite.com.br/luxury_office_cove_lighting.webp"
];

export const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider de Fundo da Hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white font-sans text-slate-800">
      <EnhancedSEO 
        title="Divisórias em Curitiba | Decorart Divisórias"
        description="Empresa especializada em divisórias de Eucatex, divisórias para escritórios, divisórias comerciais e drywall em Curitiba e Região Metropolitana."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": `${BUSINESS_INFO.domain}/#organization`,
              "name": "Decorart Divisórias",
              "url": BUSINESS_INFO.domain,
              "logo": `${BUSINESS_INFO.domain}/logo.png`,
              "image": HERO_SLIDER_IMAGES[0],
              "telephone": BUSINESS_INFO.phones[0],
              "email": BUSINESS_INFO.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": BUSINESS_INFO.address,
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "postalCode": "81010-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -25.5000,
                "longitude": -49.2700
              },
              "areaServed": ["Curitiba", "São José dos Pinhais", "Região Metropolitana de Curitiba"],
              "priceRange": "$$"
            },
            {
              "@type": "WebSite",
              "@id": `${BUSINESS_INFO.domain}/#website`,
              "url": BUSINESS_INFO.domain,
              "name": "Decorart Divisórias",
              "publisher": { "@id": `${BUSINESS_INFO.domain}/#organization` }
            },
            {
              "@type": "WebPage",
              "@id": `${BUSINESS_INFO.domain}/#webpage`,
              "url": BUSINESS_INFO.domain,
              "name": "Divisórias em Curitiba | Decorart Divisórias",
              "isPartOf": { "@id": `${BUSINESS_INFO.domain}/#website` },
              "about": { "@id": `${BUSINESS_INFO.domain}/#organization` }
            }
          ]
        }}
      />

      {/* Hero Section Elegante com Imagem de Fundo em Destaque */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Slider de Imagens no Fundo com AnimatePresence e Transparência Elegante */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <SafeImage 
                src={HERO_SLIDER_IMAGES[currentSlide]} 
                alt="Divisórias de Alto Padrão em Curitiba" 
                className="w-full h-full object-cover opacity-65"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay Suave e Elegante para Destacar a Imagem de Fundo */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 z-10"></div>
          <div className="absolute inset-0 bg-slate-950/20 backdrop-brightness-95 z-10"></div>
        </div>

        {/* Indicadores Visuais Discretos do Slider */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {HERO_SLIDER_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === idx ? 'w-6 bg-gold' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Conteúdo Limpo, Mínimo e Elegante da Hero */}
        <div className="container mx-auto px-4 md:px-6 relative z-20 py-16 text-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="bg-slate-950/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-2xl"
          >
            <div className="inline-flex items-center bg-gold/20 text-gold px-5 py-2 rounded-full mb-6 font-black text-xs border border-gold/40 tracking-widest uppercase shadow-md">
              <Building2 size={15} className="mr-2" /> DECORART DIVISÓRIAS • CURITIBA & RMC
            </div>

            <Typewriter />

            <p className="text-base sm:text-lg md:text-xl text-slate-200 mt-4 mb-6 font-medium leading-relaxed drop-shadow-sm max-w-2xl mx-auto">
              Soluções executivas em <strong className="text-white font-black">Divisórias Eucatex, Corporativas e Drywall</strong> para escritórios e empresas.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 border-t border-white/10 text-xs font-semibold text-gold">
              <span className="flex items-center"><CheckCircle size={14} className="mr-1.5 text-gold" /> Eucatex & Drywall</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="flex items-center"><MapPin size={14} className="mr-1.5 text-gold" /> Curitiba e Região</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="flex items-center"><ShieldCheck size={14} className="mr-1.5 text-gold" /> 5 Anos de Garantia</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Principal de Soluções em Divisórias */}
      <section className="py-20 md:py-28 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-gold font-black uppercase tracking-widest text-xs">Linha Completa</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-4 uppercase tracking-tight">Nossas Divisórias e Serviços</h2>
            <div className="w-20 h-1.5 bg-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Otimize espaços em escritórios, clínicas e estabelecimentos comerciais em Curitiba com instalações ágeis e materiais de alta qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((servico, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col h-full group hover:shadow-2xl transition-all">
                <div className="h-60 overflow-hidden relative">
                  <SafeImage src={servico.imagem} alt={servico.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 bg-slate-900 text-gold px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md border border-gold/30">
                    {servico.slug.includes('divisorias') ? 'DIVISÓRIAS' : 'COMPLEMENTAR'}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{servico.titulo}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm flex-grow">{servico.texto}</p>
                  <Link to={`/servicos/${servico.slug}`} className="bg-slate-900 hover:bg-gold text-white hover:text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center w-fit mt-auto shadow-md">
                    Detalhes <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub de Acesso Direto aos Clusters de Divisórias */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase text-center mb-10 tracking-tight">
            Categorias em Destaque em Curitiba
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/divisorias-curitiba" className="bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-200 hover:border-gold transition-all text-center group">
              <Building2 size={32} className="text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 text-lg">Divisórias Curitiba</h3>
              <p className="text-xs text-gray-500 mt-2">Atendimento prioritário na capital e RMC</p>
            </Link>
            <Link to="/divisorias-eucatex-curitiba" className="bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-200 hover:border-gold transition-all text-center group">
              <CheckCircle size={32} className="text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 text-lg">Divisórias Eucatex</h3>
              <p className="text-xs text-gray-500 mt-2">Painéis modulares de 35mm para empresas</p>
            </Link>
            <Link to="/divisorias-escritorio-curitiba" className="bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-200 hover:border-gold transition-all text-center group">
              <ShieldCheck size={32} className="text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 text-lg">Divisórias para Escritório</h3>
              <p className="text-xs text-gray-500 mt-2">Salas de reunião, gerências e recepções</p>
            </Link>
            <Link to="/divisorias-comerciais-curitiba" className="bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-200 hover:border-gold transition-all text-center group">
              <Building2 size={32} className="text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 text-lg">Divisórias Comerciais</h3>
              <p className="text-xs text-gray-500 mt-2">Lojas, clínicas, galpões e salas</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-black uppercase tracking-widest text-xs">Portfólio Real</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-2">Projetos Executados</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="relative group h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <SafeImage 
                  src={proj.imagem} 
                  alt={proj.titulo} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent p-6 flex flex-col justify-end items-center text-center">
                  <h3 className="text-xl font-black text-white mb-2">{proj.titulo}</h3>
                  <p className="text-blue-100 text-xs mb-6 leading-relaxed">{proj.descricao}</p>
                  <a 
                    href={BUSINESS_INFO.whatsapp} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gold hover:bg-yellow-600 text-white py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-xl text-center"
                  >
                    Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artigos / Guias Editoriais */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-gold font-black uppercase tracking-widest text-xs">Artigos & Dicas</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 uppercase tracking-tight">Guias Sobre Divisórias</h2>
            </div>
            <Link to="/artigos" className="bg-slate-900 hover:bg-gold text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all inline-flex items-center mt-4 md:mt-0 shadow-md">
              Artigos <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTICLES.slice(0, 4).map((art, idx) => (
              <Link key={idx} to={`/artigos/${art.slug}`} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-gold transition-all group flex flex-col">
                <div className="h-44 overflow-hidden">
                  <SafeImage src={art.imagem} alt={art.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-black text-gold uppercase tracking-wider mb-2">{art.categoria}</span>
                  <h3 className="font-bold text-slate-900 text-base mb-3 line-clamp-2 group-hover:text-gold transition-colors">{art.titulo}</h3>
                  <p className="text-gray-500 text-xs line-clamp-2 mb-4">{art.resumo}</p>
                  <span className="text-xs font-black text-slate-900 mt-auto flex items-center">
                    Ler <ArrowRight size={12} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Decorart */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="mb-6 p-4 bg-slate-100 rounded-2xl text-slate-900 group-hover:bg-gold group-hover:text-white transition-all">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase text-center mb-12 tracking-tight">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-900 text-base md:text-lg"
                >
                  <span>{item.pergunta}</span>
                  <ChevronDown className={`transition-transform shrink-0 ml-4 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && <div className="px-6 pb-6 text-gray-600 text-sm md:text-base border-t border-slate-200 pt-4 leading-relaxed">{item.resposta}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Solicite seu Orçamento</h2>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-8">Atendimento rápido em Curitiba e Região Metropolitana. Fale direto com nossa equipe.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center shadow-xl">
              <MessageCircle className="mr-2" size={18} /> WhatsApp
            </a>
            <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center shadow-xl">
              <Phone className="mr-2" size={18} /> Ligar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
