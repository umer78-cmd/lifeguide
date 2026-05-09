import React, { useEffect, useState, useRef } from 'react';
import DustMotes from './DustMotes';

const Hero = ({ isAppLoaded }) => {
  const [isReady, setIsReady] = useState(false);
  const [wordsRevealed, setWordsRevealed] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const isLoaded = isAppLoaded !== undefined ? isAppLoaded : true;
    if (isLoaded) {
      const t1 = setTimeout(() => setIsReady(true), 100);
      const t2 = setTimeout(() => setWordsRevealed(true), 600);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isAppLoaded]);

  // Smooth scroll to sections
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="the-calling" 
      className="min-h-screen relative flex items-center justify-center text-center bg-brand-cream px-4 sm:px-6 pt-32 pb-40 overflow-x-hidden z-0"
    >
      
      {/* Background Visuals — Elegant Radial Glows */}
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

        {/* ─── 1. Top Line (Small & Spaced) ─── */}
        <div 
          className={`mb-10 transition-all duration-1000 ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} 
          style={{ animationDelay: '200ms' }}
        >
          <p className="text-stone-500 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
            A REORGANIZING MOVEMENT
          </p>
        </div>

        {/* ─── 2. The Middle Row (The Logos Inline) ─── */}
        <div 
          className={`flex flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 mb-16 md:mb-20 transition-all duration-[1200ms] ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '500ms' }}
        >
          {/* Brand 1: commIN */}
          <div 
            onClick={() => scrollToSection('guidance-work')}
            className="group flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform duration-500"
          >
            <div className="mb-4 text-brand-gold transform group-hover:scale-110 transition-transform duration-500 ease-out">
              <svg className="w-14 h-14 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
                <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
                <circle cx="50" cy="50" r="6" fill="currentColor" className="animate-pulse" />
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
              </svg>
            </div>
            <span className="text-base md:text-lg font-serif text-stone-700 group-hover:text-brand-gold transition-colors duration-300 tracking-wide font-medium">
              comm<span className="text-brand-gold font-semibold">i</span><span className="text-stone-900 font-bold">N</span>
            </span>
          </div>

          {/* Elegant Dot (·) */}
          <span className="text-brand-gold/45 text-2xl md:text-3xl font-light select-none pb-8">·</span>

          {/* Brand 2: GuidancePath */}
          <div 
            onClick={() => scrollToSection('guidance-work')}
            className="group flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform duration-500"
          >
            <div className="mb-4 text-brand-gold transform group-hover:scale-110 transition-transform duration-500 ease-out">
              <svg className="w-14 h-14 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 50 C 35 20, 45 80, 60 50 C 70 30, 75 40, 80 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-80" />
                <circle cx="80" cy="50" r="5" fill="currentColor" />
                <circle cx="20" cy="50" r="3" fill="currentColor" className="opacity-40" />
              </svg>
            </div>
            <span className="text-base md:text-lg font-serif text-stone-700 group-hover:text-brand-gold transition-colors duration-300 tracking-wide font-medium">
              Guidance<span className="text-brand-gold font-serif italic">Path</span>
            </span>
          </div>

          {/* Elegant Dot (·) */}
          <span className="text-brand-gold/45 text-2xl md:text-3xl font-light select-none pb-8">·</span>

          {/* Brand 3: LifeGuide-KaTao */}
          <div 
            onClick={() => scrollToSection('guidance-work')}
            className="group flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform duration-500"
          >
            <div className="mb-4 text-brand-gold transform group-hover:scale-110 transition-transform duration-500 ease-out">
              <svg className="w-14 h-14 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="180 40" className="opacity-70 rotate-45 transform origin-center" />
                <path d="M50 25 L50 75 M25 50 L75 50 M32 32 L68 68 M32 68 L68 32" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                <circle cx="50" cy="50" r="12" fill="currentColor" className="opacity-20" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
              </svg>
            </div>
            <span className="text-base md:text-lg font-serif text-stone-700 group-hover:text-brand-gold transition-colors duration-300 tracking-wide font-medium">
              LifeGuide-<span className="text-brand-gold font-serif italic">KaTao</span>
            </span>
          </div>
        </div>

        {/* ─── 3. The Bottom Line (The Hero Header) ─── */}
        <div className="max-w-4xl mx-auto px-6 mb-16 md:mb-20">
          <h1 
            ref={headingRef} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-stone-800 leading-[1.2] md:leading-[1.15] tracking-tight"
          >
            {'Where life begins to reorganize from within.'.split(' ').map((word, i) => (
              <span
                key={`w-${i}`}
                className={`word-reveal inline-block mr-[0.3em] ${wordsRevealed ? 'visible' : ''}`}
                style={{ animationDelay: `${800 + i * 90}ms` }}
              >
                {word === 'reorganize' ? (
                  <span className="italic text-brand-gold">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>
        </div>

        {/* ─── Gentle Walk Further CTA ─── */}
        <div 
          className={`transition-all duration-1000 ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} 
          style={{ animationDelay: '2000ms' }}
        >
          <a 
            href="#inner-activation" 
            onClick={(e) => { 
              e.preventDefault(); 
              document.getElementById('inner-activation')?.scrollIntoView({ behavior: 'smooth' }); 
            }} 
            className="group relative px-10 py-5 bg-transparent text-stone-700 uppercase text-xs tracking-brand-wide font-semibold overflow-hidden rounded-full border border-stone-300 hover:border-brand-gold hover:text-brand-gold transition-all duration-500 inline-block"
          >
            <span className="absolute inset-0 w-full h-full bg-amber-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 w-full flex items-center gap-3">
              Walk Further
              <svg className="w-4 h-4 translate-y-0 group-hover:translate-y-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5v14m0 0l-4-4m4 4l4-4"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
