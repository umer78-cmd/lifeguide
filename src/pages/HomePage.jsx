import React, { lazy } from 'react';
import Hero from '../components/Hero';

const QuoteBanner = lazy(() => import('../components/QuoteBanner'));
const About = lazy(() => import('../components/About'));
const VoicesOfChange = lazy(() => import('../components/LifeGuide'));
const OrderingForce = lazy(() => import('../components/CoreValues'));
const GuidanceWork = lazy(() => import('../components/ThreePillars'));
const FinalInvitation = lazy(() => import('../components/Journey'));

const HomePage = ({ isAppLoaded }) => {
  return (
    <>
      <Hero isAppLoaded={isAppLoaded} />
      <QuoteBanner />
      <About />
      <VoicesOfChange />
      <OrderingForce />
      <GuidanceWork />
      <FinalInvitation />
    </>
  );
};

export default HomePage;
