import React, { useEffect, useState, useRef } from 'react';

/**
 * WelcomeScreen — simplified arrival:
 *   Phase 1  "commIN" — already visible behind the Preloader, lingers ~3.5s once active
 *   Phase 3  Exit      — the whole screen fades away
 *
 *   Renders behind the Preloader (z-99 vs z-100). "commIN" is shown immediately
 *   so there's no gap when the Preloader curtain lifts.
 */
const WelcomeScreen = ({ isActive, onComplete }) => {
  // 1 = commIN showing, 3 = exit
  const [phase, setPhase] = useState(1);
  const timersRef = useRef([]);

  useEffect(() => {
    if (!isActive) return;

    // isActive just became true → the Preloader finished.
    // commIN is already on screen (phase 1). Now start the timed sequence.
    // Skip phase 2 ("Here you are.") and go straight to exit (phase 3)
    const p3 = setTimeout(() => setPhase(3), 3500);
    const p4 = setTimeout(() => onComplete(), 5000);

    timersRef.current = [p3, p4];

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
            transform: phase === 1 ? 'scale(1) translateY(0)' : 'scale(1.05) translateY(-20px)',
          }}
        >
          <div className="flex flex-col items-center">
            <img
              src="/logo/CommIN Loader.png"
              alt="commIN"
              className="w-[350px] sm:w-[500px] md:w-[650px] lg:w-[800px] h-auto object-contain select-none"
            />

            {/* Subtle gold dot beneath */}
            <div
              className="mt-10 transition-all duration-[2000ms]"
              style={{
                transitionTimingFunction: smoothEase,
                opacity: phase === 1 ? 1 : 0,
                transform: phase === 1 ? 'scale(1)' : 'scale(0)',
              }}
            >
              <div className="w-2 h-2 rounded-full bg-brand-gold/40"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WelcomeScreen;
