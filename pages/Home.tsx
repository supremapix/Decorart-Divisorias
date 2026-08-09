
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from '../components/Typewriter';
import { SERVICES, PROJECTS, BENEFITS, FAQ_ITEMS, BUSINESS_INFO, ARTICLES } from '../constants';
import { SafeImage } from '../components/SafeImage';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ChevronDown, MessageCircle, Phone, ArrowRight, ShieldCheck, Building2, MapPin, CheckCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
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
              "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
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

      {/* Hero Section - Foco Absoluto em Divisórias */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-blue-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-transparent z-10"></div>
          <SafeImage 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            alt="Divisórias em Curitiba Decorart" 
            className="w-full h-full object-cover opacity-35"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 py-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              
              <div className="inline-flex items-center bg-gold/20 text-gold px-5 py-2.5 rounded-full mb-8 font-black text-xs md:text-sm border border-gold/40 tracking-wider uppercase">
                <Building2 size={18} className="mr-2" /> EMPRESA ESPECIALIZADA EM DIVISÓRIAS
              </div>

              <Typewriter />

              <p className="text-xl md:text-2xl text-blue-100 mb-8 font-medium max-w-3xl leading-relaxed">
                Fornecimento e montagem rápida de <strong className="text-white font-bold">Divisórias de Eucatex, Divisórias para Escritórios e Divisórias Comerciais</strong> em <span className="text-gold font-black">Curitiba e Região Metropolitana</span>.
              </p>

              {/* Quadro de Resposta Rápida da 1ª Dobra */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 mb-10 text-xs md:text-sm font-semibold">
                <div className="flex items-center text-blue-100"><CheckCircle size={16} className="text-gold mr-2 shrink-0" /> <strong>Produto:</strong> Divisórias</div>
                <div className="flex items-center text-blue-100"><MapPin size={16} className="text-gold mr-2 shrink-0" /> <strong>Local:</strong> Curitiba & RMC</div>
                <div className="flex items-center text-blue-100"><Building2 size={16} className="text-gold mr-2 shrink-0" /> <strong>Público:</strong> Empresas & Lojas</div>
                <div className="flex items-center text-blue-100"><ShieldCheck size={16} className="text-gold mr-2 shrink-0" /> <strong>Garantia:</strong> 5 Anos</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href={BUSINESS_INFO.whatsapp} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#9C7C13] hover:bg-yellow-800 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all flex items-center justify-center tracking-tight"
                >
                  <MessageCircle className="mr-3" /> ORÇAMENTO DE DIVISÓRIAS <ArrowRight className="ml-2" />
                </a>
                <Link 
                  to="/servicos/divisorias-eucatex" 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center"
                >
                  CONHECER DIVISÓRIAS
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Principal de Soluções em Divisórias */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-gold font-black uppercase tracking-widest text-xs">Especialidade Principal</span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mt-2 mb-6 uppercase tracking-tighter">Nossas Divisórias e Serviços</h2>
            <div className="w-24 h-2 bg-[#9C7C13] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Oferecemos linhas completas de divisórias modulares para otimizar metros quadrados em escritórios, clínicas, estabelecimentos comerciais e indústrias em Curitiba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((servico, idx) => (
              <motion.div key={idx} whileHover={{ y: -8 }} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full group">
                <div className="h-60 overflow-hidden relative">
                  <SafeImage src={servico.imagem} alt={servico.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 bg-blue-950 text-gold px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                    {servico.slug.includes('divisorias') ? 'DIVISÓRIAS' : 'COMPLEMENTAR'}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-blue-950 mb-3">{servico.titulo}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm flex-grow">{servico.texto}</p>
                  <Link to={`/servicos/${servico.slug}`} className="text-[#9C7C13] font-black inline-flex items-center text-sm uppercase tracking-wider mt-auto group-hover:underline">
                    VER DETALHES <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub de Acesso Direto aos Clusters de Divisórias */}
      <section className="py-16 bg-blue-50 border-y border-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-blue-950 uppercase text-center mb-8 tracking-tight">
            Categorias em Destaque em Curitiba
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/divisorias-curitiba" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gold transition-all text-center group">
              <Building2 size={32} className="text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-blue-950 text-lg">Divisórias Curitiba</h3>
              <p className="text-xs text-gray-500 mt-2">Atendimento prioritário na capital e região</p>
            </Link>
            <Link to="/divisorias-eucatex-curitiba" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gold transition-all text-center group">
              <CheckCircle size={32} className="text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-blue-950 text-lg">Divisórias Eucatex</h3>
              <p className="text-xs text-gray-500 mt-2">Painéis modulares de 35mm para empresas</p>
            </Link>
            <Link to="/divisorias-escritorio-curitiba" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gold transition-all text-center group">
              <ShieldCheck size={32} className="text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-blue-950 text-lg">Divisórias para Escritório</h3>
              <p className="text-xs text-gray-500 mt-2">Salas de reunião, gerências e recepções</p>
            </Link>
            <Link to="/divisorias-comerciais-curitiba" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gold transition-all text-center group">
              <Building2 size={32} className="text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-blue-950 text-lg">Divisórias Comerciais</h3>
              <p className="text-xs text-gray-500 mt-2">Lojas, clínicas, galpões e salas</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-black uppercase tracking-widest text-xs">Portfólio Real</span>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mt-2">Projetos de Divisórias em Destaque</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="relative group h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-blue-900">
                <SafeImage 
                  src={proj.imagem} 
                  alt={proj.titulo} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/50 to-transparent p-6 flex flex-col justify-end items-center text-center">
                  <h4 className="text-xl font-black text-white mb-2">{proj.titulo}</h4>
                  <p className="text-blue-200 text-xs mb-6 leading-relaxed">{proj.descricao}</p>
                  <a 
                    href={BUSINESS_INFO.whatsapp} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#9C7C13] hover:bg-yellow-700 text-white py-3 rounded-xl font-black text-sm transition-all shadow-xl uppercase tracking-wider"
                  >
                    {proj.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artigos / Guias Editoriais */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-gold font-black uppercase tracking-widest text-xs">Conteúdo Técnico</span>
              <h2 className="text-4xl font-black text-blue-950 mt-2 uppercase tracking-tighter">Guias Sobre Divisórias</h2>
            </div>
            <Link to="/artigos" className="text-[#9C7C13] font-black inline-flex items-center mt-4 md:mt-0 hover:underline">
              VER TODOS OS ARTIGOS <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTICLES.slice(0, 4).map((art, idx) => (
              <Link key={idx} to={`/artigos/${art.slug}`} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gold transition-all group flex flex-col">
                <div className="h-44 overflow-hidden">
                  <SafeImage src={art.imagem} alt={art.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-black text-gold uppercase tracking-wider mb-2">{art.categoria}</span>
                  <h3 className="font-bold text-blue-950 text-base mb-3 line-clamp-2 group-hover:text-gold transition-colors">{art.titulo}</h3>
                  <p className="text-gray-500 text-xs line-clamp-2 mb-4">{art.resumo}</p>
                  <span className="text-xs font-black text-blue-900 mt-auto flex items-center">
                    Ler mais <ArrowRight size={12} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Decorart */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] bg-white border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="mb-6 p-4 bg-blue-50 rounded-2xl shadow-sm text-blue-900 group-hover:bg-[#9C7C13] group-hover:text-white transition-all">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black text-blue-950 mb-3">{benefit.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-blue-950 uppercase text-center mb-16 tracking-tight">Perguntas Frequentes Sobre Divisórias</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left font-bold text-blue-900 text-lg"
                >
                  <span>{item.pergunta}</span>
                  <ChevronDown className={`transition-transform shrink-0 ml-4 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && <div className="px-8 pb-8 text-gray-600 text-base border-t border-gray-100 pt-4 leading-relaxed">{item.resposta}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Solicite seu Orçamento de Divisórias</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10">Atendimento rápido em Curitiba e Região Metropolitana. Fale direto com nossa fábrica.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-yellow-800 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center shadow-2xl">
              <MessageCircle className="mr-3" /> WHATSAPP AGORA
            </a>
            <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} className="bg-white text-blue-950 hover:bg-gray-100 px-10 py-5 rounded-2xl font-black text-lg flex items-center shadow-2xl">
              <Phone className="mr-3" /> LIGAR AGORA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

