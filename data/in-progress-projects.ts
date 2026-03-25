import { InProgressProject, ProjectVertical } from '../types';

export const inProgressProjects: InProgressProject[] = [
  // ── Game Room & Billiards ──
  {
    id: 'cl-bailey',
    name: { en: 'C.L. Bailey & Co.', es: 'C.L. Bailey & Co.' },
    description: {
      en: 'Full website build for a handcrafted billiards and game room furniture manufacturer. Solid hardwood, lifetime guarantee — built in Tomball, Texas since 1999.',
      es: 'Construcción completa de sitio web para fabricante de mesas de billar y muebles de sala de juegos artesanales. Madera maciza, garantía de por vida — fabricado en Tomball, Texas desde 1999.'
    },
    tags: ['Website', 'E-Commerce', 'Brand'],
    websiteUrl: 'https://clbailey.netlify.app/en',
    vertical: 'game-room',
    previewImage: '/images/in-progress/cl-bailey.jpg',
  },
  {
    id: 'regal-billiards',
    name: { en: 'Regal Billiards', es: 'Regal Billiards' },
    description: {
      en: 'Website and digital presence for Long Island\'s most trusted pool table showroom. Veteran-owned, 40+ years of expert sales, service, and installation.',
      es: 'Sitio web y presencia digital para el salón de mesas de billar más confiable de Long Island. Propiedad de veterano, más de 40 años de ventas, servicio e instalación experta.'
    },
    tags: ['Website', 'Local SEO', 'Service'],
    websiteUrl: 'https://regalbilliards.netlify.app/',
    vertical: 'game-room',
    previewImage: '/images/in-progress/regal-billiards.jpg',
  },
  {
    id: 'lexington-billiards',
    name: { en: 'Lexington Billiards & Spas', es: 'Lexington Billiards & Spas' },
    description: {
      en: 'Complete site redesign for a 50-year family retailer specializing in pool tables, hot tubs, grills, and arcade machines across Central Kentucky.',
      es: 'Rediseño completo del sitio para un minorista familiar de 50 años especializado en mesas de billar, spas, asadores y máquinas arcade en el centro de Kentucky.'
    },
    tags: ['Website', 'Redesign', 'Retail'],
    websiteUrl: 'https://lexington-billiards.netlify.app/',
    vertical: 'game-room',
    previewImage: '/images/in-progress/lexington-billiards.webp',
  },

  // ── Music Industry ──
  {
    id: 'qmillion',
    name: { en: 'Qmillion', es: 'Qmillion' },
    description: {
      en: 'Portfolio site for a Grammy Award-winning producer, mixer, and composer working across jazz, hip hop, and soul. Film scoring, audio mixing, and sonic architecture.',
      es: 'Sitio de portafolio para un productor, mezclador y compositor ganador del Grammy que trabaja en jazz, hip hop y soul. Composición para cine, mezcla de audio y arquitectura sonora.'
    },
    tags: ['Portfolio', 'Artist', 'Music'],
    websiteUrl: 'https://qmillion.netlify.app/',
    vertical: 'music',
    previewImage: '/images/in-progress/qmillion.jpg',
  },
  {
    id: 'derrick-hodge',
    name: { en: 'Derrick Hodge', es: 'Derrick Hodge' },
    description: {
      en: 'Artist site for a Blue Note Recording Artist, composer, and orchestrator bridging hip-hop and classical. Founder of Color of Noize — a 100-musician orchestra.',
      es: 'Sitio de artista para un artista de Blue Note Records, compositor y orquestador que une el hip-hop y lo clásico. Fundador de Color of Noize — una orquesta de 100 músicos.'
    },
    tags: ['Artist Site', 'Music', 'Brand'],
    websiteUrl: 'https://derrickhodge.netlify.app/',
    vertical: 'music',
    previewImage: '/images/in-progress/derrick-hodge.jpg',
  },
  {
    id: 'second-son-productions',
    name: { en: 'Second Son Productions', es: 'Second Son Productions' },
    description: {
      en: 'Management and production firm site. Strategic artist management, film & TV scoring, and global event production for Grammy-winning artists reshaping culture.',
      es: 'Sitio de firma de gestión y producción. Gestión estratégica de artistas, composición para cine y TV, y producción de eventos globales para artistas ganadores del Grammy.'
    },
    tags: ['Website', 'Management', 'Production'],
    websiteUrl: 'https://secondsonproductions.netlify.app/',
    vertical: 'music',
    previewImage: '/images/in-progress/second-son.jpg',
  },

  // ── Hospitality ──
  {
    id: 'casa-schuck',
    name: { en: 'Casa Schuck Hotel', es: 'Hotel Casa Schuck' },
    description: {
      en: 'Complete website rebuild, marketing strategy, and backend booking system for a boutique hacienda bed & breakfast in the heart of San Miguel de Allende.',
      es: 'Reconstrucción completa de sitio web, estrategia de marketing y sistema de reservaciones para una hacienda boutique bed & breakfast en el corazón de San Miguel de Allende.'
    },
    tags: ['Website', 'Booking System', 'Marketing'],
    websiteUrl: 'https://csnewsite.netlify.app/en',
    vertical: 'hospitality',
    previewImage: '/images/in-progress/casa-schuck.jpg',
  },
];

export const verticalLabels: Record<ProjectVertical, { en: string; es: string }> = {
  'game-room': { en: 'Game Room & Billiards', es: 'Sala de Juegos y Billar' },
  'music': { en: 'Music Industry', es: 'Industria Musical' },
  'hospitality': { en: 'Hospitality', es: 'Hospitalidad' },
};

export const verticalOrder: ProjectVertical[] = ['music', 'game-room', 'hospitality'];
