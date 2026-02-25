import React from 'react';

const phases = [
  {
    number: "01",
    title: "The Silent Pause",
    desc: "We begin not with action, but with stillness. Cultivating the space to truly hear the whisper that called you here."
  },
  {
    number: "02",
    title: "The Unraveling",
    desc: "Gently examining the narratives you carry. What is authentically yours, and what is ready to be released?"
  },
  {
    number: "03",
    title: "The Integration",
    desc: "Weaving your inner truth into your outward reality. Finding harmony between who you are and how you move through the world."
  }
];

const Journey = () => {
  return (
    <section id="the-journey-phases" className="py-32 bg-stone-100 px-6 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse-slow will-change-transform" style={{ transform: 'translateZ(0)' }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <p className="text-amber-700/80 text-sm uppercase tracking-[0.3em] mb-6 font-semibold">
            The Process
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-wide group w-max mx-auto">
            An Unhurried <span className="italic text-amber-700 animated-underline">Path</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {phases.map((phase, i) => (
             <div key={i} className={`flex flex-col md:flex-row items-center gap-6 md:gap-24 group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Number element */}
              <div className="text-6xl sm:text-7xl md:text-8xl font-serif text-stone-300/80 font-light shrink-0 transition-colors duration-500 group-hover:text-stone-400/80">
                {phase.number}
              </div>

              {/* Connecting line on mobile / spacer on desktop */}
              <div className="w-[1px] h-8 md:h-12 bg-stone-400/50 md:hidden"></div>

              {/* Text content */}
              <div className={`text-center ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'} max-w-lg px-2`}>
                <h3 className="text-2xl md:text-3xl font-serif text-amber-900 mb-6 transition-colors duration-300">{phase.title}</h3>
                <p className="text-stone-700 font-light leading-relaxed tracking-wide text-sm md:text-base">
                  {phase.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
