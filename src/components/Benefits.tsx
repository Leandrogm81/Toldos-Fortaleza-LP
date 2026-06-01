import React from 'react';
import { ShieldAlert, Sun, Snowflake, Eye, Hammer, Coins } from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      icon: <Sun size={24} className="text-stone-850" />,
      title: "Controle de Iluminação e Ventilação",
      description: "Esquentou no verão? Abra o teto por completo para dissipar o ar quente. Começou uma chuva repentina? Feche em segundos para continuar aproveitando seu churrasco ou área de lazer."
    },
    {
      icon: <ShieldAlert size={24} className="text-stone-850" />,
      title: "Proteção UV de Alta Performance",
      description: "As chapas de policarbonato recebem um tratamento de coextrusão contra radiação ultravioleta. Isso previne o amarelamento natural, bloqueia raios prejudiciais e protege seus móveis."
    },
    {
      icon: <Hammer size={24} className="text-stone-850" />,
      title: "Estrutura Ultrarresistente contra Intempéries",
      description: "Nossos perfis são feitos puramente de ligas de alumínio estruturais e parafusos de inox de alta resistência, suportando ventos de forte intensidade e pancadas de granizo sem sofrer corrosão."
    },
    {
      icon: <Eye size={24} className="text-stone-850" />,
      title: "Sofisticação Arquitetônica",
      description: "Diga adeus às telhas escuras ou toldos de lona pesados. O policarbonato tem o design limpo do vidro plano, mantendo o ambiente integrado visualmente, chique e valorizado."
    },
    {
      icon: <Snowflake size={24} className="text-stone-850" />,
      title: "Conforto Térmico Acústico",
      description: "Menor ruído que telhas metálicas durante tempestades e barulho de chuva. Cores especiais como a Fumê e a Bronze diminuem drasticamente a intensidade do calor."
    },
    {
      icon: <Coins size={24} className="text-stone-850" />,
      title: "Custo-Benefício Inteligente",
      description: "Visual idêntico ao vidro temperado por um peso extremamente reduzido, barateando as estruturas necessárias de apoio e evitando quebras perigosas de estilhaçamento."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-white text-stone-850 border-y border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-stone-700 bg-stone-100 border border-stone-200/80 text-xs font-semibold py-1.5 px-4 rounded-full uppercase tracking-wider inline-block mb-3">
            Diferenciais de Engenharia
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-stone-900 tracking-tight">
            Por que optar por uma Cobertura de Policarbonato Retrátil?
          </h2>
          <p className="text-stone-600 mt-4 text-base md:text-lg">
            Combinamos materiais certificados com engenharia sob medida para conferir flexibilidade e valorização estética para sua residência ou loja no grande ABC.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="benefits-grid">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-[#FAF9F6] border border-stone-200/60 transition-all hover:translate-y-[-4px] hover:shadow-md hover:bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-stone-200 flex items-center justify-center mb-5 shrink-0">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold text-stone-900 mb-2 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
