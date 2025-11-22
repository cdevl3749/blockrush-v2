// src/components/RewardsExample.jsx
import React from 'react';
import { TrendingUp, Bitcoin, Euro } from 'lucide-react';

const RewardsExample = ({ t, btcPrice }) => {
  // Calcul exemple : 50€ = 2 parts sur 1000 total = 0.2%
  const investment = 50;
  const shares = 2;
  const totalShares = 1000;
  const sharePercentage = (shares / totalShares) * 100;
  
  // Récompense actuelle par bloc
  const blockRewardBTC = 3.125;
  const userRewardBTC = (blockRewardBTC * sharePercentage / 100).toFixed(5);
  const userRewardEuro = Math.round(userRewardBTC * btcPrice.eur);

  return (
    <section id="rewards" className="py-8 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-2xl p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
              <TrendingUp className="text-green-400" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">{t.rewards.title}</h3>
            <p className="text-gray-400">{t.rewards.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Récompense du bloc */}
            <div className="bg-gray-900/50 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Bitcoin className="text-orange-400" size={20} />
                <span className="text-sm text-gray-400">{t.rewards.blockReward}</span>
              </div>
              <div className="text-2xl font-bold text-white">{t.rewards.currentReward}</div>
              <div className="text-xs text-gray-500 mt-1">≈ €{Math.round(blockRewardBTC * btcPrice.eur).toLocaleString()}</div>
            </div>

            {/* Votre part */}
            <div className="bg-gradient-to-br from-green-900/30 to-gray-900/50 border-2 border-green-500 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Euro className="text-green-400" size={20} />
                <span className="text-sm text-gray-400">{t.rewards.yourShare}</span>
              </div>
              <div className="text-2xl font-bold text-green-400">{userRewardBTC} BTC</div>
              <div className="text-xs text-green-300 mt-1">≈ €{userRewardEuro.toLocaleString()}</div>
            </div>
          </div>

          {/* Exemple de calcul */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-300 space-y-2">
              <div className="font-semibold text-white">{t.rewards.example}</div>
              <div className="flex items-center justify-between">
                <span>Parts :</span>
                <span className="text-green-400">{shares} / {totalShares} ({sharePercentage}%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Calcul :</span>
                <span className="text-gray-400">{blockRewardBTC} BTC × {sharePercentage}%</span>
              </div>
              <div className="flex items-center justify-between font-bold border-t border-gray-700 pt-2">
                <span>Récompense :</span>
                <span className="text-green-400">{t.rewards.calculation}</span>
              </div>
              <div className="text-green-300 text-center">{t.rewards.inEuro}</div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
            <p className="text-yellow-400 text-xs leading-relaxed">
              ⚠️ {t.rewards.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsExample;