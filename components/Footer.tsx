
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';
import { Instagram, Facebook, MessageSquare, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

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
    <footer className="bg-gray-50 text-blue-950 pt-24 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="group block">
              <img 
                src="https://decorartdivisorias.com.br/assets/images/decorart-divisorias-sao-jose-dos-pinhais-1.gif" 
                alt="Decorart Divisórias" 
                className="w-full max-w-[280px] object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Especialistas em divisórias e drywall com mais de 15 anos de tradição em Curitiba e Região Metropolitana. Qualidade garantida direto da fábrica.
            </p>
            <div className="flex space-x-4">
              {['whatsapp', 'facebook', 'instagram'].map((social) => (
                <a key={social} href={BUSINESS_INFO.whatsapp} target="_blank" className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gold transition-all text-[#9C7C13] hover:text-white hover:-translate-y-2 shadow-sm transform duration-300">
                  {social === 'whatsapp' ? <MessageSquare size={20} /> : social === 'facebook' ? <Facebook size={20} /> : <Instagram size={20} />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-10 border-l-4 border-gold pl-4 uppercase tracking-tighter text-blue-900">Empresa Contatos</h3>
            <ul className="space-y-6 text-gray-700 text-sm">
              <li className="flex items-start group">
                <MapPin size={20} className="text-gold mr-4 shrink-0 transition-transform group-hover:scale-125" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center group">
                <Phone size={20} className="text-gold mr-4 shrink-0 transition-transform group-hover:scale-125" />
                <span>{BUSINESS_INFO.phones[0]}</span>
              </li>
              <li className="flex items-center group">
                <Mail size={20} className="text-gold mr-4 shrink-0 transition-transform group-hover:scale-125" />
                <span className="break-all">{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-10 border-l-4 border-gold pl-4 uppercase tracking-tighter text-blue-900">Atendimento</h3>
            <div className={`mb-6 inline-flex items-center px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} animate-pulse`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-green-600' : 'bg-red-600'}`}></div>
              {isOpen ? 'Aberto Agora' : 'Fechado Agora'}
            </div>
            <ul className="space-y-4 text-gray-600 text-sm font-medium mb-8">
              <li className="flex justify-between"><span>Seg - Sex</span><span className="text-blue-900 font-bold">08:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Sábados</span><span className="text-blue-900 font-bold">08:00 - 12:00</span></li>
            </ul>
            <a href={BUSINESS_INFO.whatsapp} target="_blank" className="bg-gold hover:bg-yellow-700 text-white px-8 py-4 rounded-xl font-black transition-all shadow-xl block text-center uppercase tracking-tighter hover:scale-105 active:scale-95 animate-pulse">
              Solicitar Orçamento
            </a>
          </div>

          <div>
            <h3 className="text-xl font-black mb-10 border-l-4 border-gold pl-4 uppercase tracking-tighter text-blue-900">Links Rápidos</h3>
            <ul className="space-y-4 text-gray-700 text-sm">
              {['Home', 'Servicos', 'Bairros', 'Cidades', 'Contato'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="hover:text-gold flex items-center transition-colors group">
                    <ArrowRight size={14} className="mr-3 text-gold group-hover:translate-x-1" /> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 text-center space-y-6">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">DECORART DIVISÓRIAS - CURITIBA E RMC</p>
          <div className="text-xs text-gray-500 flex flex-col md:flex-row items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} Decorart Divisórias.</span>
            <span className="flex items-center">
              Desenvolvido <Heart size={24} className="mx-2 text-red-600 fill-red-600 animate-[heartBeat_1.3s_ease-in-out_infinite]" /> por 
              <a href="https://supremamidia.com.br" target="_blank" className="ml-2 font-black text-blue-900 hover:text-gold uppercase">Suprema Mídia</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
