// src/components/PaymentModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Copy, CheckCircle, Bitcoin } from 'lucide-react';
import { trackCopyAddress, trackPaymentIntent } from '../utils/analytics';

const BitcoinQR = ({ address }) => {
  const [qrDataUrl, setQrDataUrl] = useState('');
  
  useEffect(() => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bitcoin:${address}`;
    setQrDataUrl(qrUrl);
  }, [address]);
  
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="text-center text-xs text-gray-600 mb-2">Scan with your wallet</div>
      <div className="w-52 h-52 mx-auto">
        {qrDataUrl ? (
          <img src={qrDataUrl} alt="Bitcoin QR Code" className="w-full h-full" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 rounded flex items-center justify-center">
            <Bitcoin size={64} className="text-orange-600 animate-pulse" />
          </div>
        )}
      </div>
      <div className="text-center text-xs text-gray-500 mt-2">bitcoin:{address.substring(0, 8)}...</div>
    </div>
  );
};

const PaymentModal = ({ t, isOpen, onClose, plan, amount }) => {
  const [copied, setCopied] = useState(false);
  const btcAddress = "3FULxTDJkQB2jrX8cNzJBAoFt43LUbd4PY";

  useEffect(() => {
    if (isOpen && plan && amount) {
      trackPaymentIntent(plan, amount);
    }
  }, [isOpen, plan, amount]);

  const copyAddress = () => {
    navigator.clipboard.writeText(btcAddress);
    setCopied(true);
    trackCopyAddress();
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-400">{t.payment.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mb-6">
          <BitcoinQR address={btcAddress} />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">{t.payment.address}</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={btcAddress} 
              readOnly 
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white"
            />
            <button 
              onClick={copyAddress}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition flex items-center gap-2"
            >
              {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
            </button>
          </div>
          {copied && <p className="text-green-500 text-sm mt-2">{t.payment.copied}</p>}
        </div>

        {amount && (
          <div className="mb-6 bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-1">{t.payment.amount}</div>
            <div className="text-3xl font-bold text-orange-400">€{amount}</div>
          </div>
        )}
        
        <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mb-6">
          <p className="text-yellow-400 text-sm">{t.payment.soon}</p>
        </div>
        
        <button 
          onClick={onClose}
          className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition"
        >
          {t.payment.close}
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;