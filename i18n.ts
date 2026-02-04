
import { ContentStrings, WorkflowProof } from './types';

export const navigation = {
  portfolio: { en: 'Portfolio', es: 'Portafolio' },
  workshops: { en: 'Workshops', es: 'Talleres' },
  about: { en: 'About', es: 'Acerca de' },
  blog: { en: 'Blog', es: 'Blog' },
  contact: { en: 'Contact', es: 'Contacto' },
  cta: { en: 'Start a conversation', es: 'Iniciar conversación' }
};

export const footer = {
  campaign: {
    en: 'untold.works // THIS_WORKFLOW_IS_MY_MARKETING',
    es: 'untold.works // ESTE_FLUJO_DE_TRABAJO_ES_MI_MARKETING'
  },
  narrative: {
    en: "I don't sell hype. I build the agentic systems that speak for themselves. Bilingual operating models engineered for high-integrity growth across the US and Latin America.",
    es: "No vendo hype. Construyo los sistemas agénticos que hablan por sí mismos. Modelos operativos bilingües diseñados para un crecimiento de alta integridad en EE. UU. y Latinoamérica."
  },
  version: { en: 'CAMPAIGN_ID // 2026.WORKS', es: 'CAMPAIGN_ID // 2026.WORKS' },
  location: { en: 'LOC // SMA_MX_USA', es: 'LOC // SMA_MX_USA' }
};

export const contactPage = {
  eyebrow: { en: 'COMMUNICATION_HUB // BORDERLESS_SYNC_v2.6', es: 'CENTRO_DE_COMUNICACIÓN // SINCRONÍA_SIN_FRONTERAS_v2.6' },
  headline: { en: 'Start a Conversation.', es: 'Iniciar una Conversación.' },
  subheadline: { 
    en: 'Based in Mexico for six years, I work cross-border across the US and LATAM, bridging creative craft with engineering workflows for distributed teams. Whether you are navigating the "AI noise" or ready to architect a production-ready system, I will guide you to the signal.', 
    es: 'Basado en México durante seis años, trabajo de forma transfronteriza en EE. UU. y LATAM, conectando el oficio creativo con los flujos de ingeniería para equipos distribuidos. Ya sea que estés navegando por el "ruido de la IA" o listo para diseñar un sistema listo para producción, te guiaré hacia la señal.' 
  },
  emailLabel: { en: 'DIGITAL_UPLINK', es: 'ENLACE_DIGITAL' },
  locationLabel: { en: 'PHYSICAL_NODE', es: 'NODO_FÍSICO' },
  location: { en: 'San Miguel de Allende, Mexico | US & LATAM Cross-Border', es: 'San Miguel de Allende, México | Transfronterizo EE. UU. y LATAM' },
  socialLabel: { en: 'SOCIAL_01 // CONNECT_ON_LINKEDIN', es: 'SOCIAL_01 // CONECTAR_EN_LINKEDIN' },
  cta: { en: 'ESTABLISH CONNECTION', es: 'ESTABLECER CONEXIÓN' }
};

