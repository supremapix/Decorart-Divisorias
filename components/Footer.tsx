import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';
import { Instagram, Facebook, MessageSquare, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      if (day >= 1 && day <= 5) setIsOpen(hour >= 8 && hour < 18);
      else if (day === 6) setIsOpen(hour >= 8 && hour < 12);
      else setIsOpen(false);
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 pb-10 border-t border-gold/30 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="group block">
              <Logo className="h-12 md:h-14 transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Especialistas em divisórias e drywall com mais de 15 anos de tradição em Curitiba e Região Metropolitana.
            </p>
            <div className="flex space-x-3">
              {['whatsapp', 'facebook', 'instagram'].map((social) => (
                <a 
                  key={social} 
                  href={BUSINESS_INFO.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 border border-white/10 rounded-2xl hover:bg-gold hover:border-gold transition-all text-gold hover:text-white shadow-sm"
                  aria-label={social}
                >
                  {social === 'whatsapp' ? <MessageSquare size={18} /> : social === 'facebook' ? <Facebook size={18} /> : <Instagram size={18} />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black mb-6 border-l-4 border-gold pl-3 uppercase tracking-wider text-white">Contato</h3>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold mr-3 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gold mr-3 shrink-0" />
                <span>{BUSINESS_INFO.phones[0]}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold mr-3 shrink-0" />
                <span className="break-all">{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-6 border-l-4 border-gold pl-3 uppercase tracking-wider text-white">Atendimento</h3>
            <div className={`mb-6 inline-flex items-center px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${isOpen ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' : 'bg-rose-950 text-rose-400 border border-rose-500/40'}`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-emerald-400 animate-ping' : 'bg-rose-400'}`}></div>
              {isOpen ? 'Aberto Agora' : 'Fechado Agora'}
            </div>
            <ul className="space-y-3 text-slate-300 text-sm font-medium mb-6">
              <li className="flex justify-between"><span>Seg - Sex</span><span className="text-white font-bold">08:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Sábados</span><span className="text-white font-bold">08:00 - 12:00</span></li>
            </ul>
            <a 
              href={BUSINESS_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-yellow-600 text-white px-6 py-3.5 rounded-2xl font-black text-xs transition-all shadow-xl block text-center uppercase tracking-wider hover:scale-105 active:scale-95"
            >
              Orçamento
            </a>
          </div>

          <div>
            <h3 className="text-lg font-black mb-6 border-l-4 border-gold pl-3 uppercase tracking-wider text-white">Links Rápidos</h3>
            <ul className="space-y-3 text-slate-300 text-sm font-semibold">
              <li>
                <Link to="/" className="hover:text-gold flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2 text-gold" /> Home
                </Link>
              </li>
              <li>
                <Link to="/divisorias-curitiba" className="hover:text-gold flex items-center transition-colors text-gold">
                  <ArrowRight size={14} className="mr-2 text-gold" /> Divisórias Curitiba
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-gold flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2 text-gold" /> Serviços
                </Link>
              </li>
              <li>
                <Link to="/artigos" className="hover:text-gold flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2 text-gold" /> Artigos
                </Link>
              </li>
              <li>
                <Link to="/bairros" className="hover:text-gold flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2 text-gold" /> Bairros
                </Link>
              </li>
              <li>
                <Link to="/cidades" className="hover:text-gold flex items-center transition-colors">
                  <ArrowRight size={14} className="mr-2 text-gold" /> Cidades
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center space-y-4">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">DECORART DIVISÓRIAS - CURITIBA E RMC</p>
          <div className="text-xs text-slate-400 flex flex-col md:flex-row items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} Decorart Divisórias.</span>
            <span className="flex items-center">
              Desenvolvido <Heart size={16} className="mx-1.5 text-rose-500 fill-rose-500 animate-pulse" /> por 
              <a href="https://supremamidia.com.br" target="_blank" rel="noopener noreferrer" className="ml-1.5 font-black text-gold hover:underline uppercase tracking-tight">Suprema Mídia</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
