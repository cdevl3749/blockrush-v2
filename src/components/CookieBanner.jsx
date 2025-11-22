// src/components/CookieBanner.jsx
import React from 'react';

const CookieBanner = ({ t, isVisible, onAccept, onDecline }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-orange-500/30 p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">{t.cookie.message}</p>
        <div className="flex gap-4">
          <button 
            onClick={onAccept}
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
          >
            {t.cookie.accept}
          </button>
          <button 
            onClick={onDecline}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
          >
            {t.cookie.decline}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;