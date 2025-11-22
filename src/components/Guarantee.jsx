// src/components/Guarantee.jsx
import React from 'react';
import { Shield } from 'lucide-react';

const Guarantee = ({ t }) => {
  return (
    <section id="guarantee" className="py-8 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-2xl p-6 md:p-8 text-center">
          <Shield className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-3">{t.guarantee.title}</h3>
          <p className="text-gray-300 text-sm md:text-base">{t.guarantee.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;