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
      { en: 'Automated Pipeline Ops', es: 'Ops de Pipeline Automatizado' }
    ],
    summary: {
      en: 'Replaced manual content operations with an AI-driven publishing pipeline. Reclaimed 15 hours per week, scaling capacity 10x.',
      es: 'Reemplacé operaciones manuales de contenido con un pipeline de publicación impulsado por IA. Recuperé 15 horas semanales, escalando la capacidad 10x.'
    },
    challenge: { 
      en: 'Manual content operations were a massive bottleneck for scale. The team was spending 15+ hours weekly on repetitive data processing and drafting, causing lead-time delays and unsustainable operational overhead.',
      es: 'Las operaciones de contenido manual eran un cuello de botella masivo para la escala. El equipo dedicaba más de 15 horas semanales al procesamiento repetitivo de datos y redacción, causando retrasos y sobrecarga operativa insostenible.' 
    },
    goal: {
      en: 'Reclaim operational capacity by automating the ingestion-to-publish pipeline while maintaining output quality at scale.',
      es: 'Recuperar capacidad operativa automatizando el pipeline de ingestión-a-publicación mientras se mantiene la calidad de salida a escala.'
    },
    solution: {
      en: 'I built an agentic RAG-pipeline that ingests Spotify metadata, generates synthesized recommendations via Claude, and routes through a human-in-the-loop approval gate to WhatsApp.',
      es: 'Construí un pipeline RAG agéntico que ingiere metadatos de Spotify, genera recomendaciones sintetizadas a través de Claude y las enruta a través de una compuerta de aprobación humana hacia WhatsApp.'
    },
    metrics: [
      { label: { en: 'Time Reclaimed', es: 'Tiempo Recuperado' }, value: '15h/wk' },
      { label: { en: 'Capacity Shift', es: 'Cambio de Capacidad' }, value: '10x' }
    ],
    tags: ['AUTOMATION', 'RAG', 'PIPELINE OPS'],
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
    name: { en: 'Black Radio GTM Engine', es: 'Motor GTM de Black Radio' },
    client: { en: 'Black Radio', es: 'Black Radio' },
    timeline: '2023 - 2024',
    stack: ['Python', 'FastAPI', 'FFmpeg', 'Cloud Storage', 'Instagram Graph API'],
    services: [
      { en: 'Social Pipeline', es: 'Pipeline Social' },
      { en: 'Launch Orchestration', es: 'Orquestación de Lanzamiento' },
      { en: 'GTM Governance', es: 'Gobernanza GTM' }
    ],
    summary: {
      en: 'Automated GTM campaign packaging and cross-platform distribution. Grew measurable audience reach by 300% with 500+ engagement signals processed.',
      es: 'Automaticé el empaquetado de campañas GTM y la distribución multiplataforma. Crecimiento medible de alcance del 300% con más de 500 señales de engagement procesadas.'
    },
    challenge: { 
      en: 'Maintaining brand-consistent campaign execution required unsustainable manual hours for content packaging, scheduling, and cross-platform GTM distribution.',
      es: 'Mantener una ejecución de campañas consistente con la marca requería horas manuales insostenibles para el empaquetado de contenido, programación y distribución GTM multiplataforma.' 
    },
    goal: {
      en: 'Eliminate manual friction in campaign delivery while scaling audience reach and measurable engagement signals across borders.',
      es: 'Eliminar la fricción manual en la entrega de campañas mientras se escala el alcance de audiencia y las señales de engagement medibles a través de las fronteras.'
    },
    solution: {
      en: 'I engineered a Python-driven GTM pipeline that pre-builds campaign assets, automates cross-platform packaging, and handles multi-channel scheduling with zero manual intervention.',
      es: 'Diseñé un pipeline GTM impulsado por Python que pre-construye activos de campaña, automatiza el empaquetado multiplataforma y gestiona la programación multicanal sin intervención manual.'
    },
    metrics: [
      { label: { en: 'Reach Growth', es: 'Crecimiento Alcance' }, value: '300%' },
      { label: { en: 'Engagement Signals', es: 'Señales de Engagement' }, value: '500+' }
    ],
    tags: ['GTM AUTOMATION', 'PYTHON', 'CAMPAIGN OPS'],
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
    tags: ['AGENTIC AI', 'CRM', 'REVOPS'],
    images: [
      '/images/project3-omi/image1.jpg',
      '/images/project3-omi/image2.png',
      '/images/project3-omi/image3.png',
      '/images/project3-omi/image4.png'
    ]
  },
  {
    id: 'billiard-factory-retail-architecture',
    name: { en: 'Billiard Factory Revenue Operations', es: 'Operaciones de Ingresos de Billiard Factory' },
    client: { en: 'Billiard Factory', es: 'Billiard Factory' },
    timeline: 'Enterprise Scale - 2024',
    stack: ['Shopify Plus', 'ERP Integration', 'n8n', 'Python', 'Webflow'],
    services: [
      { en: 'Revenue Architecture', es: 'Arquitectura de Ingresos' },
      { en: 'Unit Economics', es: 'Economía de Unidad' },
      { en: 'GTM Governance', es: 'Gobernanza GTM' }
    ],
    summary: {
      en: 'Unified revenue data across physical and digital sales channels. Measured a 20% sales lift across 4,000+ SKUs with 35% operational efficiency gain.',
      es: 'Unifiqué datos de ingresos en canales de ventas físicos y digitales. Aumento medido del 20% en ventas en más de 4,000 SKUs con ganancia de eficiencia operativa del 35%.'
    },
    challenge: { 
      en: 'Operational silos and fragmented data across physical and digital sales channels were preventing unified inventory control, accurate attribution, and effective omnichannel revenue operations.',
      es: 'Los silos operativos y los datos fragmentados en canales de ventas físicos y digitales impedían el control de inventario unificado, la atribución precisa y operaciones de ingresos omnicanal efectivas.' 
    },
    goal: {
      en: 'Unify the product data architecture and revenue attribution to drive measurable ROI across all sales channels.',
      es: 'Unificar la arquitectura de datos de productos y la atribución de ingresos para impulsar un ROI medible en todos los canales de venta.'
    },
    solution: {
      en: 'I architected a unified product data engine and cross-channel revenue model, integrating ERP with n8n automation and driving stock-based demand signals across all GTM channels.',
      es: 'Arquitecturé un motor de datos de productos unificado y un modelo de ingresos multicanal, integrando el ERP con automatización n8n e impulsando señales de demanda basadas en inventario en todos los canales GTM.'
    },
    metrics: [
      { label: { en: 'Sales Lift', es: 'Aumento de Ventas' }, value: '20%' },
      { label: { en: 'Efficiency', es: 'Eficiencia' }, value: '+35%' }
    ],
    tags: ['ENTERPRISE', 'REVOPS', 'OMNICHANNEL'],
    images: [
      '/images/project4-billiard/image1.jpg',
      '/images/project4-billiard/image2.jpg',
      '/images/project4-billiard/image3.png',
      '/images/project4-billiard/image4.png'
    ]
  }
];