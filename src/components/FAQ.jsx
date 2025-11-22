// src/components/FAQ.jsx
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = ({ t }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
            <HelpCircle className="text-orange-400" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            {t.faq.title}
          </h2>
          <p className="text-gray-400">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {t.faq.questions.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-orange-500/30 rounded-xl overflow-hidden hover:border-orange-500/50 transition"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition"
              >
                <span className="font-semibold text-white pr-4">{item.q}</span>
                <ChevronDown 
                  className={`text-orange-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 pt-2 text-gray-300 leading-relaxed border-t border-gray-800">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t.faq.title === "Questions Fréquentes" 
              ? "Vous avez d'autres questions ? Contactez-nous à " 
              : t.faq.title === "Frequently Asked Questions"
              ? "More questions? Contact us at "
              : "他にご質問はありますか？ "}
            <a href="mailto:support@blockrush.io" className="text-orange-400 hover:text-orange-300 transition">
              support@blockrush.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;