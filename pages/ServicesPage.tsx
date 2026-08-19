import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { SafeImage } from '../components/SafeImage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

const HERO_BG = "https://img.supremasite.com.br/modern_office_curitiba.webp";

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <EnhancedSEO 
        title="Divisórias e Drywall em Curitiba: Nossos Serviços | Decorart"
        description="Conheça nossas soluções em divisórias eucatex, drywall profissional, forros PVC e sancas. Especialistas em transformações de ambientes com 15 anos de tradição em Curitiba."
        canonical="/servicos"
      />

      {/* Hero da Página de Serviços Elegante com Imagem de Fundo Real */}
      <section className="bg-slate-950 py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src={HERO_BG} 
            alt="Infraestrutura e Materiais Decorart Divisórias em Curitiba" 
            className="w-full h-full object-cover opacity-25" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-black uppercase tracking-widest text-xs mb-3 block"
          >
            Linha Completa de Divisórias
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight"
          >
            Soluções Profissionais em Divisórias
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Especialistas em transformar ambientes comerciais e corporativos com agilidade técnica e acabamento de alto padrão em Curitiba.
          </motion.p>
        </div>
      </section>

      {/* Grid de Serviços */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group hover:shadow-2xl transition-all"
              >
                <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden bg-slate-100">
                  <SafeImage 
                    src={service.imagem} 
                    alt={`Instalação de ${service.titulo} pela Decorart em Curitiba`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-gold mb-3 font-bold uppercase tracking-wider text-xs">
                      <CheckCircle size={14} className="mr-1.5" /> Garantia de Fábrica
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.titulo}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {service.texto}
                    </p>
                  </div>
                  <Link 
                    to={`/servicos/${service.slug}`} 
                    className="inline-flex items-center justify-center bg-slate-900 hover:bg-gold text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all w-fit shadow-md"
                  >
                    Detalhes <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-16 text-white text-center border-t border-gold/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tight">Qualidade para seu projeto</h2>
          <p className="text-base md:text-lg mb-8 text-slate-300 max-w-2xl mx-auto">Solicite hoje mesmo seu orçamento sem compromisso em Curitiba e Região.</p>
          <a 
            href={BUSINESS_INFO.whatsapp} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all inline-flex items-center shadow-xl active:scale-95"
          >
            <MessageCircle size={18} className="mr-2" />
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};
