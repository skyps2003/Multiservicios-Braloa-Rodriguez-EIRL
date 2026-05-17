import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import BackToTop from './components/ui/BackToTop';
import ScrollProgress from './components/ui/ScrollProgress';
import Spotlight from './components/ui/Spotlight';
import ThemeTransition from './components/ui/ThemeTransition';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SgsstPage from './pages/policies/SgsstPage';
import QualityPage from './pages/policies/QualityPage';
import EnvironmentPage from './pages/policies/EnvironmentPage';
import SocialPage from './pages/policies/SocialPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-700 relative overflow-hidden">
          {/* Global Texture Overlays */}
          <div className="bg-grain" />
          
          <ThemeTransition />
          <Spotlight />
          <ScrollProgress />
          
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/nosotros" element={<AboutPage />} /> 
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/politica-sgsst" element={<SgsstPage />} />
              <Route path="/politica-calidad" element={<QualityPage />} />
              <Route path="/politica-medio-ambiente" element={<EnvironmentPage />} />
              <Route path="/responsabilidad-social" element={<SocialPage />} />
              <Route path="/proyectos" element={<ProjectsPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Global Utilities */}
          <WhatsAppFloat />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
