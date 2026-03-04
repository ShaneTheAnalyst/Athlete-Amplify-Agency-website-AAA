
import React, { useEffect, useRef } from 'react';

const StrategySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // @ts-ignore
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    });

    tl.to(text1Ref.current, {
      backgroundPositionX: '0%',
      duration: 1
    }).to(text2Ref.current, {
      backgroundPositionX: '0%',
      duration: 1
    }, "-=0.5");
  }, []);

  return (
    <section id="strategy" ref={sectionRef} className="py-40 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 
          ref={text1Ref}
          className="text-4xl md:text-7xl font-black mb-4 tracking-tighter bg-gradient-to-r from-yellow-500 via-yellow-200 to-white/10 bg-[length:200%_100%] bg-[100%_0%] bg-clip-text text-transparent uppercase"
        >
          Elite Minds Dominate.
        </h2>
        <h2 
          ref={text2Ref}
          className="text-4xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-yellow-500 via-yellow-200 to-white/10 bg-[length:200%_100%] bg-[100%_0%] bg-clip-text text-transparent uppercase"
        >
          Work with the best.
        </h2>
        
        <div className="mt-20 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
            We support ambitious professional athletes with intelligent branding, global image rights management, and high-impact commercial deal-making. Building icons that last beyond the 90 minutes.
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Personal Brand", "Digital Strategy", "Commercial Rights", "Public Relations", "Crisis Management", "Legacy Building"].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
