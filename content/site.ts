export const profile = {
  name: "Ci Zhu",
  monogram: "CZ",
  role: "Data + AI operator",
  location: "Toronto, Canada",
  headline: "I turn enterprise complexity into governed, scalable intelligence.",
  intro:
    "A hands-on data and AI leader with 10 years of experience moving from architecture to adoption — building the platforms, teams, and operating systems that make transformation stick.",
  links: {
    linkedin: "https://www.linkedin.com/in/ci-zhu/",
    github: "https://github.com/cz1993",
    mirrorArc: "https://github.com/cz1993/MirrorArc",
    mirrorArcDemo: "https://cz1993.github.io/MirrorArc/",
    mirrorArcProject: "https://cz1993.github.io/MirrorArc/project/",
  },
};

export const audienceModes = {
  recruiter: {
    label: "Recruiter",
    eyebrow: "Leadership signal",
    headline: "Data strategy with an engineer's reflexes.",
    description:
      "I lead teams, design platforms, and stay close enough to the work to turn ambitious roadmaps into measurable operating results.",
  },
  builder: {
    label: "Builder",
    eyebrow: "Technical signal",
    headline: "Architecture is only real when people can use it.",
    description:
      "My work spans multi-agent systems, reusable agent skills, Azure AI, RAG, governed knowledge, MLOps, data engineering, and the hard last mile of enterprise adoption.",
  },
  investor: {
    label: "VC / Founder",
    eyebrow: "Founder signal",
    headline: "I look for the operating wedge inside the technology.",
    description:
      "I build at the intersection of enterprise pain, governed AI, and repeatable delivery — with an eye toward products that compound expertise instead of generating more noise.",
  },
} as const;

export const proof = [
  { value: "10 yrs", label: "Data + AI delivery" },
  { value: "10–15%", label: "Data platform cost reduction" },
  { value: "25+", label: "Source systems integrated" },
  { value: "10+", label: "Production agent skills developed" },
];

export const caseStudies = [
  {
    id: "fabric",
    index: "01",
    title: "Enterprise data platform, rebuilt for scale",
    tag: "Microsoft Fabric",
    summary:
      "Led the assessment, architecture, and change program for an enterprise migration to Microsoft Fabric across five core business units.",
    outcome:
      "Reduced Azure SQL and compute costs by 10–15% through platform consolidation, capacity management, and performance tuning.",
    stack: ["Fabric", "Lakehouse", "Medallion", "Power BI", "FinOps"],
  },
  {
    id: "rag",
    index: "02",
    title: "Knowledge systems that answer with context",
    tag: "Applied AI",
    summary:
      "Built a RAG-based knowledge system with Azure AI Foundry and AI Search to bring campaign, product, and process intelligence into customer-service workflows.",
    outcome:
      "Turned scattered operational knowledge into precise, in-workflow support designed to improve response time and customer experience.",
    stack: ["Azure AI Foundry", "AI Search", "RAG", "Agents", "Governance"],
  },
  {
    id: "forecast",
    index: "03",
    title: "Forecasting through a volatile supply chain",
    tag: "Machine Learning",
    summary:
      "Built and deployed demand forecasting during COVID-era volatility, connecting analytical performance to inventory and logistics decisions.",
    outcome:
      "Achieved 10.8 MAPE while helping balance product availability against shortage and overstock risk.",
    stack: ["Forecasting", "Python", "Supply Chain", "ML", "Decision Systems"],
  },
  {
    id: "integrations",
    index: "04",
    title: "Integration across the enterprise data estate",
    tag: "Data Integration",
    summary:
      "Integrated 25+ source systems across ERP, CRM, commerce, payments, logistics, vendors, and channels—including Salesforce, SAP, Magento, Shopify, Zuora, Stripe, IFS, and Samsara.",
    outcome:
      "Built the pipelines, models, and monitoring that turned heterogeneous operational data into reliable inputs for reporting, analytics, and AI.",
    stack: ["ERP + CRM", "Commerce", "Payments", "Logistics", "Data Integration"],
  },
];

