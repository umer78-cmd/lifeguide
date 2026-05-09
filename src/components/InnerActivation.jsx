import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const InnerActivation = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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

  // Bulletproof real-time layout and scroll listener - Only active for desktop
  useEffect(() => {
    if (!isDesktop) return;

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
  }, [isDesktop]);

  const phrases = [
    "The conditions we live in are changing.",
    "Not visibly at first -",
    "but in how deeply we are affected.",
    "You have been maintaining stability.",
    "Compensating.",
    "Adapting.",
    "It worked.",
    "It no longer works the same way.",
    "Here you are.",
    "You say yes.",
    "You respond."
  ];

  // Prevent flash before device detection executes
  if (!isLoaded) {
    return <section id="inner-activation" className="h-screen bg-brand-cream" />;
  }

  // ── MOBILE/TOUCH VERSION: Full screen height per phrase, natural scrolling ──
  if (!isDesktop) {
    return (
      <section 
        id="inner-activation" 
        className="relative bg-brand-cream w-full overflow-hidden"
      >
        {phrases.map((phrase, i) => (
          <div 
            key={i} 
            className="h-[70vh] w-full flex items-center justify-center px-6 snap-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              // once: false ensures it re-fades elegantly as user scrolls back and forth
              viewport={{ once: false, margin: "-20%" }} 
              transition={{ 
                duration: 1.4, 
                ease: [0.22, 1, 0.36, 1] // Smooth ease-out
              }}
              className="max-w-lg mx-auto text-center"
            >
              <p className="text-stone-800 text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-relaxed tracking-wide">
                {phrase}
              </p>
            </motion.div>
          </div>
        ))}
        {/* Brief spacer at bottom for visual buffer */}
        <div className="h-[10vh]" />
      </section>
    );
  }

  // ── DESKTOP VERSION: Advanced Cinematic Sticky Scroll ──
  const totalPhrases = phrases.length;
  const seg = 1 / totalPhrases; 

  return (
    <section 
      ref={containerRef} 
      id="inner-activation" 
      className="relative bg-brand-cream overflow-visible z-10 w-full" 
      style={{ height: '800vh' }} 
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        <div className="max-w-4xl mx-auto w-full text-center relative flex items-center justify-center h-48 md:h-64">
          {phrases.map((phrase, i) => {
            const start = i * seg;
            const end = (i + 1) * seg;

            let opacity = 0;
            let y = 24;

            if (i === 0) {
              if (progress < seg * 0.8) {
                opacity = 1;
                y = 0;
              } else if (progress < end) {
                const t = (progress - seg * 0.8) / (seg * 0.2);
                opacity = 1 - t;
                y = -24 * t;
              } else {
                opacity = 0;
                y = -24;
              }
            } else {
              if (progress < start) {
                opacity = 0;
                y = 24;
              } else if (progress < start + seg * 0.2) {
                const t = (progress - start) / (seg * 0.2);
                opacity = t;
                y = 24 * (1 - t);
              } else if (progress < start + seg * 0.8) {
                opacity = 1;
                y = 0;
              } else if (progress < end) {
                const t = (progress - (start + seg * 0.8)) / (seg * 0.2);
                opacity = 1 - t;
                y = -24 * t;
              } else {
                opacity = 0;
                y = -24;
              }
            }

            return (
              <div
                key={i}
                style={{ 
                  opacity, 
                  transform: `translate3d(0, ${y}px, 0)`,
                  transition: 'opacity 150ms cubic-bezier(0.25, 1, 0.5, 1), transform 150ms cubic-bezier(0.25, 1, 0.5, 1)',
                  pointerEvents: opacity > 0 ? 'auto' : 'none'
                }}
                className="absolute w-full flex items-center justify-center px-4"
              >
                <p className="text-stone-800 text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-relaxed tracking-wide select-none max-w-3xl">
                  {phrase}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InnerActivation;
