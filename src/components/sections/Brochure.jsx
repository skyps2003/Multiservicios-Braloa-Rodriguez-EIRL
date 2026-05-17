import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const Brochure = () => {
  const [downloadStatus, setDownloadStatus] = useState('idle'); // idle, downloading, success

  const handleDownload = (e) => {
    e.preventDefault();
    if (downloadStatus !== 'idle') return;

    setDownloadStatus('downloading');

    // Simulate high-end progress loading
    setTimeout(() => {
      setDownloadStatus('success');
      
      // Trigger actual download programmatically
      const link = document.createElement('a');
      link.href = siteContent.contact.brochureUrl;
      link.download = 'Brochure_Braloa_2026.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset after a couple of seconds
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 4000);
    }, 2000);
  };

  return (
    <section className="section-spacing relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-700">
      <div className="content-width">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] p-12 md:p-20 overflow-hidden flex flex-col items-center text-center border border-slate-100 dark:border-white/5 shadow-2xl transition-all duration-700 bg-slate-50 dark:bg-slate-900"
        >
          {/* Theme-Aware Background Auras */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-apple-green/10 dark:bg-apple-green/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 dark:bg-blue-900/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10 w-full"
            >
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
              <span className="shrink-0 px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Documentación Institucional</span>
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tighter transition-colors duration-700">
              Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-green to-emerald-600 glow-text-green">Portafolio 2026</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic transition-colors duration-700">
              "Acceda a nuestra propuesta de valor completa. Explore el rigor técnico, la infraestructura y las certificaciones que garantizan el éxito de cada intervención de Multiservicios Braloa."
            </p>
            
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: downloadStatus === 'idle' ? 1.03 : 1 }}
              whileTap={{ scale: downloadStatus === 'idle' ? 0.98 : 1 }}
              disabled={downloadStatus === 'downloading'}
              className={`relative inline-flex items-center gap-6 px-14 py-7 font-black rounded-[2rem] transition-all duration-500 group tracking-[0.2em] text-xs uppercase cursor-pointer overflow-hidden ${
                downloadStatus === 'idle'
                  ? 'bg-apple-green text-white shadow-[0_20px_50px_-10px_rgba(137,193,61,0.3)] hover:shadow-apple-green/50 hover:bg-apple-green/95'
                  : downloadStatus === 'downloading'
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-300/10 dark:border-white/5 shadow-none'
                  : 'bg-emerald-600 text-white shadow-[0_20px_50px_-10px_rgba(16,185,129,0.3)]'
              }`}
            >
              {/* Progress sliding line inside the button */}
              {downloadStatus === 'downloading' && (
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  className="absolute bottom-0 left-0 h-1.5 w-full bg-apple-green"
                />
              )}

              {downloadStatus === 'idle' && (
                <>
                  DESCARGAR PORTAFOLIO CORPORATIVO (PDF)
                  <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                </>
              )}

              {downloadStatus === 'downloading' && (
                <>
                  PREPARANDO PORTAFOLIO...
                  <Loader2 size={20} className="animate-spin text-apple-green" />
                </>
              )}

              {downloadStatus === 'success' && (
                <>
                  ¡PORTAFOLIO DESCARGADO!
                  <CheckCircle2 size={20} className="text-white animate-bounce" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brochure;
