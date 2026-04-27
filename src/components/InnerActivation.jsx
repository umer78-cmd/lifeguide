import React from 'react';

const InnerActivation = () => {
  return (
    <section id="inner-activation" className="py-40 bg-brand-cream px-6 relative z-10 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          <p className="text-stone-700 text-2xl md:text-4xl lg:text-5xl font-serif font-light leading-[1.4] md:leading-[1.5] tracking-wide">
            Here you are. An impulse is set. You respond.
          </p>
          
          <div className="flex justify-center">
            <div className="w-[1px] h-20 bg-gradient-to-b from-brand-gold/40 to-transparent"></div>
          </div>

          <p className="text-stone-800 text-2xl md:text-4xl lg:text-5xl font-serif italic font-light leading-[1.4] md:leading-[1.5] tracking-wider text-brand-gold/90">
            Inside, something begins to open.
          </p>

          <div className="flex justify-center gap-4 md:gap-8 flex-wrap pt-8">
            {["Movement.", "Release.", "Reorganization.", "In your own rhythm."].map((word, i) => (
              <span key={i} className="text-stone-500 text-lg md:text-2xl uppercase tracking-[0.2em] font-light">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle background element */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #b45309 0%, transparent 70%)' }}
      ></div>
    </section>
  );
};

export default InnerActivation;
