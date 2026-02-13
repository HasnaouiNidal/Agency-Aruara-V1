import React from 'react';
import Navbar from './components/ui/Navbar';
import Background from './components/ui/Background';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      <Background />
      <Navbar />
      
      <div className="relative z-10 flex flex-col gap-0">
        <Hero />
        <Features />
        <Catalog />
        <Process />
        <Footer />
      </div>
      
      {/* Global Grain/Vignette Overlay for that "Cinematic" feel */}
      <div className="fixed inset-0 z-50 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </main>
  );
}

export default App;