export const experience = [
  {
    years: "2024—NOW",
    company: "Enercare",
    role: "Senior Manager, Data Strategy & Analytics",
    detail:
      "Leading an eight-person cross-functional team across enterprise data infrastructure, Fabric transformation, applied AI, governance, and platform economics.",
  },
  {
    years: "2017—2023",
    company: "LG Electronics",
    role: "Senior Manager, Digital Transformation & Data Science",
    detail:
      "Progressed from BI developer to senior manager; led analytics teams and delivered forecasting, automation, enterprise SaaS integration, and decision systems. Recipient of the LG Excellence and LG Ovation awards.",
  },
  {
    years: "2013",
    company: "University of Waterloo",
    role: "Teaching Assistant, Calculus",
    detail:
      "Led tutorials, exam reviews, and targeted mathematical support — an early foundation for translating complex systems clearly.",
  },
];

export const skillGroups = [
  {
    title: "AI systems",
    items: ["Multi-agent systems", "Agent skills", "RAG", "Azure AI Foundry", "AI Search", "LLMOps"],
  },
  {
    title: "Data platforms",
    items: ["Microsoft Fabric", "Lakehouse", "Data engineering", "Power BI", "SQL", "Dimensional modeling"],
  },
  {
    title: "Operating craft",
    items: ["Platform strategy", "FinOps", "Team building", "Change leadership", "Governance", "Executive alignment"],
  },
];

export const aiEngineering = [
  {
    index: "A—01",
    title: "Multi-agent systems",
    summary:
      "I design coordinated agent teams as operational systems: explicit roles, bounded authority, observable handoffs, and independent review contexts.",
    detail:
      "The engineering focus is on separation of duties, least-privilege tools, approval currency, bounded retry loops, failure contingencies, and evidence that survives beyond a single session.",
    tags: ["Orchestration", "Role separation", "Tool use", "Guardrails"],
  },
  {
    index: "A—02",
    title: "Agent skill engineering",
    summary:
      "I have developed 10+ production agent skills that turn expert data and cloud workflows into reusable, discoverable capabilities.",
    detail:
      "Examples include database assessment, data-lineage and dependency scanning, and Azure cost intelligence—with explicit trigger rules, progressive context, validation gates, and safe fallbacks.",
    tags: ["DB assessment", "Lineage scanning", "Azure cost intelligence", "Skill design"],
  },
  {
    index: "A—03",
    title: "Applied LLM systems",
    summary:
      "I build agents that meet people inside real enterprise workflows, grounded in governed evidence rather than disconnected model output.",
    detail:
      "Work includes RAG knowledge systems, Azure AI Foundry and AI Search, plus LLM-assisted catalog, relationship, and transformation-logic generation for data teams and business users.",
    tags: ["RAG", "AI Search", "Foundry", "Knowledge systems"],
  },
  {
    index: "A—04",
    title: "Evaluation + delivery",
    summary:
      "I treat evaluation, observability, cost, and deployment discipline as part of the AI architecture—not an afterthought.",
    detail:
      "That means CI/CD/CT patterns, measurable acceptance gates, review loops, capacity economics, and a safe path from experiment to governed production.",
    tags: ["Evals", "MLOps", "Observability", "AI governance"],
  },
];

export const aiPrinciples = [
  "Agents are software systems, not chat personas.",
  "Skills encode repeatable judgment, not just prompts.",
  "Governance and evaluation belong inside the architecture.",
];

