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
          <p className="text-brand-gold/80 text-base uppercase tracking-brand-wide font-semibold mb-6">
            The Final Invitation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 tracking-normal group leading-tight mb-8">
            Choosing Your <BrushHighlight className="italic text-brand-gold">Depth</BrushHighlight>
          </h2>
          <p className="text-stone-700 font-medium text-xl md:text-xl max-w-2xl mx-auto">
            The process is not defined by a schedule, but by the depth you are ready to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "LifeGuide-KaTao",
              subtitle: "Foundational Work",
              desc: "Starts with a situation, challenge, or recurring pattern, moving step-by-step toward the core."
            },
            {
              title: "commIN Space",
              subtitle: "Group Experience",
              desc: "A self-directed entry for those beginning to build inner stability within a shared calling."
            },
            {
              title: "Guidance Path",
              subtitle: "Individual Depth",
              desc: "Direct, deep, and immediate personal guidance. Systemic work that addresses the root architecture."
            }
          ].map((entry, idx) => (
            <div 
              key={idx} 
              className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-10 ring-1 ring-stone-200/50 hover:ring-brand-gold/20 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(180,83,9,0.08)] group flex flex-col"
            >
              <p className="text-brand-gold/60 text-[10px] uppercase tracking-[0.15em] font-bold mb-4">{entry.subtitle}</p>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">{entry.title}</h3>
              <p className="text-stone-700 font-medium text-base leading-snug mb-8 flex-grow">{entry.desc}</p>
              <div className="w-8 h-[1px] bg-brand-gold/20 group-hover:w-16 group-hover:bg-brand-gold/40 transition-all duration-500 mt-auto"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#contact" 
            className="group relative inline-block px-12 py-5 bg-transparent text-brand-gold uppercase text-xs tracking-brand-wide font-semibold overflow-hidden rounded-full border border-brand-gold/30 hover:border-brand-gold transition-all duration-500"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 flex items-center gap-3">
              Request a Situation Analysis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
