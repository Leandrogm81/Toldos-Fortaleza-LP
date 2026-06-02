import React from 'react';
import { Shield, Sparkles, Star, Calendar, ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
  const whatsappPhone = '551120360010';
  const message = 'Olá! Vi a oferta de Coberturas Retráteis em Policarbonato para Santo André e gostaria de agendar uma consultoria de orçamento.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAF9F6] overflow-hidden text-stone-850" id="hero-section">
      {/* Elegantly styled organic background blobs */}
      <div className="absolute top-0 inset-x-0 h-[450px] bg-gradient-to-b from-stone-200/20 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-stone-100/60 blur-[130px] pointer-events-none" />
      <div className="absolute right-[5%] bottom-[10%] w-[35%] h-[35%] rounded-full bg-stone-200/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Title & Slogans - Left (7 cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 select-none" id="hero-content">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-3.5 py-1.5 rounded-full text-stone-600 text-xs font-semibold tracking-wide">
              <MapPin size={13} className="text-stone-700 shrink-0" />
              <span>Santo André & Grande ABC • Fabricação Própria</span>
            </div>
 
            {/* Headline using the serif font family for that 'Natural Tones' organic, high-end feel */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-stone-900 leading-tight">
              A elegância da luz natural com <span className="italic font-light text-stone-700">Coberturas Retráteis Premium</span>
            </h1>

            {/* Description */}
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
              Fabricamos sob medida coberturas em <strong className="text-stone-900 font-semibold">Policarbonato Compacto ou Alveolar</strong> com estrutura em alumínio de altíssima pureza. Proteja sua área de churrasqueira, piscina ou garagem sem perder a claridade natural do sol.
            </p>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-y border-stone-200 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 shrink-0 border border-stone-200/50">
                  <Shield size={20} className="text-stone-800" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-stone-900">1 Ano de Garantia</p>
                  <p className="text-stone-500">Vedação & Materiais</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 shrink-0 border border-stone-200/50">
                  <Star size={20} className="text-stone-850 fill-stone-700" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-stone-900">Nota 4.8 no Google</p>
                  <p className="text-stone-500">+240 avaliações de clientes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 shrink-0 border border-stone-200/50">
                  <Calendar size={20} className="text-stone-800" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-stone-900">Instalação Ágil</p>
                  <p className="text-stone-500">Equipe técnica própria</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="#simulador" 
                className="bg-stone-900 hover:bg-stone-800 text-white font-semibold py-3.5 px-8 rounded-full flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all text-sm cursor-pointer"
                id="hero-to-sim-cta"
              >
                Simular Medidas Online <ArrowDown size={14} className="mt-0.5" />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-full flex items-center justify-center gap-2.5 transition-all text-sm cursor-pointer shadow-sm hover:shadow-md"
                id="hero-wa-cta"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.012 2c-5.506 0-9.988 4.479-9.988 9.984a9.94 9.94 0 0 0 1.534 5.253L2 22l4.912-1.287a9.936 9.936 0 0 0 5.1 1.4A9.99 9.99 0 0 0 22 12.133C22 6.628 17.518 2 12.012 2zm5.726 14.12c-.244.683-1.206 1.252-1.656 1.302-.392.044-.88.163-2.614-.551-2.213-.913-3.619-3.155-3.73-3.303-.11-.148-.89-.1.173-.89a1.189 1.189 0 0 1 .632-.821c.144-.082.261-.133.355-.133.094 0 .188.006.272.012.088.006.205-.034.321.196.122.253.416.993.454 1.07.038.076.061.164.01.265-.05.101-.076.164-.151.253-.075.088-.163.196-.233.272-.082.088-.169.184-.075.341.094.158.421.69.907 1.12.625.556 1.15.728 1.313.804.162.076.257.063.355-.051.1-.114.423-.493.537-.664.113-.17.226-.139.383-.082.157.057 1.002.474 1.178.563.176.088.295.133.338.209.044.076.044.436-.2.12z" />
                </svg>
                Orçamento no WhatsApp
              </a>
            </div>

          </div>

          {/* Interactive Feature Collage - Right (5 cols) */}
          <div className="lg:col-span-5 relative" id="hero-illustrations">
            {/* Hand-drawn elegant double frame decoration matching natural vibes */}
            <div className="absolute inset-4 rounded-3xl border border-stone-200/80 bg-white/40 -rotate-3 hover:rotate-r-0 transition-transform duration-500 pointer-events-none" />
            
            {/* Top illustrative floating card */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200 bg-white transform hover:scale-[1.01] transition-transform duration-300">
              <img 
                src="/images/cobertura-fixa.jpg" 
                alt="Exemplo de Cobertura Fixa em Santo André" 
                className="w-full aspect-[4/3] object-cover"
              />
              
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-stone-700 font-bold bg-stone-100 py-1 px-2.5 rounded-full uppercase tracking-wider">
                    Policarbonato Compacto Cristal
                  </span>
                  <span className="text-xs font-semibold text-stone-500 font-mono">ABC Paulista</span>
                </div>
                
                <h3 className="text-base font-serif font-semibold text-stone-900 leading-snug">
                  Área externa protegida com Cobertura Fixa elegante
                </h3>
                
                <p className="text-xs text-stone-600 leading-relaxed">
                  Perfeita simbiose de luz solar e proteção térmica.
                </p>


              </div>
            </div>

            {/* Little Absolute Overlay Card removed per request */}

          </div>

        </div>
      </div>
    </section>
  );
}
