import React, { useEffect, useRef, useState } from 'react';
import BrushHighlight from './BrushHighlight';

const steps = [
  {
    number: "01",
    title: "The Silent Pause",
    desc: "We begin not with action, but with stillness. Creating the space to sense where energy is being held and what the system is truly asking for."
  },
  {
    number: "02",
    title: "The Unravelling",
    desc: "Gently examining the inner imbalances. Where is energy bound? What patterns have quietly taken root beneath the surface?"
  },
  {
    number: "03",
    title: "The Integration",
    desc: "Releasing bound energy and restoring systemic order. The inner architecture begins to realign with clarity and purpose."
  }
];

const GuidanceWork = () => {
  const pathRef = useRef(null);
  const sectionRef = useRef(null);
  const [pathProgress, setPathProgress] = useState(0);
  const [stepsVisible, setStepsVisible] = useState([false, false, false]);

  // Scroll-driven path draw
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowH = window.innerHeight;

      // Start drawing when section enters, finish when section leaves
      const start = windowH * 0.6;
      const end = -sectionHeight + windowH * 0.4;
      const progress = Math.max(0, Math.min(1, (start - sectionTop) / (start - end)));
      
      setPathProgress(progress);

      // Reveal each step at specific thresholds
      setStepsVisible([
        progress > 0.1,
        progress > 0.4,
        progress > 0.7,
      ]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SVG path for the flowing curve
  const pathD = "M 50 0 C 50 80, 80 120, 50 200 S 20 280, 50 360 S 80 440, 50 520 S 20 600, 50 680 S 80 760, 50 840";
  const pathLength = 1200;

  return (
    <section id="guidance-work" ref={sectionRef} className="py-32 bg-stone-100 px-6 relative z-10 overflow-hidden">
      {/* Background glow — Optimized with radial-gradient */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(180, 83, 9, 0.08) 0%, rgba(180, 83, 9, 0) 70%)',
          transform: 'translateZ(0)' 
        }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-brand-gold/80 text-sm uppercase tracking-brand-wide mb-6 font-semibold">
            The Process
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-wide group leading-tight mb-6">
            Guidance Work: <BrushHighlight className="italic text-brand-gold">Releasing Bound Energy</BrushHighlight>
          </h2>
        </div>

        {/* Approach & Process intro */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28 space-y-6">
          <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base tracking-wide">
            <span className="text-brand-stone font-serif italic">The Approach:</span> Most approaches begin with the visible problem; this work begins where energy is held in inner imbalances.
          </p>
          <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base tracking-wide">
            <span className="text-brand-stone font-serif italic">The Process:</span> To release this energy, the work begins within—at the core—the life potential.
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-20">
          <p className="text-brand-gold/60 text-xs uppercase tracking-brand-wide font-semibold">The "Unhurried Path"</p>
        </div>

        {/* Steps with animated path */}
        <div className="relative">
          
          {/* SVG Flowing Path — centered vertical */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[100px] hidden md:block pointer-events-none z-0">
            <svg 
              ref={pathRef}
              viewBox="0 0 100 840" 
              fill="none" 
              className="w-full h-full" 
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              {/* Background trail */}
              <path 
                d={pathD} 
                stroke="rgba(180,83,9,0.08)" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
              />
              {/* Animated drawing path */}
              <path 
                d={pathD} 
                stroke="rgba(180,83,9,0.35)" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
                strokeDasharray={pathLength}
                strokeDashoffset={pathLength * (1 - pathProgress)}
                style={{ transition: 'stroke-dashoffset 0.1s linear' }}
              />
              {/* Glowing head dot */}
              <circle
                r="3"
                fill="rgba(180,83,9,0.5)"
                style={{
                  offsetPath: `path('${pathD}')`,
                  offsetDistance: `${pathProgress * 100}%`,
                  filter: 'drop-shadow(0 0 6px rgba(180,83,9,0.4))',
                  transition: 'offset-distance 0.1s linear',
                }}
              />
            </svg>
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] md:hidden z-0">
            <div className="w-full h-full bg-amber-700/8 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-full bg-amber-700/30"
                style={{ 
                  height: `${pathProgress * 100}%`,
                  transition: 'height 0.15s linear',
                }}
              ></div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-28 md:space-y-36 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-20 transition-all duration-700 ${
                  stepsVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                style={{ transitionDelay: '100ms' }}
              >
                
                {/* Number with dot marker */}
                <div className="relative text-6xl sm:text-7xl md:text-8xl font-serif text-stone-300/80 font-light shrink-0">
                  {step.number}
                  {/* Step dot on path */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-brand-gold/40 transition-all duration-700 ${
                    stepsVisible[i] ? 'bg-brand-gold/20 scale-100' : 'bg-transparent scale-0'
                  } ${i % 2 !== 0 ? 'md:-left-14' : 'md:-right-14'} hidden md:block`}></div>
                </div>

                {/* Mobile connecting pulse */}
                <div className={`w-2 h-2 rounded-full transition-all duration-500 md:hidden ${stepsVisible[i] ? 'bg-brand-gold/30 scale-100' : 'bg-transparent scale-0'}`}></div>

                {/* Text content */}
                <div className={`text-center ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'} max-w-lg px-2`}>
                  <h3 className="text-2xl md:text-3xl font-serif text-amber-950 mb-6">{step.title}</h3>
                  <p className="text-stone-700 font-light leading-relaxed tracking-wide text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GuidanceWork;
