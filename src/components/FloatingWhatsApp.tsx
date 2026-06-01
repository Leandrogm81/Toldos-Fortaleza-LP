import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingWhatsApp() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show polite popup after 4 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappPhone = '551120360010'; // Santo André DDD 11 placeholder
  const message = 'Olá! Estava navegando na página da Toldos Fortaleza e gostaria de tirar dúvidas sobre a cobertura retrátil de policarbonato.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20 }}
            className="pointer-events-auto mb-3 max-w-xs bg-white rounded-2xl shadow-md border border-stone-200 p-4 relative font-sans"
            id="wa-popup-card"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 transition-colors pointer-events-auto cursor-pointer"
              aria-label="Fechar"
              id="wa-close-btn"
            >
              <X size={16} />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 relative shrink-0">
                <MessageSquare size={20} />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-stone-500 uppercase tracking-wide">Atendimento Toldos Fortaleza</p>
                <p className="text-sm font-semibold text-stone-900 font-serif">Olá! Como posso ajudar?</p>
              </div>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Faça sua simulação ou tire suas dúvidas sobre prazos e instalação no ABC.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors pointer-events-auto cursor-pointer"
              id="wa-popup-cta"
            >
              <Phone size={14} /> Atendimento Rápido
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="pointer-events-auto bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer relative"
        aria-label="Fale conosco no WhatsApp"
        id="wa-floating-bubble"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12.012 2c-5.506 0-9.988 4.479-9.988 9.984a9.94 9.94 0 0 0 1.534 5.253L2 22l4.912-1.287a9.936 9.936 0 0 0 5.1 1.4A9.99 9.99 0 0 0 22 12.133C22 6.628 17.518 2 12.012 2zm5.726 14.12c-.244.683-1.206 1.252-1.656 1.302-.392.044-.88.163-2.614-.551-2.213-.913-3.619-3.155-3.73-3.303-.11-.148-.89-.1.173-.89a1.189 1.189 0 0 1 .632-.821c.144-.082.261-.133.355-.133.094 0 .188.006.272.012.088.006.205-.034.321.196.122.253.416.993.454 1.07.038.076.061.164.01.265-.05.101-.076.164-.151.253-.075.088-.163.196-.233.272-.082.088-.169.184-.075.341.094.158.421.69.907 1.12.625.556 1.15.728 1.313.804.162.076.257.063.355-.051.1-.114.423-.493.537-.664.113-.17.226-.139.383-.082.157.057 1.002.474 1.178.563.176.088.295.133.338.209.044.076.044.436-.2.12z" />
        </svg>
      </motion.a>
    </div>
  );
}
