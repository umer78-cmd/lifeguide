import React, { useEffect, useState, useRef } from 'react';
import DustMotes from './DustMotes';

const Hero = ({ isAppLoaded }) => {
  const [isReady, setIsReady] = useState(false);
  const [wordsRevealed, setWordsRevealed] = useState(false);
  const [brushRevealed, setBrushRevealed] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    if (isAppLoaded) {
      setTimeout(() => setIsReady(true), 100);
      // Stagger the word reveals after the heading appears
      setTimeout(() => setWordsRevealed(true), 600);
      // Brush underline after words are mostly visible
      setTimeout(() => setBrushRevealed(true), 1400);
    }
  }, [isAppLoaded]);

  // Split subtitle into words for staggered reveal
  const subtitleWords = "An unhurried space for commitment, communication, and communion.".split(' ');
  const subtitleWords2 = "For those ready to transition from merely functioning to living their life purpose.".split(' ');

  // Marquee items — lean set for performance
  const marqueeWords = ['Commitment', 'Communication', 'Communion', 'Systemic Wisdom', 'Inner Order', 'Life Potential'];

  return (
    <section id="the-calling" className="min-h-[100svh] relative flex items-center justify-center text-center bg-brand-cream px-4 sm:px-6 pt-32 pb-40 overflow-x-hidden z-0">
      
      {/* Background Visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Optimized Glows: Using radial-gradients instead of blur filters for buttery-smooth performance */}
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
        {/* Kicker */}
        <div className="overflow-hidden">
          <p className={`text-brand-gold/70 text-xs md:text-sm uppercase tracking-brand-wide mt-8 mb-8 font-semibold ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            A Mentorship Journey
          </p>
        </div>

        {/* H1 Headline — Split-Word Reveal */}
        <h1 ref={headingRef} className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-brand-stone mb-8 md:mb-10 leading-[1.1] md:leading-tight tracking-tight px-4 w-full">
          {/* "commIN." — each character lifts in */}
          <span className="block">
            {'commIN.'.split('').map((char, i) => (
              <span
                key={`c-${i}`}
                className={`word-reveal inline-block ${wordsRevealed ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {i >= 4 && i < 6 ? <span className="text-brand-gold">{char}</span> : 
                 i === 6 ? <span className="text-stone-400 font-light">{char}</span> : char}
              </span>
            ))}
          </span>

          {/* "An Awakening Calling." — brush underline */}
          <span className={`italic text-brand-gold font-light mt-4 md:mt-2 block text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight brush-underline ${brushRevealed ? 'revealed' : ''}`}>
            {'An Awakening Calling.'.split(' ').map((word, i) => (
              <span
                key={`h-${i}`}
                className={`word-reveal inline-block mr-[0.25em] ${wordsRevealed ? 'visible' : ''}`}
                style={{ animationDelay: `${400 + i * 120}ms` }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Decorative Divider */}
        <div className={`w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-600/30 to-transparent mb-12 ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}></div>

        {/* Subheadline — Word-by-Word Reveal */}
        <div className="max-w-2xl mx-auto mb-12 md:mb-16 px-6">
          <p className="text-stone-600 text-base md:text-xl font-light leading-relaxed tracking-wide">
            {subtitleWords.map((word, i) => (
              <span
                key={`s1-${i}`}
                className={`word-reveal inline-block mr-[0.3em] ${wordsRevealed ? 'visible' : ''}`}
                style={{ animationDelay: `${900 + i * 60}ms` }}
              >
                {word}
              </span>
            ))}
          </p>
          <p className="text-stone-500 text-sm md:text-lg font-light leading-relaxed tracking-wide mt-3">
            {subtitleWords2.map((word, i) => (
              <span
                key={`s2-${i}`}
                className={`word-reveal inline-block mr-[0.3em] ${wordsRevealed ? 'visible' : ''}`}
                style={{ animationDelay: `${1400 + i * 50}ms` }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* CTA Button */}
        <div className={`${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '2200ms' }}>
          <a href="#choose-your-entry" onClick={(e) => { e.preventDefault(); document.getElementById('choose-your-entry')?.scrollIntoView({ behavior: 'smooth' }); }} className="group relative px-8 py-4 bg-transparent text-brand-gold uppercase text-xs tracking-brand-wide font-semibold overflow-hidden rounded-full border border-brand-gold/30 hover:border-brand-gold transition-all duration-500 hover:shadow-[0_0_40px_rgba(180,83,9,0.15)] inline-block">
            <span className="absolute inset-0 w-full h-full bg-amber-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 w-full flex items-center gap-3">
              Explore the Calling
              <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          </a>
        </div>
      </div>

      {/* ─── Marquee ─── Single strip, doubled content, GPU-composited ─── */}
      <div className={`absolute bottom-0 left-0 w-full overflow-hidden border-t border-amber-900/10 bg-brand-cream/90 backdrop-blur-md z-20 ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1800ms' }}>
        <div className="marquee-strip py-6 md:py-8">
          {/* Content is doubled inline — the CSS translates -50% to loop seamlessly */}
          {[...Array(2)].map((_, copyIndex) => (
            <div key={copyIndex} className="flex shrink-0 items-center" aria-hidden={copyIndex === 1 ? 'true' : undefined}>
              {marqueeWords.map((word, i) => (
                <React.Fragment key={`m${copyIndex}-${i}`}>
                  <span className="shrink-0 px-6 md:px-10 text-stone-600/70 font-serif text-base md:text-lg tracking-brand-wide uppercase transition-colors duration-500 hover:text-brand-gold cursor-default">
                    {word}
                  </span>
                  <span className="shrink-0 text-amber-600/30 text-xs select-none">◆</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
