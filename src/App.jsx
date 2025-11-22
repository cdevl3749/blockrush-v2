// src/App.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from './hooks/useTranslation';
import { trackModalOpen } from './utils/analytics';

// Composants
import Header from './components/Header';
import Hero from './components/Hero';
import ProgressBar from './components/ProgressBar';
import About from './components/About';
import RewardsExample from './components/RewardsExample';
import Pricing from './components/Pricing';
import PaymentModal from './components/PaymentModal';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Participants from './components/Participants';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Modal from './components/Modal';
import FloatingNav from './components/FloatingNav';

function App() {
  const { t, lang, changeLanguage } = useTranslation();
  const [btcPrice, setBtcPrice] = useState({ eur: 0, usd: 0 });
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [participants, setParticipants] = useState(42);
  const [showCookieBanner, setShowCookieBanner] = useState(() => {
    return !localStorage.getItem('blockrush_cookie_consent');
  });
  const [fundingAmount] = useState(3250);
  const fundingGoal = 25000;

  // Fetch Bitcoin price - Mise à jour toutes les 5 secondes
  useEffect(() => {
    const fetchBtcPrice = async () => {
      try {
        const response = await fetch('https://blockchain.info/ticker');
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        setBtcPrice({
          eur: Math.round(data.EUR.last),
          usd: Math.round(data.USD.last)
        });
      } catch (error) {
        console.error('Error fetching BTC price:', error);
        // Valeurs par défaut en cas d'erreur
        setBtcPrice({ eur: 85000, usd: 92000 });
      }
    };
    
    fetchBtcPrice(); // Appel initial
    const interval = setInterval(fetchBtcPrice, 5000); // Mise à jour toutes les 5 secondes
    
    return () => clearInterval(interval);
  }, []);

  const handleSelectPlan = (plan, amount) => {
    setSelectedPlan(plan);
    setSelectedAmount(amount);
  };

  const handleClosePaymentModal = () => {
    setSelectedPlan(null);
    setSelectedAmount(null);
  };

  const openModal = (type) => {
    setModalContent(type);
    trackModalOpen(type);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleAcceptCookies = () => {
    localStorage.setItem('blockrush_cookie_consent', 'true');
    setShowCookieBanner(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('blockrush_cookie_consent', 'false');
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Menu de navigation flottant */}
      <FloatingNav t={t} />
      
      {/* Header fixe */}
      <Header 
        t={t} 
        lang={lang} 
        changeLanguage={changeLanguage} 
        btcPrice={btcPrice} 
      />
      
      {/* Hero Section */}
      <Hero 
        t={t} 
        btcPrice={btcPrice} 
        participants={participants} 
      />
      
      {/* Barre de progression */}
      <ProgressBar 
        t={t} 
        fundingAmount={fundingAmount} 
        fundingGoal={fundingGoal} 
        participants={participants} 
      />
      
      {/* À propos */}
      <About t={t} />
      
      {/* Exemple de récompenses */}
      <RewardsExample t={t} btcPrice={btcPrice} />
      
      {/* Plans de participation */}
      <Pricing 
        t={t} 
        onSelectPlan={handleSelectPlan} 
      />
      
      {/* Modal de paiement */}
      <PaymentModal 
        t={t} 
        isOpen={!!selectedPlan} 
        onClose={handleClosePaymentModal} 
        plan={selectedPlan}
        amount={selectedAmount}
      />
      
      {/* Garantie */}
      <Guarantee t={t} />
      
      {/* FAQ */}
      <FAQ t={t} />
      
      {/* Participants */}
      <Participants t={t} />
      
      {/* Footer */}
      <Footer 
        t={t} 
        onOpenModal={openModal} 
      />
      
      {/* Bannière cookies */}
      <CookieBanner 
        t={t} 
        isVisible={showCookieBanner} 
        onAccept={handleAcceptCookies} 
        onDecline={handleDeclineCookies} 
      />

      {/* Modals légaux */}
      <Modal 
        isOpen={modalContent === 'legal'} 
        onClose={closeModal} 
        title={t.modals.legal.title}
      >
        <p>{t.modals.legal.content}</p>
      </Modal>

      <Modal 
        isOpen={modalContent === 'privacy'} 
        onClose={closeModal} 
        title={t.modals.privacy.title}
      >
        <p>{t.modals.privacy.content}</p>
      </Modal>

      <Modal 
        isOpen={modalContent === 'terms'} 
        onClose={closeModal} 
        title={t.modals.terms.title}
      >
        <p>{t.modals.terms.content}</p>
      </Modal>

      <Modal 
        isOpen={modalContent === 'cookies'} 
        onClose={closeModal} 
        title={t.footer.cookies}
      >
        <p>{lang === 'fr' 
          ? "Nous utilisons des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences à tout moment."
          : lang === 'en'
          ? "We use cookies to improve your browsing experience. You can manage your preferences at any time."
          : "私たちはあなたのブラウジング体験を向上させるためにクッキーを使用しています。いつでも設定を管理できます。"
        }</p>
      </Modal>
    </div>
  );
}

export default App;