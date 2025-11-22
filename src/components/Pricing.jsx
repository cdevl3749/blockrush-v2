// src/components/Pricing.jsx
import React, { useState } from 'react';
import { Crown, Check } from 'lucide-react';
import { trackParticipation } from '../utils/analytics';

const Pricing = ({ t, onSelectPlan }) => {
  const [customAmount, setCustomAmount] = useState('');

  const handlePlanClick = (plan, price) => {
    trackParticipation(plan, price);
    onSelectPlan(plan, price);
  };

  return (
    <section id="pricing" className="py-12 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          {t.pricing.title}
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm md:text-base">{t.pricing.subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {/* Starter */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl p-6 hover:border-orange-500 transition transform hover:scale-105">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{t.pricing.starter.name}</h3>
            <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">{t.pricing.starter.price}</div>
            <div className="text-sm text-gray-400 mb-6">1 {t.pricing.starter.shares}</div>
            <button 
              onClick={() => handlePlanClick('starter', 25)}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition text-sm md:text-base"
            >
              {t.pricing.participate}
            </button>
          </div>
          
          {/* Pro */}
          <div className="bg-gradient-to-br from-orange-900/30 to-black border-2 border-orange-500 rounded-2xl p-6 relative lg:transform lg:scale-105 shadow-2xl shadow-orange-500/30">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 px-4 py-1 rounded-full text-white text-xs font-bold">
              {t.pricing.pro.popular}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">{t.pricing.pro.name}</h3>
            <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">{t.pricing.pro.price}</div>
            <div className="text-sm text-gray-400 mb-6">2 {t.pricing.pro.shares}</div>
            <button 
              onClick={() => handlePlanClick('pro', 50)}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-lg font-semibold transition text-sm md:text-base"
            >
              {t.pricing.participate}
            </button>
          </div>
          
          {/* Elite */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl p-6 hover:border-orange-500 transition transform hover:scale-105">
            <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
              {t.pricing.elite.name} <Crown size={20} className="text-yellow-500" />
            </h3>
            <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">{t.pricing.elite.price}</div>
            <div className="text-sm text-gray-400 mb-6">4 {t.pricing.elite.shares}</div>
            <button 
              onClick={() => handlePlanClick('elite', 100)}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition text-sm md:text-base"
            >
              {t.pricing.participate}
            </button>
          </div>
          
          {/* Custom */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl p-6 hover:border-orange-500 transition transform hover:scale-105">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{t.pricing.custom.name}</h3>
            <div className="text-2xl md:text-3xl font-black text-orange-400 mb-1">{t.pricing.custom.price}</div>
            <div className="text-sm text-gray-400 mb-4">{t.pricing.custom.min}</div>
            <input
              type="number"
              min="10"
              placeholder="50"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full mb-4 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
            />
            <button 
              onClick={() => handlePlanClick('custom', parseInt(customAmount) || 10)}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition text-sm md:text-base"
            >
              {t.pricing.participate}
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-2xl mx-auto bg-gray-900/50 border border-orange-500/30 rounded-2xl p-6 md:p-8">
          <ul className="space-y-4">
            {t.pricing.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;