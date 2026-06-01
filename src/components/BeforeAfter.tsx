import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Eye, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
// @ts-expect-error - dynamic generated image from runtime upload
import beforeImage from '../assets/images/regenerated_image_1780340306237.jpg';
// @ts-expect-error - dynamic generated image from runtime upload
import afterImage from '../assets/images/after_image.jpg';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSliding, setIsSliding] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isSliding) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="antes-depois" className="py-20 bg-[#FAF9F6] text-stone-850 overflow-hidden border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-3">
            <Layers size={12} className="text-stone-600" /> Transformação Real no ABC
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-stone-900 tracking-tight mb-4">
            Transforme seu Quintal ou Varanda
          </h2>
          <p className="text-stone-600 text-base md:text-lg">
            Veja como uma cobertura retrátil de policarbonato agrega sofisticação, protege o espaço do mau tempo e cria um novo ambiente funcional na sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Draggable Slider - Left (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={() => setIsSliding(true)}
              onMouseUp={() => setIsSliding(false)}
              onMouseLeave={() => setIsSliding(false)}
              className="relative w-full aspect-[16/10] bg-stone-100 rounded-3xl overflow-hidden shadow-md border border-stone-200 cursor-ew-resize select-none pointer-events-auto"
              id="before-after-slider-container"
            >
              {/* After Product (Full width in background) */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={afterImage} 
                  alt="Depois: Varanda com cobertura de policarbonato"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 border border-stone-200 text-stone-900 font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5 z-10">
                  <Sparkles size={12} className="text-stone-700" /> DEPOIS (Protegido e Sofisticado)
                </div>
              </div>

              {/* Before Product (Clipped absolute layer on top) */}
              <div 
                className="absolute inset-y-0 left-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={beforeImage} 
                  alt="Antes: Área aberta desprotegida"
                  className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-stone-900/90 text-white font-bold text-xs px-4 py-1.5 rounded-lg shadow-sm uppercase tracking-wider backdrop-blur-xs z-10 whitespace-nowrap">
                  ANTES (Churrasqueira Descoberta)
                </div>
              </div>

              {/* Splitting Handlebar Divider Line */}
              <div 
                className="absolute inset-y-0 w-[2px] bg-white cursor-ew-resize flex items-center justify-center pointer-events-none z-20 shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-stone-900 border border-stone-200 flex items-center justify-center shadow-md shrink-0 pointer-events-auto">
                  <span className="text-sm font-bold">↔</span>
                </div>
              </div>
            </div>

            {/* Quick Helper Info */}
            <div className="w-full flex justify-between items-center text-xs text-stone-500 mt-4 px-2">
              <span className="flex items-center gap-1.5 select-none">
                <Eye size={14} className="text-stone-400" />
                Arraste o botão branco acima para comparar
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setSliderPosition(100)} 
                  className="px-3 py-1 bg-stone-250 hover:bg-stone-300 text-stone-850 rounded-lg text-[11px] font-bold transition-colors cursor-pointer"
                  id="btn-show-before"
                >
                  Ver Antes
                </button>
                <button 
                  onClick={() => setSliderPosition(0)} 
                  className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-[11px] font-bold transition-colors cursor-pointer"
                  id="btn-show-after"
                >
                  Ver Depois
                </button>
                <button 
                  onClick={() => setSliderPosition(50)} 
                  className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-lg text-[11px] transition-colors cursor-pointer"
                  id="btn-reset-slider"
                >
                  Meio a Meio
                </button>
              </div>
            </div>

          </div>

          {/* Benefits/Selling Copy - Right (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-normal text-stone-900 tracking-tight">
              A Solução Definitiva para Áreas Externas no ABC
            </h3>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base font-sans">
              A Cobertura Retrátil resolve o clássico problema dos quintais em Santo André: o clima instável. Com o abrir e fechar prático, você não perde o ensolarado do dia e fica 100% protegido contra pancadas de chuvas repentinas no seu churrasco ou garagem.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-stone-800 bg-stone-100 p-1 rounded-full border border-stone-200/40">
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm md:text-base">Aproveitamento Inteligente de Luz</h4>
                  <p className="text-stone-500 text-xs md:text-sm">O policarbonato compacto possui transparência semelhante ao vidro, iluminando naturalmente os cômodos internos adjacentes.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-stone-800 bg-stone-100 p-1 rounded-full border border-stone-200/40">
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm md:text-base">Proteção Térmica & Filtro UV</h4>
                  <p className="text-stone-500 text-xs md:text-sm">Tratamento de coextrusão contra os raios UV, reduzindo o calor acumulado na sua varanda ou área gourmet.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-stone-800 bg-stone-100 p-1 rounded-full border border-stone-200/40">
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm md:text-base">Valorização Imobiliária Imediata</h4>
                  <p className="text-stone-500 text-xs md:text-sm">A estrutura em alumínio com pintura eletrostática sablé de alta durabilidade embeleza a fachada da residência no ABC Paulista.</p>
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <a 
                href="#simulador" 
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold py-3.5 px-7 rounded-full text-xs md:text-sm transition-all shadow-sm cursor-pointer"
                id="ba-to-sim-cta"
              >
                Simule Conforme Seu Espaço
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
