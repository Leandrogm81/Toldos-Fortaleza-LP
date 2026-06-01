import React, { useState } from 'react';
import { BadgeHelp, ShieldCheck, CheckSquare, Sparkles, Scale } from 'lucide-react';
import { PolycarbonateType, PolycarbonateSpec } from '../types';

export default function PolycarbonateSpecs() {
  const [activeTab, setActiveTab] = useState<PolycarbonateType>('compacto');

  const specs: PolycarbonateSpec[] = [
    {
      id: 'compacto',
      title: 'Policarbonato Compacto',
      description: 'Chapa maciça transparente com o exato acabamento visual do vidro plano de luxo, mas com metade do seu peso e flexibilidade incomparável.',
      features: [
        'Aparência cristalina idêntica ao vidro temperado',
        'Resistência a impactos até 250 vezes superior ao vidro plano comum',
        'Possibilidade de curvatura a frio no próprio local da obra',
        'Tratamento anti-UV em uma das faces para bloquear radiação solar',
        'Flexibilidade extrema (não se estilhaça em pedaços pontiagudos)',
        'Ideal para: Corredores nobres, varandas gourmet, garagens de alto padrão'
      ],
      visualProperty: 'Transparência de Cristal (92% de transmissão luminosa)',
      transparencyRating: 95,
      resistanceRating: 100,
      thermalRating: 60,
      priceFactor: 1.6
    },
    {
      id: 'alveolar',
      title: 'Policarbonato Alveolar',
      description: 'Chapa alveolar (com ranhuras paralelas internas que se assemelham a favos). Excelente custo-benefício e alto isolamento térmico.',
      features: [
        'Translucidez acetinada que preenche o ambiente de luz suave difusa',
        'Câmaras de ar internas (alvéolos) que funcionam como isolante de calor',
        'Peso extremamente leve (facilita estruturas de sustentação esbeltas)',
        'Custo mais econômico comparado ao policarbonato compacto',
        'Garante excelente privacidade sem perder a iluminação natural',
        'Ideal para: Coberturas de lavanderia, piscinas, corredores laterais, condomínios'
      ],
      visualProperty: 'Translúcido Canelado (Privacidade visual com boa claridade)',
      transparencyRating: 50,
      resistanceRating: 75,
      thermalRating: 90,
      priceFactor: 1.0
    }
  ];

  const currentSpec = specs.find(s => s.id === activeTab)!;

  return (
    <section id="especificacoes" className="py-20 bg-[#FAF9F6] text-stone-850 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
          <div>
            <span className="text-stone-700 bg-stone-100 border border-stone-200 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-3 text-xs font-semibold">
              <Scale size={12} className="text-stone-600" /> Guia de Compra no ABC
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-stone-900 tracking-tight">
              Compacto ou Alveolar?
            </h2>
            <p className="text-stone-600 mt-2 text-wrap leading-relaxed max-w-xl text-sm md:text-base font-sans">
              A escolha correta das chapas dita o visual, o orçamento e a temperatura final da sua área coberta. Entenda a diferença entres os dois tipos líderes de mercado:
            </p>
          </div>

          <div className="flex gap-2 justify-start lg:justify-end">
            <button
              onClick={() => setActiveTab('compacto')}
              className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'compacto'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white hover:bg-stone-50 text-stone-650 shadow-xs border border-stone-200'
              }`}
            >
              Conhecer Compacto (Vidro)
            </button>
            <button
              onClick={() => setActiveTab('alveolar')}
              className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'alveolar'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white hover:bg-stone-50 text-stone-650 shadow-xs border border-stone-200'
              }`}
            >
              Conhecer Alveolar (Canelado)
            </button>
          </div>
        </div>

        {/* Tab Detail Board */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Comparison Details List - Left (7 cols) */}
          <div className="p-6 md:p-10 lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                {activeTab === 'compacto' ? '💎' : '🪜'}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-stone-900">{currentSpec.title}</h3>
                <p className="text-xs text-stone-650 italic font-medium mb-1">Escolha recomendada para {activeTab === 'compacto' ? 'Estética Luxo e Visibilidade' : 'Alta Eficiência Térmica e Economia'}</p>
              </div>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed text-wrap font-sans">
              {currentSpec.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">Principais Atributos:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentSpec.features.slice(0, 4).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-stone-700">
                    <span className="mt-0.5 text-stone-800 font-semibold shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-[#FAF9F6] border border-stone-200/60 rounded-2xl">
                <p className="text-xs font-bold text-stone-900">💡 Aplicação Perfeita :</p>
                <p className="text-xs text-stone-600 mt-1 font-normal leading-relaxed">
                  {currentSpec.features[currentSpec.features.length - 1]}
                </p>
              </div>
            </div>
          </div>

          {/* Metric Meters - Right (5 cols) */}
          <div className="p-6 md:p-10 lg:col-span-5 bg-[#FAF9F6]/40 border-t lg:border-t-0 lg:border-l border-stone-200 space-y-6 flex flex-col justify-center">
            
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">Gráfico de Performance</h4>

            {/* Metric 1 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-stone-700">Transparência & Visibilidade</span>
                <span className="font-mono font-semibold text-stone-900">{currentSpec.transparencyRating}%</span>
              </div>
              <div className="w-full bg-stone-200/65 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-stone-900 h-full rounded-full transition-all duration-550" 
                  style={{ width: `${currentSpec.transparencyRating}%` }}
                />
              </div>
              <p className="text-[10px] text-stone-500 font-medium leading-none">{currentSpec.visualProperty}</p>
            </div>

            {/* Metric 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-stone-700">Resistência Física a Impactos</span>
                <span className="font-mono font-semibold text-stone-900">{currentSpec.resistanceRating}%</span>
              </div>
              <div className="w-full bg-stone-200/65 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-stone-700 h-full rounded-full transition-all duration-550" 
                  style={{ width: `${currentSpec.resistanceRating}%` }}
                />
              </div>
              <p className="text-[10px] text-stone-500 font-medium leading-none">Chapa praticamente inquebrável contra pedras e detritos</p>
            </div>

            {/* Metric 3 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-stone-700">Isolamento Térmico (Redução de Calor)</span>
                <span className="font-mono font-semibold text-stone-900">{currentSpec.thermalRating}%</span>
              </div>
              <div className="w-full bg-stone-200/65 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-stone-550 h-full rounded-full transition-all duration-550" 
                  style={{ width: `${currentSpec.thermalRating}%` }}
                />
              </div>
              <p className="text-[10px] text-stone-500 font-medium leading-none">
                {activeTab === 'alveolar' 
                  ? 'Os alvéolos internos dissipam calor gerando conforto térmico excelente.' 
                  : 'Mantém certa claridade solar; requer cores adequadas (bronze / fumê) para diminuir forte calor.'}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200/80">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-500">Indicador Médio de Custo:</span>
                <span className="font-semibold text-stone-900 flex items-center gap-1 font-mono">
                  {activeTab === 'compacto' ? '$$$ (Premium)' : '$$ (Econômico)'}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
