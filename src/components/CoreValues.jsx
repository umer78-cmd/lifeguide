import React from 'react';

const values = [
  {
    german: "Leichtigkeit",
    english: "Lightness",
    desc: "Approaching deep inner work without the burden of heaviness, allowing shifts to happen naturally and gracefully."
  },
  {
    german: "Würde",
    english: "Dignity",
    desc: "Honoring the intrinsic worth within yourself and your unique life experiences, holding your story with absolute reverence."
  },
  {
    german: "Respekt",
    english: "Respect",
    desc: "A fundamental appreciation for your boundaries, your pace, and the unique architecture of your own becoming."
  },
  {
    german: "Achtsamkeit",
    english: "Mindfulness",
    desc: "Intentionally anchoring in the present moment. A state of pure awareness that listens deeply to what is arising."
  }
];

const CoreValues = () => {
  return (
    <section id="virtues" className="py-32 bg-stone-100 px-6 relative z-10 border-t border-stone-200/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 md:mb-24 max-w-2xl px-2">
          <p className="text-amber-700/80 text-sm uppercase tracking-[0.3em] font-semibold mb-6">
            The Virtues
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-6 md:mb-8 group">
            The Pillars of <span className="text-amber-700 italic animated-underline">Energy Work</span>
          </h2>
          <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base tracking-wide">
             Every engagement is carried by four silent virtues—the bedrock of Katharina’s holistic practice.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              
              {/* Subtle visual marker */}
              <div className="w-8 h-8 rounded-full border border-amber-600/20 mb-8 flex items-center justify-center group-hover:border-amber-600/50 transition-colors duration-500">
                <div className="w-1.5 h-1.5 bg-amber-500/40 rounded-full group-hover:bg-amber-600 transition-colors duration-500 shadow-[0_0_5px_rgba(217,119,6,0.2)] group-hover:shadow-[0_0_10px_rgba(217,119,6,0.5)]"></div>
              </div>

              <h3 className="text-2xl font-serif text-stone-800 mb-6 truncate group-hover:text-amber-700 transition-colors duration-300">
                {val.english}
              </h3>
              
              <p className="text-stone-600 font-light leading-relaxed text-sm tracking-wide px-4">
                {val.desc}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
