import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ShoppingPage } from './components/ShoppingPage';
import { useExperimentTracking } from './hooks/useExperimentTracking';

export default function App() {
  const [view, setView] = useState<'landing' | 'experiment'>('landing');
  const { endExperiment } = useExperimentTracking(view === 'experiment');

  const handleStart = () => {
    setView('experiment');
  };

  const handleEnd = () => {
    endExperiment();
    setView('landing');
  };

  return (
    <>
      {view === 'landing' ? (
        <LandingPage onStart={handleStart} />
      ) : (
        <ShoppingPage onEndExperiment={handleEnd} />
      )}
    </>
  );
}