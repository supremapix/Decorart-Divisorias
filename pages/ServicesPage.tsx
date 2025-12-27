
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { SafeImage } from '../components/SafeImage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO 
        title="Divisórias e Drywall em Curitiba: Nossos Serviços | Decorart"
        description="Conheça nossas soluções em divisórias eucatex, drywall profissional, forros PVC e sancas. Especialistas em transformações de ambientes com 15 anos de tradição em Curitiba."
        canonical="/servicos"
      />

      {/* Hero da Página de Serviços */}
      <section className="bg-blue-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <SafeImage 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80" 
            alt="Infraestrutura e Materiais Decorart Divisórias" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6 text-gold uppercase tracking-tighter"
          >
            Soluções Profissionais para seu Espaço
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200 max-w-2xl mx-auto"
          >
            Especialistas em transformar ambientes comerciais e residenciais com agilidade técnica e acabamento de alto padrão.
          </motion.p>
        </div>
      </section>

      {/* Grid de Serviços */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
              >
                <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
                  <SafeImage 
                    src={`${service.imagem}&auto=format&q=80`} 
                    alt={`Instalação de ${service.titulo} pela Decorart em Curitiba`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center text-gold mb-4 font-bold uppercase tracking-widest text-xs">
                    <CheckCircle size={14} className="mr-2" /> Qualidade Garantida
                  </div>
                  <h2 className="text-2xl font-bold text-blue-950 mb-4">{service.titulo}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.texto}
                  </p>
                  <Link 
                    to={`/servicos/${service.slug}`} 
                    className="inline-flex items-center bg-gold text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-800 transition-colors w-fit shadow-md"
                  >
                    Ver Detalhes do Serviço <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Qualidade de fábrica para sua reforma</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">Solicite hoje mesmo uma visita técnica gratuita para sua empresa ou residência em Curitiba e Região.</p>
          <Link to="/contato" className="bg-white text-gold px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-block hover:scale-105">
            Falar com um Especialista
          </Link>
        </div>
      </section>
    </div>
  );
};
