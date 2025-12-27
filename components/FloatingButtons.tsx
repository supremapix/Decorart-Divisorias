
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const FloatingButtons: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col space-y-4">
      {showScroll && (
        <button 
          onClick={scrollToTop}
          className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all scale-100 hover:scale-110 active:scale-95"
          aria-label="Voltar ao topo"
        >
          <ChevronUp size={24} />
        </button>
      )}
      
      <a 
        href={`mailto:${BUSINESS_INFO.email}`}
        className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-all flex items-center justify-center scale-100 hover:scale-110"
        aria-label="E-mail"
      >
        <Mail size={24} />
      </a>

      <a 
        href={`tel:${BUSINESS_INFO.phones[0].replace(/\D/g, '')}`}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center scale-100 hover:scale-110"
        aria-label="Ligar"
      >
        <Phone size={24} />
      </a>

      <a 
        href={BUSINESS_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gold text-white p-4 rounded-full shadow-lg hover:bg-yellow-800 transition-all flex items-center justify-center scale-100 hover:scale-110 animate-[bounce_2s_infinite]"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};
