import React from 'react';
import { motion } from 'framer-motion';
import { ARTICLES } from '../constants';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { SafeImage } from '../components/SafeImage';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';

export const ArticlesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO 
        title="Guia de Divisórias em Curitiba: Artigos e Dicas | Decorart"
        description="Aprenda a escolher divisórias para escritórios, clínicas e empresas em Curitiba. Guias técnicos sobre Eucatex, Drywall, custos e instalação."
        canonical="/artigos"
      />

      {/* Hero Header */}
      <section className="bg-blue-950 py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center bg-gold/20 text-gold px-4 py-2 rounded-full mb-6 font-bold text-sm border border-gold/30">
            <BookOpen size={16} className="mr-2" /> CONTEÚDO TÉCNICO ESPECIALIZADO
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter"
          >
            Guias & Artigos Sobre Divisórias
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200 max-w-2xl mx-auto"
          >
            Tudo o que você precisa saber sobre divisórias de Eucatex, drywall, planejamento de escritórios e custos em Curitiba.
          </motion.p>
        </div>
      </section>

      {/* Grid de Artigos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {ARTICLES.map((article, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group"
              >
                <div className="h-60 overflow-hidden relative">
                  <SafeImage 
                    src={article.imagem} 
                    alt={article.titulo} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-blue-950 text-gold px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                    {article.categoria}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-400 font-bold mb-4 space-x-4">
                    <span className="flex items-center"><Calendar size={14} className="mr-1 text-gold" /> {article.data}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-1 text-gold" /> {article.tempoLeitura}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-gold transition-colors leading-snug">
                    {article.titulo}
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                    {article.resumo}
                  </p>
                  <Link 
                    to={`/artigos/${article.slug}`} 
                    className="inline-flex items-center text-gold font-black uppercase tracking-wider text-sm mt-auto hover:text-yellow-800 transition-colors"
                  >
                    Ler Artigo Completo <ArrowRight size={16} className="ml-2" />
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
