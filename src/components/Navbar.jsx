import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'The Calling', id: 'the-calling' },
    { name: 'Philosophy', id: 'philosophy' },
    { name: 'Wisdom', id: '20-years-of-wisdom' },
    { name: 'LifeGuide', id: 'roots-lifeguide' },
    { name: 'Virtues', id: 'virtues' },
    { name: 'The Journey', id: 'the-journey' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 px-6 md:px-16 flex justify-between items-center top-0 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-4' : 'bg-transparent py-5 md:py-6'}`}>
        {/* Logo */}
      <div className="text-stone-900 text-xl sm:text-2xl font-serif tracking-wide cursor-pointer flex-shrink transition-colors duration-300 hover:text-amber-600 truncate pr-4">
        LifeGuide-Institut
      </div>
      
      {/* Links - Hidden on small screens */}
      {/* Links - Hidden on small screens */}
      <div className="hidden lg:flex flex-1 justify-center items-center space-x-8 xl:space-x-12">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[10px] xl:text-xs uppercase tracking-[0.2em] text-stone-600 hover:text-amber-600 font-medium transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        {/* CTA Button - Hidden on very small mobile screens to save space for hamburger */}
        <div className="hidden sm:block flex-shrink-0">
          <button className="relative group text-amber-700 uppercase text-xs tracking-[0.2em] font-semibold transition-colors hover:text-amber-800 shimmer-effect px-4 py-2 overflow-hidden">
            Answer the Call
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-600/50 transition-all duration-300 group-hover:w-full group-hover:bg-amber-600 shadow-[0_0_8px_rgba(217,119,6,0.2)]"></span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-[1.5px] bg-stone-800 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}></span>
          <span className={`block w-6 h-[1.5px] bg-stone-800 transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-[1.5px] bg-stone-800 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`}></span>
        </button>
      </div>

      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[72px] bg-white/95 backdrop-blur-xl z-40 lg:hidden flex flex-col items-center justify-start pt-12 transition-all duration-500 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'}`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-8 pb-24">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                }, 300); // slight delay to allow menu to start closing
              }}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-sm tracking-[0.3em] uppercase font-medium transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} text-stone-600 hover:text-amber-600`}
            >
              {link.name}
            </a>
          ))}
          
          {/* CTA Mobile Version */}
          <div className={`mt-12 transition-all duration-500 delay-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <button className="px-8 py-4 border border-amber-600/30 text-amber-700 uppercase tracking-[0.2em] text-xs font-semibold rounded-full hover:bg-amber-50 transition-colors">
               Answer the Call
             </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
