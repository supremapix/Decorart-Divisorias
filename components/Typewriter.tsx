
import React, { useState, useEffect } from 'react';

const words = [
  "Divisórias Profissionais para Seu Espaço",
  "Transforme Ambientes com Qualidade",
  "Soluções em Drywall e Divisórias",
  "Instalação Rápida e Garantida",
  "Preço Justo, Colocação Imediata!"
];

export const Typewriter: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight min-h-[160px] md:min-h-[200px] uppercase tracking-tighter">
      {`${words[index].substring(0, subIndex)}`}
      <span className="inline-block w-2 md:w-4 h-10 md:h-16 bg-gold ml-2 align-middle animate-pulse"></span>
    </h1>
  );
};