export const workshopSyllabus = {
  eyebrow: { en: 'THE_LAB // AI_FOR_BEGINNERS_v1.0', es: 'EL_LAB // IA_PARA_PRINCIPIANTES_v1.0' },
  headline: { 
    en: 'Two Hours to Confidence.', 
    es: 'Dos Horas de Confianza.' 
  },
  transformation: { 
    en: 'A zero-stress, jargon-free intensive for small business owners and locals. Move from AI-curious to AI-capable in a single morning. You won’t just learn—I’ll ensure you finish one real asset you can use today.', 
    es: 'Un intensivo sin estrés y sin jerga técnica para dueños de pequeños negocios y residentes locales. Pase de tener curiosidad por la IA a ser capaz de usarla en una sola mañana. No solo aprenderá, me aseguraré de que termine un activo real que pueda usar hoy mismo.' 
  },
  location: { en: 'LOC // SAN_MIGUEL_DE_ALLENDE_MX', es: 'UBIC // SAN_MIGUEL_DE_ALLENDE_MX' },
  time: { en: 'TIME // 10:00_AM', es: 'HORA // 10:00_AM' },
  lead: { en: 'LEAD // JOSHUA_SEMOLIK', es: 'LÍDER // JOSHUA_SEMOLIK' },
  phases: [
    {
      id: '01',
      title: { en: 'The AI Mindset', es: 'La Mentalidad de IA' },
      focus: { 
        en: 'Plain-language basics and safety rules. Understanding what AI is good at (drafts/ideas) and what I’ve found it’s bad at (truth/math).', 
        es: 'Conceptos básicos en lenguaje sencillo y reglas de seguridad. Entender en qué es buena la IA (borradores/ideas) y en qué he descubierto que es mala (verdad/matemáticas).' 
      }
    },
    {
      id: '02',
      title: { en: 'The Universal Prompt Formula', es: 'La Fórmula Universal del Prompt' },
      focus: { 
        en: 'Master the only skill you need: Goal + Context + Constraints + Format. I help you build prompts that actually work.', 
        es: 'Domina la única habilidad que necesitas: Objetivo + Contexto + Restricciones + Formato. Te ayudo a construir prompts que realmente funcionen.' 
      }
    },
    {
      id: '03',
      title: { en: 'Life & Business Wins', es: 'Victorias de Vida y Negocio' },
      focus: { 
        en: 'I lead live demos of everyday utility: from weekly meal plans and Spanish practice to Instagram captions and customer replies.', 
        es: 'Dirijo demostraciones en vivo de utilidad diaria: desde planes de comidas semanales y práctica de español hasta subtítulos de Instagram y respuestas a clientes.' 
      }
    },
    {
      id: '04',
      title: { en: 'Designing Workflows', es: 'Diseñando Flujos de Trabajo' },
      focus: { 
        en: 'I map your daily tasks from trigger to outcome. Learn where AI fits and why the human still makes the final call.', 
        es: 'Mapeo tus tareas diarias desde el activador hasta el resultado. Aprende dónde encaja la IA y por qué el humano sigue teniendo la última palabra.' 
      }
    }
  ],
  kit: {
    title: { en: 'THE_KIT // TAKE_HOME_ASSETS', es: 'EL_KIT // ACTIVOS_PARA_LLEVAR' },
    items: [
      { en: '1-Page Cheat Sheet', es: 'Hoja de Referencia Rápida' },
      { en: 'The Prompt Formula', es: 'La Fórmula del Prompt' },
      { en: '10 Starter Prompts', es: '10 Prompts Iniciales' },
      { en: 'Safety Rules', es: 'Reglas de Seguridad' },
      { en: 'Workflow Template', es: 'Plantilla de Flujo de Trabajo' }
    ]
  },
  cardTitle: { en: 'REAL_RESULTS', es: 'RESULTADOS_REALES' },
  rule: {
    en: 'Limited seats for personal guidance. This is a walking-around class where I sharpen every prompt.',
    es: 'Asientos limitados para guía personalizada. Esta es una clase dinámica donde perfecciono cada prompt.'
  },
  cta: { en: 'RESERVE YOUR SPOT', es: 'RESERVAR LUGAR' }
};

export const hero = {
  eyebrow: { 
    en: 'PRINCIPAL_ARCHITECT | 20_YEARS_GTM | MIT_SLOAN_2025', 
    es: 'ARQUITECTO_PRINCIPAL | 20_AÑOS_GTM | MIT_SLOAN_2025' 
  },
  headline: { 
    en: 'Creative Technologist focused on AI powered storytelling.', 
    es: 'Tecnólogo Creativo enfocado en storytelling potenciado por IA.' 
  },
  paragraph: { 
    en: 'I set the vision and build the workflows that move ideas from concept to shipped assets fast, while protecting creativity and brand consistency. Grounded systems. No hype. Clear ownership.', 
    es: 'Establezco la visión y construyo los flujos de trabajo que mueven las ideas del concepto a los activos entregados rápidamente, protegiendo la creatividad y la consistencia de la marca. Sistemas fundamentados. Sin hype. Propiedad clara.' 
  },
  regional: {
    en: 'Based in Mexico for six years, I work cross-border across the US and LATAM, bridging creative craft with engineering workflows for distributed teams.',
    es: 'Basado en México durante seis años, trabajo de forma transfronteriza en EE. UU. y LATAM, conectando el oficio creativo con los flujos de ingeniería para equipos distribuidos.'
  },
  support: { 
    en: 'Grounded systems. No hype. Clear ownership.', 
    es: 'Sistemas fundamentados. Sin hype. Propiedad clara.' 
  },
  cta: {
    en: 'START_A_CONVERSATION',
    es: 'INICIAR_CONVERSACIÓN'
  }
};

