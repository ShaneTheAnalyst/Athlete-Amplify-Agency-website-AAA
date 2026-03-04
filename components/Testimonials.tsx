
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase">Player <br /><span className="text-yellow-500">Voices</span></h2>
            <div className="relative">
              <span className="text-8xl text-yellow-500/20 absolute -top-10 -left-6 font-serif">"</span>
              <p className="text-2xl md:text-3xl font-medium leading-tight relative z-10 text-gray-200">
                Athlete Amplify took my global brand to the next level. Their ability to bridge the gap between football and lifestyle is unmatched. They don't just manage my brand; they amplify my legacy.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-200 p-[2px]">
                <img 
                  src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=200" 
                  alt="Neymar Jr" 
                  className="w-full h-full rounded-full object-cover grayscale" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl uppercase tracking-tighter">Neymar Jr.</h4>
                <p className="text-gray-500 font-semibold text-sm">Global Icon | Santos FC & Brazil</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Combined Follower Growth", val: "+210M" },
              { label: "Commercial Deals Secured", val: "50+" },
              { label: "Global Brand Partners", val: "45+" },
              { label: "Player Market Value Increase", val: "45%" }
            ].map(stat => (
              <div key={stat.label} className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
                <div className="text-3xl md:text-5xl font-black text-yellow-500 mb-2">{stat.val}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
