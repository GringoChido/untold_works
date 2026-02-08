
import { ContentStrings, WorkflowProof } from './types';

export const navigation = {
  portfolio: { en: 'Portfolio', es: 'Portafolio' },
  workshops: { en: 'Workshop', es: 'Taller' },
  about: { en: 'About', es: 'Acerca de' },
  contact: { en: 'Contact', es: 'Contacto' },
  cta: { en: 'Start a conversation', es: 'Iniciar conversación' }
};

export const footer = {
  campaign: {
    en: 'untold.works // THIS_WORKFLOW_IS_MY_MARKETING',
    es: 'untold.works // ESTE_FLUJO_DE_TRABAJO_ES_MI_MARKETING'
  },
  narrative: {
    en: "I build the revenue systems that speak for themselves. AI-driven GTM automation and RevOps pipelines designed for measurable growth across the US and Latin America.",
    es: "Construyo los sistemas de ingresos que hablan por sí mismos. Automatización GTM impulsada por IA y pipelines de RevOps diseñados para crecimiento medible en EE.\u00A0UU. y Latinoamérica."
  },
  version: { en: 'CAMPAIGN_ID // 2026.WORKS', es: 'CAMPAIGN_ID // 2026.WORKS' },
  location: { en: 'LOC // CDMX_MX_USA', es: 'LOC // CDMX_MX_USA' }
};

export const hero = {
  eyebrow: {
    en: 'AI WORKFLOW & AUTOMATION LEAD | REVOPS / GTM SYSTEMS',
    es: 'LÍDER DE FLUJOS DE TRABAJO IA Y AUTOMATIZACIÓN | REVOPS / SISTEMAS GTM'
  },
  headline: {
    en: 'Joshua Semolik',
    es: 'Joshua Semolik'
  },
  subheadline: {
    en: 'I architect AI-driven revenue operations and GTM automation for high-growth teams across the US and Latin America.',
    es: 'Diseño operaciones de ingresos impulsadas por IA y automatización GTM para equipos de alto crecimiento en EE.\u00A0UU. y Latinoamérica.'
  },
  paragraph: {
    en: 'Pipeline orchestration. Lead routing. CRM integration. I build AI automation systems that accelerate revenue operations — 98% MQL accuracy, 4.2x sales ROI, 15 hours reclaimed per week.',
    es: 'Orquestación de pipeline. Enrutamiento de leads. Integración CRM. Construyo sistemas de automatización con IA que aceleran operaciones de ingresos — 98% de precisión MQL, 4.2x ROI en ventas, 15 horas recuperadas por semana.'
  },
  cta: {
    en: 'START_A_CONVERSATION',
    es: 'INICIAR_CONVERSACIÓN'
  },
  support: {
    en: 'Cross-border GTM operations bridging US revenue standards with Latin American market execution.',
    es: 'Operaciones GTM transfronterizas conectando estándares de ingresos de EE.\u00A0UU. con la ejecución en mercados latinoamericanos.'
  }
};

