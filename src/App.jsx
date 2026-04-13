import React, { useState, Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';

const JourneyPage = lazy(() => import('./pages/JourneyPage'));
const CommunionPage = lazy(() => import('./pages/CommunionPage'));
const ConnectionPage = lazy(() => import('./pages/ConnectionPage'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if the site has already been loaded in this session
    return !sessionStorage.getItem('site-loaded');
  });
  const { pathname, hash } = useLocation();

  // Scroll to top or to hash on route change
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly for content loading
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="font-sans text-stone-800 selection:bg-amber-500/30 selection:text-stone-950 flex flex-col min-h-screen bg-brand-cream">
      {isLoading && (
        <Preloader 
          onComplete={() => {
            sessionStorage.setItem('site-loaded', 'true');
            setIsLoading(false);
          }} 
        />
      )}
      
      <Navbar />
      
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen w-full bg-brand-cream flex items-center justify-center"><div className="w-12 h-12 border-t-2 border-brand-gold rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<HomePage isAppLoaded={!isLoading} />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/communion" element={<CommunionPage />} />
            <Route path="/connection" element={<ConnectionPage />} />
          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
