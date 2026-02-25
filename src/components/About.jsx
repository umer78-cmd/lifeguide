import React from 'react';

const About = () => {
  return (
    <section id="20-years-of-wisdom" className="py-32 bg-stone-100 px-6 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Visual Anchor */}
        <div className="w-[1px] h-32 bg-gradient-to-b from-stone-100 via-amber-600/30 to-stone-100 mb-16 animate-pulse-slow"></div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-8 md:mb-12 tracking-wide group">
          20 Years of <br className="md:hidden" /><span className="text-amber-700 italic font-light animated-underline">Wisdom</span>
        </h2>
        
        {/* Generative Image - Ethereal Portal */}
        <div className="w-full max-w-3xl mx-auto h-[250px] sm:h-[350px] md:h-[450px] rounded-2xl md:rounded-[2rem] overflow-hidden mb-12 md:mb-16 shadow-[0_20px_60px_-15px_rgba(217,119,6,0.2)] relative group/image">
          {/* Ambient overlay to blend perfectly with the light theme */}
          <div className="absolute inset-0 bg-stone-100/10 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover/image:opacity-0"></div>
          <img src="/images/about_portal.png" alt="A serene, ethereal architectural portal glowing with golden sunlight" loading="lazy" className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-[1500ms] ease-out will-change-transform" />
        </div>
        
        <p className="text-stone-700 font-serif italic leading-relaxed text-2xl md:text-3xl lg:text-4xl md:leading-[1.6] tracking-wider mb-12 md:mb-16 max-w-4xl px-2">
          "Mentorship is not about giving you the answers; it is about guiding you back to your own deep knowing."
        </p>

        <p className="text-stone-600 font-light leading-relaxed max-w-2xl text-sm md:text-base tracking-wide mb-20 text-justify md:text-center px-4">
          Over two decades, I have walked alongside leaders, seekers, and creators as they navigate the silent thresholds of their lives. Comm-In is the culmination of this journey—a space where unwavering commitment, authentic communication, and profound communion weave together to support your most significant transitions.
        </p>
        
        {/* Signature-like element */}
        <div className="text-amber-700/80 font-serif text-2xl md:text-3xl italic tracking-wide">
          Katharina von Bilderling
        </div>
      </div>
    </section>
  );
};

export default About;
