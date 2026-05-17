import React, { useEffect } from 'react';
import Contact from '../components/sections/Contact';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const ContactPage = () => {
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
        title="Contacto Directo"
        description="Estamos a su disposición para cualquier consulta técnica o comercial de alta envergadura."
        className="pt-20 pb-16 md:pt-32 md:pb-28"
      />
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
