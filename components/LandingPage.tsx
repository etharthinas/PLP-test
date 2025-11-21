import React from 'react';

interface LandingPageProps {
    onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold mb-8 text-[#03c75a]">Welcome to the Experiment</h1>
            <p className="text-gray-600 mb-8 text-lg max-w-md text-center">
                Please click the button below to start the shopping experiment.
                Your interactions will be recorded for analysis.
            </p>
            <button
                onClick={onStart}
                className="px-8 py-4 bg-[#03c75a] text-white text-xl font-bold rounded-lg hover:bg-[#02b351] transition-colors shadow-lg"
            >
                Start Experiment
            </button>
        </div>
    );
};
