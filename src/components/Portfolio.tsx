import React, { useState } from 'react';
import { Camera, CheckCircle, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gourmet' | 'garagem' | 'piscina' | 'corredor'>('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Terraço Gourmet em Santo André',
      category: 'gourmet',
      imageUrl: '/images/terraco-gourmet.jpg',
      description: 'Cobertura retrátil de policarbonato alveolar branco leitoso com estrutura de alumínio na cor branca integrado ao espaço da churrasqueira.'
    },
    {
      id: 2,
      title: 'Garagem Residencial São Bernardo',
      category: 'garagem',
      imageUrl: '/images/garagem-azul.jpg',
      description: 'Estrutura robusta de alumínio com pintura preta e policarbonato compacto azul, garantindo alta proteção solar para 2 veículos.'
    },
    {
      id: 3,
      title: 'Cobertura de Piscina Diadema',
      category: 'piscina',
      imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=700&q=80',
      description: 'Sistema automatizado com motor tubular silencioso. O teto em policarbonato compacto cristal abre em 3 seções, liberando sol pleno.'
    },
    {
      id: 4,
      title: 'Corredor Lateral São Caetano',
      category: 'corredor',
      imageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=700&q=80',
      description: 'Policarbonato alveolar branco leitoso de 10mm em montantes de alumínio branco. Permite a passagem de luz agradável isolando vizinhos.'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const filterButtons = [
    { label: 'Todos os Projetos', value: 'all' },
    { label: 'Área Gourmet', value: 'gourmet' },
    { label: 'Garagens', value: 'garagem' },
    { label: 'Áreas de Lazer e Piscina', value: 'piscina' },
    { label: 'Corredores Integrados', value: 'corredor' }
  ] as const;

  const whatsappPhone = '551120360010';
  const getCustomMessage = (title: string) => {
    return `Olá! Vi o projeto "${title}" na galeria da Toldos Fortaleza e gostaria de planejar um sistema retrátil similar para minha residência.`;
  };

  return (
    <section id="portfolio" className="py-24 bg-[#FAF9F6] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-3">
            <Camera size={12} className="text-stone-500" /> Nosso Portfólio ABC
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-stone-900 tracking-tight">
            Projetos Executados
          </h2>
          <p className="text-stone-600 mt-4 text-sm md:text-base leading-relaxed font-sans">
            Navegue pelos nossos projetos recentes de coberturas em casas e condomínios no Grande ABC. Excelência estrutural, parafusos invisíveis e vedação garantida contra vazamentos.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="portfolio-filters font-sans">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveFilter(btn.value)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === btn.value
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white hover:bg-stone-50 text-stone-650 border border-stone-200'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grids */}
        <div 
          className={`grid gap-8 transition-all duration-500 ${
            filteredItems.length === 1 
              ? 'grid-cols-1 max-w-4xl mx-auto' 
              : 'grid-cols-1 md:grid-cols-2'
          }`} 
          id="portfolio-grid"
        >
          {filteredItems.map((item) => {
            const encodedWAmg = encodeURIComponent(getCustomMessage(item.title));
            const waUrl = `https://wa.me/${whatsappPhone}?text=${encodedWAmg}`;
            
            return (
              <div 
                key={item.id} 
                className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200 hover:shadow-md transition-all flex flex-col h-full"
              >
                {/* Visual Image container */}
                <div className="relative overflow-hidden aspect-[4/3] bg-stone-100 shrink-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/90 backdrop-blur-xs text-white font-serif text-[10px] font-normal py-1 px-3 rounded-full uppercase tracking-wider">
                    {item.category === 'gourmet' ? 'Gourmet' : item.category === 'garagem' ? 'Garagem' : item.category === 'piscina' ? 'Piscina/Lazer' : 'Corredor'}
                  </div>
                </div>

                {/* Details text */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-serif font-semibold text-stone-900 group-hover:text-stone-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-xs md:text-sm leading-relaxed text-wrap font-normal font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[10px] text-stone-500 font-semibold flex items-center gap-1.5 uppercase tracking-wide">
                      <CheckCircle size={12} className="text-stone-700" /> Mão de Obra Própria
                    </span>
                    <a 
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-850 hover:text-stone-700 text-xs font-semibold flex items-center gap-1 cursor-pointer pointer-events-auto"
                    >
                      Pedir Parecido <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
