import React from 'react';

const pillars = [
  {
    title: 'Commitment',
    text: 'Dedicating yourself to the journey of personal growth and embracing the shifts that life presents.'
  },
  {
    title: 'Communication',
    text: 'Finding your authentic voice and learning to speak truth to both yourself and the world around you.'
  },
  {
    title: 'Communion',
    text: 'The ultimate connection with your own inner wisdom. A state of deep listening and profound balance.'
  }
];

const ThreePillars = () => {
  return (
    <section id="the-journey" className="py-32 bg-stone-50 relative z-10 px-6">
      
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-serif text-amber-700 tracking-wide group">
          THE COMM-IN PHILOSOPHY
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-16 max-w-6xl mx-auto text-center px-4">
        {pillars.map((pillar, index) => (
          <div key={index} className="flex flex-col items-center group">
            
            {/* Visual Element */}
            <div className="mb-8 w-12 h-[1px] bg-amber-600/30 group-hover:w-20 group-hover:bg-amber-600 transition-all duration-500 shadow-[0_0_8px_rgba(217,119,6,0.2)]"></div>
            
            {/* Title */}
            <h3 className="text-2xl font-serif text-amber-800 mb-4 transition-colors duration-300">
              {pillar.title}
            </h3>
            
            {/* Text */}
            <p className="text-stone-600 font-light leading-relaxed max-w-xs mx-auto text-sm md:text-base tracking-wide">
              {pillar.text}
            </p>

          </div>
        ))}
      </div>
      
    </section>
  );
};

export default ThreePillars;