export const aboutPage = {
  hero: {
    headline: { en: 'The Operator Behind the Automation', es: 'El Operador Detrás de la Automatización' },
    hook: {
      en: 'Production Lead → Global Director → AI Automation Architect (MIT Sloan Certified). 20 years leading cross-functional teams and go-to-market execution, now applied to RevOps and AI workflow systems.',
      es: 'Líder de Producción → Director Global → Arquitecto de Automatización IA (Certificado MIT Sloan). 20 años liderando equipos multifuncionales y ejecución go-to-market, ahora aplicados a RevOps y sistemas de flujos de trabajo con IA.'
    },
    regional: {
      en: 'Based in Mexico for six years, I operate cross-border across the US and LATAM, bridging enterprise revenue standards with distributed GTM execution.',
      es: 'Basado en México durante seis años, opero de forma transfronteriza en EE.\u00A0UU. y LATAM, conectando estándares de ingresos empresariales con ejecución GTM distribuida.'
    }
  },
  narrative: {
    veteran: {
      en: "20 years leading cross-functional operations from production floor to global strategy. I've managed product launches across 12 markets, built pipeline programs from zero, and optimized sales enablement in regulated industries. I've seen every operational bottleneck — now I build the AI systems that eliminate them.",
      es: "20 años liderando operaciones multifuncionales desde el piso de producción hasta la estrategia global. He gestionado lanzamientos de productos en 12 mercados, construido programas de pipeline desde cero y optimizado la habilitación de ventas en industrias reguladas. He visto cada cuello de botella operativo — ahora construyo los sistemas de IA que los eliminan."
    },
    theBridge: {
      en: "My AI toolkit (n8n, Python, Claude, Salesforce, HubSpot) and MIT Sloan AI certification are the culmination of two decades in operational leadership. I automate the revenue workflows I've already mastered at scale — replacing manual pipeline management with intelligent lead routing, CRM orchestration, and GTM automation.",
      es: "Mi toolkit de IA (n8n, Python, Claude, Salesforce, HubSpot) y la certificación de IA de MIT Sloan son la culminación de dos décadas en liderazgo operativo. Automatizo los flujos de ingresos que ya he dominado a escala — reemplazando la gestión manual de pipeline con enrutamiento inteligente de leads, orquestación CRM y automatización GTM."
    },
    manifesto: {
      en: "My goal is pipeline velocity. I build systems that protect your revenue while your team closes faster.",
      es: "Mi objetivo es la velocidad de pipeline. Construyo sistemas que protegen tus ingresos mientras tu equipo cierra más rápido."
    }
  },
  pillars: [
    { id: '01', title: { en: 'REVENUE_PIPELINE_DESIGN', es: 'DISEÑO_DE_PIPELINE_DE_INGRESOS' }, content: { en: 'Mapping the path from lead intake to closed-won, eliminating friction and maximizing pipeline velocity.', es: 'Mapeando el camino desde la captación de leads hasta el cierre, eliminando fricción y maximizando la velocidad del pipeline.' } },
    { id: '02', title: { en: 'AI_LEAD_ROUTING_&_SCORING', es: 'ENRUTAMIENTO_Y_SCORING_DE_LEADS_IA' }, content: { en: 'Deploying AI agents (Claude, n8n, OpenAI) into lead qualification and CRM routing to eliminate manual scoring.', es: 'Desplegando agentes de IA (Claude, n8n, OpenAI) en la calificación de leads y enrutamiento CRM para eliminar el scoring manual.' } },
    { id: '03', title: { en: 'CROSS_BORDER_GTM_OPS', es: 'OPS_GTM_TRANSFRONTERIZAS' }, content: { en: 'Orchestrating go-to-market systems across US and LATAM with unified CRM logic and localized execution.', es: 'Orquestando sistemas go-to-market en EE. UU. y LATAM con lógica CRM unificada y ejecución localizada.' } },
    { id: '04', title: { en: 'REVOPS_GOVERNANCE', es: 'GOBERNANZA_REVOPS' }, content: { en: 'Clarifying data ownership, aligning sales and marketing stakeholders, and ensuring long-term attribution integrity.', es: 'Clarificando la propiedad de datos, alineando a los stakeholders de ventas y marketing, y asegurando la integridad de atribución a largo plazo.' } }
  ],
  closing: {
    headline: { en: 'THE WORKFLOW IS MY MARKETING.', es: 'EL FLUJO DE TRABAJO ES MI MARKETING.' },
    subtext: { en: 'Open to Full-time AI Workflow & RevOps Leadership Roles. Follow my latest automation insights on LinkedIn.', es: 'Abierto a Roles de Liderazgo en Flujos de Trabajo IA y RevOps a tiempo completo. Sigue mis últimos insights de automatización en LinkedIn.' }
  }
};

