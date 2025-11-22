// src/components/Footer.jsx
import React from 'react';
import { Zap, Bitcoin, Shield, Lock } from 'lucide-react';

const Footer = ({ t, onOpenModal }) => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-orange-500/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-orange-500" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {t.siteTitle}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{t.footer.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-orange-400 mb-4">{t.footer.payments}</h4>
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                <Bitcoin size={20} className="text-orange-500" />
              </div>
              <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">VISA</div>
              <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">MC</div>
            </div>
            <h4 className="font-semibold text-orange-400 mb-2">{t.footer.trust}</h4>
            <div className="flex gap-2">
              <Shield size={24} className="text-green-500" />
              <Lock size={24} className="text-blue-500" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-orange-400 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onOpenModal('legal')} className="text-gray-400 hover:text-orange-400 transition">
                  {t.footer.legal}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal('privacy')} className="text-gray-400 hover:text-orange-400 transition">
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal('terms')} className="text-gray-400 hover:text-orange-400 transition">
                  {t.footer.terms}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal('cookies')} className="text-gray-400 hover:text-orange-400 transition">
                  {t.footer.cookies}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2024 BlockRush.io - {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;