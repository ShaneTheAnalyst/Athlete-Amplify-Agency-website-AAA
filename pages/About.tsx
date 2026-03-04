
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, TrendingUp, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Global Reach', value: '500M+', icon: Globe },
    { label: 'Active Athletes', value: '40+', icon: Users },
    { label: 'Brand Deals', value: '$250M+', icon: TrendingUp },
    { label: 'Global Brand Network', value: '75+', icon: Award },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">The Agency of the Future.</h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Athlete Amplify Agency was founded on a single principle: professional athletes are more than just players—they are global brands.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We provide the strategic infrastructure, creative direction, and commercial network required to transform on-field success into long-term, generational influence. Our team of experts spans sports management, digital marketing, and luxury brand positioning.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
                alt="Athlete Amplify Agency Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl hidden md:block">
              <p className="text-black font-bold text-4xl">500M+</p>
              <p className="text-gray-500 uppercase tracking-widest text-xs">Total Audience Reached</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-gray-400" />
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/5 rounded-3xl p-12 md:p-20 border border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-2xl text-gray-300 italic font-light leading-relaxed">
              "To empower professional athletes with the tools, network, and strategy to build a legacy that transcends the game."
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
