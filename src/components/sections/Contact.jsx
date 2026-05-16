import React from 'react'; // Braloa Contact Section
import { motion } from 'framer-motion';
import { siteContent } from '../../data/siteContent';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Youtube, Clock, Building2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="bg-white dark:bg-slate-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Unified Contact Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden border border-slate-200 dark:border-slate-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Info Side (Left) */}
            <div className="p-8 md:p-12 bg-slate-50/50 dark:bg-slate-900/50 border-r border-slate-200 dark:border-slate-800">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Póngase en contacto</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Estamos listos para brindarle la mejor asesoría técnica para sus proyectos de construcción en Marcona.
                </p>
              </div>

              <div className="space-y-10">
                {/* Phones, Email & Socials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 text-apple-green mb-3">
                      <Phone size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest">Teléfonos</span>
                    </div>
                    {siteContent.contact.phones.map(p => (
                      <a key={p} href={`tel:+51${p}`} className="block text-sm dark:text-slate-300 hover:text-apple-green transition-colors">{p}</a>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-baby-purple-dark mb-3">
                      <Mail size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest">Correo Electrónico</span>
                    </div>
                    <a href={`mailto:${siteContent.contact.email}`} className="text-sm dark:text-slate-300 hover:text-apple-green transition-colors break-all">{siteContent.contact.email}</a>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 text-apple-green mb-3">
                      <Facebook size={20} className="text-[#1877F2]" />
                      <span className="text-xs font-bold uppercase tracking-widest">Síguenos</span>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={siteContent.contact.facebook} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="fb-premium-button group"
                      >
                        <span />
                        <span />
                        <span />
                        <span />
                        <Facebook size={24} className="group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sede & Map Integration */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 text-apple-green mb-4">
                    <MapPin size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Nuestra Sede</span>
                  </div>
                  <p className="text-sm dark:text-slate-300 mb-6">{siteContent.contact.address}</p>
                  <div className="rounded-2xl overflow-hidden h-48 border border-slate-200 dark:border-slate-800 grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.2446431401722!2d-75.16206793969114!3d-15.363231435156916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9116635232ddd0a3%3A0x5f6e8806e64c75c3!2sVictor%20Raul%2C%20San%20Juan%20de%20Marcona%2011421!5e0!3m2!1ses!2spe!4v1778943607539!5m2!1ses!2spe"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Sede Marcona"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side (Right) */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-10">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Envíenos un mensaje</h4>
                <p className="text-sm text-slate-500">Un asesor se pondrá en contacto con usted a la brevedad.</p>
              </div>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = formData.get('name');
                  const phone = formData.get('phone');
                  const message = formData.get('message');
                  const text = `*Consulta desde la Web*%0A*Nombre:* ${name}%0A*WhatsApp:* ${phone}%0A*Mensaje:* ${message}`;
                  window.open(`https://wa.me/51967524026?text=${text}`, '_blank');
                }}
              >
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nombre Completo</label>
                  <input id="contact-name" name="name" type="text" required placeholder="Ej. Carlos Rodriguez" className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-apple-green/50 dark:text-white transition-all outline-none" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="contact-phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">WhatsApp / Celular</label>
                  <input id="contact-phone" name="phone" type="tel" required placeholder="Su número de contacto" className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-apple-green/50 dark:text-white transition-all outline-none" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Consulta</label>
                  <textarea id="contact-message" name="message" rows="5" required placeholder="Háblenos de su proyecto..." className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-apple-green/50 dark:text-white transition-all outline-none resize-none"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit" 
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-green-500/10 transition-all text-lg"
                >
                  <Send size={20} /> Iniciar Conversación
                </motion.button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