export const curatedEngine = {
  title: { en: 'THE_CURATED_ENGINE // DEEP_DIVE', es: 'EL_MOTOR_CURADO // INMERSIÓN' },
  headline: {
    en: 'The Revenue Operations Stack: 20 years of operational leadership distilled into an integrated AI automation toolkit — connecting CRM intelligence, pipeline orchestration, and GTM execution.',
    es: 'El Stack de Operaciones de Ingresos: 20 años de liderazgo operativo destilados en un toolkit de automatización IA integrado — conectando inteligencia CRM, orquestación de pipeline y ejecución GTM.'
  },
  balance: {
    title: { en: 'ORCHESTRATION_BALANCE', es: 'EQUILIBRIO_DE_ORQUESTACIÓN' },
    creative: { en: 'STRATEGIC_VISION', es: 'VISIÓN_ESTRATÉGICA' },
    technical: { en: 'TECHNICAL_EXECUTION', es: 'EJECUCIÓN_TÉCNICA' },
    integration: { en: 'AI_INTEGRATION', es: 'INTEGRACIÓN_DE_IA' }
  },
  categories: {
    engine: {
      label: { en: 'THE ENGINE (Technical Foundation)', es: 'EL MOTOR (Base Técnica)' },
      tagline: { en: 'Building the systems that think.', es: 'Construyendo los sistemas que piensan.' },
      insight: { 
        en: 'I use Claude for the logic and Python for the heavy lifting. This is where lead scoring models, CRM routing agents, and pipeline automation take shape — stress-tested across enterprise revenue operations.',
        es: 'Uso Claude para la lógica y Python para el trabajo pesado. Aquí es donde los modelos de scoring de leads, agentes de enrutamiento CRM y automatización de pipeline toman forma — probados bajo estrés en operaciones de ingresos empresariales.'
      }
    },
    ops: {
      label: { en: 'THE OPERATIONS (GTM Orchestration)', es: 'LAS OPERACIONES (Orquestación GTM)' },
      tagline: { en: 'Automating the business of growth.', es: 'Automatizando el negocio del crecimiento.' },
      insight: {
        en: 'Automation is the connective tissue. I bridge enterprise CRM data with autonomous lead routing, attribution modeling, and revenue pipeline orchestration built through years of hands-on GTM leadership.',
        es: 'La automatización es el tejido conectivo. Conecto datos de CRM empresarial con enrutamiento autónomo de leads, modelado de atribución y orquestación de pipeline de ingresos construidos a través de años de liderazgo GTM práctico.'
      }
    },
    workspace: {
      label: { en: 'THE WORKSPACE (Strategic Design & Reporting)', es: 'EL ESPACIO DE TRABAJO (Diseño Estratégico y Reportes)' },
      tagline: { en: 'High-fidelity design and strategy.', es: 'Diseño y estrategia de alta fidelidad.' },
      insight: {
        en: 'Adobe Creative Cloud is my native language. I use these tools to visualize pipeline architectures, GTM dashboards, and system documentation with the eye of a veteran operational leader.',
        es: 'Adobe Creative Cloud es mi lengua materna. Uso estas herramientas para visualizar arquitecturas de pipeline, dashboards GTM y documentación de sistemas con el ojo de un líder operativo veterano.'
      }
    }
  },
  workflows: {
    Claude_Code: { en: 'Architectural Logic & Build Safety', es: 'Lógica Arquitectónica y Seguridad de Construcción' },
    Python: { en: 'Data Processing & Logic Heavy Lifting', es: 'Procesamiento de Datos y Trabajo Pesado de Lógica' },
    n8n: { en: 'Agentic Workflow Orchestration', es: 'Orquestación de Flujo de Trabajo Agéntico' },
    GitHub: { en: 'Version Control & Build Integrity', es: 'Control de Versiones e Integridad de Construcción' },
    VS_Code: { en: 'IDE for Production Engineering', es: 'IDE para Ingeniería de Producción' },
    ChatGPT: { en: 'Rapid Prototyping & Drafting', es: 'Prototipado Rápido y Redacción' },
    Salesforce: { en: 'Enterprise CRM & Revenue Logic', es: 'CRM Empresarial y Lógica de Ingresos' },
    HubSpot: { en: 'GTM Operations & Lead Management', es: 'Operaciones GTM y Gestión de Leads' },
    Google_Drive: { en: 'Distributed Asset Synchronization', es: 'Sincronización de Activos Distribuidos' },
    Gemini: { en: 'Multi-modal RAG & Search Grounding', es: 'RAG Multimodal y Grounding de Búsqueda' },
    'Adobe Creative Cloud': { en: 'High-Fidelity Brand Production (Native Language)', es: 'Producción de Marca de Alta Fidelidad (Lengua Materna)' },
    Figma: { en: 'Interface Systems & Prototyping', es: 'Sistemas de Interfaz y Prototipado' },
    FigJam: { en: 'Flowcharting & System Architecture', es: 'Diagramas de Flujo y Arquitectura de Sistemas' },
    AI_Studio: { en: 'Prompt Engineering & Model Tuning', es: 'Ingeniería de Prompts y Ajuste de Modelos' },
    NotebookLM: { en: 'Strategic R&D & Knowledge Synthesis', es: 'I+D Estratégica y Síntesis de Conocimiento' }
  }
};

