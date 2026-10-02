import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'omi-lead-intake-qualification',
    name: { en: 'OMI Intake & Routing', es: 'Ingestión y Enrutamiento OMI' },
    websiteUrl: 'https://omi1.com/',
    client: { en: 'OMI Growth', es: 'OMI Growth' },
    timeline: '2024 - Present',
    pillar: 'enterprise',
    stack: ['n8n', 'OpenAI Agents', 'Apollo API', 'Salesforce', 'Google Sheets'],
    services: [
      { en: 'Agentic Workflows', es: 'Flujos Agénticos' },
      { en: 'Revenue Enablement', es: 'Habilitación de Ingresos' },
      { en: 'Attribution Modeling', es: 'Modelado de Atribución' }
    ],
    summary: {
      en: 'Built an intelligent lead routing system that qualifies inbound leads automatically.',
      es: 'Construí un sistema inteligente de enrutamiento que califica leads entrantes automáticamente.'
    },
    challenge: {
      en: 'OMI Growth was processing hundreds of inbound leads monthly, but their sales team was spending 40% of their time on unqualified prospects. Lead data arrived from multiple channels — web forms, trade shows, partner referrals — with no consistent qualification framework. By the time a rep determined a lead was unqualified, they\'d already invested 30-45 minutes in research and outreach. High-value leads were getting the same treatment as tire-kickers, and response times were suffering across the board.',
      es: 'OMI Growth procesaba cientos de leads entrantes mensualmente, pero su equipo de ventas gastaba el 40% de su tiempo en prospectos no calificados. Los datos de leads llegaban de múltiples canales — formularios web, ferias comerciales, referidos de socios — sin un marco de calificación consistente. Para cuando un representante determinaba que un lead no estaba calificado, ya había invertido 30-45 minutos en investigación y alcance. Los leads de alto valor recibían el mismo tratamiento que los curiosos, y los tiempos de respuesta sufrían en todos los frentes.'
    },
    goal: {
      en: 'Automate lead qualification so that sales reps only interact with verified, high-intent prospects. Reduce time-to-response for qualified leads. Build an intelligent routing system that matches leads to the right rep based on industry, deal size, and product fit.',
      es: 'Automatizar la calificación de leads para que los representantes de ventas solo interactúen con prospectos verificados y de alta intención. Reducir el tiempo de respuesta para leads calificados. Construir un sistema de enrutamiento inteligente que empate leads con el representante correcto basado en industria, tamaño de trato y ajuste de producto.'
    },
    solution: {
      en: 'I deployed an agentic lead qualification pipeline using n8n and OpenAI that processes every inbound lead in real-time. The system analyzes intent signals from the inquiry, queries Apollo for firmographic data (company size, industry, revenue), scores leads using a custom BANT framework, and routes qualified leads directly to the right rep in Salesforce — complete with a pre-built briefing that includes company context, likely use case, and recommended talking points. Unqualified leads get automated nurture sequences instead of rep time.',
      es: 'Desplegué un pipeline agéntico de calificación de leads usando n8n y OpenAI que procesa cada lead entrante en tiempo real. El sistema analiza señales de intención de la consulta, busca datos firmográficos en Apollo (tamaño de empresa, industria, ingresos), califica leads usando un marco BANT personalizado, y enruta leads calificados directamente al representante correcto en Salesforce — completo con un briefing pre-construido que incluye contexto de la empresa, caso de uso probable y puntos de conversación recomendados. Los leads no calificados reciben secuencias de nurture automatizadas en lugar de tiempo del representante.'
    },
    tags: ['AGENTIC AI', 'CRM', 'REVOPS'],
    heroImage: '/images/project3-omi/image5.webp',
    images: [
      '/images/project3-omi/image1.webp',
      '/images/project3-omi/image2.webp',
      '/images/project3-omi/image3.webp',
      '/images/project3-omi/image4.webp'
    ],
    imageAlts: [
      'OMI lead intake qualification flow',
      'CRM routing logic diagram',
      'Lead scoring model dashboard',
      'Salesforce integration output'
    ],
    videos: [
      { id: 'k7Mh38JEXDM', title: { en: 'OMI Brand Video', es: 'Video de Marca OMI' }, role: { en: 'Brand Strategy & Production', es: 'Estrategia de Marca y Producción' } },
      { id: '7RQBMdye2RM', title: { en: 'OMI Battery Show Recap', es: 'Resumen del Battery Show OMI' }, role: { en: 'Event Coverage & Production', es: 'Cobertura de Eventos y Producción' } }
    ]
  },
  {
    id: 'noxguard-brand-rebrand',
    name: { en: 'Noxguard — Brand, Strategy & AI Roadmap', es: 'Noxguard — Marca, Estrategia y Hoja de Ruta de IA' },
    websiteUrl: 'https://www.noxguard.com/',
    client: { en: 'Noxguard (Transliquid Technologies)', es: 'Noxguard (Transliquid Technologies)' },
    timeline: '2024 - 2025',
    pillar: 'enterprise',
    stack: ['AI Strategy', 'Brand Identity', 'Sales Enablement', 'WhatsApp AI', 'n8n', 'Python', 'Predictive Analytics', 'NLP'],
    services: [
      { en: 'Brand Identity & Core Messaging', es: 'Identidad de Marca y Mensajes Clave' },
      { en: 'Business Strategy & Pillar Architecture', es: 'Estrategia de Negocio y Arquitectura de Pilares' },
      { en: 'Sales Enablement Suite', es: 'Suite de Habilitación de Ventas' },
      { en: 'Internal AI Operations', es: 'Operaciones de IA Interna' },
      { en: 'Customer-Facing AI Products', es: 'Productos de IA Orientados al Cliente' }
    ],
    summary: {
      en: 'End-to-end transformation for Mexico\'s leading automotive urea manufacturer. Rebuilt the brand from mission to visual identity, reorganized business strategy around three revenue pillars, engineered a complete sales enablement suite, and mapped an AI roadmap for internal operations (route optimization, predictive inventory, regulatory monitoring) and customer-facing use (WhatsApp ordering, consumption forecasting, ESG reporting).',
      es: 'Transformación integral para el principal fabricante de urea automotriz en México. Reconstruimos la marca desde la misión hasta la identidad visual, reorganizamos la estrategia de negocio en tres pilares de ingresos, diseñamos una suite completa de habilitación de ventas y trazamos una hoja de ruta de IA para operaciones internas (optimización de rutas, inventario predictivo, monitoreo regulatorio) y orientados al cliente (pedidos por WhatsApp, pronóstico de consumo, reportes ESG).'
    },
    challenge: {
      en: 'Noxguard had 15+ years as Mexico\'s leading DEF manufacturer, but the business had outgrown its infrastructure. Brand identity was disconnected from market positioning. Sales reps had no digital tools. Distribution ran on spreadsheets with no demand forecasting. Fleet customers had no self-service ordering or ESG reporting capabilities. The entire operation needed to be rebuilt for scale.',
      es: 'Noxguard tenía más de 15 años como el principal fabricante de DEF en México, pero el negocio había superado su infraestructura. La identidad de marca estaba desconectada del posicionamiento de mercado. Los representantes no tenían herramientas digitales. La distribución se manejaba en hojas de cálculo sin pronóstico de demanda. Los clientes de flotas no tenían pedidos de autoservicio ni capacidades de reportes ESG. Toda la operación necesitaba ser reconstruida para escalar.'
    },
    goal: {
      en: 'Transform Noxguard at every layer — brand, business strategy, sales infrastructure, and technology — to position them as the definitive clean transport partner across North America.',
      es: 'Transformar Noxguard en cada capa — marca, estrategia de negocio, infraestructura de ventas y tecnología — para posicionarlos como el socio definitivo de transporte limpio en Norteamérica.'
    },
    solution: {
      en: 'Rebuilt the brand identity with a new mission, vision, and core values centered on chemical integrity, regional agility, and data transparency. Reorganized the business around three strategic revenue pillars: Compliance First (NOM-044 positioning), Total Cost of Ownership (SCR system protection), and Cross-Border Synergy (Texas-Mexico supply chain advantage). Built a sales enablement suite — Fleet Carbon Audit Tool, AI-indexed technical knowledge base, and automated case study generator. Mapped three internal AI systems: route optimization for distribution, predictive inventory tied to regional demand cycles, and a regulatory monitoring bot for Mexican environmental law. Specified three customer-facing AI products: WhatsApp Smart Dispatch for voice-note DEF ordering, a consumption forecasting API for bulk tank monitoring, and an emissions reporting portal for one-click ESG compliance.',
      es: 'Reconstruimos la identidad de marca con nueva misión, visión y valores centrados en integridad química, agilidad regional y transparencia de datos. Reorganizamos el negocio en tres pilares estratégicos de ingresos: Cumplimiento Primero (posicionamiento NOM-044), Costo Total de Propiedad (protección del sistema SCR) y Sinergia Transfronteriza (ventaja de cadena de suministro Texas-México). Construimos una suite de habilitación de ventas — herramienta de auditoría de carbono de flotas, base de conocimiento técnico indexada por IA y generador automatizado de casos de estudio. Diseñamos tres sistemas de IA internos: optimización de rutas de distribución, inventario predictivo vinculado a ciclos de demanda regional y bot de monitoreo regulatorio para legislación ambiental mexicana. Especificamos tres productos de IA orientados al cliente: WhatsApp Smart Dispatch para pedidos de DEF por nota de voz, API de pronóstico de consumo para monitoreo de tanques a granel y portal de reportes de emisiones para cumplimiento ESG con un clic.'
    },
    tags: ['BRAND STRATEGY', 'AI INFRASTRUCTURE', 'SALES ENABLEMENT'],
    heroImage: '/images/project5-noxguard/truck.webp',
    images: [
      '/images/project5-noxguard/worker.webp',
      '/images/project5-noxguard/product.webp',
      '/images/project5-noxguard/mobile-app.webp',
      '/images/project5-noxguard/packaging.webp'
    ],
    imageAlts: [
      'Noxguard operations engineer monitoring data systems',
      'Noxguard Urea Automotriz product on dark background',
      'Noxguard mobile app interface mockup',
      'Noxguard DEF product packaging on pallet'
    ]
  },
  {
    id: 'derrick-hodge',
    name: { en: 'Derrick Hodge', es: 'Derrick Hodge' },
    client: { en: 'Derrick Hodge / Blue Note Records', es: 'Derrick Hodge / Blue Note Records' },
    timeline: 'Q1 2026 - Active',
    pillar: 'professional-services',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    services: [
      { en: 'Brand Identity', es: 'Identidad de Marca' },
      { en: 'Website Design & Dev', es: 'Diseño y Desarrollo Web' },
      { en: 'Content Strategy', es: 'Estrategia de Contenido' }
    ],
    summary: {
      en: 'Artist site for a Blue Note Recording Artist, composer, and orchestrator bridging hip-hop and classical. Founder of Color of Noize — a 100-musician orchestra.',
      es: 'Sitio de artista para un artista de Blue Note Records, compositor y orquestador que une el hip-hop y lo clásico. Fundador de Color of Noize — una orquesta de 100 músicos.'
    },
    challenge: {
      en: 'Derrick Hodge is a Grammy-winning artist whose work spans genres, ensembles, and institutions — but had no central digital presence that captured the full scope of his creative output.',
      es: 'Derrick Hodge es un artista ganador del Grammy cuyo trabajo abarca géneros, ensambles e instituciones — pero no tenía una presencia digital central que capturara el alcance completo de su producción creativa.'
    },
    goal: {
      en: 'Build a brand-first artist platform that positions Hodge as a composer, orchestrator, and cultural architect — not just a bassist.',
      es: 'Construir una plataforma de artista que posicione a Hodge como compositor, orquestador y arquitecto cultural — no solo un bajista.'
    },
    solution: {
      en: 'Designed and built a cinematic artist site with integrated discography, video archive, and touring presence. Brand identity reflects the intersection of hip-hop precision and orchestral depth.',
      es: 'Diseñamos y construimos un sitio de artista cinematográfico con discografía integrada, archivo de video y presencia de giras. La identidad de marca refleja la intersección de la precisión del hip-hop y la profundidad orquestal.'
    },
    tags: ['Artist Site', 'Music', 'Brand', 'Next.js'],
    heroImage: '/images/in-progress/derrick-hodge.jpg',
    images: ['/images/in-progress/derrick-hodge.jpg'],
    websiteUrl: 'https://derrickhodge.netlify.app/',
  },
  {
    id: 'casa-schuck',
    name: { en: 'Casa Schuck Hotel', es: 'Hotel Casa Schuck' },
    client: { en: 'Casa Schuck', es: 'Casa Schuck' },
    timeline: 'Q1 2026 - Active',
    pillar: 'small-business',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Booking Engine', 'Netlify'],
    services: [
      { en: 'Website Rebuild', es: 'Reconstrucción Web' },
      { en: 'Booking System', es: 'Sistema de Reservaciones' },
      { en: 'Marketing Strategy', es: 'Estrategia de Marketing' }
    ],
    summary: {
      en: 'Complete website rebuild, marketing strategy, and backend booking system for a boutique hacienda bed & breakfast in the heart of San Miguel de Allende.',
      es: 'Reconstrucción completa de sitio web, estrategia de marketing y sistema de reservaciones para una hacienda boutique bed & breakfast en el corazón de San Miguel de Allende.'
    },
    challenge: {
      en: 'Casa Schuck is a beloved boutique hotel in San Miguel de Allende with strong word-of-mouth but an outdated website that failed to convert direct bookings, losing revenue to OTA commissions.',
      es: 'Casa Schuck es un querido hotel boutique en San Miguel de Allende con fuerte recomendación de boca en boca pero un sitio web desactualizado que no convertía reservaciones directas, perdiendo ingresos en comisiones de OTAs.'
    },
    goal: {
      en: 'Build a bilingual digital presence that captures the hacienda experience and drives direct bookings away from third-party platforms.',
      es: 'Construir una presencia digital bilingüe que capture la experiencia de la hacienda y genere reservaciones directas fuera de plataformas de terceros.'
    },
    solution: {
      en: 'Rebuilt the site from scratch with immersive photography, integrated booking engine, bilingual content, and local SEO targeting travelers searching for San Miguel de Allende accommodations.',
      es: 'Reconstruimos el sitio desde cero con fotografía inmersiva, motor de reservaciones integrado, contenido bilingüe y SEO local dirigido a viajeros buscando alojamiento en San Miguel de Allende.'
    },
    tags: ['Hospitality', 'Booking System', 'Bilingual', 'Local SEO'],
    heroImage: '/images/in-progress/casa-schuck.jpg',
    images: ['/images/in-progress/casa-schuck.jpg'],
    websiteUrl: 'https://csnewsite.netlify.app/en',
  },
  {
    id: 'regal-billiards',
    name: { en: 'Regal Billiards', es: 'Regal Billiards' },
    client: { en: 'Regal Billiards', es: 'Regal Billiards' },
    timeline: 'Q1 2026 - Active',
    pillar: 'small-business',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Local SEO', 'Netlify'],
    services: [
      { en: 'Website Build', es: 'Construcción Web' },
      { en: 'Local SEO', es: 'SEO Local' },
      { en: 'Service Pages', es: 'Páginas de Servicio' }
    ],
    summary: {
      en: 'Website and digital presence for Long Island\'s most trusted pool table showroom. Veteran-owned, 40+ years of expert sales, service, and installation.',
      es: 'Sitio web y presencia digital para el salón de mesas de billar más confiable de Long Island. Propiedad de veterano, más de 40 años de ventas, servicio e instalación experta.'
    },
    challenge: { en: 'A veteran-owned showroom with four decades of trust but zero search visibility — losing foot traffic to competitors with any web presence at all.', es: 'Un salón propiedad de veterano con cuatro décadas de confianza pero cero visibilidad en buscadores — perdiendo tráfico ante competidores con cualquier presencia web.' },
    goal: { en: 'Establish digital presence with local SEO dominance for Long Island pool table searches.', es: 'Establecer presencia digital con dominio de SEO local para búsquedas de mesas de billar en Long Island.' },
    solution: { en: 'Built a service-focused site with location pages, service area targeting, and schema markup to capture local search intent.', es: 'Construimos un sitio enfocado en servicios con páginas de ubicación, segmentación de área de servicio y marcado schema para capturar intención de búsqueda local.' },
    tags: ['Website', 'Local SEO', 'Service'],
    heroImage: '/images/in-progress/regal-billiards.jpg',
    images: ['/images/in-progress/regal-billiards.jpg'],
    websiteUrl: 'https://regalbilliards.netlify.app/',
  },
  {
    id: 'lexington-billiards',
    name: { en: 'Lexington Billiards & Spas', es: 'Lexington Billiards & Spas' },
    client: { en: 'Lexington Billiards', es: 'Lexington Billiards' },
    timeline: 'Q1 2026 - Active',
    pillar: 'small-business',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Netlify'],
    services: [
      { en: 'Website Redesign', es: 'Rediseño Web' },
      { en: 'Product Catalog', es: 'Catálogo de Productos' },
      { en: 'Retail Strategy', es: 'Estrategia Retail' }
    ],
    summary: {
      en: 'Complete site redesign for a 50-year family retailer specializing in pool tables, hot tubs, grills, and arcade machines across Central Kentucky.',
      es: 'Rediseño completo del sitio para un minorista familiar de 50 años especializado en mesas de billar, spas, asadores y máquinas arcade en el centro de Kentucky.'
    },
    challenge: { en: 'A 50-year family business with massive local brand equity but a dated website that couldn\'t showcase their full product range or drive online inquiries.', es: 'Un negocio familiar de 50 años con enorme valor de marca local pero un sitio web desactualizado que no podía mostrar su gama completa de productos ni generar consultas en línea.' },
    goal: { en: 'Modernize the digital experience while preserving the family brand legacy and expanding product discoverability.', es: 'Modernizar la experiencia digital mientras se preserva el legado de la marca familiar y se expande la descubribilidad de productos.' },
    solution: { en: 'Complete redesign with category-driven product browsing, location pages for multi-store presence, and mobile-first UX.', es: 'Rediseño completo con navegación de productos por categorías, páginas de ubicación para presencia multi-tienda y UX mobile-first.' },
    tags: ['Website', 'Redesign', 'Retail'],
    heroImage: '/images/in-progress/lexington-billiards.webp',
    images: ['/images/in-progress/lexington-billiards.webp'],
    websiteUrl: 'https://lexington-billiards.netlify.app/',
  },
  {
    id: 'qmillion',
    name: { en: 'Qmillion', es: 'Qmillion' },
    client: { en: 'Qmillion', es: 'Qmillion' },
    timeline: 'Q1 2026 - Active',
    pillar: 'professional-services',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    services: [
      { en: 'Portfolio Site', es: 'Sitio de Portafolio' },
      { en: 'Brand Identity', es: 'Identidad de Marca' },
      { en: 'Content Strategy', es: 'Estrategia de Contenido' }
    ],
    summary: {
      en: 'Portfolio site for a Grammy Award-winning producer, mixer, and composer working across jazz, hip hop, and soul. Film scoring, audio mixing, and sonic architecture.',
      es: 'Sitio de portafolio para un productor, mezclador y compositor ganador del Grammy que trabaja en jazz, hip hop y soul. Composición para cine, mezcla de audio y arquitectura sonora.'
    },
    challenge: { en: 'A Grammy-winning producer with credits across major artists but no centralized platform to showcase the breadth of work or attract new scoring and mixing clients.', es: 'Un productor ganador del Grammy con créditos en artistas importantes pero sin plataforma centralizada para mostrar la amplitud del trabajo o atraer nuevos clientes de composición y mezcla.' },
    goal: { en: 'Build a cinematic portfolio that positions Qmillion as a film scoring and sonic architecture specialist, not just a music producer.', es: 'Construir un portafolio cinematográfico que posicione a Qmillion como especialista en composición para cine y arquitectura sonora, no solo un productor musical.' },
    solution: { en: 'Designed an immersive portfolio with integrated audio previews, discography, and credits archive — all built for visual impact.', es: 'Diseñamos un portafolio inmersivo con previews de audio integrados, discografía y archivo de créditos — todo construido para impacto visual.' },
    tags: ['Portfolio', 'Artist', 'Music'],
    heroImage: '/images/in-progress/qmillion.jpg',
    images: ['/images/in-progress/qmillion.jpg'],
    websiteUrl: 'https://qmillion.netlify.app/',
  },
  {
    id: 'second-son-productions',
    name: { en: 'Second Son Productions', es: 'Second Son Productions' },
    client: { en: 'Second Son Productions', es: 'Second Son Productions' },
    timeline: 'Q1 2026 - Active',
    pillar: 'professional-services',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Netlify'],
    services: [
      { en: 'Website Build', es: 'Construcción Web' },
      { en: 'Brand Strategy', es: 'Estrategia de Marca' },
      { en: 'Artist Management', es: 'Gestión de Artistas' }
    ],
    summary: {
      en: 'Management and production firm site. Strategic artist management, film & TV scoring, and global event production for Grammy-winning artists reshaping culture.',
      es: 'Sitio de firma de gestión y producción. Gestión estratégica de artistas, composición para cine y TV, y producción de eventos globales para artistas ganadores del Grammy.'
    },
    challenge: { en: 'A powerhouse management firm representing Grammy-winning artists with no website — relying entirely on industry reputation and personal networks.', es: 'Una firma de gestión que representa artistas ganadores del Grammy sin sitio web — dependiendo completamente de reputación en la industria y redes personales.' },
    goal: { en: 'Create a professional digital presence that reflects the caliber of the roster and attracts new management and production inquiries.', es: 'Crear una presencia digital profesional que refleje el calibre del roster y atraiga nuevas consultas de gestión y producción.' },
    solution: { en: 'Built a roster-driven site with artist profiles, production credits, and event portfolio — designed to convey authority and cultural impact.', es: 'Construimos un sitio basado en el roster con perfiles de artistas, créditos de producción y portafolio de eventos — diseñado para transmitir autoridad e impacto cultural.' },
    tags: ['Website', 'Management', 'Production'],
    heroImage: '/images/in-progress/second-son.jpg',
    images: ['/images/in-progress/second-son.jpg'],
    websiteUrl: 'https://secondsonproductions.netlify.app/',
  },
];