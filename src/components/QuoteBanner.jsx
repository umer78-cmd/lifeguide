import React from 'react';

const QuoteBanner = () => {
  return (
    <section id="philosophy" className="py-24 bg-stone-100 px-6 relative z-10 flex flex-col items-center justify-center text-center overflow-hidden shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.05)]">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[200px] bg-amber-500/20 blur-[80px] pointer-events-none animate-pulse-slow"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Soft quotation mark */}
        <div className="text-8xl md:text-9xl font-serif text-amber-600/10 leading-none mb-2 md:-mb-8 select-none">
          "
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 italic leading-[1.3] md:leading-snug tracking-wide text-balance px-2">
          Think the thoughts you want to live.
        </h2>
        
        <p className="mt-8 text-amber-700/80 uppercase text-xs tracking-[0.3em] font-semibold">
          A Guiding Philosophy
        </p>

        <div className="mt-12 w-24 h-[1px] bg-amber-600/20 mx-auto"></div>
      </div>
    </section>
  );
};

export default QuoteBanner;
