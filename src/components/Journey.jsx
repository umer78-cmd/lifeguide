import React from 'react';
import BrushHighlight from './BrushHighlight';

const paths = [
  {
    label: "Path A",
    title: "commIN Space",
    desc: "A self-directed entry for those beginning to build inner stability. Space to pause, reflect, and take the first steps toward systemic clarity.",
    accent: "from-brand-gold/10 to-brand-gold/5"
  },
  {
    label: "Path B",
    title: "Holistic LifeGuide",
    desc: "Direct, deep, and immediate personal guidance. One-on-one systemic work that addresses the root architecture of your life.",
    accent: "from-stone-800/10 to-stone-600/5"
  }
];

const FinalInvitation = () => {
  return (
    <section id="choose-your-entry" className="py-32 bg-brand-cream px-6 relative z-10 border-t border-stone-200/50 overflow-hidden">
      
      {/* Background glow — Optimized with radial-gradient */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(180, 83, 9, 0.08) 0%, rgba(180, 83, 9, 0) 70%)' }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="text-center mb-16 md:mb-24">
          <p className="text-brand-gold/80 text-sm uppercase tracking-brand-wide font-semibold mb-6">
            The Final Invitation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 tracking-wide group leading-tight">
            Choosing Your <BrushHighlight className="italic text-brand-gold">Entry</BrushHighlight>
          </h2>
        </div>

        {/* Path cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {paths.map((path, idx) => (
            <div 
              key={idx} 
              className="relative bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-[2rem] p-8 md:p-12 ring-1 ring-stone-200/50 hover:ring-brand-gold/20 transition-all duration-700 hover:shadow-[0_25px_70px_-15px_rgba(180,83,9,0.1)] group overflow-hidden"
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${path.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl md:rounded-[2rem]`}></div>
              
              <div className="relative z-10">
                <p className="text-brand-gold/60 text-xs uppercase tracking-brand-wide font-semibold mb-4">
                  {path.label}
                </p>
                
                <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-6 tracking-wide group-hover:text-amber-800 transition-colors duration-500">
                  {path.title}
                </h3>
                
                <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base tracking-wide mb-8">
                  {path.desc}
                </p>

                <div className="w-12 h-[1px] bg-brand-gold/20 group-hover:w-20 group-hover:bg-brand-gold/40 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#contact" 
            className="group relative inline-block px-10 py-5 bg-transparent text-brand-gold uppercase text-xs tracking-brand-wide font-semibold overflow-hidden rounded-full border border-brand-gold/30 hover:border-brand-gold transition-all duration-500 hover:shadow-[0_0_50px_rgba(180,83,9,0.2)]"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 flex items-center gap-3">
              Apply for a Situation Analysis
              <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FinalInvitation;
