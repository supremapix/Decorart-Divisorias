import { SancaTimeline } from './SancaTimeline';
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

  const canonicalOrigin = 'https://www.decorartdivisorias.com.br';
  const currentCanonical = `${canonicalOrigin}/artigos/${article.slug}`;
  const isSanca = article.slug === 'historia-do-gesso-e-das-sancas';
  const imageUrl = new URL(article.imagem, canonicalOrigin).href;

  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO 
        title={`${article.titulo} | Decorart Divisórias Curitiba`}
        description={article.resumo}
        canonical={currentCanonical}
        image={imageUrl}
        imageDimensions={article.imagemAlt ? {width: 1200, height: isSanca ? 675 : 800, mimeType: isSanca ? 'image/webp' : 'image/png'} : undefined}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": article.titulo,
              "description": article.resumo,
              "image": imageUrl,
              ...(article.dataISO ? {"datePublished": article.dataISO} : {}),
              "mainEntityOfPage": currentCanonical,
              "author": {
                "@type": "Organization",
                "name": BUSINESS_INFO.name,
                "url": canonicalOrigin
              },
              "publisher": {
                "@type": "Organization",
                "name": BUSINESS_INFO.name,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${canonicalOrigin}/logo192.png`
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
                  "item": canonicalOrigin
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": `${canonicalOrigin}/artigos`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": article.titulo,
                  "item": currentCanonical
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
            <ArrowLeft size={18} className="mr-2" /> Voltar ao blog
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
          <div className="grid grid-cols-1 gap-12">
            
            <div className="space-y-8">
              <div className={`rounded-3xl overflow-hidden shadow-2xl bg-gray-100 ${isSanca ? 'aspect-video' : 'h-80'}`}>
                {isSanca ? <img src={article.imagem} alt={article.imagemAlt} width={1200} height={675} className="w-full h-full object-cover" /> : <SafeImage 
                  src={article.imagem} 
                  alt={article.imagemAlt ?? article.titulo} 
                  className="w-full h-full object-cover"
                />}
              </div>

              {article.imagemAlt && <p className="text-sm text-slate-600">Imagem ilustrativa gerada por IA.</p>}
              {isSanca && <><p className="text-lg font-semibold text-blue-950">{article.resumo}</p><SancaTimeline /></>}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                {article.conteudo.split('\n\n').map((block, idx) => {
                  const lines = block.split('\n');
                  const heading = lines[0].startsWith('### ') ? lines.shift()!.slice(4) : null;
                  const inline = (text: string) => text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
                    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
                  );
                  const content = lines.filter(line => line.trim());
                  const ordered = content.length > 0 && content.every(line => /^\d+\.\s/.test(line));
                  const unordered = content.length > 0 && content.every(line => /^-\s/.test(line));
                  return <React.Fragment key={idx}>
                    {heading && <h2 className="text-2xl font-black text-blue-950 mt-8 mb-4">{heading}</h2>}
                    {ordered ? <ol className="list-decimal pl-6 space-y-3">{content.map((line, i) => <li key={i}>{inline(line.replace(/^\d+\.\s/, ''))}</li>)}</ol>
                      : unordered ? <ul className="list-disc pl-6 space-y-3">{content.map((line, i) => <li key={i}>{inline(line.replace(/^-\s/, ''))}</li>)}</ul>
                      : content.map((line, i) => <p key={i} className="text-gray-700 leading-relaxed font-normal">{inline(line)}</p>)}
                  </React.Fragment>;
                })}
              </div>

              {/* Callout Box */}
              <div className="bg-blue-50 border-2 border-gold/30 p-8 rounded-3xl mt-12 text-blue-950">
                <h2 className="text-xl font-black uppercase mb-3 text-blue-950">{isSanca ? 'Planejando um forro ou uma sanca em Curitiba?' : 'Precisa de divisórias para sua empresa em Curitiba?'}</h2>
                <p className="text-gray-600 mb-6">
                  {isSanca ? 'Envie as medidas e uma foto do teto. Diga se você quer destacar uma parede ou complementar a luz do ambiente. Isso ajuda a equipe a entender o que o projeto precisa.' : 'A Decorart Divisórias fornece e instala divisórias modulares de Eucatex e drywall para escritórios, clínicas e comércios.'}
                </p>
                <a 
                  href={BUSINESS_INFO.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gold hover:bg-yellow-800 text-white font-black px-6 py-3.5 rounded-2xl shadow-lg transition-all text-xs uppercase tracking-wider"
                >
                  <MessageCircle className="mr-2" size={16} /> WhatsApp
                </a>
              </div>
            </div>

            {(article.servicos || article.fontes) && <section className="space-y-6">
              {article.servicos && <div><h2 className="text-xl font-bold text-blue-950">Serviços relacionados</h2><ul className="mt-3 list-disc space-y-2 pl-6">{article.servicos.map(link => <li key={link.path}><Link className="underline text-blue-900" to={link.path}>{link.label}</Link></li>)}</ul></div>}
              {article.fontes && <div><h2 className="text-xl font-bold text-blue-950">Para consultar</h2><ul className="mt-3 list-disc space-y-2 pl-6">{article.fontes.map(link => <li key={link.url}><a className="underline text-blue-900" href={link.url}>{link.label}</a></li>)}</ul></div>}
            </section>}
            {/* Sidebar */}
            <aside className="space-y-8 w-full max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
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