export const model = {
  title: { en: 'OPERATING_MODEL // DESIGN_BUILD_OPERATE', es: 'MODELO_OPERATIVO // DISEÑO_CONSTRUCCIÓN_OPERACIÓN' },
  design: {
    title: { en: '01: DESIGN', es: '01: DISEÑO' },
    copy: { en: 'I map your existing manual workflows to identify the highest-leverage nodes for automation.', es: 'Mapeo sus flujos de trabajo manuales existentes para identificar los nodos de mayor apalancamiento para la automatización.' },
    deliverable: { en: 'TECHNICAL_SYSTEM_BLUEPRINT', es: 'PLANO_TÉCNICO_DEL_SISTEMA' }
  },
  build: {
    title: { en: '02: BUILD', es: '02: CONSTRUCCIÓN' },
    copy: { en: 'I engineer production-ready agents and integration pipelines using n8n and Python.', es: 'Diseño agentes listos para producción y pipelines de integración usando n8n y Python.' },
    deliverable: { en: 'FUNCTIONAL_PIPELINE', es: 'PIPELINE_FUNCIONAL' }
  },
  operate: {
    title: { en: '03: OPERATE', es: '03: OPERACIÓN' },
    copy: { en: 'I manage and optimize your systems to ensure continuous growth and operational reliability.', es: 'Gestiono y optimizo sus sistemas para asegurar un crecimiento continuo y confiabilidad operativa.' },
    deliverable: { en: 'CONTINUOUS_INTEGRITY_SUPPORT', es: 'SOPORTE_DE_INTEGRIDAD_CONTINUA' }
  }
};

export const stack = {
  title: { en: 'THE_STACK // PRODUCTION_READY_TOOLS', es: 'EL_STACK // HERRAMIENTAS_LISTAS_PARA_PRODUCCIÓN' },
  coreLabel: { en: 'CORE_SYSTEMS // THE_ENGINE', es: 'SISTEMAS_NÚCLEO // EL_MOTOR' },
  core: ['CLAUDE_CODE', 'PYTHON', 'N8N', 'GITHUB', 'VS_CODE', 'CHATGPT'],
  gtmLabel: { en: 'GTM_ORCHESTRATION // THE_OPERATIONS', es: 'ORQUESTACIÓN_GTM // LAS_OPERACIONES' },
  gtm: ['SALESFORCE', 'HUBSPOT', 'GOOGLE_DRIVE', 'GEMINI'],
  designLabel: { en: 'STRATEGIC_DESIGN // THE_WORKSPACE', es: 'DISEÑO_ESTRATÉGICO // EL_ESPACIO_DE_TRABAJO' },
  design: ['FIGMA', 'FIGJAM', 'AI_STUDIO', 'NOTEBOOK_LM']
};

export const artifacts = {
  eyebrow: { en: 'VERIFIED_OUTPUTS // SYSTEM_ARTIFACTS', es: 'RESULTADOS_VERIFICADOS // ARTEFACTOS_DEL_SISTEMA' },
  headline: { en: 'Selected Artifacts.', es: 'Artefactos Seleccionados.' },
  intro: { en: 'I’ve shipped end-to-end creative workflows using AI and automation for global product launches and distributed creative teams.', es: 'He entregado flujos de trabajo creativos de extremo a extremo utilizando IA y automatización para lanzamientos de productos globales y equipos creativos distribuidos.' },
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
    description: { en: 'I am eliminating 15+ hours of manual content orchestration weekly via an agentic RAG-pipeline.', es: 'Estoy eliminando más de 15 horas semanales de orquestación manual de contenido mediante un pipeline RAG agéntico.' },
    builtWith: { en: 'n8n, Claude Code, Python, RAG Architecture', es: 'n8n, Claude Code, Python, Arquitectura RAG' },
    tags: ['AUTOMATION', 'RAG', 'LLM OPS']
  },
  {
    name: { en: 'OMI Agentic Intake & Routing', es: 'Ingestión y Enrutamiento Agéntico OMI' },
    description: { en: 'Delivering 98% MQL accuracy and 4.2x Sales ROI through my intelligent agentic routing.', es: 'Entregando un 98% de precisión en MQL y un ROI de ventas de 4.2x mediante mi enrutamiento agéntico inteligente.' },
    builtWith: { en: 'n8n, OpenAI Agents, Apollo API, Salesforce', es: 'n8n, Agentes de OpenAI, Apollo API, Salesforce' },
    tags: ['AGENTIC AI', 'CRM', 'SALES OPS']
  }
];

