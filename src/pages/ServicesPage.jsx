import React, { useEffect } from 'react';
import Services from '../components/sections/Services';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/ui/ContactCTA';

const ServicesPage = () => {
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
        title="Nuestros Servicios"
        description="Soluciones integrales adaptadas a las necesidades industriales y comerciales de alto nivel."
        className="pt-20 pb-16 md:pt-32 md:pb-28"
      />
      <Services />
      <ContactCTA />
    </motion.div>
  );
};

export default ServicesPage;
