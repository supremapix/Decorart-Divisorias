
import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({ src, alt, className, fallbackClassName, ...props }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`relative flex items-center justify-center bg-blue-950 overflow-hidden ${className} ${fallbackClassName}`}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <img 
          src="https://decorartdivisorias.com.br/assets/images/decorart-divisorias-sao-jose-dos-pinhais-1.gif" 
          alt="Fallback Decorart" 
          className="w-24 h-auto opacity-50 grayscale brightness-200"
        />
        <div className="absolute bottom-4 left-4 right-4 text-[10px] text-white/20 uppercase font-bold tracking-widest text-center">
          {alt}
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)} 
      {...props} 
    />
  );
};
