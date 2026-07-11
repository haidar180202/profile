const executiveProjectsData = [
  {
    id: "cisea-ptba",
    title: "PT Bukit Asam Tbk — CISEA Facelift Super-App",
    subtitle: "Enterprise Mining & Operations Integration Platform",
    category: "Enterprise BUMN & AI",
    role: "Lead System Architect & Senior Full-Stack Engineer",
    liveUrl: "http://cisea.bukitasam.co.id/",
    archetype: "Archetype A & B: Super-App Micro-Frontend & Unified API Gateway",
    summary:
      "A monumental enterprise integration platform unifying over 100+ disjointed operational and mining management modules into a cohesive, zero-latency Super-App ecosystem.",
    highlights: [
      "Integrated 100+ high-throughput mining, logistics, and HR modules into a single pane of glass.",
      "Architected a resilient Micro-Frontend UI layer with role-based access control (RBAC) and enterprise SSO.",
      "Engineered a high-performance API Gateway routing legacy ERP endpoints to modern reactive front-ends.",
      "Achieved 99.9% uptime across mission-critical coal production telemetry dashboards."
    ],
    techStack: ["React.js", "Tailwind CSS", "TypeScript", "Node.js", "Laravel API Gateway", "Docker", "Kubernetes"],
    metrics: "40% Faster operational reporting • 100+ Integrated modules • 99.9% High Availability",
    badgeColor: "bg-amber-500 text-white"
  },
  {
    id: "simas-ai-pusri",
    title: "PT Pupuk Sriwidjaja (Pusri) — SIMAS-AI Telemetry",
    subtitle: "Smart IoT Safety & Predictive Maintenance Ecosystem",
    category: "Enterprise BUMN & AI",
    role: "AI Telemetry Architect & Real-Time Systems Engineer",
    liveUrl: null,
    archetype: "Archetype C: DAG Sensor Telemetry & Predictive Safety Pipeline",
    summary:
      "An advanced real-time IoT sensor telemetry and AI predictive safety orchestration engine deployed across high-risk fertilizer chemical production facilities.",
    highlights: [
      "Designed real-time Directed Acyclic Graph (DAG) pipelines processing high-frequency industrial IoT sensor streams.",
      "Implemented predictive machine learning models detecting early mechanical fatigue and thermal anomalies.",
      "Architected an instant automated trip alerting mechanism to prevent hazardous pressure spikes.",
      "Sub-100ms processing pipeline running on distributed message queue architecture."
    ],
    techStack: ["Python", "FastAPI", "React.js", "Apache Kafka", "TimescaleDB", "PyTorch", "Docker"],
    metrics: "Sub-100ms Sensor latency • 85% Reduction in false-positive alarms • zero safety incidents",
    badgeColor: "bg-emerald-600 text-white"
  },
  {
    id: "ifg-lifehub",
    title: "PT Asuransi Jiwa IFG (IFG Life) — Corporate LifeHub",
    subtitle: "Enterprise Policy Management & Underwriting Portal",
    category: "Enterprise BUMN & AI",
    role: "Front-End Architecture Lead",
    liveUrl: "https://hub-asum-dev.ifg-life.id/",
    archetype: "Archetype D: Enterprise Insurance Hub & Zero-Trust Portal",
    summary:
      "The core corporate digital portal for IFG Life (`Asum Dev Hub`), managing comprehensive insurance underwriting workflows, policyholder telemetry, and actuarial analytics.",
    highlights: [
      "Architected secure, responsive front-end applications handling sensitive financial and medical underwriting data.",
      "Integrated zero-trust OIDC/OAuth2 authentication with enterprise multi-factor security layers.",
      "Engineered real-time policy simulation dashboards for thousands of concurrent insurance agents.",
      "Reduced underwriting turnaround time threefold through automated form validation and AI OCR pipelines."
    ],
    techStack: ["Next.js", "Tailwind CSS", "Redux Toolkit", "Java Spring Boot API", "PostgreSQL", "OIDC/OAuth2"],
    metrics: "50k+ Concurrent policyholders • 3x Faster underwriting turnaround • ISO 27001 compliant UX",
    badgeColor: "bg-blue-600 text-white"
  },
  {
    id: "investree-risk-engine",
    title: "PT Investree Radhika Jaya — AI Credit Risk Engine",
    subtitle: "Automated SME Credit Scoring & Fraud Detection Pipeline",
    category: "Enterprise BUMN & AI",
    role: "Lead AI & Backend Systems Engineer",
    liveUrl: null,
    archetype: "Archetype E: Fintech Credit Scoring & ML Pipeline",
    summary:
      "An enterprise-grade financial risk assessment platform utilizing automated machine learning pipelines to evaluate SME loan origination and detect synthetic fraud patterns.",
    highlights: [
      "Developed high-throughput credit decision algorithms evaluating 50+ financial and alternative data variables.",
      "Built real-time fraud pattern recognition pipelines utilizing Graph Neural Networks.",
      "Exposed low-latency credit assessment RESTful APIs consumed by core banking partners.",
      "Successfully processed over billions of Rupiah in automated, low-risk loan originations."
    ],
    techStack: ["Python", "Django REST", "Scikit-Learn", "PostgreSQL", "Redis", "Celery", "AWS"],
    metrics: "30% Higher credit accuracy • 10x Faster loan processing • <200ms API decision speed",
    badgeColor: "bg-purple-600 text-white"
  },
  {
    id: "synapse-sjakhyakirti",
    title: "Synapse Academy & Universitas Sjakhyakirti",
    subtitle: "EdTech Leadership, Academic Portals & IT Mentorship",
    category: "Academic & Leadership",
    role: "Founder, Chief Technology Officer & Principal Mentorship Lead",
    liveUrl: "https://sydemy.com/",
    archetype: "Archetype F: EdTech Ecosystem & IT Leadership Mentorship",
    summary:
      "Spearheaded the technical vision and educational curriculum for Synapse Academy (`Sydemy.com`) and Universitas Sjakhyakirti, transforming hundreds of engineering students into elite architects.",
    highlights: [
      "Architected and deployed `sydemy.com`, a high-availability learning management system (LMS) serving thousands of aspiring software engineers.",
      "Mentored over 500+ developers in Clean Architecture, Cloud-Native DevOps, and Fortune 500 engineering standards.",
      "Collaborated with academic institutions to align university IT curricula with real-world enterprise requirements.",
      "Fostered a thriving developer community delivering high-impact open-source contributions and BUMN consultations."
    ],
    techStack: ["React.js", "Node.js", "GraphQL", "PostgreSQL", "Tailwind CSS", "AWS CloudFront"],
    metrics: "500+ Engineering alumni • 100% Industry-standard curriculum • High-availability EdTech platform",
    badgeColor: "bg-rose-600 text-white"
  }
];

export default executiveProjectsData;
