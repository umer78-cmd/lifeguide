import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DustMotes from './DustMotes';

const Footer = () => {
  const [lang, setLang] = useState('EN');

  return (
    <footer className="bg-brand-cream text-stone-700 relative overflow-hidden font-sans border-t border-stone-200/50">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Subtle Dust Motes for brand continuity */}
        <div className="absolute inset-0 opacity-[0.35]">
          <DustMotes />
        </div>
        
        {/* Optimized Glows — Warm amber accents on light canvas */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/2"
          style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.06) 0%, rgba(180, 83, 9, 0) 70%)' }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] translate-y-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.04) 0%, rgba(180, 83, 9, 0) 70%)' }}
        ></div>
      </div>


      {/* ─── Main Content ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-12">
        
        {/* Powerful Closing Statement */}
        <div className="text-center mb-24 md:mb-32">
          <p className="text-brand-stone font-serif text-2xl md:text-4xl italic tracking-normalr leading-snug max-w-4xl mx-auto">
            "Nothing is forced. Nothing is rushed. <br className="hidden md:block" />
            The process follows you—not a schedule."
          </p>
          <div className="w-24 h-[1px] bg-brand-gold/20 mx-auto mt-12"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Identity Column */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className="mb-10">
              <h3 className="font-serif text-3xl md:text-4xl text-brand-stone mb-4 tracking-tight">
                Katharina <br />
                <span className="text-brand-gold">von Bilderling</span>
              </h3>
              <div className="w-12 h-[1px] bg-brand-gold/40 mb-8"></div>
              <p className="text-stone-700 font-serif text-lg md:text-xl leading-[1.6] tracking-normal max-w-md">
                Guiding systemic transformation from the core outward — through LifeGuide-KaTao, commIN, and the Guidance Path.
              </p>
            </div>
            
            {/* Social Link */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-stone-700 hover:text-brand-gold transition-colors duration-500"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">LinkedIn Profile</span>
              <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </a>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10">
            
            {/* Nav */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.15em] text-stone-700 font-bold mb-8">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'The Journey', path: '/journey' },
                  { name: 'The Communion', path: '/#voices-of-change' },
                  { name: 'The Connection', path: '/connection' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.path}
                      className="text-stone-700 hover:text-brand-stone text-base font-medium tracking-normal transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Access */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.15em] text-stone-700 font-bold mb-8">The Access</h4>
              <ul className="space-y-4">
                {[
                  { name: 'LifeGuide-KaTao', path: '/#choose-your-entry' },
                  { name: 'commIN Space', path: '/communion' },
                  { name: 'Guidance Path', path: '/connection' },
                  { name: 'Methodology', path: '/journey' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.path}
                      className="text-stone-700 hover:text-brand-stone text-base font-medium tracking-normal transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.15em] text-stone-700 font-bold mb-8">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-stone-700 hover:text-brand-stone text-base font-medium transition-all duration-300 inline-block hover:translate-x-1">Impressum</a></li>
                <li><a href="#" className="text-stone-700 hover:text-brand-stone text-base font-medium transition-all duration-300 inline-block hover:translate-x-1">Datenschutz</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* ─── Bottom Stripe ─── */}
        <div className="pt-10 border-t border-stone-200/80 flex flex-col md:flex-row justify-between items-center gap-8 text-stone-700 text-[10px] uppercase tracking-[0.2em]">
          
          <div className="flex items-center gap-2 flex-wrap justify-center font-medium">
            <span>© {new Date().getFullYear()} Katharina von Bilderling</span>
            <span className="text-stone-200">|</span>
            <span>Design by <a href="https://zecore.co" target="_blank" rel="noopener noreferrer" className="text-brand-gold/60 hover:text-brand-gold transition-colors">Zecore</a></span>
          </div>
          
          {/* Language Control */}
          <div className="flex items-center bg-stone-100 rounded-full p-1 border border-stone-200/50">
            <button 
              onClick={() => setLang('DE')}
              className={`px-4 py-1.5 rounded-full transition-all duration-500 text-[10px] ${lang === 'DE' ? 'bg-white text-brand-gold font-bold shadow-md shadow-stone-200/50' : 'text-stone-700 hover:text-stone-700'}`}
            >DE</button>
            <button 
              onClick={() => setLang('EN')}
              className={`px-4 py-1.5 rounded-full transition-all duration-500 text-[10px] ${lang === 'EN' ? 'bg-white text-brand-gold font-bold shadow-md shadow-stone-200/50' : 'text-stone-700 hover:text-stone-700'}`}
            >EN</button>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
