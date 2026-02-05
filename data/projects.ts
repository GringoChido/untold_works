import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'spotify-whatsapp-publishing',
    name: { en: 'Spotify - WhatsApp Publishing', es: 'Publicación de Spotify - WhatsApp' },
    client: { en: 'Independent Labels', es: 'Sellos Independientes' },
    timeline: 'Q1 2024 - Active',
    stack: ['n8n', 'Claude Code', 'Python', 'RAG Architecture', 'PostgreSQL'],
    services: [
      { en: 'n8n Orchestration', es: 'Orquestación n8n' },
      { en: 'Claude Code Integration', es: 'Integración de Claude Code' },
      { en: 'Content Synthesis', es: 'Síntesis de Contenido' }
    ],
    summary: {
      en: 'Replaced manual content curation with an automated publishing pipeline. Reclaimed up to 15 hours per week.',
      es: 'Reemplacé la curaduría manual de contenido con un pipeline de publicación automatizado. Recuperando hasta 15 horas semanales.'
    },
    challenge: { 
      en: 'Manual curation was a massive bottleneck for scale. Curators were spending 15+ hours weekly on manual data entry and drafting, causing significant lead-time delays and operational fatigue.', 
      es: 'La curaduría manual era un cuello de botella masivo para la escala. Los curadores dedicaban más de 15 horas semanales a la entrada manual de datos y la redacción, lo que provocaba retrasos significativos.' 
    },
    goal: {
      en: 'Reclaim creative time by automating the ingestion-to-draft pipeline while ensuring high-integrity publishing at scale.',
      es: 'Recuperar el tiempo creativo automatizando el pipeline de ingestión a borrador mientras se asegura una publicación de alta integridad a escala.'
    },
    solution: {
      en: 'I built an agentic RAG-pipeline that ingests Spotify metadata, generates synthesized recommendations via Claude, and routes through a human-in-the-loop approval gate to WhatsApp.',
      es: 'Construí un pipeline RAG agéntico que ingiere metadatos de Spotify, genera recomendaciones sintetizadas a través de Claude y las enruta a través de una compuerta de aprobación humana hacia WhatsApp.'
    },
    metrics: [
      { label: { en: 'Time Reclaimed', es: 'Tiempo Recuperado' }, value: '15h/wk' },
      { label: { en: 'Capacity Shift', es: 'Cambio de Capacidad' }, value: '10x' }
    ],
    tags: ['AUTOMATION', 'RAG', 'LLM OPS'],
    images: [
      '/images/project1-spotify/image1.jpg',
      '/images/project1-spotify/image2.png',
      '/images/project1-spotify/image3.png',
      '/images/project1-spotify/image4.png'
    ],
    codeSnippets: [
      {
        language: 'python',
        title: 'Metadata Resolution Engine',
        code: 'def resolve_spotify_metadata(track_id):\n  results = sp.track(track_id)\n  artist_context = rag_store.query(results["artist_name"])\n  return synthesize_prompt(results, artist_context)'
      }
    ]
  },
  {
    id: 'black-radio-experience',
    name: { en: 'Black Radio Experience Engine', es: 'Motor de Black Radio Experience' },
    client: { en: 'Black Radio', es: 'Black Radio' },
    timeline: '2023 - 2024',
    stack: ['Python', 'FastAPI', 'FFmpeg', 'Cloud Storage', 'Instagram Graph API'],
    services: [
      { en: 'Social Pipeline', es: 'Pipeline Social' },
      { en: 'Launch Orchestration', es: 'Orquestación de Lanzamiento' },
      { en: 'GTM Governance', es: 'Gobernanza GTM' }
    ],
    summary: {
      en: 'Automated social campaign packaging and scheduling across platforms. Grew audience reach by 300%.',
      es: 'Automaticé el empaquetado y programación de campañas sociales. Crecimiento de alcance de audiencia del 300%.'
    },
    challenge: { 
      en: 'Maintaining high-integrity, cinematic brand dominance required impossible manual hours for content packaging and scheduling across multiple social platforms.', 
      es: 'Mantener el dominio cinematográfico de la marca con alta integridad requería horas manuales imposibles para el empaquetado y la programación de contenido en múltiples plataformas.' 
    },
    goal: {
      en: 'Eliminate manual friction in social content delivery while scaling audience reach across borders.',
      es: 'Eliminar la fricción manual en la entrega de contenido social mientras se escala el alcance de la audiencia a través de las fronteras.'
    },
    solution: {
      en: 'I engineered a Python-driven pipeline that pre-builds complex weekend social campaigns, automates carousel packaging, and handles cross-platform scheduling with zero manual intervention.',
      es: 'Diseñé un pipeline impulsado por Python que pre-construye campañas sociales complejas para fines de semana, automatiza el empaquetado de carruseles y gestiona la programación multiplataforma.'
    },
    metrics: [
      { label: { en: 'Reach Growth', es: 'Crecimiento Alcance' }, value: '300%' },
      { label: { en: 'Signals Processed', es: 'Señales Procesadas' }, value: '500+' }
    ],
    tags: ['MEDIA OPS', 'PYTHON', 'AUTONOMOUS'],
    images: [
      '/images/project2-blackradio/image1.jpg',
      '/images/project2-blackradio/image2.png',
      '/images/project2-blackradio/image3.png',
      '/images/project2-blackradio/image4.png'
    ]
  },
  {
    id: 'omi-lead-intake-qualification',
    name: { en: 'OMI Intake & Routing', es: 'Ingestión y Enrutamiento OMI' },
    client: { en: 'OMI Growth', es: 'OMI Growth' },
    timeline: '2024 - Present',
    stack: ['n8n', 'OpenAI Agents', 'Apollo API', 'Salesforce', 'Google Sheets'],
    services: [
      { en: 'Agentic Workflows', es: 'Flujos Agénticos' },
      { en: 'Revenue Enablement', es: 'Habilitación de Ingresos' },
      { en: 'Attribution Modeling', es: 'Modelado de Atribución' }
    ],
    summary: {
      en: 'Built an intelligent lead routing system that qualifies inbound leads automatically. Measured 98% MQL accuracy and 4.2x sales ROI.',
      es: 'Construí un sistema inteligente de enrutamiento que califica leads entrantes automáticamente. Precisión MQL medida del 98% y ROI de ventas de 4.2x.'
    },
    challenge: { 
      en: 'Lead leakage and poor MQL accuracy were creating massive sales inefficiencies. High-volume intake meant sales reps were wasting 40% of their time on unqualified prospects.', 
      es: 'La fuga de leads y la baja precisión en MQL estaban creando ineficiencias masivas en ventas. El alto volumen significaba que los representantes perdían el 40% de su tiempo.' 
    },
    goal: {
      en: 'Automate high-precision lead qualification to ensure sales teams only interact with high-intent, verified prospects.',
      es: 'Automatizar la calificación de leads de alta precisión para asegurar que los equipos de ventas solo interactúen con prospectos verificados de alta intención.'
    },
    solution: {
      en: 'I deployed agentic lead generation flows using n8n and OpenAI that analyze lead intent, query firmographics in real-time, and execute precision CRM routing.',
      es: 'Desplegué flujos agénticos de generación de leads usando n8n y OpenAI que analizan la intención, consultan datos demográficos en tiempo real y ejecutan enrutamiento de precisión en CRM.'
    },
    metrics: [
      { label: { en: 'MQL Accuracy', es: 'Precisión MQL' }, value: '98%' },
      { label: { en: 'Sales ROI', es: 'ROI de Ventas' }, value: '4.2x' }
    ],
    tags: ['AGENTIC AI', 'CRM', 'SALES OPS'],
    images: [
      '/images/project3-omi/image1.jpg',
      '/images/project3-omi/image2.png',
      '/images/project3-omi/image3.png',
      '/images/project3-omi/image4.png'
    ]
  },
  {
    id: 'billiard-factory-retail-architecture',
    name: { en: 'Billiard Factory Operating Model', es: 'Modelo Operativo de Billiard Factory' },
    client: { en: 'Billiard Factory', es: 'Billiard Factory' },
    timeline: 'Enterprise Scale - 2024',
    stack: ['Shopify Plus', 'ERP Integration', 'n8n', 'Python', 'Webflow'],
    services: [
      { en: 'E-commerce Architecture', es: 'Arquitectura E-commerce' },
      { en: 'Unit Economics', es: 'Economía de Unidad' },
      { en: 'GTM Governance', es: 'Gobernanza GTM' }
    ],
    summary: {
      en: 'Unified product data across physical and digital storefronts. Measured a 20% sales lift across 4,000+ products.',
      es: 'Unifiqué los datos de productos entre tiendas físicas y digitales. Aumento medido del 20% en ventas en más de 4,000 productos.'
    },
    challenge: { 
      en: 'Operational silos and fragmented data across physical and digital storefronts were preventing unified inventory control and effective retail marketing.', 
      es: 'Los silos operativos y los datos fragmentados en tiendas físicas y digitales impedían el control de inventario unificado y el marketing minorista efectivo.' 
    },
    goal: {
      en: 'Unify the retail catalog data architecture to drive measurable ROI across all sales channels.',
      es: 'Unificar la arquitectura de datos del catálogo minorista para impulsar un ROI medible en todos los canales de venta.'
    },
    solution: {
      en: 'I architected a unified product engine and cross-channel operating model, integrating the ERP with n8n and automating stock-based social publishing.',
      es: 'Arquitecturé un motor de productos unificado y un modelo operativo multicanal, integrando el ERP con n8n y automatizando la publicación social.'
    },
    metrics: [
      { label: { en: 'Sales Lift', es: 'Aumento de Ventas' }, value: '20%' },
      { label: { en: 'Efficiency', es: 'Eficiencia' }, value: '+35%' }
    ],
    tags: ['ENTERPRISE', 'COMMERCE', 'ARCHITECTURE'],
    images: [
      '/images/project4-billiard/image1.jpg',
      '/images/project4-billiard/image2.jpg',
      '/images/project4-billiard/image3.png',
      '/images/project4-billiard/image4.png'
    ]
  }
];