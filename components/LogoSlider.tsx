
import React from 'react';

const LogoSlider: React.FC = () => {
  const leagues = [
    "PREMIER LEAGUE", "LA LIGA", "BUNDESLIGA", "SERIE A", "LIGUE 1", "MLS", "SAUDI PRO LEAGUE"
  ];

  return (
    <div className="bg-black/40 py-10 overflow-hidden relative">
      <div className="custom-scroll-mask absolute inset-0 z-10 pointer-events-none"></div>
      <div className="flex whitespace-nowrap animate-scroll">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex gap-20 items-center px-10">
            {leagues.map((league) => (
              <span key={league} className="text-2xl md:text-4xl font-black text-yellow/10 italic hover:text-white/40 transition-colors cursor-default">
                {league}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
