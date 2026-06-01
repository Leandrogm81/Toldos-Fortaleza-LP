import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Info, HelpCircle, Phone, ArrowRight, TableProperties, Sparkles, Sliders, Layers3 } from 'lucide-react';
import { SimulatorState, PolycarbonateType, DriveType, FrameColor } from '../types';

export default function Simulator() {
  const [state, setState] = useState<SimulatorState>({
    width: 4.5,
    length: 3.0,
    polyType: 'compacto',
    driveType: 'manual',
    frameColor: 'preto',
    sheetColor: 'transparente',
  });

  const [isOpened, setIsOpened] = useState(false);

  const area = state.width * state.length;
  const hasOutline = state.frameColor === 'branco';

  // Generating WhatsApp text
  const getWhatsAppLink = () => {
    const polyTypeName = state.polyType === 'compacto' ? 'Compacto (Visual Vidro)' : 'Alveolar (Canelado)';
    const colorName = {
      transparente: 'Cristal Transparente',
      fume: 'Fumê Escuro',
      bronze: 'Bronze Sofisticado',
      leitoso: 'Branco Opalina/Leitoso'
    }[state.sheetColor];

    const frameColorName = {
      preto: 'Preto Fosco Nobre',
      bronze: 'Bronze Anodizado',
      branco: 'Branco Neve'
    }[state.frameColor];

    const message = `Olá, gostaria de agendar uma vistoria técnica gratuita para orçamento da minha cobertura:
📐 Dimensões: ${state.width.toFixed(1)}m de Largura x ${state.length.toFixed(1)}m de Avanço
💎 Policarbonato: ${polyTypeName}
🏗️ Estrutura: Alumínio ${frameColorName}
🎨 Cor das Placas: ${colorName}
⚙️ Acionamento: Retrátil Manual
📏 Área Total: ${area.toFixed(1)} m²

Por favor, entrem em contato para agendar uma vistoria técnica gratuita em minha residência para realizar o cálculo do orçamento pessoalmente.`;

    return `https://wa.me/551120360010?text=${encodeURIComponent(message)}`;
  };

  // Color mappings
  const frameHexColors = {
    preto: '#1a1a1a',
    bronze: '#5e4e3e',
    branco: '#fcfcfc',
  };

  const sheetHslColors = {
    transparente: { bg: 'rgba(186, 230, 253, 0.25)', border: 'rgba(14, 165, 233, 0.5)' },
    fume: { bg: 'rgba(55, 65, 81, 0.75)', border: 'rgba(17, 24, 39, 0.9)' },
    bronze: { bg: 'rgba(140, 90, 50, 0.45)', border: 'rgba(100, 60, 30, 0.8)' },
    leitoso: { bg: 'rgba(255, 255, 255, 0.85)', border: 'rgba(226, 232, 240, 1)' },
  };

  return (
    <section id="simulador" className="py-20 bg-white text-stone-800 relative overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-4 py-1.5 rounded-full text-stone-700 text-xs font-semibold tracking-wider uppercase mb-4 transition-colors">
            <Sparkles size={12} className="text-stone-500" /> Simulador de Projetos ABC
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-stone-900 tracking-tight mb-4">
            Monte Sua Cobertura Personalizada
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            Personalize as medidas do seu espaço, escolha as cores e o tipo de policarbonato ideal. Envie suas configurações para agendarmos uma vistoria técnica presencial gratuita de orçamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls - Left */}
          <div className="lg:col-span-7 bg-[#FAF9F6] rounded-3xl border border-stone-200 p-6 md:p-8 space-y-6" id="sim-controls">
            
            {/* Dimensions Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-stone-800">
                <span className="flex items-center gap-2 font-semibold font-serif text-base text-stone-900">
                  <Sliders size={18} className="text-stone-700" />
                  1. Defina as Medidas (Área)
                </span>
                <span className="text-xs text-stone-800 font-mono font-bold bg-stone-200/70 border border-stone-300 px-3 py-1 rounded-lg">
                  {area.toFixed(1)} m² total
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Width */}
                <div className="bg-white p-4 rounded-2xl border border-stone-200">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-stone-500 font-medium">Largura (Fixa na Parede)</span>
                    <span className="text-stone-950 font-bold">{state.width.toFixed(1)} metros</span>
                  </div>
                  <input
                    type="range"
                    min="1.5"
                    max="10"
                    step="0.1"
                    value={state.width}
                    onChange={(e) => setState({ ...state, width: parseFloat(e.target.value) })}
                    className="w-full accent-stone-900 bg-stone-200 h-2 rounded-lg appearance-none cursor-pointer"
                    id="width-input"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>1.5m</span>
                    <span>Recomendado residencial</span>
                    <span>10.0m</span>
                  </div>
                </div>

                {/* Length/Avanço */}
                <div className="bg-white p-4 rounded-2xl border border-stone-200">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-stone-500 font-medium">Avanço (Projeção do Caimento)</span>
                    <span className="text-stone-950 font-bold">{state.length.toFixed(1)} metros</span>
                  </div>
                  <input
                    type="range"
                    min="1.5"
                    max="8"
                    step="0.1"
                    value={state.length}
                    onChange={(e) => setState({ ...state, length: parseFloat(e.target.value) })}
                    className="w-full accent-stone-900 bg-stone-200 h-2 rounded-lg appearance-none cursor-pointer"
                    id="length-input"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>1.5m</span>
                    <span>Mínimo ideal</span>
                    <span>8.0m</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Polycarbonate Type */}
            <div className="space-y-3 pt-2">
              <label className="text-sm font-semibold font-serif text-stone-900 flex items-center gap-2">
                <Layers3 size={16} className="text-stone-700" />
                2. Escolha o Tipo de Policarbonato
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setState({ ...state, polyType: 'compacto' })}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    state.polyType === 'compacto'
                      ? 'bg-white border-stone-800 ring-2 ring-stone-900 text-stone-950 shadow-sm'
                      : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300'
                  }`}
                  id="poly-compacto"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm">Policarbonato Compacto</span>
                    <span className="text-[10px] bg-stone-900 text-white font-bold px-2 py-0.5 rounded">Mais Premium</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed text-wrap">
                    Visual idêntico ao vidro temperado. Extrema transparência cristalina, 250 vezes mais resistente que o vidro e mais leve.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setState({ ...state, polyType: 'alveolar' })}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    state.polyType === 'alveolar'
                      ? 'bg-white border-stone-800 ring-2 ring-stone-900 text-stone-950 shadow-sm'
                      : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300'
                  }`}
                  id="poly-alveolar"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm">Policarbonato Alveolar</span>
                    <span className="text-[10px] bg-stone-200 text-stone-700 font-bold px-2 py-0.5 rounded">Custo-Benefício</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed text-wrap">
                    Contém cavidades térmicas internas (alvéolos). Reduz calor, possui visual canelado ranhurado e preço mais acessível.
                  </p>
                </button>
              </div>
            </div>

            {/* Colors (Sheets & Frame) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Sheet Colors */}
              <div className="space-y-3">
                <label className="text-sm font-semibold font-serif text-stone-900">
                  3. Cor da Cobertura (Placas)
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['transparente', 'fume', 'bronze', 'leitoso'] as const).map((color) => {
                    const names = {
                      transparente: 'Cristal',
                      fume: 'Fumê',
                      bronze: 'Bronze',
                      leitoso: 'Leitoso',
                    };
                    return (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setState({ ...state, sheetColor: color })}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          state.sheetColor === color
                            ? 'bg-stone-900 text-white border-stone-900 font-bold shadow-sm'
                            : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                        }`}
                        id={`sheet-color-${color}`}
                      >
                        {names[color]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Frame Colors */}
              <div className="space-y-3">
                <label className="text-sm font-semibold font-serif text-stone-900">
                  4. Cor da Estrutura (Alumínio)
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['preto', 'bronze', 'branco'] as const).map((color) => {
                    const names = {
                      preto: 'Preto',
                      bronze: 'Bronze',
                      branco: 'Branco',
                    };
                    return (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setState({ ...state, frameColor: color })}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          state.frameColor === color
                            ? 'bg-stone-900 text-white border-stone-900 font-bold shadow-sm'
                            : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                        }`}
                        id={`frame-color-${color}`}
                      >
                        {names[color]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Rendering Model & In-Person Budget - Right */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Visualizer Frame */}
            <div className="bg-[#FAF9F6] rounded-3xl border border-stone-200 p-6 shadow-sm flex flex-col items-center justify-center relative" id="vis-frame">
              
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-mono tracking-wider text-stone-500 uppercase bg-white py-1 px-2.5 rounded-full border border-stone-200 shadow-xs">
                  Visualização Digital
                </span>
              </div>
              
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setIsOpened(!isOpened)}
                  className="bg-stone-900 hover:bg-stone-800 text-white text-[11px] font-semibold py-1.5 px-3.5 rounded-full shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  id="toggle-open-btn"
                >
                  {isOpened ? 'Fechar Cobertura' : 'Abrir Cobertura'}
                </button>
              </div>

              {/* The Interactive SVG Diagram */}
              <div className="w-full max-w-[320px] h-[240px] flex items-center justify-center mt-6">
                <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                  {/* Perspective wall baseline anchor */}
                  <line x1="50" y1="220" x2="350" y2="220" stroke="#d6d3d1" strokeWidth="2" strokeDasharray="3 3" />
                  
                  {/* Back Wall Mounting Beam (Fixing area) */}
                  <rect x="50" y="80" width="300" height="15" fill={frameHexColors[state.frameColor]} rx="2" stroke={hasOutline ? "#1c1917" : "#78716c"} strokeWidth={hasOutline ? "2" : "1"} />
                  <text x="200" y="72" textAnchor="middle" fill="#78716c" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                    Muro de Fixação ({state.width.toFixed(1)}m)
                  </text>

                  {/* Dynamic Retractable Sheets */}
                  {/* 3 panels representing sections */}
                  {/* Sliding is controlled via motion style or conditional coords */}
                  <g>
                    {/* Fixed Front Track Guard - Optional black background for outline */}
                    {hasOutline && (
                      <>
                        <line x1="50" y1="88" x2="100" y2="200" stroke="#1c1917" strokeWidth="8" strokeLinecap="round" />
                        <line x1="350" y1="88" x2="300" y2="200" stroke="#1c1917" strokeWidth="8" strokeLinecap="round" />
                        <line x1="100" y1="200" x2="300" y2="200" stroke="#1c1917" strokeWidth="12" strokeLinecap="round" />
                      </>
                    )}
                    <line x1="50" y1="88" x2="100" y2="200" stroke={frameHexColors[state.frameColor]} strokeWidth="6" strokeLinecap="round" />
                    <line x1="350" y1="88" x2="300" y2="200" stroke={frameHexColors[state.frameColor]} strokeWidth="6" strokeLinecap="round" />
                    <line x1="100" y1="200" x2="300" y2="200" stroke={frameHexColors[state.frameColor]} strokeWidth="10" strokeLinecap="round" />
                    
                    {/* Intermediate supporting rafters */}
                    {hasOutline && (
                      <>
                        <line x1="150" y1="88" x2="167" y2="200" stroke="#1c1917" strokeWidth="4" opacity="0.6" />
                        <line x1="250" y1="88" x2="233" y2="200" stroke="#1c1917" strokeWidth="4" opacity="0.6" />
                      </>
                    )}
                    <line x1="150" y1="88" x2="167" y2="200" stroke={frameHexColors[state.frameColor]} strokeWidth="2" opacity="0.6" />
                    <line x1="250" y1="88" x2="233" y2="200" stroke={frameHexColors[state.frameColor]} strokeWidth="2" opacity="0.6" />

                    {/* Left & Right front posts (Pillars support if custom request) */}
                    {hasOutline && (
                      <>
                        <line x1="100" y1="200" x2="100" y2="260" stroke="#1c1917" strokeWidth="12" strokeLinecap="round" />
                        <line x1="300" y1="200" x2="300" y2="260" stroke="#1c1917" strokeWidth="12" strokeLinecap="round" />
                      </>
                    )}
                    <line x1="100" y1="200" x2="100" y2="260" stroke={frameHexColors[state.frameColor]} strokeWidth="10" strokeLinecap="round" />
                    <line x1="300" y1="200" x2="300" y2="260" stroke={frameHexColors[state.frameColor]} strokeWidth="10" strokeLinecap="round" />

                    {/* Polycarbonate Sheets */}
                    {/* Sheet 1: Top section (stays static or moves) */}
                    <polygon
                      points="65,95 335,95 315,130 85,130"
                      fill={sheetHslColors[state.sheetColor].bg}
                      stroke={sheetHslColors[state.sheetColor].border}
                      strokeWidth="2"
                    />

                    {/* Sheet 2: Middle section - retracts when isOpened is true */}
                    <polygon
                      points={
                        isOpened
                          ? '65,95 335,95 315,130 85,130' // hidden under section 1
                          : '80,132 320,132 298,165 102,165'
                      }
                      fill={sheetHslColors[state.sheetColor].bg}
                      stroke={sheetHslColors[state.sheetColor].border}
                      strokeWidth="2"
                      className="transition-all duration-700 ease-in-out"
                    />

                    {/* Sheet 3: Front bottom section - retracts when isOpened is true */}
                    <polygon
                      points={
                        isOpened
                          ? '65,95 335,95 315,130 85,130' // completely tucked up
                          : '98,167 302,167 282,198 118,198'
                      }
                      fill={sheetHslColors[state.sheetColor].bg}
                      stroke={sheetHslColors[state.sheetColor].border}
                      strokeWidth="2"
                      className="transition-all duration-700 ease-in-out"
                    />

                    {/* Alveolar channel lines inside sheets if alveolar */}
                    {state.polyType === 'alveolar' && !isOpened && (
                      <g opacity="0.3" stroke="#fff" strokeWidth="0.5">
                        <line x1="110" y1="135" x2="125" y2="195" />
                        <line x1="150" y1="135" x2="160" y2="195" />
                        <line x1="200" y1="135" x2="200" y2="195" />
                        <line x1="250" y1="135" x2="240" y2="195" />
                        <line x1="290" y1="135" x2="275" y2="195" />
                      </g>
                    )}

                    {/* Front Cover Fascia Tag */}
                    {hasOutline && (
                      <rect x="94" y="195" width="212" height="8" fill="#1c1917" rx="1" />
                    )}
                    <rect x="94" y="196" width="212" height="6" fill={frameHexColors[state.frameColor]} rx="1" />
                  </g>

                  {/* Measurement Annotations */}
                  <g fill="#78716c" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
                    {/* Width label indicator */}
                    <text x="200" y="280" textAnchor="middle">
                      {state.width.toFixed(1)}m Largura (vão)
                    </text>
                    <path d="M 120 277 L 100 277" stroke="#a8a29e" strokeWidth="1" />
                    <path d="M 280 277 L 300 277" stroke="#a8a29e" strokeWidth="1" />

                    {/* Length/Avanço label indicator */}
                    <g transform="translate(320, 150) rotate(65)">
                      <text x="0" y="0" textAnchor="middle">
                        {state.length.toFixed(1)}m Avanço
                      </text>
                      <path d="M -45 -3 L -60 -3" stroke="#a8a29e" strokeWidth="1" />
                      <path d="M 45 -3 L 60 -3" stroke="#a8a29e" strokeWidth="1" />
                    </g>
                  </g>
                </svg>
              </div>

              {/* Guide/Legend */}
              <div className="w-full grid grid-cols-2 gap-2 mt-4 text-[11px] text-stone-500 bg-white p-3 rounded-xl border border-stone-200">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: frameHexColors[state.frameColor] }}></span>
                  <span className="truncate">Estrutura: {state.frameColor}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded inline-block" style={{ backgroundColor: sheetHslColors[state.sheetColor].bg, border: `1px solid ${sheetHslColors[state.sheetColor].border}` }}></span>
                  <span className="truncate">Policarb.: {state.sheetColor}</span>
                </div>
              </div>
            </div>

            {/* In-Person Technical Visit Info Card */}
            <div className="bg-stone-900 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm text-white" id="quote-card">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Orçamento Presencial</span>
                <span className="flex items-center gap-1 text-[11px] text-stone-400">
                  <Info size={12} /> Vistoria Sem Compromisso
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-serif font-normal text-white">
                  Orçamento Técnico Personalizado no Local
                </h3>
                <p className="text-stone-300 text-xs leading-relaxed">
                  Para garantir a máxima exatidão de medidas, conformidade estrutural e o melhor preço de fábrica, realizamos a medição final e o cálculo de custos em uma vistoria presencial gratuita em toda a região de Santo André e ABC Paulista.
                </p>
              </div>

              <div className="border-t border-stone-800 pt-4 space-y-2.5 text-xs text-stone-300">
                <div className="flex justify-between items-center">
                  <span>Visita & Medição Técnica no ABC:</span>
                  <span className="text-emerald-400 font-semibold font-mono">100% GRATUITA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Apresentação de Amostras Físicas:</span>
                  <span className="text-white font-semibold">Sim (Cores & Chapas)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Garantia de Vedação e Instalação:</span>
                  <span className="text-white font-semibold">1 Ano Integral</span>
                </div>
              </div>

              {/* CTA Link to WhatsApp */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:translate-y-[-1px] tracking-wide shadow-md cursor-pointer"
                id="sim-whatsapp-cta"
              >
                <Phone size={18} /> Agendar Vistoria sob Medida <ArrowRight size={16} />
              </a>

              <p className="text-[10px] text-center text-stone-400">
                Ao clicar, você enviará as escolhas de material e medidas do simulador diretamente aos nossos projetistas para agilizar o atendimento.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
