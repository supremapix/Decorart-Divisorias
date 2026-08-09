
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Vetorial com Interação */}
        <Link to="/" className="group flex items-center">
          <div className="transition-all duration-300 group-hover:scale-105 group-active:scale-95">
             <Logo className="h-10 md:h-12" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 font-black text-blue-950 uppercase tracking-tighter text-sm">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <Link to="/divisorias-curitiba" className="hover:text-gold transition-colors text-gold">Divisórias Curitiba</Link>
          <Link to="/servicos" className="hover:text-gold transition-colors">Serviços</Link>
          <Link to="/artigos" className="hover:text-gold transition-colors">Artigos</Link>
          <Link to="/bairros" className="hover:text-gold transition-colors">Bairros</Link>
          <Link to="/cidades" className="hover:text-gold transition-colors">Cidades</Link>
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} className="flex items-center text-blue-950 font-black text-sm">
            <Phone size={18} className="mr-2 text-gold" />
            {BUSINESS_INFO.phones[0]}
          </a>
          <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-yellow-800 text-white px-6 py-3 rounded-xl flex items-center transition-colors font-black text-sm shadow-md">
            <MessageCircle size={18} className="mr-2" />
            WHATSAPP
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-blue-950 bg-gray-100 rounded-lg">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4 font-black text-blue-950 uppercase tracking-tighter">
            <Link to="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-50">Home</Link>
            <Link to="/divisorias-curitiba" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-50 text-gold">Divisórias Curitiba</Link>
            <Link to="/servicos" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-50">Serviços</Link>
            <Link to="/artigos" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-50">Artigos & Guias</Link>
            <Link to="/bairros" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-50">Bairros</Link>
            <Link to="/cidades" onClick={() => setIsOpen(false)} className="py-2 border-b border-gray-50">Cidades</Link>
          </nav>
          <div className="pt-4 flex flex-col space-y-4">
            <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`} className="flex items-center justify-center text-blue-950 font-black p-4 bg-gray-50 rounded-xl">
              <Phone size={20} className="mr-2 text-gold" />
              {BUSINESS_INFO.phones[0]}
            </a>
            <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-gold text-white p-4 rounded-xl flex items-center justify-center font-black shadow-lg">
              <MessageCircle size={20} className="mr-2" />
              WHATSAPP AGORA
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
