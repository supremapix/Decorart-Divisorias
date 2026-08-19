import React from 'react';
import { SafeImage } from './SafeImage';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const OFFICIAL_LOGO_URL = "https://img.supremasite.com.br/decorart.png";

export const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark' }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none overflow-hidden rounded-xl group ${className}`}>
      {/* Halo de luz radial limpo e concentrado diretamente no centro */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-gold/15 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Imagem do Logo com Iluminação Direta de Alta Definição */}
      <SafeImage
        src={OFFICIAL_LOGO_URL}
        alt="Decorart Divisórias"
        className="relative z-10 h-full w-auto object-contain transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] drop-shadow-[0_0_20px_rgba(212,175,55,0.25)] group-hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.7)] group-hover:scale-[1.02]"
        fallbackClassName="h-10 w-36 bg-transparent border-none text-gold font-bold"
      />

      {/* Feixe de Luz de Reflexo Metálico Elegante (Passa da esquerda para a direita no hover) */}
      <div className="absolute inset-0 z-20 pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
    </div>
  );
};


