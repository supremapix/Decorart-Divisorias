
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, BUSINESS_INFO, PROJECTS } from '../constants';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ContactForm } from '../components/ContactForm';
import { SafeImage } from '../components/SafeImage';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Shield, Clock, MessageSquare, ArrowLeft, Star, Eye, X, ZoomIn } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const dynamicTitle = `${service.titulo} em Curitiba: Preço e Instalação | Decorart`;
  const cleanDescription = service.descricaoDetalhada.replace(/\n/g, ' ').trim();
  const metaDescription = cleanDescription.length > 155 
    ? `${cleanDescription.substring(0, 155)}...` 
    : cleanDescription;

  const currentCanonical = `/servicos/${service.slug}`;

  // Galeria Completa com Fotos Reais dos Projetos Executados
  const galleryImages = [
    { url: service.imagem, title: `${service.titulo} - Obra Entregue`, tag: 'Principal' },
    { url: PROJECTS[0].imagem, title: 'Escritório Corporativo com Visores de Vidro', tag: 'Corporativo' },
    { url: PROJECTS[1].imagem, title: 'Divisórias Modulares para Salas de Reunião', tag: 'Eucatex' },
    { url: PROJECTS[2].imagem, title: 'Isolamento Acústico para Consultórios', tag: 'Drywall' },
    { url: PROJECTS[3].imagem, title: 'Divisórias Comerciais de Alta Resistência', tag: 'Comercial' },
    { url: 'https://img.supremasite.com.br/office_dividers_showroom.webp', title: 'Acabamento Executivo em Alumínio e Madeira', tag: 'Acabamento' }
  ];

  const [activeMainImage, setActiveMainImage] = useState(galleryImages[0].url);

  return (
    <div className="bg-slate-50 min-h-screen">
      <EnhancedSEO 
        title={dynamicTitle}
        description={metaDescription}
        canonical={currentCanonical}
        image={service.imagem}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": service.titulo,
              "description": service.descricaoDetalhada,
              "provider": {
                "@type": "LocalBusiness",
                "name": BUSINESS_INFO.name,
                "image": service.imagem,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": BUSINESS_INFO.address,
                  "addressLocality": "Curitiba",
                  "addressRegion": "PR"
                }
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": BUSINESS_INFO.domain },
                { "@type": "ListItem", "position": 2, "name": "Serviços", "item": `${BUSINESS_INFO.domain}/servicos` },
                { "@type": "ListItem", "position": 3, "name": service.titulo, "item": `${BUSINESS_INFO.domain}${currentCanonical}` }
              ]
            }
          ]
        }}
      />

      {/* Top Header Navigation */}
      <div className="bg-slate-950 text-white border-b border-gold/30 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/servicos" className="inline-flex items-center text-gold hover:text-yellow-400 font-bold text-xs uppercase tracking-wider transition-all hover:-translate-x-1">
            <ArrowLeft size={16} className="mr-2" /> Voltar para Todos os Serviços
          </Link>
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest hidden sm:inline-block">
            Decorart Divisórias Curitiba
          </span>
        </div>
      </div>

      {/* HERO COM GALERIA ILUSTRATIVA DE CARA (IMAGEM GRANDE + MINIATURAS IMEDIATAS) */}
      <section className="bg-slate-950 text-white py-10 md:py-14 border-b border-gold/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Esquerda: Informações do Serviço */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center bg-gold/20 text-gold px-4 py-1.5 rounded-full font-black text-[11px] uppercase tracking-widest border border-gold/40">
                PROJETO & EXECUÇÃO EM CURITIBA
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                {service.titulo}
              </h1>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {service.texto}
              </p>

              {/* Destaques de Confiança */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-900/90 border border-white/10 p-3 rounded-2xl flex items-center space-x-2.5">
                  <Shield size={20} className="text-gold shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white leading-none">Garantia 5 Anos</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Nota Fiscal de Fábrica</p>
                  </div>
                </div>
                <div className="bg-slate-900/90 border border-white/10 p-3 rounded-2xl flex items-center space-x-2.5">
                  <Clock size={20} className="text-gold shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white leading-none">Instalação Ágil</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Montagem Sem Sujeira</p>
                  </div>
                </div>
              </div>

              {/* Botão de Ação Rápida */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-gold hover:bg-yellow-600 text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition-all active:scale-95 border border-gold/50"
                >
                  <MessageSquare size={16} className="mr-2" /> Solicitar Orçamento deste Projeto
                </a>
              </div>
            </div>

            {/* Direita: MOSTRUÁRIO DE CARA - Imagem Principal + Miniaturas Interativas */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Imagem Principal em Destaque Alto Padrão */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-slate-900 group">
                <SafeImage 
                  src={activeMainImage} 
                  alt={`Ilustração do projeto ${service.titulo}`} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Botão para Ampliar em Fullscreen */}
                <button
                  onClick={() => setSelectedImage(activeMainImage)}
                  className="absolute bottom-4 right-4 bg-slate-950/80 hover:bg-gold text-white p-3 rounded-2xl backdrop-blur-md border border-white/20 transition-all flex items-center space-x-2 text-xs font-bold shadow-lg"
                  title="Expandir foto"
                >
                  <ZoomIn size={16} />
                  <span className="hidden sm:inline">Ampliar Foto</span>
                </button>

                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gold/30 text-[10px] font-bold uppercase tracking-wider text-gold flex items-center">
                  <Eye size={12} className="mr-1.5" /> Exemplo Real de Instalação
                </div>
              </div>

              {/* Seletor de Miniaturas de Cara na Abertura */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gold inline-block mr-2 animate-pulse" />
                  Clique nas fotos para alterar a ilustração do projeto:
                </p>
                <div className="grid grid-cols-6 gap-2">
                  {galleryImages.map((img, idx) => {
                    const isActive = activeMainImage === img.url;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveMainImage(img.url)}
                        className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                          isActive 
                            ? 'border-gold ring-2 ring-gold/50 scale-105 shadow-md' 
                            : 'border-white/10 hover:border-white/40 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <SafeImage src={img.url} alt={img.title} className="w-full h-full object-cover" />
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* DETALHAMENTO DO SERVIÇO E CONTEÚDO TÉCNICO */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Descrição Detalhada */}
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight border-l-8 border-gold pl-5">
                  Excelência Técnica em {service.titulo}
                </h2>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed whitespace-pre-line font-normal">
                  {service.descricaoDetalhada}
                </p>
              </div>

              {/* Destaques Técnicos de Qualidade */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-blue-50/80 p-6 rounded-2xl border border-blue-100 flex flex-col items-center text-center">
                  <Shield className="text-blue-600 mb-3" size={36} />
                  <h4 className="font-bold text-blue-950 text-sm mb-1">Segurança Garantida</h4>
                  <p className="text-xs text-blue-800">Estrutura reforçada em perfis de aço galvanizado.</p>
                </div>
                <div className="bg-emerald-50/80 p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center">
                  <Clock className="text-emerald-600 mb-3" size={36} />
                  <h4 className="font-bold text-emerald-950 text-sm mb-1">Montagem Express</h4>
                  <p className="text-xs text-emerald-800">Sistemas modulares com entrega pontual.</p>
                </div>
                <div className="bg-amber-50/80 p-6 rounded-2xl border border-amber-100 flex flex-col items-center text-center">
                  <Star className="text-amber-600 mb-3" size={36} />
                  <h4 className="font-bold text-amber-950 text-sm mb-1">Acabamento Nobre</h4>
                  <p className="text-xs text-amber-800">Opções com visores de vidro e portas completas.</p>
                </div>
              </div>

              {/* Mosaico de Projetos Ilustrativos */}
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                  Projetos de {service.titulo} Executados em Curitiba
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {galleryImages.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedImage(img.url)}
                      className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-slate-900 cursor-pointer border border-slate-200 hover:border-gold transition-all"
                    >
                      <SafeImage 
                        src={img.url} 
                        alt={img.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-gold bg-gold/20 px-2 py-0.5 rounded border border-gold/40">
                            {img.tag}
                          </span>
                          <h4 className="text-xs font-bold mt-1 line-clamp-1">{img.title}</h4>
                        </div>
                        <ZoomIn size={16} className="text-gold shrink-0 ml-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Form */}
            <aside className="space-y-8">
              <div className="sticky top-28 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl space-y-6">
                <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Orçamento sem Compromisso</h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Calcule o custo de <strong>{service.titulo}</strong> para sua empresa.
                  </p>
                </div>

                <ContactForm />

                <div className="pt-6 border-t border-slate-100 text-center">
                  <p className="text-xs font-bold text-slate-700 mb-3">Preferência por atendimento via WhatsApp?</p>
                  <a 
                    href={BUSINESS_INFO.whatsapp} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                  >
                    <MessageSquare size={16} className="mr-2" /> Falar com Atendente
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Modal Lightbox para Visualização em Alta Resolução */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                aria-label="Fechar modal"
              >
                <X size={24} />
              </button>
              <SafeImage 
                src={selectedImage} 
                alt="Foto em Alta Definição do Projeto" 
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl border-2 border-gold/40 shadow-2xl"
              />
              <p className="text-xs font-bold text-gold mt-4 uppercase tracking-wider">
                Decorart Divisórias • Curitiba e Região Metropolitana
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

