import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Users, MessageSquare, Award, HardHat, Leaf, Heart, ChevronRight, Sparkles } from 'lucide-react';

const About = ({ short }) => {
  const values = [
    { title: "Compromiso", desc: "Asumimos cada proyecto con la máxima seriedad para asegurar resultados óptimos.", icon: Target },
    { title: "Responsabilidad", desc: "Actuamos con rectitud técnica y legal, garantizando la durabilidad de nuestras obras.", icon: ShieldCheck },
    { title: "Trabajo en Equipo", desc: "Fomentamos un entorno inclusivo con personal calificado e ingenieros multidisciplinarios.", icon: Users },
    { title: "Comunicación", desc: "Mantenemos una relación transparente y estrecha antes, durante y después de la entrega.", icon: MessageSquare }
  ];

  const policies = [
    { title: "SGSST", icon: HardHat, text: "Protegemos la vida y salud de nuestros colaboradores mediante una cultura preventiva constante." },
    { title: "Calidad", icon: Award, text: "Cumplimos rigurosamente los requisitos legales y normativas en cada acabado y obra civil." },
    { title: "Medio Ambiente", icon: Leaf, text: "Operamos bajo la Ley General del Ambiente con uso responsable de recursos y gestión de residuos." },
    { title: "Responsabilidad Social", icon: Heart, text: "Apoyamos el bienestar local con programas de reforestación y gestión ética del entorno." }
  ];

  return (
    <section id="nosotros" className="bg-white dark:bg-slate-950 transition-colors duration-700 overflow-hidden relative">
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-apple-green/[0.03] dark:bg-apple-green/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* BLOQUE 1: Nuestra Identidad */}
      <section className="pt-12 lg:pt-16 pb-0 relative">
        <div className="content-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-full mb-16">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-10"
                >
                  <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
                  <span className="shrink-0 px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Nuestra Identidad</span>
                  <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tighter">
                  Trayectoria con Propósito y <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-green to-emerald-600 glow-text-green">Rigor Operativo</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-10 max-w-xl">
                <p>
                  En <span className="text-slate-900 dark:text-white font-bold">Multiservicios Braloa</span>, entendemos que cada proyecto es la base del crecimiento de nuestros clientes. Con más de 5 años de experiencia, hemos perfeccionado un modelo que une la calidez humana con la precisión industrial.
                </p>
                <p className="border-l-4 border-apple-green pl-6 italic">
                  No solo ejecutamos obras; construimos el futuro de Marcona con un enfoque ético, seguro y altamente eficiente.
                </p>
                {short && (
                  <div className="pt-6 pb-4">
                    <Link 
                      to="/nosotros" 
                      className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 dark:bg-white dark:text-slate-950 text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-all group tracking-widest text-xs uppercase"
                    >
                      CONOCER NUESTRA HISTORIA
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Premium Floating Card */}
              <div className="absolute inset-0 bg-apple-green/5 blur-[100px] rounded-[4rem] -z-10" />
              <div className="bg-white dark:bg-slate-900/60 backdrop-blur-3xl p-12 md:p-16 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] group">
                <div className="size-20 bg-apple-green rounded-3xl flex items-center justify-center text-white mb-10 shadow-2xl shadow-apple-green/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Garantía Humana y Operativa</h3>
                <p className="text-xl text-apple-green font-bold mb-8 italic">"Un buen trabajo es nuestro compromiso con usted"</p>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                  Operamos bajo el rigor del sistema <span className="text-slate-900 dark:text-white font-bold">SSOMA</span>. Nos enorgullece registrar más de <span className="text-apple-green font-black">10,000 horas hombre</span> con cero accidentes, protegiendo lo más valioso: su confianza.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {!short && (
        <>
          {/* BLOQUE 2: Pilares Estratégicos */}
          <section className="section-spacing bg-slate-50 dark:bg-slate-900/40">
            <div className="content-width">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-slate-900 p-16 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-2xl group"
                >
                  <div className="size-16 bg-apple-green/10 rounded-2xl flex items-center justify-center text-apple-green mb-10 group-hover:bg-apple-green group-hover:text-white transition-all">
                    <Target size={32} />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Nuestra Misión</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                    Satisfacer las necesidades de nuestros clientes mediante la ejecución de proyectos de ingeniería con los más altos estándares de seguridad, calidad y responsabilidad ambiental.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-slate-900 p-16 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-2xl group"
                >
                  <div className="size-16 bg-apple-green/10 rounded-2xl flex items-center justify-center text-apple-green mb-10 group-hover:bg-apple-green group-hover:text-white transition-all">
                    <Eye size={32} />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Nuestra Visión</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                    Ser la empresa líder en soluciones integrales a nivel nacional, reconocida por nuestra excelencia operativa, innovación y el firme compromiso con el desarrollo sostenible.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* BLOQUE 3: Valores Fundamentales */}
          <section className="section-spacing">
            <div className="content-width">
              <div className="text-center mb-24">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-10"
                >
                  <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
                  <span className="shrink-0 px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Cultura Braloa</span>
                  <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">
                  Valores que nos <span className="text-apple-green glow-text-green">Guían</span>
                </h2>
                <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">La base de nuestra cultura y el motor de nuestras acciones diarias.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {values.map((v, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-50/50 dark:bg-slate-900/50 p-12 rounded-[3rem] border border-slate-100 dark:border-white/5 text-center group hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="size-16 mx-auto bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-apple-green mb-10 shadow-lg group-hover:bg-apple-green group-hover:text-white transition-all duration-500">
                      <v.icon size={32} />
                    </div>
                    <h4 className="text-2xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">{v.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* BLOQUE 4: Políticas Corporativas */}
          <section className="section-spacing relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-950 dark:bg-slate-900" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#89C13D_1px,transparent_1px)] [background-size:30px_30px]" />
            </div>
            
            <div className="content-width relative z-10">
              <div className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10">
                  Compromiso <span className="text-apple-green glow-text-green">Institucional</span>
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">Políticas corporativas de alto estándar que rigen cada intervención.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                {policies.map((p, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex gap-10 p-12 bg-white/5 backdrop-blur-3xl rounded-[3.5rem] border border-white/10 hover:bg-white/10 transition-all group"
                  >
                    <div className="size-20 shrink-0 bg-apple-green rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-apple-green/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <p.icon size={36} />
                    </div>
                    <div>
                      <h4 className="text-3xl font-black mb-4 text-apple-green tracking-tight">{p.title}</h4>
                      <p className="text-slate-300 leading-relaxed text-base font-medium opacity-80">{p.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </section>
  );
};

export default About;
