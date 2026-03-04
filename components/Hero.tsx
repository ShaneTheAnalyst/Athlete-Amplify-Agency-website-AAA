
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    if (typeof gsap !== 'undefined') {
      // @ts-ignore
      gsap.fromTo(".hero-animate", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold mb-8 tracking-[0.2em] uppercase text-yellow-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Elite Global Marketing Management
          </div>
          
          <h1 className="hero-animate text-6xl md:text-[12vw] font-black tracking-tighter leading-[0.8] mb-10 uppercase transform -skew-x-6">
            Amplify Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-yellow-200">Legacy</span>
          </h1>
          
          <p className="hero-animate text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
            We empower professional athletes to transcend the pitch. Strategic personal branding and global commercial partnerships for the world's elite players.
          </p>

          <div className="hero-animate flex flex-wrap items-center justify-center gap-6 mb-20">
            <Link 
              to="/services" 
              className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all active:scale-95 shadow-xl shadow-yellow-500/20"
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="border border-white/20 hover:border-white/40 px-10 py-4 rounded-full font-bold text-lg transition-all active:scale-95 backdrop-blur-sm"
            >
              Free Consultation
            </Link>
          </div>
          
          <div className="hero-animate flex flex-col items-center justify-center gap-4">
            <div className="w-px h-24 bg-gradient-to-b from-yellow-500 to-transparent"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-yellow-500 font-bold">Scroll to Explore</span>
          </div>

          <div className="hero-animate mt-24 pt-12 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600 mb-8">Trusted by athletes from the world's top leagues</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
