import React from 'react';
import { Shapes, Layers3, LampCeiling } from 'lucide-react';

const steps = [
  { time: 'Séculos XVII e XVIII', icon: Shapes, title: 'Desenhar com o relevo', text: 'Na Grã-Bretanha, tetos decorados usavam relevos para marcar geometrias, enquadrar pinturas ou valorizar o centro do ambiente. Os materiais variavam entre tradições e oficinas.' },
  { time: 'Século XIX', icon: Layers3, title: 'Repetir desenhos com moldes', text: 'Na Grã-Bretanha, uma técnica de gesso fibroso patenteada em 1856 permitiu produzir ornamentos em moldes, reforçados com tecido de juta, e fixar as peças no interior dos edifícios.' },
  { time: 'Fim do século XX em diante', icon: LampCeiling, title: 'Desenhar com a luz', text: 'O LED azul eficiente abriu caminho para a luz branca por LED. Em projetos atuais, perfis compactos facilitam esconder a fonte de luz, mas a sanca e a iluminação indireta já existiam antes do LED.' },
];

export function SancaTimeline() {
  return <section aria-labelledby="sanca-timeline" className="rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-8">
    <style>{`.sanca-sticker{animation:sanca-entry 550ms ease-out both}.sanca-sticker:nth-child(2){animation-delay:90ms}.sanca-sticker:nth-child(3){animation-delay:180ms}@keyframes sanca-entry{from{transform:translateY(7px)}to{transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.sanca-sticker{animation:none}}`}</style>
    <h2 id="sanca-timeline" className="mb-5 text-2xl font-black text-blue-950">Três momentos na história do teto</h2>
    <ol className="space-y-4">
      {steps.map(({time,icon:Icon,title,text})=><li key={time} className="sanca-sticker flex items-start gap-4 rounded-2xl bg-white p-4 border border-slate-200">
        <span aria-hidden="true" className="flex-none rounded-xl bg-amber-100 p-3 text-amber-900"><Icon size={22} /></span>
        <div><p className="text-sm font-bold text-amber-900">{time}</p><h3 className="text-lg font-bold text-blue-950">{title}</h3><p className="text-slate-700">{text}</p></div>
      </li>)}
    </ol>
    <figure className="mt-7">
      <img src="/assets/img/blog/historia-gesso-sanca-moderna.webp" width={1200} height={675} loading="lazy" decoding="async" alt="Sala contemporânea com sanca lisa e iluminação indireta refletida no teto" className="aspect-video w-full rounded-xl object-cover" />
      <figcaption className="mt-2 text-sm text-slate-700">Ilustração gerada por IA: na sanca moderna, a fita fica fora do campo de visão e o teto reflete a luz.</figcaption>
    </figure>
  </section>;
}
