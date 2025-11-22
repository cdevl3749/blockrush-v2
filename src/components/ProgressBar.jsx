// src/components/ProgressBar.jsx
import React from 'react';
import { Target } from 'lucide-react';

const ProgressBar = ({ t, fundingAmount, fundingGoal, participants }) => {
  const fundingPercentage = Math.min((fundingAmount / fundingGoal) * 100, 100);

  return (
    <section id="progress" className="py-8 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/40 rounded-2xl p-6 md:p-10 shadow-2xl shadow-orange-500/20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            {t.progress.title}
          </h3>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">
                €{fundingAmount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">{t.progress.raised}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gray-300 mb-1">
                €{fundingGoal.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">{t.progress.goal}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">
                {participants}
              </div>
              <div className="text-sm text-gray-400">{t.progress.backers}</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="h-8 bg-gray-800 rounded-full overflow-hidden border border-orange-500/30">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4 relative"
                style={{ width: `${fundingPercentage}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                <span className="text-white font-bold text-sm md:text-base relative z-10">
                  {fundingPercentage.toFixed(1)}%
                </span>
              </div>
            </div>
            
            {/* Milestone Markers */}
            <div className="flex justify-between mt-3 text-xs text-gray-500">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>
          
          {/* Remaining Amount */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              <span className="text-orange-400 font-bold">€{(fundingGoal - fundingAmount).toLocaleString()}</span>
              {' '}restants pour atteindre l'objectif
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-green-400 text-sm">
              <Target size={16} />
              <span>{t.progress.timeline}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;