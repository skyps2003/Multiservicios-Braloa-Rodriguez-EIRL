import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Leaf, Trees, Globe, Wind, CheckCircle2, ChevronRight, Droplet } from 'lucide-react';
import ContactCTA from '../../components/ui/ContactCTA';
import { Link } from 'react-router-dom';

const EnvironmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const envCommitments = [
    {
      id: 1,
      title: "Cumplimiento Ambiental Irrestricto",
      desc: "Respetamos rigurosamente la legislación ambiental peruana vigente, guiándonos por la Ley General del Ambiente y la Ley de Gestión Integral de Residuos Sólidos."
    },
    {
      id: 2,
      title: "Ecoeficiencia y Uso de Recursos",
      desc: "Fomentamos el uso racional, eficiente y medido del agua, combustibles, energía y materiales para reducir la huella de carbono en cada una de nuestras obras."
    },
    {
      id: 3,
      title: "Mitigación y Prevención de la Contaminación",
      desc: "Implementamos rigurosos planes de contención, control de polvos y protección de suelos y fuentes marinas en nuestras áreas de influencia directa."
    },
    {
      id: 4,
      title: "Cultura Ecológica Compartida",
      desc: "Sensibilizamos activamente a nuestros colaboradores, proveedores y aliados estratégicos para promover una cultura ambiental comprometida y transparente."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-700 relative overflow-hidden"
    >
      {/* Background Soft Orbs */}
      <div className="absolute top-[30%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-500/[0.02] dark:bg-emerald-500/[0.005] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40rem] h-[40rem] bg-teal-500/[0.02] dark:bg-teal-500/[0.005] rounded-full blur-[160px] pointer-events-none" />

      <PageHeader 
        title="Medio Ambiente"
        description="Preservamos el ecosistema y gestionamos nuestros residuos con responsabilidad técnica, protegiendo activamente la biodiversidad de Marcona."
        className="pt-20 pb-16 md:pt-32 md:pb-28"
      />

      <section className="py-16 md:py-24 bg-white dark:bg-slate-950 relative z-10">
        <div className="content-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Block: Declaración de Compromiso */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-emerald-500"></span>
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">COMPROMISO ECOLÓGICO</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                Cuidado activo <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">del ecosistema</span>
              </h2>

              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                En <strong>BRALOA E.I.R.L.</strong> entendemos que el futuro de la ingeniería es verde. Por ello, asumimos el compromiso de mitigar de forma técnica el impacto de nuestras obras en la hermosa geografía costera de San Juan de Marcona, gestionando responsablemente cada recurso.
              </p>

              {/* Technical Indicator Card */}
              <div className="bg-emerald-500/5 dark:bg-emerald-500/[0.02] rounded-[2rem] border border-emerald-500/10 p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-sm">
                    <Globe size={18} />
                  </div>
                  <h3 className="text-base font-black text-slate-800 dark:text-slate-200 tracking-tight">Cuidado del Entorno</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">100% de Cumplimiento de Normas de Residuos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Seguimiento y Registro de Emisiones y Consumo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Reforestación y Cuidado de Áreas Verdes Locales</span>
                  </div>
                </div>
              </div>


            </div>

            {/* Right Block: Commitments Detailed Grid */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-8">Nuestros Objetivos Ambientales</h3>
              
              <div className="grid grid-cols-1 gap-6">
                {envCommitments.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.id}
                    className="flex gap-6 p-6 rounded-[2rem] bg-slate-50/50 dark:bg-slate-900/20 border border-slate-150/80 dark:border-white/5 hover:border-emerald-500/20 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all duration-300 group shadow-xs"
                  >
                    <div className="size-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Leaf size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 mb-2 tracking-tight group-hover:text-emerald-500 transition-colors">
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

export default EnvironmentPage;
