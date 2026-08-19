import React from 'react';
import { motion } from 'framer-motion';
import { ARTICLES } from '../constants';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { SafeImage } from '../components/SafeImage';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';

const HERO_BG = "https://img.supremasite.com.br/office_dividers_showroom.webp";

export const ArticlesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <EnhancedSEO 
        title="Guia de Divisórias em Curitiba: Artigos e Dicas | Decorart"
        description="Aprenda a escolher divisórias para escritórios, clínicas e empresas em Curitiba. Guias técnicos sobre Eucatex, Drywall, custos e instalação."
        canonical="/artigos"
      />

      {/* Hero Header Elegante */}
      <section className="bg-slate-950 py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src={HERO_BG} 
            alt="Guias sobre Divisórias em Curitiba" 
            className="w-full h-full object-cover opacity-25" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center bg-gold/20 text-gold px-5 py-2.5 rounded-full mb-6 font-black text-xs md:text-sm border border-gold/40 tracking-widest uppercase shadow-lg">
            <BookOpen size={18} className="mr-2" /> CONTEÚDO TÉCNICO
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight"
          >
            Guias & Artigos Sobre Divisórias
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Tudo sobre divisórias de Eucatex, drywall, planejamento de escritórios e orçamento em Curitiba.
          </motion.p>
        </div>
      </section>

      {/* Grid de Artigos */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {ARTICLES.map((article, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col group hover:shadow-2xl transition-all"
              >
                <div className="h-60 overflow-hidden relative">
                  <SafeImage 
                    src={article.imagem} 
                    alt={article.titulo} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900 text-gold px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg border border-gold/30">
                    {article.categoria}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 font-bold mb-3 space-x-4">
                    <span className="flex items-center"><Calendar size={14} className="mr-1 text-gold" /> {article.data}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-1 text-gold" /> {article.tempoLeitura}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-gold transition-colors leading-snug">
                    {article.titulo}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                    {article.resumo}
                  </p>
                  <Link 
                    to={`/artigos/${article.slug}`} 
                    className="inline-flex items-center justify-center bg-slate-900 hover:bg-gold text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all w-fit shadow-md"
                  >
                    Ler <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
