
import React from 'react';
import { Link } from 'react-router-dom';
import { BAIRROS, CIDADES } from '../constants';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { MapPin } from 'lucide-react';

export const LocationsList: React.FC<{ title: string; items: string[]; type: 'bairros' | 'cidades' }> = ({ title, items, type }) => {
  return (
    <div className="py-20 bg-white">
      <EnhancedSEO 
        title={`${title} Atendidos pela Decorart Divisórias`}
        description={`Confira a lista completa de ${type} em Curitiba e RMC onde realizamos serviços de divisórias e drywall.`}
        canonical={`/${type}`}
      />
      
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-black text-blue-950 mb-4 text-center">{title}</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Levamos a excelência da Decorart para todo o Paraná. Selecione sua região para mais informações.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item, idx) => (
            <Link 
              key={idx} 
              to={`/local/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all group"
            >
              <MapPin size={18} className="text-blue-500 mr-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-700 group-hover:text-blue-700">{item}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
