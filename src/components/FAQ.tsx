import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'Como funciona a visita técnica e medição em Santo André e região do ABC?',
      answer: 'Primeiro fazemos uma avaliação inicial pelo WhatsApp, com base nas medidas, fotos e informações do local. Assim conseguimos antecipar uma estimativa de orçamento de forma rápida e prática.\n\nQuando o cliente tem interesse em seguir com o projeto, agendamos a visita técnica para conferência das medidas, análise do local e definição dos detalhes da instalação.\n\nEm casos de visitas apenas para cotação presencial, a disponibilidade e as condições são informadas previamente pelo atendimento.'
    },
    {
      id: 2,
      question: 'Quais são as garantias dadas no projeto?',
      answer: 'Oferecemos 1 ano de garantia integral na vedação contra vazamentos e infiltrações'
    },
    {
      id: 3,
      question: 'Qual a diferença crucial entre Policarbonato Compacto e Alveolar?',
      answer: 'O Policarbonato Compacto é maciço e totalmente plano, o que confere a mesma transparência cristalina do vidro comum, porém com resistência a impactos 250 vezes superior. O Alveolar possui cavidades internas (canaletas), proporcionando maior isolamento térmico e custo-benefício financeiro, com visual translúcido canelado.'
    },
    {
      id: 4,
      question: 'Quanto tempo demora a confecção e montagem no local?',
      answer: 'A usinagem completa dos perfis de alumínio e preparação das chapas em nossa central leva entre 25 a 30 dias úteis. A instalação efetiva na sua residência ou comércio é concluída em apenas 1 a 2 dias, dependendo do tamanho da área.'
    },
    {
      id: 5,
      question: 'Como deve ser feita a higienização e limpeza?',
      answer: 'A limpeza é extremamente simples e não exige produtos químicos: basta utilizar mangueira de água corrente com sabão neutro e uma esponja macia de microfibra de forma semestral. Evite palhas de aço ou produtos abrasivos para manter as chapas impecáveis.'
    },
    {
      id: 6,
      question: 'As coberturas retráteis podem ser motorizadas no futuro?',
      answer: 'Sim! Nossas coberturas retráteis são projetadas com eixos compatíveis com motorização futura. Se optar pela manual agora, poderá facilmente instalar os motores tubulares com acionamento por controle remoto em outra oportunidade.'
    }
  ];

  return (
    <section id="FAQ" className="py-24 bg-[#FAF9F6] text-stone-900 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-3">
            <HelpCircle size={14} className="text-stone-500" /> Tira-Dúvidas Técnico
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-stone-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 mt-4 text-sm md:text-base leading-relaxed font-sans">
            Selecione uma das perguntas abaixo para conferir as respostas rápidas dos nossos projetistas de toldos e coberturas.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4" id="faq-accordion-list font-sans">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden hover:border-stone-400 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 text-stone-900 hover:text-stone-700 transition-colors pointer-events-auto"
                  aria-expanded={isOpen}
                  id={`faq-btn-${item.id}`}
                >
                  <span className="font-serif font-semibold text-sm md:text-base pr-2 leading-snug">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-stone-400">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                {/* Accordion detail pane */}
                {isOpen && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-stone-600 leading-relaxed text-wrap whitespace-pre-line font-normal border-t border-stone-100 pt-3 font-sans">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
