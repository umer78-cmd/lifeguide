import React from 'react';
import BrushHighlight from './BrushHighlight';

const marqueeWords = ['The Core', 'Systemic Change', 'Life Potential', 'Inner Architecture', 'Deep Order', 'Clarity'];

const QuoteBanner = () => {
  return (
    <section id="philosophy" className="py-28 md:py-36 bg-stone-100 px-6 relative z-10 flex flex-col items-center justify-center text-center overflow-hidden shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.05)]">
      
      {/* Reverse Marquee at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden border-b border-amber-700/20 z-0" style={{ backgroundColor: 'rgba(180, 83, 9, 0.12)' }}>
        <div className="marquee-strip marquee-reverse py-5 md:py-6">
          {[...Array(2)].map((_, copyIndex) => (
            <div key={copyIndex} className="flex shrink-0 items-center" aria-hidden={copyIndex === 1 ? 'true' : undefined}>
              {marqueeWords.map((word, i) => (
                <React.Fragment key={`mr${copyIndex}-${i}`}>
                  <span className="shrink-0 px-6 md:px-10 text-stone-600/60 font-serif text-base md:text-lg tracking-[0.25em] uppercase transition-colors duration-500 hover:text-amber-800 cursor-default">
                    {word}
                  </span>
                  <span className="shrink-0 text-amber-700/30 text-xs select-none">◆</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Subtle Background Glow — Optimized with radial-gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[200px] pointer-events-none animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.1) 0%, rgba(180, 83, 9, 0) 70%)' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Kicker */}
        <p className="text-amber-700/80 text-sm uppercase tracking-[0.3em] font-semibold mb-8">
          The Threshold
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.3] md:leading-snug tracking-wide text-balance px-2 mb-10 md:mb-14">
          Everything else has reached its <BrushHighlight className="italic text-amber-700 font-light">limit.</BrushHighlight>
        </h2>
        
        <p className="text-stone-600 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-lg tracking-wide px-4">
          Real change cannot be found in outside solutions or constant adaptation. It begins at the core—the systemic center of who you are.
        </p>

        <div className="mt-14 w-24 h-[1px] bg-amber-600/20 mx-auto"></div>
      </div>
    </section>
  );
};

export default QuoteBanner;
