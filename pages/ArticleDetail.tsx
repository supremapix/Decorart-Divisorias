import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ARTICLES, BUSINESS_INFO } from '../constants';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ContactForm } from '../components/ContactForm';
import { SafeImage } from '../components/SafeImage';
import { ArrowLeft, Clock, Calendar, MessageCircle, Share2 } from 'lucide-react';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/artigos" replace />;
  }

  const currentCanonical = `/artigos/${article.slug}`;

  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO 
        title={`${article.titulo} | Decorart Divisórias Curitiba`}
        description={article.resumo}
        canonical={currentCanonical}
        image={article.imagem}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": article.titulo,
              "description": article.resumo,
              "image": article.imagem,
              "datePublished": "2026-01-10",
              "author": {
                "@type": "Organization",
                "name": BUSINESS_INFO.name,
                "url": BUSINESS_INFO.domain
              },
              "publisher": {
                "@type": "Organization",
                "name": BUSINESS_INFO.name,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${BUSINESS_INFO.domain}/logo.png`
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
                  "name": "Artigos",
                  "item": `${BUSINESS_INFO.domain}/artigos`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": article.titulo,
                  "item": `${BUSINESS_INFO.domain}${currentCanonical}`
                }
              ]
            }
          ]
        }}
      />

      {/* Header do Artigo */}
      <section className="bg-blue-950 py-16 text-white relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Link to="/artigos" className="inline-flex items-center text-gold mb-6 hover:underline font-bold transition-all">
            <ArrowLeft size={18} className="mr-2" /> Voltar para Artigos
          </Link>
          <div className="flex items-center text-xs text-blue-200 font-bold mb-4 space-x-4">
            <span className="bg-gold/20 text-gold px-3 py-1 rounded-full border border-gold/30">{article.categoria}</span>
            <span className="flex items-center"><Calendar size={14} className="mr-1 text-gold" /> {article.data}</span>
            <span className="flex items-center"><Clock size={14} className="mr-1 text-gold" /> {article.tempoLeitura}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight uppercase tracking-tight">
            {article.titulo}
          </h1>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-80 bg-gray-100">
                <SafeImage 
                  src={article.imagem} 
                  alt={article.titulo} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                {article.conteudo.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={idx} className="text-2xl font-black text-blue-950 mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
                  }
                  return <p key={idx} className="text-gray-700 leading-relaxed font-normal">{paragraph}</p>;
                })}
              </div>

              {/* Callout Box */}
              <div className="bg-blue-50 border-2 border-gold/30 p-8 rounded-3xl mt-12 text-blue-950">
                <h4 className="text-xl font-black uppercase mb-3 text-blue-950">Precisa de Divisórias para sua Empresa em Curitiba?</h4>
                <p className="text-gray-600 mb-6">
                  A Decorart Divisórias oferece fornecimento e instalação rápida de divisórias modulares de Eucatex e Drywall para escritórios, clínicas e comércios.
                </p>
                <a 
                  href={BUSINESS_INFO.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gold hover:bg-yellow-800 text-white font-black px-8 py-4 rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="mr-2" /> Solicit e Orçamento de Divisórias
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="sticky top-28 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                <h3 className="text-xl font-black text-blue-950 mb-4 uppercase">Solicite uma Cotação</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Fale com nossos especialistas em divisórias para Curitiba e Região Metropolitana.
                </p>
                <ContactForm />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
};
