
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICE_PACKAGES } from '../constants';
import { Check, Star, Shield, Zap, Crown } from 'lucide-react';

const ServicesPage: React.FC = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-200 to-white">
            Elite Management Tiers
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From emerging talent to global icons, we provide the strategic infrastructure to amplify your influence and maximize your commercial value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              id={`service-tier-${pkg.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                pkg.tier === 'elite' 
                  ? 'bg-gradient-to-b from-amber-950/20 to-black border-amber-500/30' 
                  : 'bg-white/5 border-white/10'
              } hover:border-white/30 transition-all group`}
            >
              {pkg.tier === 'elite' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Exclusive
                </div>
              )}
              
              <div className="mb-6">
                {getIcon(pkg.tier)}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold">${pkg.price.toLocaleString()}</span>
                <span className="text-gray-500 text-sm">/ {pkg.duration}</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-8 min-h-[60px]">
                {pkg.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {pkg.id === 'standard' && (
                <div className="mt-4">
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Quick Buy</p>
                  <form action="https://www.paypal.com/ncp/payment/6BL8HB8PFU93A" method="post" target="_blank" className="flex flex-col items-center gap-2">
                    <input 
                      type="submit" 
                      value="Pay Now" 
                      className="w-full bg-[#FFD140] text-black h-[42px] rounded-[0.25rem] font-bold text-base cursor-pointer hover:bg-[#e6bc39] transition-colors"
                    />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" className="h-6" />
                    <section className="text-[0.75rem] text-gray-500 flex items-center gap-1">
                      Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="h-[0.875rem]" />
                    </section>
                  </form>
                </div>
              )}

              {pkg.id === 'growth' && (
                <div className="mt-4">
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Quick Buy</p>
                  <form action="https://www.paypal.com/ncp/payment/4L4GTKDHQY3FA" method="post" target="_blank" className="flex flex-col items-center gap-2">
                    <input 
                      type="submit" 
                      value="Pay Now" 
                      className="w-full bg-[#FFD140] text-black h-[42px] rounded-[0.25rem] font-bold text-base cursor-pointer hover:bg-[#e6bc39] transition-colors"
                    />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" className="h-6" />
                    <section className="text-[0.75rem] text-gray-500 flex items-center gap-1">
                      Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="h-[0.875rem]" />
                    </section>
                  </form>
                </div>
              )}

              {pkg.id === 'premium' && (
                <div className="mt-4">
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Quick Buy</p>
                  <form action="https://www.paypal.com/ncp/payment/JZERMDLPACB5Q" method="post" target="_blank" className="flex flex-col items-center gap-2">
                    <input 
                      type="submit" 
                      value="Pay Now" 
                      className="w-full bg-[#FFD140] text-black h-[42px] rounded-[0.25rem] font-bold text-base cursor-pointer hover:bg-[#e6bc39] transition-colors"
                    />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" className="h-6" />
                    <section className="text-[0.75rem] text-gray-500 flex items-center gap-1">
                      Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="h-[0.875rem]" />
                    </section>
                  </form>
                </div>
              )}

              {pkg.id === 'elite-enterprise' && (
                <div className="mt-4">
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Quick Buy</p>
                  <form action="https://www.paypal.com/ncp/payment/3XR23QAS4A4BL" method="post" target="_blank" className="flex flex-col items-center gap-2">
                    <input 
                      type="submit" 
                      value="Pay Now" 
                      className="w-full bg-[#FFD140] text-black h-[42px] rounded-[0.25rem] font-bold text-base cursor-pointer hover:bg-[#e6bc39] transition-colors"
                    />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" className="h-6" />
                    <section className="text-[0.75rem] text-gray-500 flex items-center gap-1">
                      Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="h-[0.875rem]" />
                    </section>
                  </form>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