export const model = {
  title: { en: 'OPERATING_MODEL // DESIGN_BUILD_OPERATE', es: 'MODELO_OPERATIVO // DISEÑO_CONSTRUCCIÓN_OPERACIÓN' },
  design: {
    title: { en: '01: DESIGN', es: '01: DISEÑO' },
    copy: { en: 'I audit your existing revenue workflows, CRM configurations, and lead routing logic to identify the highest-leverage automation opportunities.', es: 'Audito sus flujos de ingresos existentes, configuraciones CRM y lógica de enrutamiento de leads para identificar las oportunidades de automatización de mayor apalancamiento.' },
    deliverable: { en: 'REVOPS_AUTOMATION_BLUEPRINT', es: 'PLANO_DE_AUTOMATIZACIÓN_REVOPS' }
  },
  build: {
    title: { en: '02: BUILD', es: '02: CONSTRUCCIÓN' },
    copy: { en: 'I engineer production-ready AI agents, CRM integrations, and lead routing pipelines using n8n, Python, and enterprise APIs.', es: 'Diseño agentes de IA listos para producción, integraciones CRM y pipelines de enrutamiento de leads usando n8n, Python y APIs empresariales.' },
    deliverable: { en: 'LIVE_REVENUE_PIPELINE', es: 'PIPELINE_DE_INGRESOS_EN_VIVO' }
  },
  operate: {
    title: { en: '03: OPERATE', es: '03: OPERACIÓN' },
    copy: { en: 'I monitor pipeline performance, optimize conversion rates, and iterate on lead scoring models to ensure continuous revenue growth.', es: 'Monitoreo el rendimiento del pipeline, optimizo tasas de conversión e itero en modelos de scoring de leads para asegurar crecimiento continuo de ingresos.' },
    deliverable: { en: 'ONGOING_REVENUE_OPTIMIZATION', es: 'OPTIMIZACIÓN_CONTINUA_DE_INGRESOS' }
  }
};

