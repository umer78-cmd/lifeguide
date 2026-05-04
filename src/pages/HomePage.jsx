import React, { lazy } from 'react';
import Hero from '../components/Hero';

const InnerActivation = lazy(() => import('../components/InnerActivation'));
const NarrativeScroll = lazy(() => import('../components/NarrativeScroll'));
const FinalInvitation = lazy(() => import('../components/Journey'));

const HomePage = ({ isAppLoaded }) => {
  return (
    <>
      {/* Step 1: HERO */}
      <Hero isAppLoaded={isAppLoaded} />

      {/* Step 2: ART VERSION — the slow reveal */}
      <InnerActivation />

      {/* Steps 3–7: SYSTEM → FOUNDATIONAL WORK → EVOLUTION → GUIDANCE PATH → COMMIN */}
      <NarrativeScroll />

      {/* Step 8: STRUCTURE — session tiers */}
      <FinalInvitation />
    </>
  );
};

export default HomePage;
