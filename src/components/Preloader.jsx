import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Central star ignites (0.5s)
    const t1 = setTimeout(() => setStage(1), 500); 
    // Stage 2: Orbits and rings expand (1.5s)
    const t2 = setTimeout(() => setStage(2), 1500); 
    // Stage 3: Typography appears and expands (2.5s)
    const t3 = setTimeout(() => setStage(3), 2500); 
    // Stage 4: Portal entrance / massive scale up & blur (4.5s)
    const t4 = setTimeout(() => setStage(4), 4500); 
    // Stage 5: Unmount (5.5s)
    const t5 = setTimeout(() => onComplete(), 5500); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  // Premium easing curve for that "Apple/Cinematic" feel
  const smoothEase = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-stone-50 transition-all duration-[1200ms]
        ${stage === 4 ? '-translate-y-full rounded-b-[100%] pointer-events-none' : 'translate-y-0 rounded-b-none'}
      `}
      style={{ transitionTimingFunction: smoothEase }}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        
        {/* The Portal Core */}
        <div className="relative flex items-center justify-center w-[200px] h-[200px] md:w-[260px] md:h-[260px]">
          
          {/* Deep ambient background pulse - Breathing effect */}
          <div 
            className={`absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-amber-500/10 rounded-full blur-[60px] transition-all duration-[3000ms] will-change-transform
              ${stage >= 1 ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}
              ${stage === 4 ? 'opacity-0 scale-[3]' : ''}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          ></div>

          {/* Outer elegant slow-rotating dashed ring */}
          <div 
            className={`absolute w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full border border-dashed border-amber-600/30 transition-all duration-[4000ms] will-change-transform
              ${stage >= 2 ? 'opacity-100 scale-100 rotate-[180deg]' : 'opacity-0 scale-50 rotate-0'}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          ></div>

          {/* Inner solid thin ring, rotating opposite */}
          <div 
            className={`absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border border-amber-600/40 transition-all duration-[3000ms] will-change-transform
              ${stage >= 2 ? 'opacity-100 scale-100 -rotate-[120deg]' : 'opacity-0 scale-0 rotate-0'}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          ></div>

          {/* Central tiny star/core */}
          <div 
            className={`absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-[1500ms] will-change-transform
              ${stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
              ${stage >= 4 ? 'opacity-0 scale-[5]' : ''}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          ></div>
        </div>

        {/* Brand Text - Expanding tracking effect */}
        <div className="flex flex-col items-center mt-8 md:mt-10 relative z-10 w-full">
          <div 
            className={`text-stone-900 font-serif text-xs md:text-sm uppercase transition-all duration-[3000ms] will-change-transform
              ${stage >= 3 ? 'opacity-100 translate-y-0 tracking-[0.4em] md:tracking-[0.6em]' : 'opacity-0 translate-y-8 tracking-widest blur-sm'}
              ${stage === 4 ? 'opacity-0' : ''}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          >
            LifeGuide
          </div>
          
          <div 
            className={`text-stone-500 text-[10px] uppercase font-medium mt-4 transition-all duration-[2000ms] delay-500
              ${stage >= 3 ? 'opacity-100 tracking-[0.3em]' : 'opacity-0 tracking-widest'}
              ${stage === 4 ? 'opacity-0' : ''}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          >
            The Awakening Portal
          </div>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
