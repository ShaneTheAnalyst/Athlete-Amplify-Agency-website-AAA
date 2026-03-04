import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, Shield, Star, Crown } from 'lucide-react';
import { SERVICE_PACKAGES } from '../constants';

const ServicesPreview: React.FC = () => {
  const getIcon = (tier: string | number) => {
    switch (tier) {
      case 3: return <Zap className="w-6 h-6 text-yellow-500" />;
      case 2: return <Shield className="w-6 h-6 text-yellow-500" />;
      case 1: return <Star className="w-6 h-6 text-yellow-500" />;
      case 'elite': return <Crown className="w-6 h-6 text-yellow-500" />;
      default: return <Star className="w-6 h-6 text-yellow-500" />;
    }
  };

  return (
    <section className="py-32 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Management <br /> Tiers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Select the tier that aligns with your career stage and ambitions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_PACKAGES.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              id={`preview-package-${pkg.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border ${pkg.tier === 'elite' ? 'border-yellow-500/30 bg-yellow-500/5' : 'border-white/10 bg-white/5'} relative flex flex-col`}
            >
              {pkg.tier === 'elite' && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Exclusive</span>
              )}
              <div className="mb-6">{getIcon(pkg.tier)}</div>
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold text-yellow-500 mb-4">${pkg.price.toLocaleString()}</div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <Check className="w-4 h-4 text-yellow-500 mr-2 shrink-0" />
                    <span className="truncate">{f}</span>
                  </li>
                ))}
                <li className="text-xs text-gray-500 italic">+ {pkg.features.length - 3} more features</li>
              </ul>
              <Link 
                to="/services" 
                className={`w-full py-4 rounded-xl text-center block font-bold transition-all ${pkg.tier === 'elite' ? 'bg-yellow-500 text-black hover:bg-yellow-400' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-yellow-500 font-bold hover:underline uppercase tracking-widest text-sm">
            Compare all packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
