// src/components/Header.jsx
import React from 'react';
import { Zap, Bitcoin } from 'lucide-react';
import { trackLanguageChange } from '../utils/analytics';

const Header = ({ t, lang, changeLanguage, btcPrice }) => {
  const handleLanguageChange = (newLang) => {
    changeLanguage(newLang);
    trackLanguageChange(newLang);
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap className="text-orange-500" size={32} />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            {t.siteTitle}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Bitcoin Price */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Bitcoin size={20} className="text-orange-500" />
              <span className="text-gray-400">€{btcPrice.eur.toLocaleString()}</span>
            </div>
            <div className="text-gray-400">${btcPrice.usd.toLocaleString()}</div>
          </div>
          
          {/* Language Selector */}
          <div className="flex gap-2">
            {['fr', 'en', 'ja'].map(l => (
              <button
                key={l}
                onClick={() => handleLanguageChange(l)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                  lang === l 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;