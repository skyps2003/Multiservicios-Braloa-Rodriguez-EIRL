import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../../data/siteContent';
import { 
  Send, Phone, Mail, MapPin, Facebook, MessageSquare,
  User, Building2, Briefcase, CheckCircle2, Loader2, ChevronRight, Sparkles, Navigation
} from 'lucide-react';

const ContactField = ({ icon: Icon, label, name, value, onChange, placeholder, type = "text", required = true }) => (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-apple-green transition-colors pointer-events-none z-10">
      <Icon size={18} />
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-white/60 dark:bg-slate-900/20 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-14 pr-5 text-slate-900 dark:text-white placeholder:text-slate-400/60 focus:outline-none focus:ring-6 focus:ring-apple-green/10 focus:border-apple-green transition-all duration-300 font-semibold text-sm shadow-sm"
    />
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate premium loader
    await new Promise(resolve => setTimeout(resolve, 1500));

    const text = `*SOLICITUD DE COTIZACIÓN - BRALOA*\n\n` +
                 `*Nombre:* ${form.name}\n` +
                 `*Empresa:* ${form.company}\n` +
                 `*Servicio:* ${form.service}\n` +
                 `*Mensaje:* ${form.message}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${siteContent.company.whatsapp}?text=${encodedText}`;
    
    // WhatsApp sending logic
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setStatus('success');
    
    // Reset after some time
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', company: '', service: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-700">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-apple-green/[0.03] dark:bg-apple-green/[0.01] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="content-width">
        
        {/* Centered Premium Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6 w-full"
          >
            <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
            <span className="shrink-0 px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Canal de Atención Directa</span>
            <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 leading-none">
            Hagamos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-green to-emerald-600 glow-text-green">suceda</span>
          </h2>
          
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Conéctese de forma directa con nuestro equipo técnico, envíe sus requerimientos de cotización o ubíquenos en tiempo real.
          </p>
        </div>

        {/* Big central layout: 2-column grid for premium balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* COLUMN 1: Clean Info Card with integrated Map */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between space-y-8 p-8 rounded-[2rem] bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-white/5 lg:col-span-5 relative overflow-hidden min-h-[640px]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-apple-green/5 dark:bg-apple-green/2 rounded-full blur-[40px] pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100 dark:border-white/5">
                <div className="size-8 rounded-lg bg-apple-green/10 flex items-center justify-center text-apple-green">
                  <Phone size={16} />
                </div>
                <h3 className="text-base font-black text-slate-800 dark:text-slate-200 tracking-tight">Atención Técnica</h3>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100 dark:border-white/5">
                <div className="size-9 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 flex items-center justify-center shadow-xs shrink-0 border border-slate-100 dark:border-white/5">
                  <Phone size={14} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Líneas Directas</h4>
                  <div className="flex flex-col gap-0.5">
                    {siteContent.contact.phones.map((phone) => (
                      <a 
                        key={phone}
                        href={`tel:${phone}`}
                        className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-apple-green transition-colors tracking-tight"
                      >
                        +51 {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100 dark:border-white/5">
                <div className="size-9 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 flex items-center justify-center shadow-xs shrink-0 border border-slate-100 dark:border-white/5">
                  <Mail size={14} />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Correo Institucional</h4>
                  <a 
                    href={`mailto:${siteContent.contact.email}`}
                    className="text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-apple-green transition-colors block truncate tracking-tight"
                  >
                    {siteContent.contact.email}
                  </a>
                </div>
              </div>

              {/* Address with integrated map */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="size-9 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 flex items-center justify-center shadow-xs shrink-0 border border-slate-100 dark:border-white/5">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Dirección Base</h4>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed tracking-tight">
                      {siteContent.contact.address}
                    </p>
                  </div>
                </div>

                {/* Integrated Map Iframe right under the address */}
                <div className="rounded-[1.5rem] overflow-hidden border border-slate-200/50 dark:border-white/5 bg-slate-100 dark:bg-slate-900 relative group/map h-48 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.2446431401722!2d-75.16206793969114!3d-15.363231435156916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9116635232ddd0a3%3A0x5f6e8806e64c75c3!2sVictor%20Raul%2C%20San%20Juan%20de%20Marcona%2011421!5e0!3m2!1ses!2spe!4v1778943607539!5m2!1ses!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Marcona Direct"
                    className="grayscale dark:invert opacity-80 group-hover/map:opacity-100 group-hover/map:grayscale-0 transition-all duration-700 h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
              <div>
                <h4 className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Canales Digitales</h4>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">@BRALOARODRIGUEZ</p>
              </div>
              <div className="flex gap-2.5">
                <motion.a 
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  href={siteContent.contact.facebook} 
                  target="_blank" 
                  rel="noreferrer"
                  className="size-9 rounded-xl bg-blue-500/10 dark:bg-blue-500/5 text-blue-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-blue-500/10"
                >
                  <Facebook size={16} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${siteContent.company.whatsapp}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="size-9 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-500 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all border border-emerald-500/10"
                >
                  <MessageSquare size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Exquisite Form Card (Clean Frost Container) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-white/80 to-emerald-50 dark:from-slate-900/80 dark:to-slate-950/60 backdrop-blur-xl rounded-[2rem] border border-slate-100 dark:border-white/5 p-10 shadow-lg flex flex-col justify-between relative overflow-hidden min-h-[640px] lg:col-span-7"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-apple-green/5 dark:bg-apple-green/2 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 rounded-lg bg-apple-green/10 flex items-center justify-center text-apple-green">
                  <Sparkles size={16} />
                </div>
                <h3 className="text-base font-black text-slate-800 dark:text-slate-200 tracking-tight">Formulario de Requerimiento</h3>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center h-full"
                  >
                    <div className="size-16 bg-apple-green text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-apple-green/30 animate-bounce">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 tracking-tight">¡Mensaje Redirigido!</h4>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xs text-xs font-semibold leading-relaxed">
                      Se ha estructurado y enviado la cotización a nuestro canal de WhatsApp. ¡En breve nos comunicaremos con usted!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6 flex flex-col justify-between h-full"
                  >
                    <div className="space-y-4">
                      <ContactField 
                        icon={User}
                        label="Tu Nombre"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu Nombre"
                      />
                      <ContactField 
                        icon={Building2}
                        label="Empresa"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Empresa / Institución"
                      />

                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-apple-green transition-colors pointer-events-none z-10">
                          <Briefcase size={16} />
                        </div>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/60 dark:bg-slate-900/20 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-14 pr-10 text-slate-900 dark:text-white appearance-none focus:outline-none focus:ring-6 focus:ring-apple-green/10 focus:border-apple-green transition-all duration-300 font-semibold text-sm cursor-pointer shadow-sm"
                        >
                          <option value="" disabled className="text-slate-400">Seleccione el servicio...</option>
                          {siteContent.services.map(s => (
                            <option key={s.id} value={s.title} className="text-slate-900 dark:text-white bg-white dark:bg-slate-950">{s.title}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-apple-green transition-colors">
                          <ChevronRight size={14} className="rotate-90" />
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-apple-green transition-colors pointer-events-none z-10">
                          <MessageSquare size={16} />
                        </div>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          placeholder="Detalles de su requerimiento aquí..."
                          rows="5"
                          className="w-full bg-white/60 dark:bg-slate-900/20 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-14 pr-5 text-slate-900 dark:text-white placeholder:text-slate-400/60 focus:outline-none focus:ring-6 focus:ring-apple-green/10 focus:border-apple-green transition-all duration-300 font-semibold text-sm leading-relaxed resize-none shadow-sm"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-gradient-to-r from-apple-green to-emerald-600 hover:from-apple-green/95 hover:to-emerald-600/95 text-white rounded-2xl font-black text-sm uppercase tracking-[0.18em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.99] transition-all shadow-[0_18px_36px_-12px_rgba(137,193,61,0.25)] disabled:opacity-50 group overflow-hidden"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="animate-spin" size={16} />
                      ) : (
                        <>
                          Enviar Vía WhatsApp
                          <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
