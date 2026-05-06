import React, { useEffect, useState, useRef } from 'react';

/**
 * WelcomeScreen — the two-phase arrival:
 *   Phase 1  "commIN"        — already visible behind the Preloader, lingers ~3.5s once active
 *   Phase 2  "Here you are." — fades in as commIN fades out, then the whole screen fades away
 *
 *   Renders behind the Preloader (z-99 vs z-100). "commIN" is shown immediately
 *   so there's no gap when the Preloader curtain lifts.
 */
const WelcomeScreen = ({ isActive, onComplete }) => {
  // 1 = commIN showing, 2 = "Here you are.", 3 = exit
  const [phase, setPhase] = useState(1);
  const timersRef = useRef([]);

  useEffect(() => {
    if (!isActive) return;

    // isActive just became true → the Preloader finished.
    // commIN is already on screen (phase 1). Now start the timed sequence.
    const p2 = setTimeout(() => setPhase(2), 3500);
    const p3 = setTimeout(() => setPhase(3), 7000);
    const p4 = setTimeout(() => onComplete(), 8500);

    timersRef.current = [p2, p3, p4];

    return () => timersRef.current.forEach(clearTimeout);
  }, [isActive, onComplete]);

  const smoothEase = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div
      className={`fixed inset-0 z-[99] flex items-center justify-center bg-brand-cream transition-all duration-[1500ms]
        ${phase === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
      style={{ transitionTimingFunction: smoothEase }}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full">

        {/* ─── Phase 1: "commIN" — visible from mount ─── */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-[1800ms]"
          style={{
            transitionTimingFunction: smoothEase,
            opacity: phase === 1 ? 1 : 0,
            transform: phase === 1 ? 'scale(1) translateY(0)' : phase >= 2 ? 'scale(1.05) translateY(-20px)' : 'scale(0.95) translateY(10px)',
          }}
        >
          <div className="flex flex-col items-center">
            {/* The word "commIN" — prominent, serif, massive */}
            <h1
              className="font-serif font-normal tracking-tight text-stone-800 select-none"
              style={{
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              comm<span className="text-brand-gold">i</span><span className="text-stone-900">N</span>
            </h1>

            {/* Subtle gold dot beneath */}
            <div
              className="mt-8 transition-all duration-[2000ms]"
              style={{
                transitionTimingFunction: smoothEase,
                opacity: phase === 1 ? 1 : 0,
                transform: phase === 1 ? 'scale(1)' : 'scale(0)',
              }}
            >
              <div className="w-2 h-2 rounded-full bg-brand-gold/50"></div>
            </div>
          </div>
        </div>

        {/* ─── Phase 2: "Here you are." ─── */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-[2000ms]"
          style={{
            transitionTimingFunction: smoothEase,
            opacity: phase >= 2 && phase < 3 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="flex flex-col items-center text-center px-6">
            <p
              className="font-serif font-normal text-stone-700 select-none"
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 3rem)',
                lineHeight: 1.4,
                letterSpacing: '0.01em',
              }}
            >
              Here you are.
            </p>

            {/* Thin gold line expanding */}
            <div
              className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent transition-all duration-[2500ms]"
              style={{
                transitionTimingFunction: smoothEase,
                width: phase >= 2 ? '120px' : '0px',
              }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WelcomeScreen;
