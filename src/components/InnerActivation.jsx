import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const InnerActivation = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  // Determine if current device should get the advanced cinematic scroll
  useEffect(() => {
    const checkDevice = () => {
      // Restore cinematic scroll for laptops with touchscreens by focusing on screen width (>= 1024px)
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDevice();
    setIsLoaded(true);

    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Bulletproof real-time layout and scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height;
      const top = rect.top;

      const scrollableDistance = totalHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const currentProgress = Math.max(0, Math.min(1, -top / scrollableDistance));
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const phrases = [
    t('inneractivation.phrase1'),
    t('inneractivation.phrase2'),
    t('inneractivation.phrase3'),
    t('inneractivation.phrase4'),
    t('inneractivation.phrase5'),
    t('inneractivation.phrase6'),
    t('inneractivation.phrase7'),
    t('inneractivation.phrase8')
  ];

  // Prevent flash before device detection executes
  if (!isLoaded) {
    return <section id="inner-activation" className="h-screen bg-brand-cream" />;
  }

  // ── UNIFIED CINEMATIC STICKY SCROLL ──
  const totalPhrases = phrases.length;
  
  // Height: Desktop stays cinematic (800vh), Mobile is now a snappy conveyor (300vh)
  const containerHeight = isDesktop ? '800vh' : '300vh';
  const seg = 1 / totalPhrases;

  return (
    <section 
      ref={containerRef} 
      id="inner-activation" 
      className="relative bg-brand-cream overflow-visible z-10 w-full" 
      style={{ height: containerHeight }} 
    >
      <div className="sticky top-0 h-[100svh] w-full flex items-center justify-center overflow-hidden px-6">
        <div className="max-w-4xl mx-auto w-full text-center relative flex items-center justify-center h-64 md:h-80">
          
          {isDesktop ? (
            // ── DESKTOP: Individual Cinematic Reveal ──
            phrases.map((phrase, i) => {
              const start = i * seg;
              const end = (i + 1) * seg;
              let opacity = 0;
              let y = 30;

              if (i === 0) {
                if (progress < seg * 0.8) { opacity = 1; y = 0; }
                else if (progress < end) {
                  const t = (progress - seg * 0.8) / (seg * 0.2);
                  opacity = 1 - t; y = -30 * t;
                }
              } else {
                if (progress < start) { opacity = 0; y = 30; }
                else if (progress < start + seg * 0.2) {
                  const t = (progress - start) / (seg * 0.2);
                  opacity = t; y = 30 * (1 - t);
                } else if (progress < start + seg * 0.8) { opacity = 1; y = 0; }
                else if (progress < end) {
                  const t = (progress - (start + seg * 0.8)) / (seg * 0.2);
                  opacity = 1 - t; y = -30 * t;
                }
              }

              return (
                <div
                  key={i}
                  style={{ 
                    opacity, 
                    transform: `translate3d(0, ${y}px, 0)`,
                    transition: 'opacity 300ms cubic-bezier(0.22, 1, 0.36, 1), transform 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                    pointerEvents: opacity > 0.5 ? 'auto' : 'none'
                  }}
                  className="absolute w-full flex items-center justify-center"
                >
                  <p className="text-stone-800 text-3xl md:text-5xl font-serif font-normal leading-relaxed tracking-wide select-none max-w-3xl">
                    {phrase}
                  </p>
                </div>
              );
            })
          ) : (
            // ── MOBILE: Narrative Feed (Corrected Offset Logic) ──
            <div className="w-full relative h-[140px] flex items-center justify-center">
              <div 
                className="w-full transition-transform duration-500 ease-out will-change-transform"
                style={{ 
                  transform: `translate3d(0, ${(((totalPhrases - 1) * 140) / 2) - (progress * (totalPhrases - 1) * 140)}px, 0)` 
                }}
              >
                {phrases.map((phrase, i) => {
                  const phraseProgress = i / (totalPhrases - 1);
                  const distance = Math.abs(progress - phraseProgress);
                  
                  // Tighter window for mobile active state
                  const isActive = distance < (1 / (totalPhrases * 2)); 
                  const opacity = isActive ? 1 : Math.max(0.1, 1 - (distance * 4));
                  const scale = isActive ? 1 : 0.9;
                  const color = isActive ? '#b45309' : '#57534e';
                  
                  return (
                    <div 
                      key={i} 
                      className="h-[140px] flex items-center justify-center transition-all duration-500 px-6 text-center"
                      style={{ opacity, transform: `scale(${scale})` }}
                    >
                      <p 
                        className={`text-2xl sm:text-3xl font-serif leading-relaxed tracking-wide transition-colors duration-500 ${isActive ? 'font-bold' : 'font-normal'}`}
                        style={{ color }}
                      >
                        {phrase}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default InnerActivation;
