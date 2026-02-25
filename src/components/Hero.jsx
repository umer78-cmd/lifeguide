import React, { useEffect, useState } from 'react';

const Hero = ({ isAppLoaded }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Only trigger hero animations when the preloader has finished
    if (isAppLoaded) {
      setTimeout(() => setIsReady(true), 100);
    }
  }, [isAppLoaded]);

  return (
    <section id="the-calling" className="h-screen sticky top-0 flex items-center justify-center text-center bg-stone-50 px-6 pt-20 overflow-hidden z-0">
      
      {/* Deep Space Background Visuals - Now Sunlit Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Main large glowing orb - Sunlight */}
        <div className={`absolute top-1/2 left-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-gradient-to-br from-amber-400/20 to-amber-100/10 rounded-full blur-[80px] transition-opacity duration-[3000ms] animate-float-slow will-change-transform ${isReady ? 'opacity-100' : 'opacity-0'}`} style={{ transform: 'translate3d(-50%, -50%, 0)' }}></div>
        
        {/* Secondary subtle orb - Warmth */}
        <div className={`absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-amber-500/15 rounded-full blur-[60px] transition-opacity duration-[2000ms] delay-500 will-change-opacity ${isReady ? 'opacity-100' : 'opacity-0'}`} style={{ transform: 'translateZ(0)' }}></div>
        
        {/* Light overlay for depth */}
        <div className="absolute inset-0 bg-stone-50/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Kicker */}
        <div className={`overflow-hidden`}>
          <p className={`text-amber-800/90 text-sm md:text-base uppercase tracking-[0.4em] mt-8 mb-8 font-semibold ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            A Mentorship Journey
          </p>
        </div>

        {/* H1 Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-stone-900 mb-8 md:mb-10 leading-[1.1] md:leading-tight group tracking-tight px-4 w-full">
          <span className={`inline-block ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            commIN.
          </span>
          <br />
          <span className={`italic text-amber-700 font-light mt-4 md:mt-2 block animated-underline w-max mx-auto max-w-full truncate whitespace-normal leading-tight text-3xl sm:text-5xl md:text-7xl lg:text-8xl ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
            An Awakening Calling.
          </span>
        </h1>

        {/* Decorative Divider */}
        <div className={`w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-600/30 to-transparent mb-12 ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}></div>

        {/* Subheadline */}
        <p className={`max-w-2xl mx-auto text-stone-700 text-base md:text-2xl font-light leading-relaxed mb-12 md:mb-16 tracking-wide px-6 ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '900ms' }}>
          For those sensing the whisper of change. Guided by over 20 years of experience to help you discover your own inner wisdom.
        </p>

        {/* CTA Button */}
        <div className={`${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1100ms' }}>
          <a href="#the-journey-phases" className="group relative px-8 py-4 bg-transparent text-amber-700 uppercase text-xs tracking-[0.3em] font-semibold overflow-hidden rounded-full border border-amber-600/30 hover:border-amber-600 transition-all duration-500 hover:shadow-[0_0_40px_rgba(217,119,6,0.15)] inline-block">
            {/* Button background glow on hover */}
            <span className="absolute inset-0 w-full h-full bg-amber-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 w-full flex items-center gap-3">
              Begin the Journey
              <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          </a>
        </div>
      </div>

      {/* Infinite Scrolling Marquee at bottom of Hero */}
      <div className={`absolute bottom-0 left-0 w-full overflow-hidden py-5 border-t border-b border-amber-600/5 bg-stone-50/80 backdrop-blur-md z-20 flex group ${isReady ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1300ms' }}>
        
        {/* Track 1 */}
        <div className="marquee-track flex items-center pr-12 md:pr-24">
          {[...Array(6)].map((_, arrayIndex) => (
            <div key={`t1-${arrayIndex}`} className="flex shrink-0 items-center space-x-12 md:space-x-24 pr-12 md:pr-24">
              {['Commitment', 'Communication', 'Communion'].map((word, wordIndex) => (
                <React.Fragment key={`w1-${wordIndex}`}>
                  <span className="text-stone-400 font-serif text-sm md:text-lg tracking-[0.25em] uppercase transition-colors duration-500 hover:text-amber-700" style={{ WebkitFontSmoothing: 'antialiased' }}>
                    {word}
                  </span>
                  <span className="text-amber-600/20 text-xs md:text-sm">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless looping) */}
        <div className="marquee-track flex items-center pr-12 md:pr-24" aria-hidden="true">
          {[...Array(6)].map((_, arrayIndex) => (
            <div key={`t2-${arrayIndex}`} className="flex shrink-0 items-center space-x-12 md:space-x-24 pr-12 md:pr-24">
              {['Commitment', 'Communication', 'Communion'].map((word, wordIndex) => (
                <React.Fragment key={`w2-${wordIndex}`}>
                  <span className="text-stone-400 font-serif text-sm md:text-lg tracking-[0.25em] uppercase transition-colors duration-500 hover:text-amber-700" style={{ WebkitFontSmoothing: 'antialiased' }}>
                    {word}
                  </span>
                  <span className="text-amber-600/20 text-xs md:text-sm">✦</span>
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
