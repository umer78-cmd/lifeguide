import React, { lazy } from 'react';
import Hero from '../components/Hero';

const InnerActivation = lazy(() => import('../components/InnerActivation'));
const NarrativeScroll = lazy(() => import('../components/NarrativeScroll'));
const ClosingInvitation = lazy(() => import('../components/Journey'));

const HomePage = ({ isAppLoaded }) => {
  return (
    <>
      {/* The first landing — "Your life begins to reorganize from within." */}
      <Hero isAppLoaded={isAppLoaded} />

      {/* The slow reveal — scroll-activated poetry */}
      <InnerActivation />

      {/* System → Three equal entry points (LifeGuide-KaTao, commIN, Guidance Path) */}
      <NarrativeScroll />

      {/* Gentle closing — open invitation to connect */}
      <ClosingInvitation />
    </>
  );
};

export default HomePage;