export const notes = [
  {
    slug: "governed-knowledge-over-another-chatbot",
    number: "N—001",
    date: "2026.07",
    readTime: "4 min",
    title: "Governed knowledge beats another chatbot",
    excerpt:
      "RAG can retrieve an answer. A durable knowledge system must also preserve source truth, review state, and the operating context around that answer.",
    sections: [
      {
        heading: "The hidden failure mode",
        paragraphs: [
          "Most enterprise AI demos optimize for the moment an answer appears. The harder problem begins after that moment: can a reviewer trace the source, see what changed, understand who owns the record, and know whether the answer is still current?",
          "When those controls are missing, a polished interface can make uncertainty look authoritative. That is not a retrieval problem. It is an operating-model problem.",
        ],
      },
      {
        heading: "Build the evidence path first",
        paragraphs: [
          "A production-minded knowledge system keeps authoritative sources separate from generated representations, records review state, and makes change visible. Retrieval then becomes one interface over governed evidence — not a substitute for it.",
          "This is the principle behind MirrorArc: source collections stay intact while inspectable, agent-ready knowledge layers are built around them. The goal is not more generated documents. The goal is a system that compounds understanding without losing provenance.",
        ],
      },
    ],
  },
  {
    slug: "fabric-migration-is-an-operating-model",
    number: "N—002",
    date: "2026.07",
    readTime: "3 min",
    title: "A Fabric migration is an operating-model change",
    excerpt:
      "The architecture diagram is the easy part. Capacity economics, ownership, rollout sequencing, and user habits decide whether the platform creates leverage.",
    sections: [
      {
        heading: "Migration is not movement",
        paragraphs: [
          "Moving workloads into a modern platform can reproduce the same fragmentation at a higher level of abstraction. A successful migration changes how teams design, ship, observe, and retire data products.",
          "That means platform decisions need to be paired with capacity management, workload standards, contingency plans, training, and an explicit path for decommissioning legacy cost.",
        ],
      },
      {
        heading: "Measure the operating result",
        paragraphs: [
          "The most useful migration metrics are not counts of moved assets. Look for shorter delivery cycles, clearer ownership, lower unit economics, fewer duplicate semantic models, and more decisions made from trusted products.",
          "Technology provides the leverage. The operating model determines whether that leverage compounds.",
        ],
      },
    ],
  },
  {
    slug: "from-ai-demo-to-enterprise-system",
    number: "N—003",
    date: "2026.07",
    readTime: "3 min",
    title: "From AI demo to enterprise system",
    excerpt:
      "The difference is rarely model quality alone. It is evaluation, ownership, workflow fit, cost visibility, and a safe way to improve after launch.",
    sections: [
      {
        heading: "Optimize for the workflow",
        paragraphs: [
          "An AI capability earns its place when it shortens or improves a real decision. Start with the job, the evidence available at that moment, and the consequence of a wrong answer. The model comes after the workflow contract.",
          "This changes the design conversation: response quality still matters, but so do latency, escalation, citations, permissions, and the handoff between human judgment and machine assistance.",
        ],
      },
      {
        heading: "Design for learning after launch",
        paragraphs: [
          "Production AI needs observable failure modes and a review loop. Teams should know which questions fail, which sources are weak, what the system costs, and who can change the behavior.",
          "A demo proves possibility. An enterprise system creates a controlled way to learn repeatedly.",
        ],
      },
    ],
  },
];

export const currentQuests = [
  {
    state: "SHIPPING",
    title: "MirrorArc v1",
    detail: "A local-first, governed documentation layer that connects changing sources to durable knowledge for people and AI agents.",
  },
  {
    state: "PUBLISHING",
    title: "Field notes",
    detail: "Practical writing on enterprise AI, Fabric economics, knowledge systems, and the craft of transformation.",
  },
  {
    state: "SEEKING",
    title: "Design partners",
    detail: "Teams with document-heavy operations, strong provenance needs, and an appetite for disciplined AI adoption.",
  },
];

export const education = [
  {
    id: "waterloo",
    logo: "/university-of-waterloo-logo.png",
    logoAlt: "University of Waterloo",
    years: "2011—2015",
    school: "University of Waterloo",
    degree: "Honours Mathematics",
    program: "Mathematical Optimization • Operations Research • Joint Honours Statistics",
    lens: "FOUNDATIONAL LENS",
    statement:
      "Waterloo taught me to model decisions before optimizing systems—and to stay rigorous when the objective, constraints, or other players change.",
    topics: ["Mathematical Optimization", "Non-linear Optimization", "Graph Theory", "Game Theory", "Statistics"],
    highlights: [
      "Ranked #2 in a three-player Prisoner’s Dilemma strategy competition.",
      "Served as a Calculus teaching assistant, leading tutorials, exam reviews, and one-to-one problem solving.",
    ],
  },
  {
    id: "smith",
    logo: "/smith-school-logo.png",
    logoAlt: "Smith School of Business at Queen’s University",
    years: "2020—2021",
    school: "Smith School of Business",
    degree: "Master of Management in Artificial Intelligence",
    program: "Queen’s University",
    lens: "APPLIED AI + BUSINESS",
    statement:
      "The MMAI experience connected model design to adoption, economics, and executive decisions—the bridge between technical possibility and business value.",
    topics: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Natural Language Processing", "AI Strategy"],
    highlights: [
      "Applied NLP techniques and prior industry experience in a capstone project with BLG, a Canadian law firm.",
      "Experimented with GPT-2 in academic projects before ChatGPT’s public launch.",
    ],
  },
];

export const academicThroughline = {
  title: "Optimize decisions. Learn from systems. Build for people.",
  detail:
    "Mathematics gave me a language for constraints, trade-offs, networks, and strategic behavior. The MMAI program added modern learning systems and the management discipline to deploy them responsibly. That combination still shapes how I engineer AI today.",
};
