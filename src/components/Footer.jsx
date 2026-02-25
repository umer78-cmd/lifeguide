import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-50 py-16 md:py-24 px-6 relative border-t border-stone-200/50">
      
      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-stone-50 via-amber-600/30 to-stone-50"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="text-amber-700/80 text-sm uppercase tracking-[0.3em] font-semibold mb-6">
          The Final Call
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 mb-6 md:mb-8 tracking-wide leading-tight group">
          Ready to <span className="text-amber-700 italic font-light block mt-2 animated-underline w-max mx-auto">Listen?</span>
        </h2>
        
        <p className="text-stone-600 font-light tracking-wide leading-relaxed text-sm md:text-base max-w-md mb-16">
          Join the communion. Receive gentle guidance, reflections, and invitations to upcoming spaces.
        </p>

        {/* Form container */}
        <form className="w-full max-w-sm relative mb-24 group" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your gentle email address" 
            className="w-full bg-transparent border-b border-stone-300/80 pb-3 outline-none text-stone-800 font-light tracking-wide placeholder:text-stone-400 focus:border-amber-600/50 transition-colors"
          />
          <button type="submit" className="absolute right-0 bottom-3 text-amber-700/80 uppercase text-xs tracking-[0.2em] font-semibold hover:text-amber-800 transition-colors">
            Join
          </button>
        </form>

        {/* Bottom copyright & links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-stone-500 text-[10px] md:text-xs uppercase tracking-[0.2em] border-t border-stone-200/50 pt-10 gap-8 md:gap-0">
          <div>© {new Date().getFullYear()} Katharina von Bilderling</div>
          
          <div className="flex gap-10">
            <a href="#" className="hover:text-amber-700/80 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-700/80 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-amber-700/80 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
