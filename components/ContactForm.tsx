
import React, { useState } from 'react';
import { FormularioContato } from '../types';
import { BUSINESS_INFO } from '../constants';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<FormularioContato>>({
    servico: 'divisorias'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, telefone, email, bairro, servico, mensagem } = formData;
    
    const text = `Olhá, achei seu site no *Google e gostaria de:*

*Nome:* ${nome}
*Telefone:* ${telefone}
*Email:* ${email}
*Bairro:* ${bairro}
*Serviço:* ${servico}
*Mensagem:* ${mensagem}
    `.trim();
    
    const url = `https://wa.me/5541999267150?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
          <input 
            required 
            type="text" 
            name="nome" 
            onChange={handleChange}
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" 
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp</label>
          <input 
            required 
            type="tel" 
            name="telefone" 
            onChange={handleChange}
            placeholder="(41) 99999-9999"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
          <input 
            required 
            type="email" 
            name="email" 
            onChange={handleChange}
            placeholder="seu@email.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" 
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Bairro/Cidade</label>
          <input 
            required 
            type="text" 
            name="bairro" 
            onChange={handleChange}
            placeholder="Onde será o serviço?"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Serviço de Interesse</label>
        <select 
          name="servico" 
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="divisorias">Divisórias em Eucatex</option>
          <option value="drywall">Drywall Profissional</option>
          <option value="forro-pvc">Forro Modular PVC</option>
          <option value="sanca-gesso">Sanca de Gesso</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem (Opcional)</label>
        <textarea 
          name="mensagem" 
          rows={4} 
          onChange={handleChange}
          placeholder="Conte um pouco sobre seu projeto..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-gold hover:bg-yellow-800 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-md flex items-center justify-center"
      >
        Enviar Solicitação via WhatsApp
      </button>
    </form>
  );
};
