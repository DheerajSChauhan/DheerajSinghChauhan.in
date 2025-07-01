import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { useCustomCursor } from './hooks/useCustomCursor';
import { ThemeToggle } from './components/ThemeToggle';
import { ResumeButton } from './components/ResumeButton';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { TaskINDetail } from './pages/TaskINDetail';
import { CollabSphereDetail } from './pages/CollabSphereDetail';
import { NoteNestDetail } from './pages/NoteNestDetail';

const HomePage: React.FC = () => {
  return (
    <>
      <ThemeToggle />
      <ResumeButton />
      
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
      
      <Footer />
    </>
  );
};

const AppContent: React.FC = () => {
  useCustomCursor();

  return (
    <div className="min-h-screen transition-theme">
      <Routes>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/project/taskin" element={
          <PageTransition>
            <TaskINDetail />
          </PageTransition>
        } />
        <Route path="/project/collab-sphere" element={
          <PageTransition>
            <CollabSphereDetail />
          </PageTransition>
        } />
        <Route path="/project/note-nest" element={
          <PageTransition>
            <NoteNestDetail />
          </PageTransition>
        } />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;