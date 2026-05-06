import React, { useState, Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import WelcomeScreen from './components/WelcomeScreen';
import HomePage from './pages/HomePage';

const JourneyPage = lazy(() => import('./pages/JourneyPage'));
const CommunionPage = lazy(() => import('./pages/CommunionPage'));
const ConnectionPage = lazy(() => import('./pages/ConnectionPage'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [loadingPhase, setLoadingPhase] = useState(() => {
    // Check if the site has already been loaded in this session
    if (sessionStorage.getItem('site-loaded')) return 'done';
    return 'preloader'; // 'preloader' → 'welcome' → 'done'
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

  const isFullyLoaded = loadingPhase === 'done';

  return (
    <div className="font-sans text-stone-800 selection:bg-amber-500/30 selection:text-stone-950 flex flex-col min-h-screen bg-brand-cream">
      {/* Phase 1: The Preloader — the dot (z-100, on top) */}
      {loadingPhase === 'preloader' && (
        <Preloader
          onComplete={() => setLoadingPhase('welcome')}
        />
      )}

      {/* Phase 2: The Welcome — renders behind Preloader from the start so commIN is already visible when the dot curtain lifts */}
      {(loadingPhase === 'preloader' || loadingPhase === 'welcome') && (
        <WelcomeScreen
          isActive={loadingPhase === 'welcome'}
          onComplete={() => {
            sessionStorage.setItem('site-loaded', 'true');
            setLoadingPhase('done');
          }}
        />
      )}

      <Navbar />

      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen w-full bg-brand-cream flex items-center justify-center"><div className="w-12 h-12 border-t-2 border-brand-gold rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<HomePage isAppLoaded={isFullyLoaded} />} />
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
