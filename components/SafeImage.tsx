
import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({ src, alt, className, fallbackClassName, ...props }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`relative flex flex-col items-center justify-center bg-gray-100 text-gray-400 overflow-hidden border border-gray-200 ${className} ${fallbackClassName}`}>
        <ImageOff size={40} className="mb-2 opacity-20" />
        <span className="text-[10px] uppercase font-bold tracking-widest px-4 text-center opacity-50">
          {alt || 'Decorart Divisórias'}
        </span>
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
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
