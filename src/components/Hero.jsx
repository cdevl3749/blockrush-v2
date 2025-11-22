// src/components/Hero.jsx
import React from 'react';
import { Rocket, Bitcoin } from 'lucide-react';
import { trackCTA } from '../utils/analytics';

const Hero = ({ t, btcPrice, participants }) => {
  const handleCTAClick = () => {
    trackCTA('hero_section', 'join_adventure');
  };

  return (
    <section id="hero" className="relative pt-24 pb-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 to-black"></div>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-orange-500/10 rounded-full animate-pulse"
            style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-400 text-sm font-semibold">
            {t.tagline}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
            {t.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
            {t.hero.subtitle}
          </p>
          
          {/* Prix Bitcoin en temps réel */}
          <div className="flex items-center justify-center gap-6 mb-6 bg-gray-900/50 border border-orange-500/30 rounded-xl p-4 max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <Bitcoin size={24} className="text-orange-500" />
              <div>
                <div className="text-xs text-gray-400">Bitcoin</div>
                <div className="text-lg font-bold text-white">€{btcPrice.eur.toLocaleString()}</div>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div>
              <div className="text-xs text-gray-400">USD</div>
              <div className="text-lg font-bold text-white">${btcPrice.usd.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="inline-block mb-8 px-4 md:px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full text-white font-bold text-sm md:text-lg animate-pulse shadow-lg shadow-orange-500/50">
            {t.hero.earlyBird}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-gray-900/50 border border-orange-500/30 rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">2</div>
              <div className="text-xs md:text-sm text-gray-400">{t.hero.stats.miners}</div>
            </div>
            <div className="bg-gray-900/50 border border-orange-500/30 rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">7</div>
              <div className="text-xs md:text-sm text-gray-400">{t.hero.stats.target}</div>
            </div>
            <div className="bg-gray-900/50 border border-orange-500/30 rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">{participants}</div>
              <div className="text-xs md:text-sm text-gray-400">{t.hero.stats.participants}</div>
            </div>
          </div>
          
          <a 
            href="#pricing" 
            onClick={handleCTAClick}
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition transform hover:scale-105"
          >
            {t.hero.cta} <Rocket className="inline ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;