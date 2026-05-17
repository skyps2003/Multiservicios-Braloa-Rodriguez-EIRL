export const siteContent = {
  company: {
    name: "Braloa Rodriguez EIRL",
    fullName: "Multiservicios Braloa Rodriguez EIRL",
    ruc: "20602111904",
    slogan: "Ingeniería de Confianza, Soluciones que Perduran",
    description: "Líderes en soluciones integrales para los sectores industrial, minero y gubernamental en Marcona e Ica. Fusionamos rigor técnico con calidez humana.",
    highlight: "10,000+ Horas Hombre sin accidentes (Certificado SSOMA)",
    yearEstablished: 2021,
    whatsapp: "51940393414",
    whatsappLink: "https://wa.me/51940393414"
  },
  stats: [
    { label: "Horas Hombre sin Accidentes", value: "10k+", icon: "Shield" },
    { label: "Proyectos Industriales", value: "100+", icon: "HardHat" },
    { label: "Años de Trayectoria", value: "5+", icon: "Clock" },
    { label: "Cumplimiento SSOMA", value: "100%", icon: "CheckCircle2" }
  ],
  clients: [
    { name: "Shougang Hierro Perú", logo: "/img/clients/Shougang Hierro Perú.png", type: "Minería" },
    { name: "EsSalud", logo: "/img/clients/EsSalud.png", type: "Salud" },
    { name: "Marcobre", logo: "/img/clients/Marcobre.png", type: "Minería" },
    { name: "Muni Marcona", logo: "/img/clients/Muni Marcona.png", type: "Estado" }
  ],
  navigation: [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Contacto", href: "/contacto" }
  ],
  services: [
    {
      id: "obras-civiles",
      category: "Construcción y Obras Civiles",
      title: "Infraestructura Integral",
      icon: "HardHat",
      image: "/img/services/obras-civiles.jpg",
      grid: "md:col-span-4 md:row-span-2 lg:col-span-4 lg:row-span-2",
      description: "Columna vertebral de nuestra empresa, abarcando desde el diseño hasta la ejecución final con rigor técnico.",
      details: [
        { label: "Obras Integrales", text: "Gestión completa y desarrollo de proyectos de ingeniería de principio a fin." },
        { label: "Refaccionamiento", text: "Reparación integral de techos, muros, pisos y redes sanitarias." },
        { label: "Trabajos Preliminares", text: "Trazo, replanteo, nivelación y compactación de terrenos." },
        { label: "Acabados", text: "Instalación de cerámicos, porcelanatos, vinílicos y laminados." },
        { label: "Movimiento de Tierras", text: "Demolición, excavación y pavimentación con equipo especializado." }
      ]
    },
    {
      id: "drywall-acabados",
      category: "Tabiquería y Acabados",
      title: "Optimización de Espacios",
      icon: "Layout",
      image: "/img/services/drywall.jpg",
      grid: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      description: "Soluciones modernas de tabiquería, drywall y carpintería fina para interiores corporativos e industriales.",
      details: [
        { label: "Sistema Drywall", text: "Módulos, tabiquería, divisiones y cielos rasos termoacústicos." },
        { label: "Carpintería y Melamine", text: "Fabricación y remodelación de mobiliario y módulos prefabricados." },
        { label: "Cristales y Aluminios", text: "Fabricación de vidrios y ventanas en sistemas arquitectónicos." }
      ]
    },
    {
      id: "metalmecanica",
      category: "Metalmecánica y Pintura",
      title: "Protección Estructural",
      icon: "Hammer",
      image: "/img/services/metalmecanica.jpg",
      grid: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      description: "Fabricación y mantenimiento de estructuras metálicas con acabados industriales de alta durabilidad.",
      details: [
        { label: "Estructuras Metálicas", text: "Soldadura en general y fabricación de naves industriales." },
        { label: "Arenado Industrial", text: "Eliminación de óxidos mediante proyección de abrasivos." },
        { label: "Pintura Anticorrosiva", text: "Recubrimientos epóxicos de alta resistencia a la intemperie." }
      ]
    },
    {
      id: "energia-agua",
      category: "Sostenibilidad y Energía",
      title: "Soluciones Sostenibles",
      icon: "Sun",
      image: "/img/services/solar.jpg",
      grid: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      description: "Tecnología enfocada en la eficiencia energética y el cuidado responsable de los recursos hídricos.",
      details: [
        { label: "Energía Solar", text: "Instalación de paneles fotovoltaicos para iluminación eficiente." },
        { label: "Riego Tecnificado", text: "Sistemas por goteo con bombas sumergibles solares." },
        { label: "Gestión de Agua", text: "Instalación de tanques elevados y sistemas de almacenamiento." }
      ]
    },
    {
      id: "electricos-seguridad",
      category: "Electricidad y Seguridad",
      title: "Seguridad Integral",
      icon: "Zap",
      image: "/img/services/electricidad.jpg",
      grid: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      description: "Prevención y protección de infraestructuras con sistemas de emergencia y climatización.",
      details: [
        { label: "Sistemas de Emergencia", text: "Alarmas contra incendios y detección de humo inteligente." },
        { label: "Climatización", text: "Aire acondicionado y ventilación mecánica industrial." },
        { label: "Instalaciones Eléctricas", text: "Renovación de tableros y sistemas eléctricos generales." }
      ]
    },
    {
      id: "maquinaria-entorno",
      category: "Maquinaria y Entorno",
      title: "Apoyo Logístico Pesado",
      icon: "Truck",
      image: "/img/services/maquinaria.jpg",
      grid: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      description: "Maquinaria pesada para movimiento de tierras y servicios de conservación ambiental.",
      details: [
        { label: "Remoción de Escombros", text: "Excavación y eliminación eficiente con maquinaria propia." },
        { label: "Jardinería y Reforestación", text: "Conservación ambiental y plantación de especies locales." }
      ]
    },
    {
      id: "industriales-logisticos",
      category: "Servicios Logísticos",
      title: "Soporte Operativo",
      icon: "Anchor",
      image: "/img/services/maritimo.jpg",
      grid: "md:col-span-6 md:row-span-1 lg:col-span-6 lg:row-span-1",
      description: "Soporte especializado para operaciones en campo, mantenimiento marítimo y logística comercial.",
      details: [
        { label: "Mantenimiento Marítimo", text: "Mantenimiento de muelles flotantes con personal profesional." },
        { label: "Logística y Equipos", text: "Alquiler de andamios y equipos de construcción certificados." },
        { label: "Apoyo a Campamentos", text: "Servicios de hospedaje y alimentación para personal en campo." }
      ]
    }
  ],
  projects: [
    {
      title: "Centro de Salud José Paseta Bar",
      location: "Marcona",
      description: "Refaccionamiento integral de techos, muros y redes sanitarias. Ampliación de módulos médicos en Drywall.",
      image: "/img/projects/proyecto1.jpg",
      stats: { area: "1,200m2", duration: "4 meses", category: "Obras Civiles" }
    },
    {
      title: "Sistema Solar Tecnificado de Riego",
      location: "Marcona",
      description: "Irrigación precisa y automatizada usando energía solar y bombas sumergibles de alta eficiencia.",
      image: "/img/projects/proyecto2.jpg",
      stats: { area: "5 hectáreas", duration: "2 meses", category: "Energía Renovable" }
    },
    {
      title: "Conservación y Reforestación Local",
      location: "Marcona",
      description: "Preparación de tierra y sembrado de Palmeras Abanico en centros educativos de la región.",
      image: "/img/projects/proyecto3.jpg",
      stats: { area: "2,000m2", duration: "3 meses", category: "Medio Ambiente" }
    },
    {
      title: "Mantenimiento de Muelle Flotante",
      location: "San Pedro",
      description: "Labores especializadas de mantenimiento y pintura anticorrosiva en zona marítima de alto impacto.",
      image: "/img/projects/proyecto4.jpg",
      stats: { area: "N/A", duration: "1 mes", category: "Marítimo" }
    }
  ],
  contact: {
    address: "AH Victor Raul Haya de la Torre Mza C, Lote 13 A, San Juan de Marcona",
    phones: ["940393414", "987524228"],
    email: "braloa_eirl@hotmail.com",
    ruc: "20602111904",
    facebook: "https://www.facebook.com/profile.php?id=100069862716428",
    maps: "https://goo.gl/maps/...",
    brochureUrl: "/docs/Brochure_Braloa_2026.pdf"
  }
};
