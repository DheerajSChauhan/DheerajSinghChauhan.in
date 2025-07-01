import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { useCustomCursor } from './hooks/useCustomCursor';
import { ThemeToggle } from './components/ThemeToggle';
import { ResumeButton } from './components/ResumeButton';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  useCustomCursor();

  return (
    <div className="min-h-screen transition-theme">
      <ThemeToggle />
      <ResumeButton />
      
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;