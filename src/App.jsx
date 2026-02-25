import React, { useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Preloader from './components/Preloader';

// Lazy load below-the-fold components to accelerate initial page render
const QuoteBanner = lazy(() => import('./components/QuoteBanner'));
const About = lazy(() => import('./components/About'));
const LifeGuide = lazy(() => import('./components/LifeGuide'));
const CoreValues = lazy(() => import('./components/CoreValues'));
const ThreePillars = lazy(() => import('./components/ThreePillars'));
const Journey = lazy(() => import('./components/Journey'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="font-sans text-stone-800 selection:bg-amber-500/30 selection:text-stone-950 flex flex-col">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* We keep components mounted but pass the loading state to Hero so it delays its animation until ready */}
      <Navbar />
      <Hero isAppLoaded={!isLoading} />
      
      {/* Defer loading of non-critical components until they are needed / browser is idle */}
      <Suspense fallback={<div className="h-screen w-full bg-stone-50"></div>}>
        <QuoteBanner />
        <About />
        <LifeGuide />
        <CoreValues />
        <ThreePillars />
        <Journey />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
