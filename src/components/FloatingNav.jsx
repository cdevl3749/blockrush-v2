// src/components/FloatingNav.jsx
import React, { useState, useEffect } from 'react';
import { Home, TrendingUp, CreditCard, HelpCircle, Users } from 'lucide-react';

const FloatingNav = ({ t }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le menu après 300px de scroll
      setIsVisible(window.scrollY > 300);

      // Détecter la section active
      const sections = ['hero', 'progress', 'pricing', 'faq', 'participants'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset pour le header fixe
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.warn(`Section "${sectionId}" not found`);
    }
  };

  const navItems = [
    { id: 'hero', icon: Home, label: t.nav.home },
    { id: 'progress', icon: TrendingUp, label: t.nav.progress },
    { id: 'pricing', icon: CreditCard, label: t.nav.participate },
    { id: 'faq', icon: HelpCircle, label: t.nav.faq },
    { id: 'participants', icon: Users, label: t.nav.participants },
  ];

  // Masquer si pas assez scrollé
  if (!isVisible) return null;

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-gray-900/90 backdrop-blur-md border border-orange-500/30 rounded-2xl p-3 shadow-2xl">
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-orange-400'
                }`}
                title={item.label}
                aria-label={item.label}
              >
                <Icon size={20} />
                
                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-orange-500/30">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default FloatingNav;