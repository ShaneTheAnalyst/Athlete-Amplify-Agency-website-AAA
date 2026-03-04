
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComparisonToggle: React.FC = () => {
  const [showNegatives, setShowNegatives] = useState(false);

  const positives = [
    { title: "Personalized Strategy", desc: "No two athletes are the same. We build custom roadmaps based on your unique career goals." },
    { title: "24/7 Priority Support", desc: "Our team is available round-the-clock for global time zones and immediate crisis management." },
    { title: "Data-Led Insights", desc: "We use advanced analytics to track your brand growth and audience sentiment accurately." }
  ];

  const negatives = [
    { title: "Cookie-Cutter Marketing", desc: "Agencies that reuse the same basic strategies for every player on their roster." },
    { title: "Delayed Responses", desc: "Waiting days for replies while opportunities slip away to more responsive competitors." },
    { title: "Opaque Performance", desc: "Vague reporting that doesn't show real ROI on your personal marketing investments." }
  ];

  return (
    <section className="py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-8 mb-12">
            <span className={`text-2xl md:text-4xl font-bold tracking-tight transition-all uppercase ${!showNegatives ? 'text-yellow-500' : 'text-gray-600'}`}>WE DO</span>
            <button 
              onClick={() => setShowNegatives(!showNegatives)}
              className="w-24 h-12 rounded-full bg-zinc-900 p-1.5 relative transition-all border border-white/10"
            >
              <div className={`w-9 h-9 rounded-full shadow-lg transition-all absolute top-1 ${showNegatives ? 'translate-x-12 bg-red-500' : 'translate-x-0 bg-yellow-500'}`}></div>
            </button>
            <span className={`text-2xl md:text-4xl font-bold tracking-tight transition-all uppercase ${showNegatives ? 'text-red-500' : 'text-gray-600'}`}>OTHERS DON'T</span>
          </div>
          
          <h2 className="text-xl md:text-2xl text-gray-400 text-center max-w-3xl font-light">
            {showNegatives 
              ? "Many agencies fail to provide the attention elite players deserve. Don't be just another number in a crowded roster." 
              : "We focus on a select roster of world-class talent to ensure peak performance for every athlete we represent."}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={showNegatives ? 'negatives' : 'positives'}
              className="contents"
            >
              {(showNegatives ? negatives : positives).map((item, idx) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-10 rounded-3xl border transition-all duration-500 ${showNegatives ? 'border-red-500/20 bg-red-500/5' : 'border-yellow-500/20 bg-yellow-500/5'}`}
                >
                  <h3 className={`text-2xl font-bold mb-4 uppercase tracking-tighter ${showNegatives ? 'text-red-500' : 'text-yellow-500'}`}>{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ComparisonToggle;
