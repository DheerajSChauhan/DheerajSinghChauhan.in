import React from 'react';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import GamificationUI from './components/GamificationUI';
import ParticleBackground from './components/ParticleBackground';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <ParticleBackground />
        <GamificationUI />
        
        <main className="relative z-10">
          <HeroSection />
          <TimelineSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
        
        <footer className="relative z-10 bg-gray-800/50 backdrop-blur-sm border-t border-gray-700/50 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2024 Dheeraj Singh Chauhan. Built with React, Three.js & lots of ☕
            </p>
          </div>
        </footer>
      </div>
    </GameProvider>
  );
}

export default App;