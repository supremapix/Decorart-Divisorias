import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/divisorias-curitiba', label: 'Divisórias Curitiba' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/artigos', label: 'Artigos' },
    { path: '/bairros', label: 'Bairros' },
    { path: '/cidades', label: 'Cidades' },
  ];

  return (
    <header className="bg-slate-950 text-white shadow-xl sticky top-0 z-50 border-b border-gold/30">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        
        {/* Logo Vetorial Premium */}
        <Link to="/" className="group flex items-center py-1">
          <div className="transition-all duration-300 group-hover:scale-105 group-active:scale-95">
             <Logo className="h-10 md:h-12" />
          </div>
        </Link>

        {/* Desktop Nav - Alta Legibilidade / Sênior Friendly */}
        <nav className="hidden lg:flex items-center space-x-7 font-black uppercase tracking-wider text-xs md:text-sm">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`transition-colors duration-200 py-1 ${
                  isActive ? 'text-gold border-b-2 border-gold font-black' : 'text-slate-200 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Ações de Contato Curte (Shortened buttons) */}
        <div className="hidden lg:flex items-center space-x-4">
          <a 
            href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} 
            className="flex items-center text-slate-200 hover:text-gold font-bold text-xs uppercase tracking-wider px-3 py-2 rounded-xl transition-colors"
          >
            <Phone size={16} className="mr-1.5 text-gold shrink-0" />
            <span>Ligar</span>
          </a>
          <a 
            href={BUSINESS_INFO.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gold hover:bg-yellow-600 text-white px-5 py-2.5 rounded-2xl flex items-center transition-all font-black text-xs uppercase tracking-wider shadow-lg active:scale-95"
          >
            <MessageCircle size={16} className="mr-1.5" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle Toggle (Grande e fácil de tocar para idosos) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-3 text-gold bg-slate-900 border border-gold/30 rounded-2xl focus:outline-none active:scale-95 transition-all"
          aria-label="Abrir Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu - Elegante, limpo e adaptado para idosos */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-2xl border-t border-gold/30 p-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-black uppercase text-sm md:text-base">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className={`py-3 px-4 rounded-2xl border transition-all flex items-center justify-between ${
                    isActive 
                      ? 'bg-gold/20 text-gold border-gold/50' 
                      : 'bg-slate-900/60 text-slate-100 border-white/10 hover:border-gold/30'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-gold"></div>}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 flex flex-col space-y-3">
            <a 
              href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} 
              className="flex items-center justify-center text-slate-100 font-black p-4 bg-slate-900 border border-white/10 rounded-2xl text-sm uppercase tracking-wider"
            >
              <Phone size={18} className="mr-2 text-gold" />
              Ligar
            </a>
            <a 
              href={BUSINESS_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold hover:bg-yellow-600 text-white p-4 rounded-2xl flex items-center justify-center font-black text-sm uppercase tracking-wider shadow-lg active:scale-95"
            >
              <MessageCircle size={18} className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
