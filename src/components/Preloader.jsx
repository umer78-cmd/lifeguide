import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Core ignites (0.6s)
    const t1 = setTimeout(() => setStage(1), 600);
    // Stage 2: Rings expand (2s)
    const t2 = setTimeout(() => setStage(2), 2000);
    // Stage 3: Dot pulses at full presence (3.5s) — the "linger"
    const t3 = setTimeout(() => setStage(3), 3500);
    // Stage 4: Exit — curtain pulls up (6s)
    const t4 = setTimeout(() => setStage(4), 6000);
    // Stage 5: Unmount (7.5s)
    const t5 = setTimeout(() => onComplete(), 7500);

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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-stone-50 transition-all duration-[1500ms]
        ${stage === 4 ? '-translate-y-full rounded-b-[100%] pointer-events-none' : 'translate-y-0 rounded-b-none'}
      `}
      style={{ transitionTimingFunction: smoothEase }}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full">

        {/* The Portal Core */}
        <div className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[360px] md:h-[360px]">

          {/* Deep ambient background pulse */}
          <div
            className={`absolute w-[400px] h-[400px] md:w-[560px] md:h-[560px] bg-amber-500/10 rounded-full blur-[80px] transition-all duration-[4000ms] will-change-transform
              ${stage >= 1 ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}
              ${stage === 4 ? 'opacity-0 scale-[3]' : ''}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          ></div>

          {/* Outer elegant slow-rotating dashed ring */}
          <div
            className={`absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full border border-dashed border-amber-600/25 transition-all duration-[5000ms] will-change-transform
              ${stage >= 2 ? 'opacity-100 scale-100 rotate-[180deg]' : 'opacity-0 scale-50 rotate-0'}
              ${stage === 4 ? 'opacity-0 scale-[2]' : ''}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          ></div>

          {/* Inner solid thin ring, rotating opposite */}
          <div
            className={`absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-amber-600/30 transition-all duration-[4000ms] will-change-transform
              ${stage >= 2 ? 'opacity-100 scale-100 -rotate-[120deg]' : 'opacity-0 scale-0 rotate-0'}
              ${stage === 4 ? 'opacity-0 scale-[2]' : ''}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          ></div>

          {/* ★ The Central Dot — NOW MUCH BIGGER ★ */}
          <div
            className={`absolute rounded-full transition-all will-change-transform
              ${stage >= 1 && stage < 3
                ? 'w-4 h-4 md:w-5 md:h-5 opacity-100 scale-100'
                : stage >= 3 && stage < 4
                  ? 'w-6 h-6 md:w-8 md:h-8 opacity-100 scale-100'
                  : stage >= 4
                    ? 'w-6 h-6 md:w-8 md:h-8 opacity-0 scale-[6]'
                    : 'w-4 h-4 md:w-5 md:h-5 opacity-0 scale-0'
              }
            `}
            style={{
              transitionTimingFunction: smoothEase,
              transitionDuration: stage >= 4 ? '1500ms' : '2000ms',
              backgroundColor: '#b45309',
              boxShadow: stage >= 3
                ? '0 0 40px rgba(180, 83, 9, 0.5), 0 0 80px rgba(180, 83, 9, 0.25)'
                : '0 0 24px rgba(245, 158, 11, 0.5)',
            }}
          ></div>

          {/* Breathing pulse ring around the dot (stage 3 linger) */}
          <div
            className={`absolute w-12 h-12 md:w-16 md:h-16 rounded-full border border-amber-600/20 transition-all duration-[2000ms] will-change-transform
              ${stage >= 3 && stage < 4 ? 'opacity-100 scale-100 animate-ping-slow' : 'opacity-0 scale-0'}
            `}
            style={{ transitionTimingFunction: smoothEase }}
          ></div>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
