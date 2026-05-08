import React, { lazy } from 'react';

const InnerActivation = lazy(() => import('../components/InnerActivation'));
const NarrativeScroll = lazy(() => import('../components/NarrativeScroll'));
const ClosingInvitation = lazy(() => import('../components/Journey'));

const HomePage = () => {
  return (
    <>
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