export const servicePillars = {
  title: { en: 'SERVICE_PILLARS // WHAT_I_BUILD', es: 'PILARES_DE_SERVICIO // LO_QUE_CONSTRUYO' },
  content: {
    title: { en: 'REVENUE_&_GTM_OPERATIONS', es: 'OPERACIONES_DE_INGRESOS_Y_GTM' },
    subtitle: { en: 'The Revenue Architect', es: 'El Arquitecto de Ingresos' },
    description: { en: 'Lead routing, pipeline orchestration, CRM integration, attribution modeling, and sales enablement — backed by 20 years of cross-functional operations leadership.', es: 'Enrutamiento de leads, orquestación de pipeline, integración CRM, modelado de atribución y habilitación de ventas — respaldado por 20 años de liderazgo en operaciones multifuncionales.' },
    tags: ['LEAD ROUTING', 'PIPELINE OPS', 'CRM', 'ATTRIBUTION', 'SALES ENABLEMENT']
  },
  automation: {
    title: { en: 'INTELLIGENT_AUTOMATION', es: 'AUTOMATIZACIÓN_INTELIGENTE' },
    subtitle: { en: 'The Engine', es: 'El Motor' },
    description: { en: 'Agentic AI workflows via n8n orchestration and custom Python logic. Lead scoring, intelligent routing, and autonomous pipeline management. I build the systems that think.', es: 'Flujos de trabajo de IA agéntica vía orquestación n8n y lógica personalizada en Python. Scoring de leads, enrutamiento inteligente y gestión autónoma de pipeline. Construyo los sistemas que piensan.' },
    tags: ['n8n', 'PYTHON', 'CLAUDE', 'AGENTIC AI']
  },
  infrastructure: {
    title: { en: 'DATA_&_INTEGRATION', es: 'DATOS_E_INTEGRACIÓN' },
    subtitle: { en: 'The Connective Tissue', es: 'El Tejido Conectivo' },
    description: { en: 'Salesforce, HubSpot, Apollo, and ERP integrations unified through API pipelines and version-controlled deployment. Clean data, every time.', es: 'Integraciones de Salesforce, HubSpot, Apollo y ERP unificadas a través de pipelines API y despliegue con control de versiones. Datos limpios, siempre.' },
    tags: ['SALESFORCE', 'HUBSPOT', 'APOLLO', 'ERP', 'API']
  }
};

export const stack = {
  title: { en: 'THE_STACK // PRODUCTION_READY_TOOLS', es: 'EL_STACK // HERRAMIENTAS_LISTAS_PARA_PRODUCCIÓN' },
  quote: {
    en: "I don't just use these tools — I connect them into custom revenue systems that bridge CRM data, AI logic, and GTM execution.",
    es: "No solo uso estas herramientas — las conecto en sistemas de ingresos personalizados que unen datos CRM, lógica IA y ejecución GTM."
  },
  engineLabel: { en: 'THE ENGINE (Core Systems & Automation)', es: 'EL MOTOR (Sistemas Núcleo y Automatización)' },
  engine: ['Claude_Code', 'Python', 'n8n', 'GitHub', 'VS_Code', 'ChatGPT'],
  opsLabel: { en: 'THE OPERATIONS (GTM & Execution)', es: 'LAS OPERACIONES (GTM y Ejecución)' },
  ops: ['Salesforce', 'HubSpot', 'Google_Drive', 'Gemini'],
  workspaceLabel: { en: 'THE WORKSPACE (Strategic Design & Creative)', es: 'EL ESPACIO DE TRABAJO (Diseño Estratégico y Creativo)' },
  workspace: ['Adobe Creative Cloud', 'Figma', 'FigJam', 'AI_Studio', 'NotebookLM']
};

export const artifacts = {
  eyebrow: { en: 'VERIFIED_OUTPUTS // SYSTEM_ARTIFACTS', es: 'RESULTADOS_VERIFICADOS // ARTEFACTOS_DEL_SISTEMA' },
  headline: { en: 'Selected Artifacts.', es: 'Artefactos Seleccionados.' },
  intro: { en: 'End-to-end revenue automation using AI and pipeline orchestration — shipped for enterprise sales teams and cross-border GTM operations.', es: 'Automatización de ingresos de extremo a extremo usando IA y orquestación de pipeline — entregada para equipos de ventas empresariales y operaciones GTM transfronterizas.' },
  headerLeft: { en: 'PRODUCTION_LOG', es: 'LOG_DE_PRODUCCIÓN' },
  headerRight: { en: 'STATUS // VERIFIED', es: 'ESTADO // VERIFICADO' },
  labels: {
    description: { en: 'SYSTEM_DESCRIPTION', es: 'DESCRIPCIÓN_DEL_SISTEMA' },
    builtWith: { en: 'ENGINEERING_STACK', es: 'STACK_DE_INGENIERÍA' }
  },
  viewPortfolio: { en: 'VIEW FULL PORTFOLIO', es: 'VER PORTAFOLIO COMPLETO' }
};

