import React, { useState, useEffect } from 'react';
import { 
  Share2, 
  Phone, 
  MessageCircle, 
  ChevronUp, 
  Copy, 
  Check, 
  X, 
  Send
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const SHARE_IMAGE_URL = "https://scontent.xx.fbcdn.net/v/t39.105495-1/767560602_1031414302832652_6825547820352328130_n.webp?_nc_ht=scontent.xx.fbcdn.net&_nc_cat=100&_nc_ohc=n3deeDxDq6kQ7kNvwE2GFv6&sdl=0&ccb=14-4&oh=00_AQFEMiWsg3HRKA_vrgldUkBCdwV4RhgC7b-isUJRlTQYLQ&oe=6A7E794F&_nc_sid=a21977";

// Array de 50 textos semânticos rotativos a cada 15s
const DYNAMIC_SHARE_TEXTS = [
  "Divisórias Eucatex de alta durabilidade e montagem limpa em Curitiba.",
  "Especialistas em divisórias para escritórios, clínicas e salas comerciais em Curitiba.",
  "Divisórias comerciais de montagem rápida e ótimo isolamento acústico.",
  "Soluções em drywall e gesso acartonado para residências e empresas em Curitiba.",
  "Orçamento de divisórias direto de fábrica em Curitiba e Região Metropolitana.",
  "Transforme seu espaço corporativo com divisórias modulares de padrão executivo.",
  "A melhor opção em divisórias Eucatex com garantia de 5 anos em Curitiba.",
  "Divisórias com visores de vidro e acabamento refinado para escritórios modernos.",
  "Instalação profissional de divisórias em Batel, Centro, Rebouças e toda Curitiba.",
  "Painéis modulares de 35mm para salas de reunião e estações de trabalho.",
  "Divisórias para clínicas médicas, consultórios e lojas com preço direto de fábrica.",
  "Agilidade na instalação de divisórias em Curitiba sem interromper seu negócio.",
  "Divisórias em drywall com isolamento acústico em lã de rocha para empresas.",
  "Confira o catálogo completo de divisórias e forros modulares da Decorart.",
  "Solicite uma visita técnica gratuita para projeto de divisórias em Curitiba.",
  "Divisórias para galpões industriais e escritórios na CIC e Região Metropolitana.",
  "Projetos sob medida de divisórias para escritórios de advocacia e contabilidade.",
  "Qualidade, garantia e rapidez na montagem de divisórias em Curitiba.",
  "Subdivida ambientes sem a sujeira de obras tradicionais com divisórias modulares.",
  "Divisórias de alto padrão estético para recepções e salas diretivas.",
  "Solução rápida para adequação de espaço corporativo às normas sanitárias.",
  "Especialistas com mais de 15 anos de tradição em divisórias em Curitiba.",
  "Forro modular em PVC e fibra mineral para empresas e escritórios.",
  "Divisórias duráveis com perfis em aço galvanizado estrutural em Curitiba.",
  "Projetos corporativos completos com divisórias e sancas de gesso.",
  "Instalação de divisórias Eucatex em São José dos Pinhais e RMC.",
  "Aumente a produtividade e a privacidade acústica do seu escritório.",
  "Divisórias reutilizáveis e fáceis de reconfigurar em mudanças de layout.",
  "Sancas de gesso e iluminação integrada para ambientes corporativos.",
  "Divisórias e drywall com mão de obra altamente qualificada em Curitiba.",
  "Atendimento prioritário em Curitiba e Região Metropolitana para empresas.",
  "Divisórias para faculdades, cursos preparatórios e salas de aula.",
  "Painéis amadeirados e neutros de divisórias Eucatex com pronta entrega.",
  "Garantia de fábrica e assistência técnica especializada em divisórias.",
  "Crie salas de reunião e gerências com máxima privacidade acústica.",
  "Divisórias corporativas que combinam luz natural e privacidade visual.",
  "Orçamento rápido via WhatsApp com projeto personalizado para seu espaço.",
  "Reformas corporativas sem poeira nem entulho com sistemas de divisórias.",
  "Divisórias modulares para coworkings e escritórios compartilhados.",
  "Paredes de drywall com acabamento liso e pronto para pintura em Curitiba.",
  "Soluções em divisórias para academias, estúdios e centros de treinamento.",
  "Melhor custo-benefício por metro quadrado em divisórias corporativas.",
  "Instalação expressa de divisórias em Curitiba com garantia comprovada.",
  "Adecação de layout comercial para expansão de novos colaboradores.",
  "Divisórias sanfonadas e modulares de altíssima resistência e limpeza.",
  "Conheça nosso portfólio de obras e divisórias entregues em Curitiba.",
  "Linha completa de divisórias para hospitais, clínicas e laboratórios.",
  "Sua empresa pronta para trabalhar em poucos dias com divisórias Decorart.",
  "A melhor avaliação de clientes em divisórias e drywall em Curitiba.",
  "Entre em contato agora e garanta orçamento sem compromisso em Curitiba."
];

export const FloatingActions: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  // Monitorar rolagem da tela
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Alternar textos dinamicos a cada 15 segundos
  useEffect(() => {

    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % DYNAMIC_SHARE_TEXTS.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://decorartdivisorias.com.br';
  const currentPageTitle = typeof document !== 'undefined' ? document.title : 'Decorart Divisórias';
  const currentText = DYNAMIC_SHARE_TEXTS[textIndex];

  // Formato da mensagem semantica solicitada
  const semanticCopyText = `Estou indicando o melhor Decorart Divisórias: ${currentPageTitle} - ${currentText} (${currentUrl})`;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(semanticCopyText);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = semanticCopyText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Erro ao copiar: ", err);
    }
  };

  // Links de compartilhamento
  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.124.555 4.197 1.611 6.012L.031 24l6.09-1.597a11.968 11.968 0 005.91 1.558h.005c6.645 0 12.03-5.385 12.03-12.03C24.062 5.385 18.676 0 12.031 0zm5.836 17.027c-.246.692-1.229 1.282-1.983 1.348-.518.046-1.196.213-3.896-.867-3.456-1.383-5.688-4.896-5.86-5.124-.172-.229-1.399-1.862-1.399-3.551 0-1.69.885-2.523 1.202-2.868.316-.344.689-.431.918-.431.229 0 .459.002.66.012.212.01.498-.08.779.593.287.689.975 2.382 1.06 2.554.086.172.143.373.029.602-.115.229-.172.373-.344.573-.172.201-.362.448-.517.602-.172.172-.352.358-.152.702.201.344.895 1.477 1.92 2.391 1.316 1.173 2.427 1.537 2.771 1.709.344.172.545.143.746-.086.201-.229.86-1.003 1.089-1.348.229-.344.459-.287.774-.172.316.115 2.008.946 2.352 1.118.344.172.573.258.659.401.086.143.086.832-.16 1.524z"/>
        </svg>
      ),
      bg: 'bg-emerald-600 hover:bg-emerald-500 text-white',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(semanticCopyText)}`
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      bg: 'bg-blue-600 hover:bg-blue-500 text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'Twitter (X)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      bg: 'bg-slate-900 hover:bg-black text-white',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentText)}&url=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'Pinterest',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
        </svg>
      ),
      bg: 'bg-red-600 hover:bg-red-500 text-white',
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(SHARE_IMAGE_URL)}&description=${encodeURIComponent(`${currentPageTitle} - ${currentText}`)}`
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      bg: 'bg-blue-700 hover:bg-blue-600 text-white',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'Threads',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.186 24c-3.23 0-6.257-1.258-8.523-3.542C1.397 18.172.143 15.147.143 11.917c0-3.23 1.254-6.255 3.52-8.54C5.929 1.092 8.956-.166 12.186-.166c3.23 0 6.257 1.258 8.523 3.543 2.266 2.285 3.52 5.31 3.52 8.54 0 3.23-1.254 6.255-3.52 8.541C18.443 22.742 15.416 24 12.186 24zm0-22.166c-2.69 0-5.212 1.048-7.099 2.95-1.887 1.903-2.927 4.43-2.927 7.133 0 2.703 1.04 5.23 2.927 7.133 1.887 1.902 4.409 2.95 7.099 2.95 2.69 0 5.212-1.048 7.099-2.95 1.887-1.903 2.927-4.43 2.927-7.133 0-2.703-1.04-5.23-2.927-7.133-1.887-1.902-4.409-2.95-7.099-2.95z"/>
        </svg>
      ),
      bg: 'bg-[#9C7C13] hover:bg-black text-white',
      url: `https://www.threads.net/intent/post?text=${encodeURIComponent(semanticCopyText)}`
    }
  ];

  return (
    <>
      {/* ================= CANTO INFERIOR ESQUERDO: COMPARTILHAMENTO COMPACTO ================= */}
      <div className="fixed bottom-4 left-4 z-[80] flex flex-col items-start font-sans">
        
        {/* Popup de Compartilhamento */}
        {isShareOpen && (
          <div className="mb-3 w-[290px] sm:w-[320px] bg-slate-950/95 backdrop-blur-xl border border-gold/30 p-4 rounded-2xl shadow-2xl text-white animate-in slide-in-from-bottom-3 duration-200 relative z-50">
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center text-gold border border-gold/40">
                  <Share2 size={14} />
                </div>
                <div>
                  <h4 className="font-black text-xs text-white tracking-tight">Compartilhar Página</h4>
                  <p className="text-[9px] text-gold font-bold uppercase tracking-wider">Decorart Divisórias</p>
                </div>
              </div>
              <button 
                onClick={() => setIsShareOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>
            </div>

            {/* Texto Dinâmico */}
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl mb-3 text-[11px] text-blue-100 leading-snug">
              <span className="text-[9px] text-gold font-bold uppercase block mb-0.5">Destaque:</span>
              "{currentText}"
            </div>

            {/* Grid de Redes Sociais */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {shareLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bg} flex items-center space-x-1.5 px-2.5 py-2 rounded-lg text-[11px] font-bold transition-all shadow-md active:scale-95`}
                >
                  {social.icon}
                  <span className="truncate">{social.name}</span>
                </a>
              ))}
            </div>

            {/* Botão Copiar Link */}
            <button
              onClick={handleCopyLink}
              className="w-full bg-gold hover:bg-yellow-600 text-white py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-md active:scale-95 border border-gold/50"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-white animate-bounce" />
                  <span>Link Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copiar Link</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Botão Flutuante Compacto de Compartilhar */}
        <button
          onClick={() => setIsShareOpen(!isShareOpen)}
          className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-950/90 backdrop-blur-md text-gold rounded-full shadow-xl border border-gold/50 hover:bg-gold hover:text-white transition-all active:scale-95 flex items-center justify-center group"
          aria-label="Compartilhar"
          title="Compartilhar esta página"
        >
          <Share2 size={18} className="transition-transform group-hover:scale-110" />
        </button>
      </div>

      {/* ================= CANTO INFERIOR DIREITO: BOTEOS FLUTUANTES COMPACTOS ================= */}
      <div className="fixed bottom-4 right-4 z-[80] flex flex-col items-end space-y-2.5 font-sans">
        
        {/* Voltar ao Topo */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="w-9 h-9 bg-slate-900/90 text-gold rounded-full shadow-lg border border-gold/30 hover:bg-gold hover:text-white transition-all active:scale-95 flex items-center justify-center group"
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
          >
            <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Botão Ligar */}
        <a
          href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`}
          className="w-10 h-10 bg-slate-900/90 text-white hover:text-gold rounded-full shadow-lg border border-white/20 hover:border-gold transition-all flex items-center justify-center active:scale-95"
          aria-label="Ligar Agora"
          title="Ligar para Decorart"
        >
          <Phone size={16} />
        </a>

        {/* Botão WhatsApp Compacto com Ponto Verde Online */}
        <a
          href={BUSINESS_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-11 h-11 sm:w-12 sm:h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl border-2 border-emerald-400/50 transition-all flex items-center justify-center active:scale-95 group"
          aria-label="WhatsApp"
          title="Falar no WhatsApp"
        >
          {/* Indicador de Status Online */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-slate-900"></span>
          </span>

          <MessageCircle size={22} className="transform group-hover:scale-110 transition-transform" />
        </a>

      </div>
    </>
  );
};
