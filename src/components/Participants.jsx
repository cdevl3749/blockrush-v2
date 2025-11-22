// src/components/Participants.jsx
import React from 'react';
import { Crown } from 'lucide-react';

const Participants = ({ t }) => {
  const recentParticipants = [
    { name: "Thomas M.", amount: "50€", bonus: true },
    { name: "Sarah L.", amount: "100€", bonus: true },
    { name: "Alexandre D.", amount: "25€", bonus: true },
    { name: "Marie K.", amount: "75€", bonus: false },
    { name: "Lucas B.", amount: "50€", bonus: false },
    { name: "Emma R.", amount: "100€", bonus: true },
  ];

  return (
    <section id="participants" className="py-12 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          {t.participants.title}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 border border-orange-500/30 rounded-2xl p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-orange-400 mb-4">{t.participants.recent}</h3>
            <div className="space-y-3">
              {recentParticipants.map((participant, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3 hover:bg-gray-800 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {participant.name[0]}
                    </div>
                    <div className="font-semibold text-white flex items-center gap-2 text-sm">
                      {participant.name}
                      {participant.bonus && <Crown size={14} className="text-yellow-500" />}
                    </div>
                  </div>
                  <div className="text-orange-400 font-bold text-sm">{participant.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participants;