import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Core ignites (0.4s)
    const t1 = setTimeout(() => setStage(1), 400); 
    // Stage 2: Rings expand (1.2s)
    const t2 = setTimeout(() => setStage(2), 1200); 
    // Stage 3: Typography appears (2.2s)
    const t3 = setTimeout(() => setStage(3), 2200); 
    // Stage 4: Exit — curtain pulls up (4s)
    const t4 = setTimeout(() => setStage(4), 4000); 
    // Stage 5: Unmount (5s)
    const t5 = setTimeout(() => onComplete(), 5000); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

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
          
          {/* Deep ambient background pulse */}
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

        {/* Brand Text */}
        <div className="flex flex-col items-center mt-8 md:mt-10 relative z-10 w-full">
          {/* commIN logo text */}
          <div 
            className={`font-serif text-3xl md:text-4xl transition-all duration-[3000ms] will-change-transform
              ${stage >= 3 ? 'opacity-100 translate-y-0 tracking-[0.05em]' : 'opacity-0 translate-y-8 tracking-[0.2em] blur-sm'}
              ${stage === 4 ? 'opacity-0' : ''}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          >
            <span className="text-stone-900">comm</span><span className="text-amber-700">IN</span><span className="text-stone-400 font-light">.</span>
          </div>
          
          {/* Tagline */}
          <div 
            className={`text-stone-400 text-[10px] md:text-xs uppercase font-medium mt-4 transition-all duration-[2000ms] delay-300
              ${stage >= 3 ? 'opacity-100 tracking-[0.3em] md:tracking-[0.4em]' : 'opacity-0 tracking-widest'}
              ${stage === 4 ? 'opacity-0' : ''}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          >
            Commitment · Communication · Communion
          </div>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
