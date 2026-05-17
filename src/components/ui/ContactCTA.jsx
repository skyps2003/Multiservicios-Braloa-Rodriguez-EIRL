import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="section-spacing relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-700">
      <div className="content-width">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] overflow-hidden p-12 md:p-24 text-center border transition-all duration-700 bg-gradient-to-br from-slate-50 via-white to-apple-green/5 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-slate-200/60 dark:border-white/5 shadow-[0_50px_100px_-20px_rgba(137,193,61,0.06)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
        >
          
          {/* DYNAMIC MESH BACKGROUND - Mode Aware Colors */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-apple-green/10 dark:bg-apple-green/20 rounded-full blur-[120px]"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
                x: [0, -50, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-[140px]"
            />
          </div>

          {/* Premium Noise Overlay */}
          <div className="absolute inset-0 bg-grain opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10 w-full"
            >
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
              <span className="shrink-0 px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Excelencia que Transforma</span>
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
            </motion.div>
            
            <h2 className="text-4xl md:text-[6rem] font-black text-slate-900 dark:text-white mb-10 leading-[1] tracking-tighter">
              ¿Listo para iniciar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-green via-emerald-600 to-blue-600 dark:from-apple-green dark:via-emerald-400 dark:to-blue-400 drop-shadow-[0_0_30px_rgba(137,193,61,0.15)]">
                su nuevo proyecto?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
              Solicite una asesoría técnica personalizada y descubra por qué somos el <span className="text-slate-900 dark:text-white font-bold border-b-2 border-apple-green/50 pb-1">socio estratégico</span> más confiable de la región.
            </p>

            <div className="flex justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-4 px-14 py-6 bg-gradient-to-r from-apple-green to-emerald-600 dark:from-apple-green dark:to-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-apple-green/20 dark:shadow-[0_30px_60px_-15px_rgba(137,193,61,0.15)] hover:from-apple-green/95 hover:to-emerald-600/95 transition-all group tracking-[0.2em] text-[10px] uppercase"
                >
                  SOLICITAR COTIZACIÓN
                  <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* REFINED TRUST BADGES (Elegant pills layout) */}
          <div className="mt-20 pt-12 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap justify-center items-center gap-6">
            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-100/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 shadow-sm group transition-all"
            >
              <ShieldCheck size={18} className="text-apple-green group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Certificación SSOMA</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-100/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 shadow-sm group transition-all"
            >
              <Award size={18} className="text-blue-500 group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">ISO 9001:2015</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-100/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 shadow-sm group transition-all"
            >
              <CheckCircle2 size={18} className="text-emerald-500 group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Garantía Real</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;

