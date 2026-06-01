import React from 'react';
import { Star, Quote, ShieldAlert, BadgeCheck } from 'lucide-react';
import { Review } from '../types';

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Roberto Silveira',
      location: 'Bairro Jardim, Santo André',
      comment: 'Contratei a instalação para minha área de churrasqueira e ficou além do esperado. O policarbonato compacto realmente parece vidro e a facilidade de abrir e fechar no controle remoto é ótima. Recomendo muito pela pontualidade dos técnicos daqui de Santo André.',
      rating: 5,
      date: 'Maio de 2026'
    },
    {
      id: 2,
      name: 'Mariana Sales',
      location: 'Bairro Santa Paula, São Caetano do Sul',
      comment: 'Minha varanda gourmet ficava inutilizada quando chovia no ABC. Com a cobertura retrátil, agora fazemos encontros familiares em qualquer dia. O atendimento pelo WhatsApp foi muito rápido e a negociação muito honesta.',
      rating: 5,
      date: 'Março de 2026'
    },
    {
      id: 3,
      name: 'Juliano G. Mendes',
      location: 'Rudge Ramos, São Bernardo do Campo',
      comment: 'Fiz a garagem em policarbonato compacto fumê com estrutura preta. O carro fica totalmente protegido do calor extremo e das chuvas de granizo. No dia seguinte da vistoria já recebi o projeto. Nota 10 na montagem e limpeza.',
      rating: 5,
      date: 'Janeiro de 2026'
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-stone-900 text-white relative">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-stone-800" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-stone-300 bg-stone-850 border border-stone-800 text-xs font-semibold py-1.5 px-4 rounded-full uppercase tracking-wider inline-block mb-3">
            Histórias de Sucesso Local
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-white tracking-tight">
            Quem Compra na Toldos Fortaleza Aprova
          </h2>
          <p className="text-stone-400 mt-4 text-sm md:text-base font-sans leading-relaxed">
            Garantimos acabamento impecável, perfis selados com PU40 contra goteiras. Veja o relato de quem já transformou seu lar no ABC Paulista conosco.
          </p>
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="reviews-grid animate-fade-in">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="p-8 rounded-3xl bg-stone-850/85 border border-stone-800/80 hover:border-stone-700/80 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Score & Quote icon */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-stone-300 text-stone-300 shrink-0" />
                    ))}
                  </div>
                  <Quote size={24} className="text-stone-700" />
                </div>

                <p className="text-stone-300 text-xs md:text-sm leading-relaxed text-wrap italic font-sans font-light">
                  "{rev.comment}"
                </p>
              </div>

              {/* Informant Details */}
              <div className="mt-6 pt-5 border-t border-stone-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 font-serif font-bold uppercase text-xs">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm flex items-center gap-1 font-serif">
                    {rev.name}
                    <BadgeCheck size={14} className="text-stone-400 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-stone-400 font-sans">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Partners / Manufacturers logos bar */}
        <div className="mt-16 pt-12 border-t border-stone-800 text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold font-sans">Instalamos Apenas Materiais Certificados</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all text-[11px] text-stone-400 font-semibold font-mono">
            <span>• ALUMÍNIO EXTRUDADO ISO 9001</span>
            <span>• CHAPAS DE POLICARBONATO ACTOS®</span>
            <span>• SELANTES PU40 MASTIQUE®</span>
          </div>
        </div>

      </div>
    </section>
  );
}
