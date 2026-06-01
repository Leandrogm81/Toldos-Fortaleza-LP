import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappPhone = '551120360010';
  const message = 'Olá! Gostaria de conversar com os especialistas da Toldos Santo André para fazer um orçamento sem compromisso.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-200' 
          : 'bg-[#FAF9F6]/40 backdrop-blur-xs py-5 border-b border-stone-200/50'
      }`}
      id="site-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand/Logo */}
          <a href="#" className="flex items-center select-none cursor-pointer" id="logo-anchor">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 50" fill="none" className="h-10 sm:h-11 w-auto" id="logo-fortaleza-svg">
              {/* House/Toldo Icon */}
              <g transform="translate(2, -2)">
                {/* Slant of ground at bottom-left */}
                <path d="M 4,45 L 23,37 L 28,45 Z" fill="#5E6A75" />
                
                {/* Left stylized wall pillar */}
                <path d="M 28,45 C 27,39 26,33 24,29 C 21,24 18,20 19,14 C 19,8 22,6 28,6 C 28,6 28,10 28,11 C 29,13 31,14 31,17 C 32,22 30,27 31,32 C 32,36 33,41 33,45 H 28 Z" fill="#5E6A75" />
                
                {/* Right wall and top framework */}
                <path d="M 28,6 L 47,7 L 46,9 C 45,12 46,16 46,19 C 47,25 48,31 48,37 L 48,45 L 45,45 L 45,39 C 45,33 46,27 44,21 L 28,8 Z" fill="#5E6A75" />
                
                {/* Window */}
                <rect x="31.5" y="27" width="7" height="9" stroke="#5E6A75" strokeWidth="1.2" fill="none" />
                <line x1="35" y1="27" x2="35" y2="36" stroke="#5E6A75" strokeWidth="0.8" />
                <line x1="31.5" y1="31.5" x2="38.5" y2="31.5" stroke="#5E6A75" strokeWidth="0.8" />
                
                {/* Door */}
                <rect x="41" y="32" width="5" height="13" stroke="#5E6A75" strokeWidth="1.2" fill="none" />
                <circle cx="42.5" cy="38" r="0.5" fill="#5E6A75" />
                
                {/* Premium Orange Awning / Toldo */}
                <path d="M 27,12 C 36,13 43,14 47,13 C 49,15 51,18 52,21 C 48,23 43,22 32,18 Z" fill="#EA580C" />
                <path d="M 32,18 C 43,22 48,23 52,21 L 53,23 C 49,25 43,24 32,20 Z" fill="#C2410C" />
                <path d="M 27,12 C 36,13 43,14 47,13 L 45,14 Q 36,14 28,13 Z" fill="#FB923C" opacity="0.8" />
              </g>

              {/* Typography Part */}
              <g transform="translate(60, 0)">
                {/* "Toldos Fortaleza" */}
                <text x="0" y="24" fill="#EA580C" className="font-sans font-extrabold" style={{ fontSize: '17px', fontWeight: 900, letterSpacing: '0.2px' }}>
                  Toldos Fortaleza
                </text>
                {/* "Coberturas em Policarbonato" */}
                <text x="0" y="38" fill="#5E6A75" className="font-sans font-semibold text-stone-500" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1.1px' }}>
                  Coberturas em Policarbonato
                </text>
              </g>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#diferenciais" className="hover:text-stone-950 transition-colors">Diferenciais</a>
            <a href="#antes-depois" className="hover:text-stone-950 transition-colors">Transformações</a>
            <a href="#simulador" className="hover:text-stone-950 transition-colors">Simulador</a>
            <a href="#portfolio" className="hover:text-stone-950 transition-colors">Galeria</a>
            <a href="#FAQ" className="hover:text-stone-950 transition-colors">Dúvidas</a>
          </nav>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+551120360010" 
              className="text-stone-600 hover:text-stone-950 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              id="phone-nav-link"
            >
              <Phone size={14} className="text-stone-800 animate-pulse" />
              (11) 2036-0010
            </a>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-green-600 text-white text-xs font-bold py-2.5 px-5 rounded-full shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
              id="cta-nav-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12.012 2c-5.506 0-9.988 4.479-9.988 9.984a9.94 9.94 0 0 0 1.534 5.253L2 22l4.912-1.287a9.936 9.936 0 0 0 5.1 1.4A9.99 9.99 0 0 0 22 12.133C22 6.628 17.518 2 12.012 2zm5.726 14.12c-.244.683-1.206 1.252-1.656 1.302-.392.044-.88.163-2.614-.551-2.213-.913-3.619-3.155-3.73-3.303-.11-.148-.89-.1.173-.89a1.189 1.189 0 0 1 .632-.821c.144-.082.261-.133.355-.133.094 0 .188.006.272.012.088.006.205-.034.321.196.122.253.416.993.454 1.07.038.076.061.164.01.265-.05.101-.076.164-.151.253-.075.088-.163.196-.233.272-.082.088-.169.184-.075.341.094.158.421.69.907 1.12.625.556 1.15.728 1.313.804.162.076.257.063.355-.051.1-.114.423-.493.537-.664.113-.17.226-.139.383-.082.157.057 1.002.474 1.178.563.176.088.295.133.338.209.044.076.044.436-.2.12z" />
              </svg>
              WhatsApp Orçamentos
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 hover:text-stone-950 pointer-events-auto transition-colors"
              aria-label="Menu principal"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-stone-200"
            id="mobile-drawer-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-4 text-stone-700 font-medium">
              <a 
                href="#diferenciais" 
                onClick={() => setIsOpen(false)} 
                className="block hover:text-stone-900 py-2 border-b border-stone-100"
              >
                Diferenciais
              </a>
              <a 
                href="#antes-depois" 
                onClick={() => setIsOpen(false)} 
                className="block hover:text-stone-900 py-2 border-b border-stone-100"
              >
                Transformações
              </a>
              <a 
                href="#simulador" 
                onClick={() => setIsOpen(false)} 
                className="block hover:text-stone-900 py-2 border-b border-stone-100"
              >
                Simulador de Medidas
              </a>
              <a 
                href="#portfolio" 
                onClick={() => setIsOpen(false)} 
                className="block hover:text-stone-900 py-2 border-b border-stone-100"
              >
                Galeria de Projetos
              </a>
              <a 
                href="#FAQ" 
                onClick={() => setIsOpen(false)} 
                className="block hover:text-stone-900 py-2"
              >
                Dúvidas Frequentes
              </a>

              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href="tel:+551120360010" 
                  className="bg-stone-100 text-stone-900 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 border border-stone-200"
                  id="mobile-phone-link"
                >
                  <Phone size={16} className="text-stone-850" /> Ligue: (11) 2036-0010
                </a>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  id="mobile-wa-link"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
