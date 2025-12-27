
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from '../components/Typewriter';
import { SERVICES, PROJECTS, BENEFITS, FAQ_ITEMS, BUSINESS_INFO } from '../constants';
import { SafeImage } from '../components/SafeImage';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ChevronDown, MessageCircle, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      <EnhancedSEO 
        title="Decorart Divisórias | Drywall, Eucatex e Forros em Curitiba"
        description="Especialistas em divisórias eucatex e drywall em Curitiba. 5 anos de garantia."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-blue-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent z-10"></div>
          <SafeImage 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            alt="Fundo Hero Decorart" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Typewriter />
              <p className="text-xl md:text-2xl text-blue-100 mb-10 font-medium max-w-2xl leading-relaxed">
                Atendimento especializado em <span className="text-gold font-bold text-[#9C7C13]">Curitiba e Região Metropolitana</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contato" className="bg-[#9C7C13] hover:bg-yellow-800 text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl transition-all flex items-center justify-center">
                  SOLICITAR ORÇAMENTO <ArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-blue-950 mb-4 uppercase tracking-tighter">Nossas Soluções</h2>
            <div className="w-20 h-2 bg-[#9C7C13] mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((servico, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full group">
                <div className="h-56 overflow-hidden relative">
                  <SafeImage src={servico.imagem} alt={servico.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">{servico.titulo}</h3>
                  <p className="text-gray-600 mb-8 line-clamp-3">{servico.texto}</p>
                  <Link to={`/servicos/${servico.slug}`} className="text-[#9C7C13] font-black inline-flex items-center mt-auto">
                    DETALHES <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-24 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#9C7C13] uppercase tracking-tighter">Projetos em Destaque</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="relative group h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <SafeImage 
                  src={proj.imagem} 
                  alt={proj.titulo} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent p-8 flex flex-col justify-end items-center text-center">
                  <h4 className="text-2xl font-black text-white mb-2">{proj.titulo}</h4>
                  <p className="text-blue-200 text-sm mb-8">{proj.descricao}</p>
                  <Link 
                    to="/contato" 
                    className="w-full bg-[#9C7C13] hover:bg-yellow-700 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-xl"
                  >
                    {proj.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-center text-center group hover:bg-blue-50 transition-colors">
              <div className="mb-6 p-5 bg-white rounded-2xl shadow-lg text-blue-700 group-hover:bg-[#9C7C13] group-hover:text-white transition-all">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-black text-blue-950 mb-4">{benefit.title}</h3>
              <p className="text-gray-500 font-medium">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-blue-950 uppercase text-center mb-16">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-xl font-bold text-blue-900">{item.pergunta}</span>
                  <ChevronDown className={`transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && <div className="px-8 pb-8 text-gray-600 text-lg border-t border-gray-100 pt-4">{item.resposta}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-blue-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 uppercase">Pronto para Começar?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={BUSINESS_INFO.whatsapp} className="bg-gold hover:bg-yellow-800 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center shadow-2xl">
              <MessageCircle className="mr-3" /> WHATSAPP
            </a>
            <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center shadow-2xl">
              <Phone className="mr-3" /> LIGAR AGORA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
