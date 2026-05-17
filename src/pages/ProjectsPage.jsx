import React, { useEffect } from 'react';
import Projects from '../components/sections/Projects';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/ui/ContactCTA';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-white dark:bg-slate-950 min-h-screen"
    >
      <PageHeader 
        title="Casos de Éxito"
        description="Evidencia de nuestra calidad y compromiso en cada obra que transforma el entorno."
        className="pt-20 pb-16 md:pt-32 md:pb-28"
      />
      <Projects />
      <ContactCTA />
    </motion.div>
  );
};

export default ProjectsPage;