export const proofs: WorkflowProof[] = [
  {
    name: { en: 'Spotify - WhatsApp Publishing', es: 'Publicación de Spotify - WhatsApp' },
    description: { en: 'Replaced manual content operations with an automated AI publishing pipeline. Reclaimed 15 hours per week, scaling output capacity 10x.', es: 'Reemplacé operaciones de contenido manual con un pipeline de publicación automatizado con IA. Recuperé 15 horas semanales, escalando la capacidad de producción 10x.' },
    builtWith: { en: 'n8n, Claude Code, Python, RAG Architecture', es: 'n8n, Claude Code, Python, Arquitectura RAG' },
    tags: ['AUTOMATION', 'RAG', 'LLM OPS']
  },
  {
    name: { en: 'OMI Intake & Routing', es: 'Ingestión y Enrutamiento OMI' },
    description: { en: 'Built an intelligent lead routing system that scores, qualifies, and routes inbound leads through Salesforce automatically. Measured 98% MQL accuracy and 4.2x sales ROI.', es: 'Construí un sistema inteligente de enrutamiento de leads que califica y enruta leads entrantes a través de Salesforce automáticamente. Precisión MQL medida del 98% y ROI de ventas de 4.2x.' },
    builtWith: { en: 'n8n, OpenAI Agents, Apollo API, Salesforce', es: 'n8n, Agentes de OpenAI, Apollo API, Salesforce' },
    tags: ['AI ROUTING', 'CRM', 'SALES OPS']
  }
];

export const workshopSyllabus = {
  eyebrow: { en: 'THE_LAB // AI_FOR_EVERYDAY_LIFE_v1.0', es: 'EL_LAB // IA_PARA_LA_VIDA_DIARIA_v1.0' },
  headline: { 
    en: 'No jargon. Just AI for Everyday Life.', 
    es: 'Sin jerga. Solo IA para la Vida Diaria.' 
  },
  transformation: { 
    en: 'A practical masterclass for daily life and small business. Move from curious to capable in a single morning. I will show you the exact prompting techniques and workflows that actually save you time.', 
    es: 'Una clase magistral práctica para la vida diaria y pequeños negocios. Pasa de tener curiosidad a ser capaz en una sola mañana. Te mostraré las técnicas de prompting y flujos de trabajo exactos que realmente te ahorran tiempo.' 
  },
  location: { en: 'LOC // MEXICO_CITY_MX', es: 'UBIC // CIUDAD_DE_MEXICO_MX' },
  time: { en: 'TIME // 10:00_AM', es: 'HORA // 10:00_AM' },
  lead: { en: 'LEAD // JOSHUA_SEMOLIK', es: 'LÍDER // JOSHUA_SEMOLIK' },
  phases: [
    {
      id: '01',
      title: { en: 'Practical AI Basics', es: 'Conceptos Básicos de IA' },
      focus: { 
        en: 'Simple language. Understanding what AI can do (drafting, ideas, organization) and where it needs your help.', 
        es: 'Lenguaje sencillo. Entender qué puede hacer la IA (borradores, ideas, organización) y dónde necesita tu ayuda.' 
      }
    },
    {
      id: '02',
      title: { en: 'The Art of the Prompt', es: 'El Arte del Prompt' },
      focus: { 
        en: 'Learn the formula for prompts that work the first time. No complex engineering—just clear communication.', 
        es: 'Aprende la fórmula para prompts que funcionan a la primera. Sin ingeniería compleja—solo comunicación clara.' 
      }
    },
    {
      id: '03',
      title: { en: 'Your Daily Reclaim', es: 'Tu Recuperación Diaria' },
      focus: { 
        en: 'Live walkthroughs: meal plans, local Spanish practice, and handling business emails in seconds instead of minutes.', 
        es: 'Ejemplos en vivo: planes de comida, práctica de español local y manejo de correos de negocios en segundos.' 
      }
    },
    {
      id: '04',
      title: { en: 'Small Business Wins', es: 'Victorias en el Negocio' },
      focus: { 
        en: 'Simple workflows to keep your small business moving. Automate the repetitive stuff so you can focus on your customers.', 
        es: 'Flujos simples para mantener tu negocio en movimiento. Automatiza lo repetitivo para enfocarte en tus clientes.' 
      }
    }
  ],
  kit: {
    title: { en: 'THE_KIT // TAKE_HOME_ASSETS', es: 'EL_KIT // ACTIVOS_PARA_LLEVAR' },
    items: [
      { en: 'Simple Cheat Sheet', es: 'Guía de Referencia Rápida' },
      { en: 'The Prompt Formula', es: 'La Fórmula del Prompt' },
      { en: '10 Starter Prompts', es: '10 Prompts de Inicio' },
      { en: 'Safety Basics', es: 'Conceptos de Seguridad' },
      { en: 'Life Workflow Guide', es: 'Guía de Flujo de Vida' }
    ]
  },
  cardTitle: { en: 'PRACTICAL_IMPACT', es: 'IMPACTO_PRÁCTICO' },
  rule: {
    en: 'Limited seats for direct guidance. I keep these classes small to ensure you leave with a workflow you can use today.',
    es: 'Asientos limitados para guía directa. Mantengo estas clases pequeñas para asegurar que salgas con un flujo que puedas usar hoy.'
  },
  cta: { en: 'RESERVE YOUR SPOT', es: 'RESERVAR LUGAR' }
};

