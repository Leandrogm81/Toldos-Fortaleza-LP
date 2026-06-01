import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const cities = [
    'Santo André',
    'São Bernardo do Campo',
    'São Caetano do Sul',
    'Diadema',
    'Mauá',
    'Ribeirão Pires',
    'Grande São Paulo'
  ];

  return (
    <footer className="bg-stone-950 text-white pt-16 pb-12 overflow-hidden border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-stone-900">
          
          {/* Column 1 - Brand description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 50" fill="none" className="h-8 w-auto">
                <g transform="translate(2, -2)">
                  <path d="M 4,45 L 23,37 L 28,45 Z" fill="#A8A29E" />
                  <path d="M 28,45 C 27,39 26,33 24,29 C 21,24 18,20 19,14 C 19,8 22,6 28,6 C 28,6 28,10 28,11 C 29,13 31,14 31,17 C 32,22 30,27 31,32 C 32,36 33,41 33,45 H 28 Z" fill="#A8A29E" />
                  <path d="M 28,6 L 47,7 L 46,9 C 45,12 46,16 46,19 C 47,25 48,31 48,37 L 48,45 L 45,45 L 45,39 C 45,33 46,27 44,21 L 28,8 Z" fill="#A8A29E" />
                  <rect x="31.5" y="27" width="7" height="9" stroke="#A8A29E" strokeWidth="1.2" fill="none" />
                  <line x1="35" y1="27" x2="35" y2="36" stroke="#A8A29E" strokeWidth="0.8" />
                  <line x1="31.5" y1="31.5" x2="38.5" y2="31.5" stroke="#A8A29E" strokeWidth="0.8" />
                  <rect x="41" y="32" width="5" height="13" stroke="#A8A29E" strokeWidth="1.2" fill="none" />
                  <circle cx="42.5" cy="38" r="0.5" fill="#A8A29E" />
                  <path d="M 27,12 C 36,13 43,14 47,13 C 49,15 51,18 52,21 C 48,23 43,22 32,18 Z" fill="#EA580C" />
                </g>
              </svg>
              <span className="text-xl font-sans font-extrabold tracking-tight text-white">
                Toldos <span className="text-[#EA580C]">Fortaleza</span>
              </span>
            </span>
            <p className="text-stone-400 text-xs md:text-sm leading-relaxed max-w-sm font-sans font-light">
              Especialistas em engenharia de coberturas retráteis e toldos de policarbonato de alta durabilidade. Liderança, vedação absoluta e design de luxo para Santo André e toda a região do Grande ABC.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-500 font-sans">
              <ShieldCheck size={16} className="text-stone-400" />
              <span>Garantia de 1 ano em todos os projetos de fábrica.</span>
            </div>
          </div>

          {/* Column 2 - Contacts Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 font-sans">Atendimento ao Cliente</h4>
            <ul className="space-y-3 text-xs md:text-sm text-stone-300 font-sans">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-stone-400 shrink-0 mt-0.5" />
                <span>Av. Araucária 997, Pq. Oratório, Santo André - SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-stone-400 shrink-0" />
                <a href="tel:+551120360010" className="hover:text-white transition-colors font-medium">(11) 2036-0010</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-stone-400 shrink-0" />
                <a href="mailto:toldosfortaleza@gmail.com" className="hover:text-white transition-colors">toldosfortaleza@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-stone-450 shrink-0" />
                <span className="text-xs text-stone-400">Segunda a Sexta: 08h às 18h • Sábados: 09h às 13h</span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Cities limits coverage (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 font-sans">Cidades Atendidas (Grande ABC)</h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {cities.map((city) => (
                <span 
                  key={city} 
                  className="bg-stone-900 border border-stone-800 text-stone-350 text-[10px] md:text-xs font-serif font-light py-1 px-3.5 rounded-full"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-stone-500 leading-normal pt-1 font-sans">
              *Nota: Oferecemos equipe própria e frete bonificado de fábrica para todas as cidades da lista acima.
            </p>
          </div>

        </div>

        {/* Legal copyrights terms and credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <p>© {currentYear} Toldos Fortaleza. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart size={10} className="fill-stone-600 text-stone-600 shrink-0" /> para moradores do ABC Paulista.
          </p>
        </div>

      </div>
    </footer>
  );
}
