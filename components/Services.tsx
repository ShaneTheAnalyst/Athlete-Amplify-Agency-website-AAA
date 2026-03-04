
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Mic, Handshake, Smartphone, ArrowRight, Crown } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Personal Brand Identity",
      desc: "Comprehensive visual and narrative identity development that earns fan loyalty and commercial interest.",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Elite Media Training",
      desc: "Expert PR coaching to help you master interviews, press conferences, and high-pressure public appearances.",
      icon: <Mic className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Commercial Deal Sourcing",
      desc: "Global network access to top-tier brands for sponsorships, endorsements, and collaborative collections.",
      icon: <Handshake className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Elite Enterprise Marketing",
      desc: "Our most exclusive tier for global icons. Full brand identity, luxury management, and legacy building.",
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      highlight: true
    },
    {
      title: "Social Media Dominance",
      desc: "Data-driven content strategy and management to grow your digital footprint across all major platforms.",
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Strategic <br /> Infrastructure</h2>
            <p className="text-gray-400 text-lg">We provide world-class athletes with the strategy and resources needed to maximize their market value globally.</p>
          </div>
          <Link to="/services" className="px-8 py-4 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-400 transition-all flex items-center gap-2">
            View All Packages <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              id={`service-card-${idx}`} 
              className={`group p-8 rounded-3xl border transition-all hover:-translate-y-2 flex flex-col ${
                service.highlight 
                  ? 'bg-yellow-500/10 border-yellow-500/30' 
                  : 'bg-white/5 border-white/10 hover:border-yellow-500/50'
              }`}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.desc}</p>
              
              <div className="mt-auto">
                <div className={`h-px w-0 group-hover:w-full transition-all duration-500 ${
                  service.highlight ? 'bg-yellow-500 w-full' : 'bg-yellow-500'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
