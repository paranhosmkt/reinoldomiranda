import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeaderHero } from './components/HeaderHero';
import { BioHome } from './components/BioHome';
import { AboutPage } from './components/AboutPage';
import { MethodologyPage } from './components/MethodologyPage';
import { Footer } from './components/Footer';
import { ActiveView } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ActiveView>('home');

  // Smooth scroll to top when changing views
  const handleNavigate = (view: ActiveView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync with browser hash on initial load and when user clicks back/forward
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about' || hash === 'methodology') {
        setCurrentView(hash as ActiveView);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', syncHash);
    syncHash();

    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const updateView = (view: ActiveView) => {
    window.location.hash = view === 'home' ? '' : view;
    handleNavigate(view);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A1830] text-[#1C2333]">
      {/* Executive Header & Hero with blended background image */}
      <HeaderHero currentView={currentView} onNavigate={updateView} />

      {/* Main Dynamic View Area */}
      <main className="flex-1 w-full flex flex-col items-center bg-[#F8F6F1]">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <BioHome onNavigate={updateView} />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <AboutPage onNavigate={updateView} />
            </motion.div>
          )}

          {currentView === 'methodology' && (
            <motion.div
              key="methodology"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <MethodologyPage onNavigate={updateView} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Executive Footer */}
      <Footer />
    </div>
  );
}
