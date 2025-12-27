
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { ContactForm } from '../components/ContactForm';
import { SafeImage } from '../components/SafeImage';
import { BUSINESS_INFO, SERVICES } from '../constants';
import { 
  CheckCircle2, MapPin, ShieldCheck, Clock, MessageCircle, Star, 
  Award, Zap, Building, Home, Construction, DollarSign, Truck, 
  Settings, Users, Wrench, PhoneCall
} from 'lucide-react';

export const LocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const name = useMemo(() => {
    if (!slug) return '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [slug]);

  // Conteúdo SEO Massivo - 18 Blocos densos para autoridade local
  const contentSections = useMemo(() => [
    {
      title: `Líder em Divisórias e Drywall no ${name}`,
      text: `A Decorart Divisórias consolidou-se como a principal escolha para quem busca sistemas de divisórias e drywall no ${name}, Curitiba. Com mais de 15 anos de experiência prática, nossa equipe técnica entende profundamente a arquitetura e as necessidades específicas de moradores e empresários do ${name}. Seja para uma reforma residencial de alto padrão ou para a estruturação de um novo escritório comercial, oferecemos o equilíbrio perfeito entre agilidade, custo-benefício e acabamento impecável. No ${name}, somos reconhecidos pela pontualidade e pela limpeza extrema em nossas obras, garantindo que sua rotina não seja interrompida por transtornos desnecessários.`,
      icon: <Building className="text-gold" />
    },
    {
      title: `Especialistas em Drywall no ${name}: Rapidez e Versatilidade`,
      text: `O sistema de Drywall no ${name} revolucionou a forma como as reformas são feitas. Ao contrário da alvenaria tradicional, o drywall permite criar paredes, nichos e forros em uma fração do tempo, com muito menos resíduos. Nossos profissionais no ${name} são treinados para executar projetos complexos, desde isolamento acústico entre dormitórios até a criação de closets personalizados e home offices modernos. Se você está no ${name} e precisa otimizar seu espaço com uma solução inteligente e durável, o drywall da Decorart é a escolha certa. Utilizamos apenas placas de procedência garantida e perfis de aço galvanizado que asseguram a integridade estrutural por décadas.`,
      icon: <Construction className="text-gold" />
    },
    {
      title: `Divisórias Eucatex no ${name} para Ambientes Corporativos`,
      text: `Empresas localizadas no ${name} exigem flexibilidade. Nossas divisórias modulares em Eucatex (estuque) são ideais para escritórios, clínicas e salas comerciais que precisam de reconfiguração constante. No ${name}, instalamos salas de reunião e divisões de departamentos com rapidez incomparável. O sistema modular permite que as divisórias sejam desmontadas e remontadas em outros locais, preservando o investimento do cliente. Além disso, oferecemos uma vasta gama de acabamentos em madeira e cores sólidas que se adaptam perfeitamente à identidade visual da sua empresa no ${name}.`,
      icon: <Zap className="text-gold" />
    },
    {
      title: `Forro Modular PVC: Solução Prática no ${name}`,
      text: `O forro de PVC no ${name} é uma das soluções mais procuradas para áreas que exigem higiene e resistência à umidade, como consultórios, laboratórios e áreas de serviço. Além de ser imune a cupins e fungos, o forro modular permite fácil acesso às instalações elétricas e hidráulicas acima dele. A Decorart atende diversos estabelecimentos comerciais no ${name} com forros que oferecem excelente acabamento estético e durabilidade superior. É uma solução de baixo custo e alta eficiência para quem busca renovar o teto de grandes áreas no ${name} sem complicação.`,
      icon: <Settings className="text-gold" />
    },
    {
      title: `Sancas de Gesso Decorativas e Iluminação no ${name}`,
      text: `Transforme a estética do seu imóvel no ${name} com nossas sancas de gesso personalizadas. Integramos o trabalho de gesso com projetos de iluminação indireta em LED, criando atmosferas sofisticadas em salas de estar, quartos e recepções. No ${name}, nossos gesseiros artesãos são famosos pela precisão nos detalhes e pela capacidade de executar designs modernos que valorizam o imóvel para venda ou locação. Uma sanca bem executada no ${name} não é apenas um item decorativo, mas um investimento em conforto visual e valorização patrimonial.`,
      icon: <Star className="text-gold" />
    },
    {
      title: `Isolamento Acústico Profissional no ${name}`,
      text: `O silêncio é um luxo essencial, especialmente em bairros movimentados como o ${name}. Oferecemos sistemas de isolamento acústico em drywall com preenchimento de lã de rocha ou lã de vidro, reduzindo drasticamente a transmissão de ruídos entre ambientes. Ideal para quem mora em apartamentos no ${name} e deseja ter um home theater ou simplesmente garantir o silêncio no quarto. Nossa expertise técnica garante que as vedações sejam feitas de forma hermética, eliminando pontes acústicas e proporcionando paz absoluta para sua família ou escritório no ${name}.`,
      icon: <ShieldCheck className="text-gold" />
    },
    {
      title: `Atendimento Noturno e Especial para Lojas no ${name}`,
      text: `Sabemos que o comércio no ${name} tem horários rígidos. Por isso, a Decorart oferece equipes para execução de serviços fora do horário comercial no ${name}. Reformamos lojas em shoppings ou ruas movimentadas sem interferir no fluxo de clientes. Se você é um lojista no ${name}, conte conosco para uma reforma relâmpago que renova sua vitrine e interiores sem perda de faturamento. Nossa logística é planejada para que os materiais cheguem e sejam instalados com o mínimo de ruído e poeira no ${name}.`,
      icon: <Clock className="text-gold" />
    },
    {
      title: `Reformas Residenciais no ${name} sem Sujeira`,
      text: `O maior medo de quem reforma no ${name} é a sujeira da obra. Com o sistema de construção a seco da Decorart, esse problema é minimizado. Protegemos seu piso e móveis, e ao final de cada dia de trabalho no ${name}, nossa equipe realiza a limpeza da área afetada. Morar no ${name} exige um padrão de excellence que nós entregamos em cada parafuso apertado. Nossas placas de gesso RU (Resistente à Umidade) são perfeitas para banheiros e cozinhas no ${name}, garantindo que você não tenha problemas com mofo ou infiltrações futuras.`,
      icon: <Home className="text-gold" />
    },
    {
      title: `Infraestrutura para Ar-Condicionado no ${name}`,
      text: `Ao instalar drywall ou forros no ${name}, nossa equipe já prevê a infraestrutura necessária para sistemas de climatização. Escondemos toda a fiação e tubulação, deixando apenas as saídas necessárias. Isso evita que você precise quebrar paredes de alvenaria no futuro. No ${name}, muitos clientes aproveitam a instalação do forro para modernizar todo o sistema de ar-condicionado e rede de dados, centralizando tudo de forma invisível e elegante sob o gesso.`,
      icon: <Wrench className="text-gold" />
    },
    {
      title: `Parceria com Arquitetos do ${name}`,
      text: `Trabalhamos em conjunto com os melhores arquitetos e designers de interiores que atuam no ${name}. Executamos fielmente os projetos detalhados, garantindo que as medidas e acabamentos especificados sejam seguidos à risca. Se você tem um projeto assinado para sua casa no ${name}, a Decorart é o braço direito técnico para tornar esse desenho realidade com perfeição. Nossa experiência acumulada no ${name} nos permite sugerir melhorias técnicas que economizam tempo e recursos preciosos.`,
      icon: <Users className="text-gold" />
    },
    {
      title: `Garantia de 5 Anos em Todo o ${name}`,
      text: `Nossa confiança no trabalho realizado é tão alta que oferecemos garantia de 5 anos em todos os serviços executados no ${name}. Cobrimos qualquer defeito de instalação ou material, dando tranquilidade total para o investidor. No ${name}, a palavra da Decorart vale ouro. Somos uma empresa com sede própria em Curitiba e CNPJ sólido, o que garante que estaremos aqui para prestar qualquer assistência futura que você possa precisar no ${name}.`,
      icon: <Award className="text-gold" />
    },
    {
      title: `Orçamento Imediato via WhatsApp no ${name}`,
      text: `Valorizamos seu tempo. Através do nosso canal exclusivo de atendimento para o ${name}, você pode enviar fotos e medidas básicas para receber uma estimativa preliminar de valores. Para orçamentos finais, enviamos um técnico ao local no ${name} sem custo algum. Essa agilidade é o que nos diferencia da concorrência no ${name}, permitindo que você planeje sua reforma com dados reais e preços justos de quem compra material em larga escala.`,
      icon: <MessageCircle className="text-gold" />
    },
    {
      title: `Soluções Térmicas para o Clima do ${name}`,
      text: `Curitiba é conhecida pelo seu clima oscilante, e o ${name} não é exceção. Nossas paredes e forros de drywall podem ser equipados com isolantes térmicos de alta performance, mantendo sua casa no ${name} quente no inverno e fresca no verão. Isso resulta em uma economia significativa na conta de energia, já que o uso de aquecedores e ar-condicionado é reduzido. É a tecnologia de construção moderna servindo ao conforto térmico dos moradores do ${name}.`,
      icon: <Zap className="text-gold" />
    },
    {
      title: `Divisórias de Vidro: Modernidade no ${name}`,
      text: `Para quem busca um design ultra-moderno no ${name}, integramos painéis de vidro em nossas divisórias Eucatex ou Drywall. Isso permite a passagem de luz natural e mantém a sensação de amplitude, essencial para salas comerciais pequenas no ${name}. O vidro temperado ou laminado oferece segurança total e um toque de luxo que eleva o padrão de qualquer recepção ou sala de diretoria situada no ${name}.`,
      icon: <Star className="text-gold" />
    },
    {
      title: `Logística Ágil: Entrega Rápida no ${name}`,
      text: `Possuímos frota própria de caminhões e utilitários para garantir que o material da sua obra no ${name} chegue no horário marcado. Não dependemos de transportadoras de terceiros, o que elimina 90% dos problemas de atraso. No ${name}, nossa logística é planejada para evitar horários de pico, garantindo eficiência máxima. Se você precisa de urgência para começar sua obra no ${name}, a Decorart é sua melhor aliada.`,
      icon: <Truck className="text-gold" />
    },
    {
      title: `Pintura e Acabamento Final no ${name}`,
      text: `Não entregamos apenas a estrutura. No ${name}, oferecemos o serviço de acabamento final (massamento e lixamento com máquina de aspiração) que deixa a parede de drywall pronta para a pintura. Nosso acabamento é nível 5, o mais alto da escala, garantindo que mesmo sob luz rasante não apareçam imperfeições. É por isso que os clientes mais exigentes do ${name} escolhem sempre a Decorart.`,
      icon: <Settings className="text-gold" />
    },
    {
      title: `Compromisso com o Meio Ambiente no ${name}`,
      text: `Nossa atuação no ${name} é pautada pela sustentabilidade. O drywall é um material reciclável e utiliza muito menos água em sua instalação do que o cimento tradicional. Além disso, destinamos todos os resíduos de nossas obras no ${name} para centros de reciclagem autorizados. Ao escolher a Decorart para sua reforma no ${name}, você está optando por uma empresa que respeita o futuro do nosso planeta e da nossa cidade.`,
      icon: <CheckCircle2 className="text-gold" />
    },
    {
      title: `Conclusão: Sua Obra no ${name} em Boas Mãos`,
      text: `Reformar ou construir no ${name} não precisa ser um pesadelo. Com a Decorart Divisórias, você tem a garantia de um processo suave, transparente e com resultado superior. Milhares de metros quadrados instalados no ${name} e centenas de clientes satisfeitos são nosso maior cartão de visitas. Entre em contato hoje mesmo e descubra por que somos a empresa número 1 de divisórias e drywall para quem vive e trabalha no ${name}.`,
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

      {/* Hero Section Localizado */}
      <section className="relative py-24 bg-blue-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-30 z-0">
          <SafeImage src={SERVICES[1].imagem} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center bg-gold/20 text-gold px-4 py-2 rounded-full mb-6 font-bold text-sm border border-gold/30">
              <MapPin size={16} className="mr-2" /> ATENDIMENTO NO {name.toUpperCase()}
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Divisórias e Drywall no {name}</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 font-medium">
              Transformamos seu ambiente no {name} com agilidade industrial e acabamento residencial de alto padrão.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={BUSINESS_INFO.whatsapp} target="_blank" className="bg-gold hover:bg-yellow-800 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all flex items-center animate-bounce">
                <MessageCircle className="mr-3" /> ORÇAMENTO NO {name.toUpperCase()}
              </a>
              <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} className="bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all flex items-center hover:bg-gray-100">
                <PhoneCall className="mr-3" /> LIGAR AGORA
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo Rico de SEO - 18 Blocos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Coluna de Conteúdo Principal */}
            <div className="lg:col-span-2 space-y-16">
              {contentSections.map((section, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-gold group-hover:text-white transition-all shadow-sm">
                      {React.cloneElement(section.icon as React.ReactElement, { size: 28 })}
                    </div>
                    <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">{section.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg text-justify font-normal">
                    {section.text}
                  </p>
                  
                  {/* Inserção de imagens estratégicas entre os blocos */}
                  {(idx === 2 || idx === 7 || idx === 12) && (
                    <div className="mt-12 rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] border-4 border-gray-50">
                      <SafeImage 
                        src={SERVICES[idx % SERVICES.length].imagem} 
                        alt={`${section.title} profissional em ${name}`} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                      />
                    </div>
                  )}
                </div>
              ))}
              
              {/* Vídeo de Demonstração */}
              <div className="bg-blue-50 p-8 md:p-12 rounded-[3rem] border border-blue-100 shadow-inner mt-20">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl mb-10 bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/9sVI77o_Hbw" 
                    title={`Execução de Serviços no ${name}`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-6 uppercase tracking-tight">Atendemos Todo o Bairro {name} com Excelência</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Nossas equipes são treinadas para atuar em condomínios e prédios comerciais no {name}, respeitando todas as normas de segurança e horários de silêncio. Se você precisa de uma obra rápida, limpa e com nota fiscal, a Decorart é sua melhor escolha em {name}.
                </p>
                <a href={BUSINESS_INFO.whatsapp} className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-xl font-black hover:bg-yellow-800 transition-all shadow-lg uppercase tracking-tighter">
                  SOLICITAR VISITA TÉCNICA NO {name.toUpperCase()} <ArrowRight className="ml-2" />
                </a>
              </div>
            </div>

            {/* Sidebar Fixa de Conversão */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                  <h3 className="text-2xl font-black text-blue-950 mb-6 uppercase tracking-tight text-center">Peça seu Orçamento</h3>
                  <p className="text-gray-500 text-sm mb-8 text-center">
                    Receba uma proposta detalhada para seu projeto no <strong>{name}</strong> em até 24 horas.
                  </p>
                  <ContactForm />
                </div>
                
                <div className="bg-blue-950 p-10 rounded-[2.5rem] text-white space-y-8">
                  <h3 className="text-xl font-black uppercase text-gold tracking-tight">Por que nós no {name}?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-5">
                      <ShieldCheck className="text-gold shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-lg">Garantia Real</p>
                        <p className="text-sm text-blue-200">5 anos de cobertura total em {name}.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <Clock className="text-gold shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-lg">Agilidade Total</p>
                        <p className="text-sm text-blue-200">Início em até 48h após aprovação no {name}.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <Award className="text-gold shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-lg">Preço de Fábrica</p>
                        <p className="text-sm text-blue-200">Melhor custo por m² de Curitiba.</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-blue-800">
                    <p className="text-xs text-blue-300 uppercase tracking-[0.2em] font-bold">Atendimento Priority {name}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Seção de Links para Outras Localidades */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-blue-950 mb-10 uppercase tracking-tighter">Atendemos Toda Curitiba e RMC</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/bairros" className="text-blue-600 font-bold hover:text-gold transition-colors">Ver todos os bairros</Link>
            <span className="text-gray-300">|</span>
            <Link to="/cidades" className="text-blue-600 font-bold hover:text-gold transition-colors">Ver todas as cidades</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Ícone de seta não importado inicialmente no escopo
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