export const contactPage = {
  eyebrow: { en: 'COMMUNICATION_HUB // BORDERLESS_SYNC_v2.6', es: 'CENTRO_DE_COMUNICACIÓN // SINCRONÍA_SIN_FRONTERAS_v2.6' },
  headline: { en: 'Start a Conversation.', es: 'Iniciar una Conversación.' },
  subheadline: { 
    en: 'Based in Mexico for six years, I work cross-border across the US and LATAM, building AI-powered revenue operations for distributed sales and marketing teams. I am currently seeking a full-time role as AI Workflow & Automation Lead in RevOps / GTM Systems.',
    es: 'Basado en México durante seis años, trabajo de forma transfronteriza en EE. UU. y LATAM, construyendo operaciones de ingresos impulsadas por IA para equipos de ventas y marketing distribuidos. Actualmente busco un rol a tiempo completo como Líder de Flujos de Trabajo IA y Automatización en RevOps / Sistemas GTM.' 
  },
  emailLabel: { en: 'DIGITAL_UPLINK', es: 'ENLACE_DIGITAL' },
  locationLabel: { en: 'PHYSICAL_NODE', es: 'NODO_FÍSICO' },
  location: { en: 'Mexico City, Mexico | US & LATAM Cross-Border', es: 'Ciudad de México, México | Transfronterizo EE. UU. y LATAM' },
  socialLabel: { en: 'SOCIAL_01 // CONNECT_ON_LINKEDIN', es: 'SOCIAL_01 // CONECTAR_EN_LINKEDIN' },
  cta: { en: 'ESTABLISH CONNECTION', es: 'ESTABLECER CONEXIÓN' }
};

export const stereoTeaser = {
  label: { en: 'UNTOLD_ANALOG // TUNE_IN →', es: 'UNTOLD_ANALOG // SINTONIZA →' }
};

export const stereoPage = {
  back: { en: '← BACK TO UNTOLD.WORKS', es: '← VOLVER A UNTOLD.WORKS' },
  title: { en: 'UNTOLD_ANALOG', es: 'UNTOLD_ANALOG' },
  noTrack: { en: 'NO SIGNAL', es: 'SIN SEÑAL' },
  nowPlaying: { en: 'NOW PLAYING', es: 'REPRODUCIENDO' },
  volume: { en: 'VOL', es: 'VOL' },
  powerHint: { en: 'PRESS POWER TO START', es: 'PRESIONA POWER PARA INICIAR' }
};
