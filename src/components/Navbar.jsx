import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', id: 'the-calling', path: '/' },
    { name: 'The Journey', id: 'journey-manifesto', path: '/journey' },
    { name: 'The Communion', id: 'voices-of-change', path: '/communion' },
    { name: 'The Connection', id: 'the-connection', path: '/connection' }
  ];

  const handleNavClick = (e, link) => {
    setIsMobileMenuOpen(false);
    
    // If it's a separate page, just let the Router handle it
    if (link.path !== '/') return;

    e.preventDefault();
    if (isHome) {
      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${link.id}`);
    }
  };

  const toggleLang = () => setLang(prev => prev === 'EN' ? 'DE' : 'EN');
  const pill = isScrolled && !isMobileMenuOpen;

  return (
    <>
      {/* Wrapper — always fixed, always centered, handles the width morph */}
      <div 
        className="fixed top-0 left-0 w-full z-[70] flex justify-center pointer-events-none"
        style={{ padding: pill ? '14px 16px 0' : '0' , transition: 'padding 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
      >
        <nav
          className="pointer-events-auto flex justify-between items-center w-full"
          style={{
            maxWidth: pill ? '920px' : '100%',
            padding: pill ? '10px 24px' : '16px 20px',
            paddingLeft: pill ? '24px' : 'clamp(20px, 4vw, 64px)',
            paddingRight: pill ? '24px' : 'clamp(20px, 4vw, 64px)',
            background: pill 
              ? 'linear-gradient(to bottom, rgba(255,255,255,0.92), rgba(252,251,249,0.88))' 
              : 'transparent',
            backdropFilter: pill ? 'blur(12px) saturate(1.4)' : 'none',
            WebkitBackdropFilter: pill ? 'blur(12px) saturate(1.4)' : 'none',
            borderRadius: pill ? '9999px' : '0',
            boxShadow: pill 
              ? '0 10px 40px -10px rgba(120,53,15,0.12), 0 2px 4px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.6)' 
              : 'none',
            border: pill ? '1px solid rgba(180,83,9,0.11)' : '1px solid transparent',
            transition: 'max-width 0.8s cubic-bezier(0.22, 1, 0.36, 1), padding 0.8s cubic-bezier(0.22, 1, 0.36, 1), background 0.8s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.8s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.8s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          
          {/* Logo */}
          <Link 
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex-shrink-0"
          >
            <img 
              src="/logo/header.png" 
              alt="Logo" 
              className="w-auto"
              style={{
                height: pill ? '32px' : '42px',
                transition: 'height 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
          </Link>
          
          {/* Center Nav Links (Desktop) */}
          <div 
            className="hidden lg:flex items-center justify-center flex-1"
            style={{
              gap: pill ? '24px' : '40px',
              transition: 'gap 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path + (link.path === '/' && link.id !== 'the-calling' ? `#${link.id}` : '')}
                onClick={(e) => handleNavClick(e, link)}
                className="relative group uppercase font-medium text-stone-500 hover:text-brand-gold py-1"
                style={{
                  fontSize: pill ? '10.5px' : '11.5px',
                  letterSpacing: '0.3em',
                  transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                  color: (location.pathname === link.path && (link.path !== '/' || !location.hash)) ? '#b45309' : undefined
                }}
              >
                {link.name}
                {/* Smooth Underline */}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left ${(location.pathname === link.path && (link.path !== '/' || !location.hash)) ? 'scale-x-100' : ''}`}></span>
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLang}
              className={`px-3 py-1.5 rounded-full border transition-all duration-500 flex items-center gap-1.5 ${
                pill 
                  ? 'bg-amber-900/5 border-amber-900/10 backdrop-blur-md' 
                  : 'bg-stone-100/40 border-stone-200/50 backdrop-blur-sm'
              }`}
              aria-label="Toggle language"
            >
              <span className={`text-[10px] tracking-[0.1em] font-bold transition-colors duration-300 ${lang === 'DE' ? 'text-brand-gold' : 'text-stone-400'}`}>DE</span>
              <span className="w-[1px] h-2.5 bg-stone-300/60"></span>
              <span className={`text-[10px] tracking-[0.1em] font-bold transition-colors duration-300 ${lang === 'EN' ? 'text-brand-gold' : 'text-stone-400'}`}>EN</span>
            </button>

            {/* CTA Button */}
            <Link 
              to="/#choose-your-entry"
              onClick={(e) => handleNavClick(e, { id: 'choose-your-entry', path: '/' })}
              className="hidden sm:inline-flex relative group items-center uppercase font-semibold overflow-hidden rounded-full"
              style={{
                padding: pill ? '8px 20px' : '10px 20px',
                fontSize: pill ? '10px' : '11px',
                letterSpacing: '0.3em',
                color: pill ? '#fff' : '#b45309',
                background: pill ? '#b45309' : 'transparent',
                border: pill ? '1px solid #b45309' : '1px solid rgba(180,83,9,0.3)',
                boxShadow: pill ? '0 4px 14px rgba(180,83,9,0.25)' : 'none',
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {!pill && <span className="absolute inset-0 w-full h-full bg-brand-gold/8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>}
              <span className="relative z-10">The Connection</span>
            </Link>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className={`block w-6 h-[1.5px] bg-stone-800 transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}></span>
              <span className={`block w-6 h-[1.5px] bg-stone-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-[1.5px] bg-stone-800 transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`}></span>
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-0 bg-white/98 backdrop-blur-lg z-[55] lg:hidden flex flex-col items-center justify-center transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-8 pb-12" onClick={(e) => e.stopPropagation()}>
          {navLinks.map((link, index) => (
            <Link
              key={link.id}
              to={link.path + (link.path === '/' && link.id !== 'the-calling' ? `#${link.id}` : '')}
              onClick={(e) => handleNavClick(e, link)}
              style={{ transitionDelay: `${index * 60}ms` }}
              className={`text-xl sm:text-2xl font-serif tracking-brand-wide transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${location.pathname === link.path ? 'text-brand-gold' : 'text-stone-700'} hover:text-brand-gold`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className={`flex items-center gap-3 mt-4 transition-all duration-500 delay-[240ms] ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button 
              onClick={() => setLang('DE')} 
              className={`px-4 py-2 rounded-full border transition-all ${lang === 'DE' ? 'bg-brand-gold/10 border-brand-gold text-brand-gold font-bold' : 'border-stone-200 text-stone-400 hover:text-stone-600'}`}
            >
              DE
            </button>
            <span className="text-stone-300">|</span>
            <button 
              onClick={() => setLang('EN')} 
              className={`px-4 py-2 rounded-full border transition-all ${lang === 'EN' ? 'bg-brand-gold/10 border-brand-gold text-brand-gold font-bold' : 'border-stone-200 text-stone-400 hover:text-stone-600'}`}
            >
              EN
            </button>
          </div>

          <div className={`mt-8 transition-all duration-500 delay-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <Link 
               to="/connection"
               onClick={() => setIsMobileMenuOpen(false)}
               className="px-10 py-5 bg-brand-gold text-white uppercase tracking-brand-wide text-xs font-bold rounded-full shadow-lg shadow-brand-gold/20 hover:scale-105 transition-transform inline-block"
             >
               The Connection
             </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
