import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Users, Heart, Sparkles, CheckCircle2, ChevronRight, Scale } from 'lucide-react';
import ContactCTA from '../../components/ui/ContactCTA';
import { Link } from 'react-router-dom';

const SocialPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialCommitments = [
    {
      id: 1,
      title: "Bienestar de Nuestros Colaboradores",
      desc: "Fomentamos un ambiente de trabajo seguro, inclusivo, justo y sumamente respetuoso de la dignidad humana y los derechos laborales."
    },
    {
      id: 2,
      title: "Crecimiento Técnico y Profesional",
      desc: "Impulsamos de manera decidida el crecimiento y desarrollo personal y profesional de nuestro equipo humano mediante planes de capacitación."
    },
    {
      id: 3,
      title: "Ética Comercial Inquebrantable",
      desc: "Garantizamos que todas nuestras operaciones y relaciones comerciales se realicen bajo los más estrictos lineamientos de honestidad, transparencia y ética."
    },
    {
      id: 4,
      title: "Desarrollo Sostenible de la Comunidad",
      desc: "Apoyamos proactivamente iniciativas sociales, educativas y comunitarias locales que sumen valor y bienestar a la población de San Juan de Marcona."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-700 relative overflow-hidden"
    >
      {/* Background Soft Orbs */}
      <div className="absolute top-[30%] left-[-10%] w-[40rem] h-[40rem] bg-blue-500/[0.02] dark:bg-blue-500/[0.005] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-500/[0.02] dark:bg-indigo-500/[0.005] rounded-full blur-[160px] pointer-events-none" />

      <PageHeader 
        title="Responsabilidad Social"
        description="Fomentamos el bienestar de nuestro equipo y el progreso continuo de nuestra comunidad, operando con principios éticos sólidos."
        className="pt-20 pb-16 md:pt-32 md:pb-28"
      />

      <section className="py-16 md:py-24 bg-white dark:bg-slate-950 relative z-10">
        <div className="content-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Block: Declaración de Compromiso */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-blue-500"></span>
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">COMPROMISO SOCIAL</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                Progreso y <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">bienestar social</span>
              </h2>

              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                En <strong>BRALOA E.I.R.L.</strong> entendemos que el éxito de una gran empresa constructora se mide en base al desarrollo positivo y el bienestar que genera en su entorno social. Impulsamos relaciones de confianza y respeto con nuestros colaboradores, clientes y comunidad.
              </p>

              {/* Technical Indicator Card */}
              <div className="bg-blue-50/5 dark:bg-blue-500/[0.02] rounded-[2rem] border border-blue-500/10 p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-sm">
                    <Scale size={18} />
                  </div>
                  <h3 className="text-base font-black text-slate-800 dark:text-slate-200 tracking-tight">Ética y Transparencia</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Cero Tolerancia a la Discriminación</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Desarrollo y Apoyo al Talento Local</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Patrocinio de Iniciativas de Salud y Deporte</span>
                  </div>
                </div>
              </div>


            </div>

            {/* Right Block: Commitments Detailed Grid */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-8">Nuestros Compromisos Éticos</h3>
              
              <div className="grid grid-cols-1 gap-6">
                {socialCommitments.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.id}
                    className="flex gap-6 p-6 rounded-[2rem] bg-slate-50/50 dark:bg-slate-900/20 border border-slate-150/80 dark:border-white/5 hover:border-blue-500/20 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all duration-300 group shadow-xs"
                  >
                    <div className="size-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 mb-2 tracking-tight group-hover:text-blue-500 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="flex items-center gap-4 w-full content-width my-8">
        <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
      </div>

      <ContactCTA />
    </motion.div>
  );
};

export default SocialPage;
