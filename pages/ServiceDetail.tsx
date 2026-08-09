
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ContactForm } from '../components/ContactForm';
import { SafeImage } from '../components/SafeImage';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, MessageSquare, ArrowLeft, Star } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const dynamicTitle = `${service.titulo} em Curitiba: Preço e Instalação | Decorart`;
  const cleanDescription = service.descricaoDetalhada.replace(/\n/g, ' ').trim();
  const metaDescription = cleanDescription.length > 155 
    ? `${cleanDescription.substring(0, 155)}...` 
    : cleanDescription;

  const currentCanonical = `/servicos/${service.slug}`;

  const galleryImages = [
    `https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&q=80&w=800`,
    `https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&q=80&w=800`,
    `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&q=80&w=800`,
    `https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&q=80&w=800`
  ];

  return (
    <div className="bg-white">
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
                "image": "https://decorartdivisorias.com.br/wp-content/uploads/2021/05/logo-decorart-divisorias-curitiba.png",
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
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": BUSINESS_INFO.domain
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Serviços",
                  "item": `${BUSINESS_INFO.domain}/servicos`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": service.titulo,
                  "item": `${BUSINESS_INFO.domain}${currentCanonical}`
                }
              ]
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <SafeImage 
          src={`${service.imagem}&auto=format&q=80`} 
          alt={`${service.titulo} em Curitiba Profissional - Decorart`} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <Link to="/servicos" className="inline-flex items-center text-gold mb-6 hover:underline font-bold transition-all hover:-translate-x-1">
            <ArrowLeft size={18} className="mr-2" /> Voltar para Serviços
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter"
          >
            {service.titulo}
          </motion.h1>
          <div className="w-24 h-1.5 bg-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
            Qualidade industrial e acabamento residencial para seu projeto em Curitiba e Região.
          </p>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
                <h2 className="text-3xl font-bold text-blue-950 mb-8 border-l-8 border-gold pl-6 uppercase">Excelência Técnica em {service.titulo}</h2>
                <p className="whitespace-pre-line text-lg">
                  {service.descricaoDetalhada}
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col items-center text-center shadow-sm">
                  <Shield className="text-blue-600 mb-4" size={40} />
                  <h4 className="font-bold text-blue-900 mb-2">Segurança</h4>
                  <p className="text-sm text-blue-700">Garantia estendida de 5 anos em {service.titulo}.</p>
                </div>
                <div className="bg-green-50 p-8 rounded-3xl border border-green-100 flex flex-col items-center text-center shadow-sm">
                  <Clock className="text-green-600 mb-4" size={40} />
                  <h4 className="font-bold text-green-900 mb-2">Rapidez</h4>
                  <p className="text-sm text-green-700">Instalação limpa e ágil em toda Curitiba.</p>
                </div>
                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex flex-col items-center text-center shadow-sm">
                  <Star className="text-orange-600 mb-4" size={40} />
                  <h4 className="font-bold text-orange-900 mb-2">Expertise</h4>
                  <p className="text-sm text-orange-700">Equipes treinadas direto da fábrica.</p>
                </div>
              </div>

              {/* Visual Gallery */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-blue-950 uppercase tracking-tight">Projetos de {service.titulo} Realizados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {galleryImages.map((img, idx) => (
                    <div key={idx} className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group bg-gray-100">
                      <SafeImage 
                        src={img} 
                        alt={`Execução de ${service.titulo} Decorart Curitiba`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Form */}
            <aside className="space-y-8">
              <div className="sticky top-28 bg-white p-8 rounded-3xl border border-gray-100 shadow-2xl">
                <h3 className="text-2xl font-bold text-blue-950 mb-6 uppercase">Orçamento Online</h3>
                <p className="text-gray-500 text-sm mb-8">
                  Deseja saber o preço de <strong>{service.titulo}</strong>? Envie seus dados e receba uma estimativa via WhatsApp.
                </p>
                <ContactForm />
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm font-bold text-blue-900 mb-4 flex items-center">
                    <MessageSquare size={16} className="mr-2 text-gold" /> Dúvida rápida?
                  </p>
                  <a 
                    href={BUSINESS_INFO.whatsapp} 
                    target="_blank"
                    className="block w-full text-center bg-gold text-white py-3 rounded-xl font-bold hover:bg-yellow-800 transition-colors shadow-md uppercase tracking-tighter"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
