import React, { useEffect, useState, useRef } from 'react';
import DustMotes from './DustMotes';

const Hero = ({ isAppLoaded }) => {
  const [isReady, setIsReady] = useState(false);
  const [wordsRevealed, setWordsRevealed] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    if (isAppLoaded) {
      setTimeout(() => setIsReady(true), 100);
      setTimeout(() => setWordsRevealed(true), 600);
    }
  }, [isAppLoaded]);

  return (
    <section id="the-calling" className="min-h-[100svh] relative flex items-center justify-center text-center bg-brand-cream px-4 sm:px-6 pt-32 pb-40 overflow-x-hidden z-0">
      
      {/* Background Visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] transition-opacity duration-[3000ms] animate-float-slow"
          style={{ 
            background: 'radial-gradient(circle, rgba(180, 83, 9, 0.12) 0%, rgba(180, 83, 9, 0) 70%)',
            opacity: isReady ? 1 : 0 
          }}
        ></div>
        <div 
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] transition-opacity duration-[2000ms] delay-500 animate-float-slow-static"
          style={{ 
            background: 'radial-gradient(circle, rgba(180, 83, 9, 0.08) 0%, rgba(180, 83, 9, 0) 70%)',
            opacity: isReady ? 1 : 0 
          }}
        ></div>
        <div className="absolute inset-0 bg-brand-cream/40"></div>
      </div>

      <DustMotes />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

        {/* Main Statement — neutral, universal to all forms of the work */}
        <div className="mb-12 md:mb-16 px-4 w-full">
          <p className={`text-stone-500 text-[11px] md:text-xs uppercase tracking-[0.25em] font-semibold mb-10 md:mb-14 ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            The Work
          </p>
          <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-stone-800 leading-[1.35] md:leading-[1.3] tracking-tight">
            {'Your life begins to reorganize from within.'.split(' ').map((word, i) => (
              <span
                key={`w-${i}`}
                className={`word-reveal inline-block mr-[0.3em] ${wordsRevealed ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>

        {/* Decorative Divider */}
        <div className={`w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-600/20 to-transparent mb-16 ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '900ms' }}></div>

        {/* Subheadline */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-24 px-6">
          <p className="text-stone-600 text-lg md:text-2xl font-serif font-normal leading-relaxed tracking-normal">
            {["This", "understanding", "becomes", "available", "through", "different", "forms."].map((word, i) => (
              <span
                key={`s1-${i}`}
                className={`word-reveal inline-block mr-[0.3em] ${wordsRevealed ? 'visible' : ''}`}
                style={{ animationDelay: `${1100 + i * 100}ms` }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* CTA — gentle scroll invitation */}
        <div className={`${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '2200ms' }}>
          <a href="#inner-activation" onClick={(e) => { e.preventDefault(); document.getElementById('inner-activation')?.scrollIntoView({ behavior: 'smooth' }); }} className="group relative px-10 py-5 bg-transparent text-stone-700 uppercase text-xs tracking-brand-wide font-semibold overflow-hidden rounded-full border border-stone-300 hover:border-brand-gold hover:text-brand-gold transition-all duration-500 inline-block">
            <span className="absolute inset-0 w-full h-full bg-amber-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 w-full flex items-center gap-3">
              Walk Further
              <svg className="w-4 h-4 translate-y-0 group-hover:translate-y-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5v14m0 0l-4-4m4 4l4-4"></path></svg>
            </span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
