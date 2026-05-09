import React, { useState, useEffect, useRef } from 'react';

const InnerActivation = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Bulletproof real-time layout and scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height;
      const top = rect.top;

      // scrollableDistance is the height the container stays stuck in viewport
      const scrollableDistance = totalHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      // Map progress exactly from 0 (start of sticky phase) to 1 (end of sticky phase)
      const currentProgress = Math.max(0, Math.min(1, -top / scrollableDistance));
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial calculation with a slight delay for lazy rendering
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, []);

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

  const totalPhrases = phrases.length;
  const seg = 1 / totalPhrases; // Segment width for each phrase

  return (
    <section 
      ref={containerRef} 
      id="inner-activation" 
      className="relative bg-brand-cream overflow-visible z-10 w-full" 
      style={{ height: '800vh' }} // Slowed down scroll speed further for a deeply peaceful, cinematic reveal
    >
      {/* Sticky container that keeps the viewport locked while scrolling through the sequence */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        <div className="max-w-4xl mx-auto w-full text-center relative flex items-center justify-center h-48 md:h-64">
          {phrases.map((phrase, i) => {
            const start = i * seg;
            const end = (i + 1) * seg;

            let opacity = 0;
            let y = 24;

            if (i === 0) {
              // First phrase is visible at the start, and fades out in the last 20% of its segment
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
              // Subsequent phrases fade in (first 20% of segment), hold, then fade out (last 20% of segment)
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
