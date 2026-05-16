import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import ScrollProgress from './components/ui/ScrollProgress';
import Spotlight from './components/ui/Spotlight';
import ThemeTransition from './components/ui/ThemeTransition';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 selection:bg-apple-green selection:text-white transition-colors duration-300 relative">
        <div className="bg-grain" />
        <ThemeTransition />
        <Spotlight />
        <div className="diagonal-brush fixed inset-0 opacity-10 dark:opacity-20" />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  );
}

export default App;
