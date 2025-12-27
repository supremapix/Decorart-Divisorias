
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ContactForm } from '../components/ContactForm';
import { SafeImage } from '../components/SafeImage';
import { BUSINESS_INFO, SERVICES } from '../constants';
// Added DollarSign and Truck to the imports
import { CheckCircle2, MapPin, ShieldCheck, Clock, MessageCircle, Star, Award, Zap, Building, Home, Construction, DollarSign, Truck } from 'lucide-react';

export const LocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const name = useMemo(() => {
    if (!slug) return '';
    return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  }, [slug]);

  // Gerador de conteúdo dinâmico SEO (18 Seções com ~300 palavras total estimadas por seção lógica)
  const contentSections = useMemo(() => [
    {
      title: `Divisórias e Drywall no ${name}: Excelência em Transformação de Ambientes`,
      text: `O ${name} é uma região estratégica para a Decorart Divisórias em Curitiba. Com mais de 15 anos de atuação, nossa empresa se consolidou como referência na instalação de sistemas de gesso acartonado e divisórias modulares para residências e empresas localizadas no ${name}. Entendemos as necessidades arquitetônicas locais e oferecemos soluções que unem isolamento acústico, durabilidade e estética impecável.`,
      icon: <Building className="text-gold" />
    },
    {
      title: `Instalação de Drywall Profissional no ${name}`,
      text: `O sistema de Drywall é amplamente solicitado no ${name} por sua versatilidade e rapidez. Seja para a criação de closets, home offices ou novas divisões em apartamentos e casas, o gesso acartonado permite uma obra limpa e eficiente. No ${name}, atendemos desde pequenos reparos até grandes projetos corporativos, sempre utilizando materiais das melhores marcas do mercado.`,
      icon: <Construction className="text-gold" />
    },
    {
      title: `Divisórias Eucatex para Escritórios no ${name}`,
      text: `Empresas no ${name} buscam agilidade na reconfiguração de seus espaços de trabalho. As divisórias Eucatex (estuque) são a solução ideal, pois permitem a montagem de salas de reunião e estações de trabalho em tempo recorde. No ${name}, a Decorart é especialista em layouts inteligentes que otimizam a produtividade da sua equipe.`,
      icon: <Zap className="text-gold" />
    },
    {
      title: `Forro PVC e Modular no ${name}`,
      text: `Para áreas comerciais, cozinhas industriais ou residências no ${name} que sofrem com umidade, o forro PVC modular é a escolha certa. Resistente, imune a cupins e de fácil manutenção, este material oferece o melhor custo-benefício da região. Nossas equipes no ${name} garantem uma instalação alinhada e segura.`,
      icon: <CheckCircle2 className="text-gold" />
    },
    {
      title: `Sancas de Gesso e Iluminação no ${name}`,
      text: `Valorize seu imóvel no ${name} com acabamentos decorativos de alto padrão. As sancas de gesso, integradas a projetos de iluminação LED, criam ambientes aconchegantes e modernos. A Decorart possui gesseiros especializados que atendem todo o bairro ${name} com desenhos exclusivos e acabamento fino.`,
      icon: <Star className="text-gold" />
    },
    {
      title: `Isolamento Acústico e Térmico no ${name}`,
      text: `Viver ou trabalhar no ${name} exige conforto. Nossas paredes de drywall com lã de rocha ou vidro proporcionam um isolamento acústico superior, ideal para quem busca privacidade. Este serviço é um dos diferenciais que a Decorart oferece para moradores de prédios e condomínios no ${name}.`,
      icon: <ShieldCheck className="text-gold" />
    },
    {
      title: `Reformas Rápidas para Lojas no ${name}`,
      text: `O comércio no ${name} não pode parar. Por isso, oferecemos cronogramas de instalação noturnos ou em finais de semana para lojistas da região. Nossas divisórias permitem que sua loja no ${name} seja renovada sem a necessidade de fechar as portas por longos períodos.`,
      icon: <Award className="text-gold" />
    },
    {
      title: `Atendimento a Condomínios no ${name}`,
      text: `Temos vasta experiência em normas de obras em condomínios no ${name}. Respeitamos horários de silêncio, proteção de elevadores e limpeza de áreas comuns. Se você reside no ${name}, pode confiar na Decorart para uma reforma sem transtornos com a vizinhança.`,
      icon: <Home className="text-gold" />
    },
    {
      title: `Divisórias de Vidro e Alumínio no ${name}`,
      text: `Para projetos que exigem transparência e sofisticação no ${name}, oferecemos a integração de vidros em nossos sistemas de divisórias. Muito comum em recepções e salas de diretoria de empresas situadas no ${name}, este acabamento eleva o nível corporativo do ambiente.`,
      icon: <Construction className="text-gold" />
    },
    {
      title: `Garantia de 5 Anos em Serviços no ${name}`,
      text: `A confiança de nossos clientes no ${name} é nossa prioridade. Todos os serviços de instalação no ${name} possuem garantia estendida de 5 anos contra defeitos de montagem. É a segurança que só uma empresa tradicional em Curitiba pode oferecer para quem mora no ${name}.`,
      icon: <ShieldCheck className="text-gold" />
    },
    {
      title: `Orçamento Gratuito no ${name}`,
      text: `Não cobramos taxa de visita técnica para moradores e empresários do ${name}. Nossa equipe vai até o local, realiza a medição precisa e entrega um orçamento detalhado, sem compromisso. Atendemos rapidamente todas as ruas e travessas do ${name}.`,
      icon: <DollarSign className="text-gold" />
    },
    {
      title: `Manutenção de Divisórias no ${name}`,
      text: `Possui divisórias antigas no ${name} que precisam de ajuste ou troca de painéis? Também realizamos serviços de manutenção preventiva e corretiva em sistemas Eucatex e Drywall em todo o ${name}, garantindo que seu espaço esteja sempre impecável.`,
      icon: <Clock className="text-gold" />
    },
    {
      title: `Soluções para Consultórios no ${name}`,
      text: `Clínicas e consultórios médicos no ${name} exigem assepsia e organização. Nossos materiais são de fácil limpeza e permitem a passagem de tubulações de gases e elétrica de forma embutida, atendendo às normas da vigilância sanitária para o ${name}.`,
      icon: <Building className="text-gold" />
    },
    {
      title: `Design de Interiores com Drywall no ${name}`,
      text: `Além de paredes, criamos estantes, nichos e painéis de TV em drywall para residências no ${name}. A criatividade é o limite para transformar sua sala ou quarto no ${name} em um ambiente digno de revista de decoração.`,
      icon: <Star className="text-gold" />
    },
    {
      title: `Logística Própria para Atender o ${name}`,
      text: `Com frota própria, garantimos que os materiais cheguem ao seu endereço no ${name} no horário combinado. Evitamos atrasos de transportadoras terceirizadas, mantendo o cronograma da sua obra no ${name} sempre em dia.`,
      icon: <Truck className="text-gold" />
    },
    {
      title: `Sustentabilidade em Obras no ${name}`,
      text: `O sistema de construção a seco (drywall) no ${name} gera até 95% menos resíduos que a alvenaria. É a opção ecológica para quem se preocupa com o meio ambiente no ${name} e deseja uma obra sustentável e inteligente.`,
      icon: <CheckCircle2 className="text-gold" />
    },
    {
      title: `Pintura e Acabamento em Drywall no ${name}`,
      text: `Entregamos sua parede de drywall no ${name} pronta para receber pintura ou papel de parede. O tratamento de juntas realizado por nossos profissionais no ${name} garante uma superfície perfeitamente lisa, sem emendas visíveis.`,
      icon: <Construction className="text-gold" />
    },
    {
      title: `Por que Escolher a Decorart no ${name}?`,
      text: `Escolher a Decorart para sua obra no ${name} significa optar por experiência, pontualidade e preço justo. Somos parceiros de longa data de moradores e construtores no ${name}, sempre entregando resultados que superam as expectativas.`,
      icon: <Award className="text-gold" />
    }
  ], [name]);

  return (
    <div className="bg-white">
      <EnhancedSEO 
        title={`Divisórias e Drywall no ${name} - Curitiba/PR | Decorart`}
        description={`Especialista em divisórias eucatex, drywall, forros e sancas no ${name}. Atendimento rápido, garantia de 5 anos e orçamento gratuito no ${name} e região.`}
        canonical={`/local/${slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Decorart Divisórias - Atendimento ${name}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": name,
            "addressRegion": "PR"
          },
          "areaServed": name,
          "telephone": BUSINESS_INFO.phones[0]
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-blue-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-30 z-0">
          <SafeImage src={SERVICES[0].imagem} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Divisórias e Drywall no {name}</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12">
              Qualidade Industrial e Acabamento de Alto Padrão para sua Residência ou Empresa no {name}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={BUSINESS_INFO.whatsapp} target="_blank" className="bg-gold hover:bg-yellow-800 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all flex items-center animate-bounce">
                <MessageCircle className="mr-3" /> ORÇAMENTO NO {name.toUpperCase()}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid (18 Sections) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-16">
              {contentSections.map((section, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl">{section.icon}</div>
                    <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">{section.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{section.text}</p>
                  
                  {/* Insert images at specific intervals */}
                  {(idx === 2 || idx === 8 || idx === 14) && (
                    <div className="mt-10 rounded-3xl overflow-hidden shadow-2xl h-80">
                      <SafeImage 
                        src={SERVICES[idx % SERVICES.length].imagem} 
                        alt={`${section.title} em ${name}`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sticky Sidebar Form */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
                  <h3 className="text-2xl font-black text-blue-900 mb-6 uppercase tracking-tight">Fale com Especialista</h3>
                  <ContactForm />
                </div>
                
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl space-y-8">
                  <h3 className="text-xl font-black text-blue-950 uppercase">Atendimento em {name}</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-gold shrink-0" />
                      <div>
                        <p className="font-bold">Cobertura Total</p>
                        <p className="text-sm text-gray-500">Equipes atendendo todas as ruas do bairro {name}.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="text-gold shrink-0" />
                      <div>
                        <p className="font-bold">Visita Hoje</p>
                        <p className="text-sm text-gray-500">Agende agora sua medição gratuita em {name}.</p>
                      </div>
                    </div>
                  </div>
                  <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} className="w-full bg-blue-600 text-white py-4 rounded-xl flex items-center justify-center font-black hover:bg-blue-700 transition-colors">
                    LIGAR PARA (41) 99632-4664
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gold py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Leve a melhor estrutura para o {name}</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Solicite orçamento via WhatsApp e comprove o melhor custo-benefício de Curitiba.</p>
          <a href={BUSINESS_INFO.whatsapp} className="bg-white text-gold px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform inline-block shadow-2xl">
            SOLICITAR VIA WHATSAPP AGORA
          </a>
        </div>
      </section>
    </div>
  );
};