export const about = {
  eyebrow: { en: 'SYSTEM_LEAD // JOSHUA_SEMOLIK', es: 'LÍDER_SISTEMAS // JOSHUA_SEMOLIK' },
  narrative: { en: 'Engineering the technical spine of modern growth.', es: 'Ingeniería de la columna vertebral técnica del crecimiento moderno.' },
  context: { en: 'I bridge the gap between AI hype and production reality, focusing on the workflows that actually drive revenue and reclaim time.', es: 'Cierro la brecha entre el hype de la IA y la realidad de producción, centrándome en los flujos de trabajo que realmente impulsan los ingresos y recuperan tiempo.' },
  stackLabel: { en: 'AUTHORITY_STACK', es: 'STACK_DE_AUTORIDAD' },
  stackItems: { en: 'CLAUDE CODE // N8N // PYTHON // MIT SLOAN', es: 'CLAUDE CODE // N8N // PYTHON // MIT SLOAN' },
  cta: { en: 'LEARN MORE ABOUT THE SYSTEM', es: 'MÁS INFORMACIÓN SOBRE EL SISTEMA' }
};

export const aboutPage = {
  hero: {
    headline: { en: 'Creative Technologist focused on AI powered storytelling.', es: 'Tecnólogo Creativo enfocado en storytelling potenciado por IA.' },
    hook: { 
      en: 'Creative Technologist with a creator’s track record and an AI strategist’s skill set. I turn scattered creative output into repeatable, high-integrity systems—from initial brief to final delivery. My work has historically driven over $4.5M in trackable revenue while achieving a 31% lift in conversion efficiency through systemization.', 
      es: 'Tecnólogo Creativo con trayectoria de creador y el conjunto de habilidades de un estratega de IA. Convierto la producción creativa dispersa en sistemas repetibles de alta integridad, desde el brief inicial hasta la entrega final. Mi trabajo ha impulsado históricamente más de $4.5M en ingresos rastreables, logrando un aumento del 31% en la eficiencia de conversión mediante la sistematización.' 
    },
    regional: {
      en: 'Based in Mexico for six years, I work cross-border across the US and LATAM, bridging creative craft with engineering workflows for distributed teams.',
      es: 'Basado en México durante seis años, trabajo de forma transfronteriza en EE. UU. y LATAM, conectando el oficio creativo con los flujos de ingeniería para equipos distribuidos.'
    },
    portraitAlt: {
      en: 'Joshua Semolik - Principal Architect and Creative Technologist.',
      es: 'Joshua Semolik - Arquitecto Principal y Tecnólogo Creativo.'
    }
  },
  narrative: {
    creatorStrategist: {
      en: "I bring a creator’s track record and an AI strategist’s skill set. I focus on what humans do best—taste, story, and direction—then I build adaptive AI powered systems that automate the repeatable work inside workflows, platforms, and audience experiences. I map the blueprint and build the system behind briefs, production flow, review gates, and partner collaboration, so teams ship on-brand work that hits the goal. I’ve led storytelling across design, content, and digital experiences for brands, music, and startups.",
      es: "Aporto una trayectoria de creador y el conjunto de habilidades de un estratega de IA. Me enfoco en lo que los humanos hacen mejor —gusto, historia y dirección— y luego construyo sistemas adaptables potenciados por IA que automatizan el trabajo repetitivo dentro de flujos de trabajo, plataformas y experiencias de audiencia. Mapeo el plano y construyo el sistema detrás de los briefs, el flujo de producción, las compuertas de revisión y la colaboración con socios, para que los equipos entreguen un trabajo alineado con la marca que alcance el objetivo. He liderado el storytelling a través del diseño, el contenido y las experiencias digitales para marcas, música y artistas."
    },
    origin: {
      en: 'With 20 years of seniority in Go-To-Market strategy, rebuilt for the Agentic era, I bridge the Emmy-nominated craft of broadcast storytelling with rigorous technical architecture. This "Human-First" approach to AI is grounded in decades of production experience.',
      es: 'Con 20 años de antigüedad en estrategia Go-To-Market, reconstruidos para la era Agéntica, conecto el oficio nominado al Emmy de la narrativa televisiva con una arquitectura técnica rigurosa. Este enfoque de "Humano Primero" para la IA está fundamentado en décadas de experiencia en producción.'
    },
    manifesto: {
      en: "My goal isn't just automation; it's clarity. I replace the 'Pilot Trap' with production-ready systems that allow humans to move from manual execution to high-level orchestration.",
      es: "Mi objetivo no es solo la automatización; es la claridad. Reemplazo la 'Trampa del Piloto' con sistemas listos para producción que permiten a los humanos pasar de la ejecución manual a la orquestación de alto nivel."
    }
  },
  pillars: [
    { id: '01', title: { en: 'WORKFLOW_TRANSFORMATION', es: 'TRANSFORMACIÓN_DE_FLUJO' }, content: { en: 'Redesigning the path from intake to delivery to eliminate friction and maximize throughput.', es: 'Rediseñando el camino desde la entrada hasta la entrega para eliminar la fricción y maximizar el rendimiento.' } },
    { id: '02', title: { en: 'AGENTIC_INTEGRATION', es: 'INTEGRACIÓN_AGÉNTICA' }, content: { en: 'Embedding AI (Claude Code, n8n) into drafting and routing to protect creative integrity.', es: 'Integrando IA (Claude Code, n8n) en la redacción y enrutamiento para proteger la integridad creativa.' } },
    { id: '03', title: { en: 'EXPERIENCE_SYSTEMS', es: 'SISTEMAS_DE_EXPERIENCIA' }, content: { en: 'Connecting touchpoints across US and LATAM markets with bilingual, production-ready logic.', es: 'Conectando puntos de contacto en los mercados de EE. UU. y LATAM con lógica bilingüe lista para producción.' } },
    { id: '04', title: { en: 'GOVERNANCE_&_LEADERSHIP', es: 'GOBERNANZA_Y_LIDERAZGO' }, content: { en: 'Clarifying ownership, aligning stakeholders, and ensuring long-term system reliability.', es: 'Clarificando la propiedad, alineando a las partes interesadas y asegurando la confiabilidad del sistema a largo plazo.' } }
  ],
  stack: {
    title: { en: 'THE_TECHNICAL_SPINE', es: 'LA_COLUMNA_VERTEBRAL_TÉCNICA' },
    tools: ['CLAUDE_CODE', 'N8N', 'PYTHON', 'GITHUB', 'VS_CODE', 'SALESFORCE', 'HUBSPOT', 'GOOGLE_WORKSPACE'],
    credentials: [
      { en: 'MIT Sloan (2025) - AI: Implications for Business Strategy', es: 'MIT Sloan (2025) - IA: Implicaciones para la Estrategia Empresarial' },
      { en: 'Two-time Emmy Nominee for Broadcast Storytelling', es: 'Nominado al Emmy en dos ocasiones por Narrativa Televisiva' }
    ]
  },
  closing: {
    headline: { en: 'THIS WORKFLOW IS MY MARKETING.', es: 'ESTE FLUJO DE TRABAJO ES MI MARKETING.' },
    subtext: { en: 'Ready to architect a production-ready system that protects your brand while automating the heavy lifting?', es: '¿Listo para diseñar un sistema listo para producción que proteja tu marca mientras automatizas el trabajo pesado?' }
  }
};
