import emart from "../assets/images/projectimage/emartreact.png";
import noteapp from "../assets/images/projectimage/noteapp.png";
import pokeapp from "../assets/images/projectimage/pokeapp.png";
import imdbclone from "../assets/images/projectimage/imdbclone.png";

export const portfolioProjects = [
  // ==========================================
  // 1. ENTERPRISE BUMN & FINTECH APPS
  // ==========================================
  {
    id: "ifg-lifehub",
    title: "PT Asuransi Jiwa IFG (IFG Life) — Corporate LifeHub",
    subtitle: "Enterprise Policy Management, Underwriting & BPMN Workflow Portal",
    category: "Enterprise BUMN & Fintech Apps",
    role: "Front-End Architecture Lead",
    image: null,
    link: "https://hub-asum-dev.ifg-life.id/",
    liveUrl: "https://hub-asum-dev.ifg-life.id/",
    protectedUrlText: null,
    archetype: "Archetype D: Enterprise Insurance Hub & Zero-Trust Portal",
    description:
      "The core corporate digital portal for IFG Life (`Asum Dev Hub`), managing comprehensive insurance underwriting workflows, policy administration, and actuarial analytics powered by high-performance Java Quarkus and BPMN process integration.",
    summary:
      "The core corporate digital portal for IFG Life (`Asum Dev Hub`), managing comprehensive insurance underwriting workflows, policy administration, and actuarial analytics powered by high-performance Java Quarkus and BPMN process integration.",
    highlights: [
      "Architected secure, responsive front-end applications handling sensitive financial and medical underwriting data.",
      "Integrated Java Quarkus backend microservices with BPMN workflow engines for automated policy approval and multi-tier underwriting routing.",
      "Implemented zero-trust OIDC/OAuth2 authentication with enterprise multi-factor security layers.",
      "Reduced underwriting turnaround time threefold through automated form validation and BPMN decision pipelines."
    ],
    tags: ["Next.js", "Tailwind CSS", "Redux Toolkit", "Java Quarkus", "BPMN Integration", "PostgreSQL", "OIDC/OAuth2"],
    techStack: ["Next.js", "Tailwind CSS", "Redux Toolkit", "Java Quarkus", "BPMN Integration", "PostgreSQL", "OIDC/OAuth2"],
    metrics: "50k+ Concurrent policyholders • 3x Faster underwriting turnaround • ISO 27001 compliant UX",
    badgeColor: "bg-blue-600 text-white"
  },
  {
    id: "cisea-ptba",
    title: "PT Bukit Asam Tbk — CISEA Facelift Super-App",
    subtitle: "Enterprise Mining & Operations Integration Platform",
    category: "Enterprise BUMN & Fintech Apps",
    role: "Lead System Architect & Senior Full-Stack Engineer",
    image: null,
    link: "http://cisea.bukitasam.co.id/",
    liveUrl: "http://cisea.bukitasam.co.id/",
    protectedUrlText: null,
    archetype: "Archetype A & B: Super-App Micro-Frontend & Unified API Gateway",
    description:
      "A monumental enterprise integration platform unifying over 100+ disjointed operational and mining management modules into a cohesive, zero-latency Super-App ecosystem.",
    summary:
      "A monumental enterprise integration platform unifying over 100+ disjointed operational and mining management modules into a cohesive, zero-latency Super-App ecosystem.",
    highlights: [
      "Integrated 100+ high-throughput mining, logistics, and HR modules into a single pane of glass.",
      "Architected a resilient Micro-Frontend UI layer with role-based access control (RBAC) and enterprise SSO.",
      "Engineered a high-performance API Gateway routing legacy ERP endpoints to modern reactive front-ends.",
      "Achieved 99.9% uptime across mission-critical coal production operational dashboards."
    ],
    tags: ["React.js", "Tailwind CSS", "TypeScript", "Node.js", "Laravel API Gateway", "Docker", "Kubernetes"],
    techStack: ["React.js", "Tailwind CSS", "TypeScript", "Node.js", "Laravel API Gateway", "Docker", "Kubernetes"],
    metrics: "40% Faster operational reporting • 100+ Integrated modules • 99.9% High Availability",
    badgeColor: "bg-amber-500 text-white"
  },
  {
    id: "hcms-pusri",
    title: "PT Pupuk Sriwidjaja (Pusri) — HCMS Web App",
    subtitle: "Human Capital Management System & EAP Consultation Portal",
    category: "Enterprise BUMN & Fintech Apps",
    role: "Lead Enterprise Full-Stack Engineer",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "hcms.pusri.co.id (`Protected Employee Portal`)",
    archetype: "Archetype A: Enterprise SDM Dashboard & Multi-Database Orchestration",
    description:
      "The comprehensive internal corporate portal (`hcms.pusri.co.id`) engineered for full-service employee lifecycle management, organizational structure administration, and mental health consultation across PT Pupuk Sriwidjaja Palembang.",
    summary:
      "The comprehensive internal corporate portal (`hcms.pusri.co.id`) engineered for full-service employee lifecycle management, organizational structure administration, and mental health consultation across PT Pupuk Sriwidjaja Palembang.",
    highlights: [
      "Architected complete SDM lifecycle tracking including employee rotation, mutation, promotion, and role experience workflows.",
      "Engineered the Employee Assistance Program (EAP) module for secure, confidential psychological checking and mental health consultation for every employee.",
      "Built multi-RDBMS synchronization layers orchestrating data across MySQL, PostgreSQL, and Microsoft SQL Server (MSSQL).",
      "Implemented responsive asynchronous UI interactions using modern Laravel Blade, AJAX, and high-performance jQuery event handlers."
    ],
    tags: ["PHP", "Laravel", "AJAX", "jQuery", "MySQL", "PostgreSQL", "MSSQL"],
    techStack: ["PHP", "Laravel", "AJAX", "jQuery", "MySQL", "PostgreSQL", "MSSQL"],
    metrics: "100% Automated SDM rotation workflows • Confidential EAP consultation portal • Multi-database RDBMS sync",
    badgeColor: "bg-emerald-600 text-white"
  },
  {
    id: "tkno-pusri",
    title: "PT Pupuk Sriwidjaja (Pusri) — TKNO Web App",
    subtitle: "Tata Kelola & Naskah Organisasi Governance Portal",
    category: "Enterprise BUMN & Fintech Apps",
    role: "Full-Stack System Developer",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "Internal Corporate Governance Portal",
    archetype: "Archetype A: Decoupled SPA & REST API Governance Portal",
    description:
      "An enterprise governance application streamlining internal employee contracts, structural documentation (`Naskah Organisasi`), and corporate compliance workflows across Pusri departments.",
    summary:
      "An enterprise governance application streamlining internal employee contracts, structural documentation (`Naskah Organisasi`), and corporate compliance workflows across Pusri departments.",
    highlights: [
      "Built a fast, reactive front-end Single Page Application (SPA) utilizing modern React.js.",
      "Designed secure RESTful APIs and authentication pipelines using PHP Laravel back-end architecture.",
      "Automated internal employee contracting approval chains with role-based access restrictions.",
      "Significantly accelerated contract processing and organizational documentation archival."
    ],
    tags: ["React.js", "PHP", "Laravel REST API", "MySQL", "Tailwind CSS"],
    techStack: ["React.js", "PHP", "Laravel REST API", "MySQL", "Tailwind CSS"],
    metrics: "Streamlined corporate contracting • Reactive SPA user experience • Secure role segregation",
    badgeColor: "bg-teal-600 text-white"
  },
  {
    id: "investree-internship",
    title: "PT Investree Radhika Jaya — Student Intern Monitoring App",
    subtitle: "Fintech Enterprise HR Daily Activity & Milestone Tracker",
    category: "Enterprise BUMN & Fintech Apps",
    role: "Full-Stack System Developer",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "Internal Fintech HR Monitoring Portal",
    archetype: "Archetype A: Corporate HR Daily Activity Tracker & Evaluation Engine",
    description:
      "Internal corporate management application engineered specifically for PT Investree Radhika Jaya (Financial Technology Enterprise) to monitor daily activities, track task milestones, and evaluate student intern performance across departments.",
    summary:
      "Internal corporate management application engineered specifically for PT Investree Radhika Jaya (Financial Technology Enterprise) to monitor daily activities, track task milestones, and evaluate student intern performance across departments.",
    highlights: [
      "Designed real-time daily activity logging interfaces enabling student interns to submit shift logs and deliverables asynchronously.",
      "Built supervisor verification and milestone evaluation pipelines to track KPI completion across multiple Fintech departments.",
      "Developed comprehensive supervisor review reports with role-based access control (RBAC) ensuring data confidentiality.",
      "Implemented a clean, responsive web interface combining React front-end components with a robust PHP Laravel REST API."
    ],
    tags: ["React.js", "PHP Laravel", "MySQL", "Tailwind CSS", "RESTful API"],
    techStack: ["React.js", "PHP Laravel", "MySQL", "Tailwind CSS", "RESTful API"],
    metrics: "100% Digital daily intern activity monitoring • Streamlined KPI evaluations • Secure departmental RBAC",
    badgeColor: "bg-purple-600 text-white"
  },

  // ==========================================
  // 2. PERSONAL AI R&D & LOCAL AUTOMATION
  // ==========================================
  {
    id: "mother-orchestrator-ai",
    title: "Supramother Architecture (`Supreme Mother Orchestrator`)",
    subtitle: "Private N8N Automated Workflow & Dynamic Model Generator",
    category: "Personal AI R&D & Local Automation",
    role: "Lead AI & Automation Architect (Personal R&D)",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "Private N8N R&D Project",
    archetype: "Archetype B: Dynamic Workflow Model Generator & N8N Orchestrator",
    description:
      "An automated system application built using N8N capable of dynamically generating and executing specialized workflow models based on custom user verification and prompts (e.g., generating an automated Video Editor schema on demand).",
    summary:
      "An automated system application built using N8N capable of dynamically generating and executing specialized workflow models based on custom user verification and prompts (e.g., generating an automated Video Editor schema on demand).",
    highlights: [
      "Architected using N8N workflow engine to dynamically generate model schemas (such as automated Video Editor workflows) based on user prompt criteria.",
      "Integrated manual verification checkpoints allowing the developer to review, authorize, and switch between specialized model outputs before execution.",
      "Engineered automated task pipelines handling multi-step data processing without manual intervention once verified.",
      "Maintained strictly as a private R&D architecture (`Private N8N Project`) undergoing active refinement and enhancement."
    ],
    tags: ["N8N Workflow Engine", "JavaScript", "Local Automation", "Dynamic Schemas", "Webhooks"],
    techStack: ["N8N Workflow Engine", "JavaScript", "Local Automation", "Dynamic Schemas", "Webhooks"],
    metrics: "Dynamic model schema generation • User verification checkpoints • Private R&D automation",
    badgeColor: "bg-rose-600 text-white"
  },
  {
    id: "ai-youtube-engine",
    title: "AI Automation YouTube Video Engine",
    subtitle: "Local JavaScript & Ollama LLM Docker Engine",
    category: "Personal AI R&D & Local Automation",
    role: "Automation Engineer (Personal Project)",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "Private GitHub Repository (`Local Docker Engine`)",
    archetype: "Archetype B: Local JavaScript & Ollama LLM Scripting Engine",
    description:
      "A private automation engine engineered in JavaScript running locally using Docker and Ollama. Orchestrates local prompt generation and media assembling without relying on paid external cloud APIs.",
    summary:
      "A private automation engine engineered in JavaScript running locally using Docker and Ollama. Orchestrates local prompt generation and media assembling without relying on paid external cloud APIs.",
    highlights: [
      "Built entirely with JavaScript / Node.js scripting execution paths running cleanly inside a private environment.",
      "Integrated local Ollama LLM instances executed via Dockerfile containers locally, eliminating external API subscription costs.",
      "Automated prompt-driven scripting generation and localized media processing workflows.",
      "Safeguarded as a private GitHub repository for personal R&D and continuous local enhancement."
    ],
    tags: ["JavaScript", "Node.js", "Ollama LLM", "Docker Container", "Local Automation"],
    techStack: ["JavaScript", "Node.js", "Ollama LLM", "Docker Container", "Local Automation"],
    metrics: "Zero cloud API fees • Local Docker + Ollama LLM execution • Private GitHub R&D",
    badgeColor: "bg-red-600 text-white"
  },

  // ==========================================
  // 3. ELECTRICAL, MECHANICAL & EMBEDDED HARDWARE
  // ==========================================
  {
    id: "raspberry-pi-simulator",
    title: "System Controller Simulator (Raspberry Pi GPIO)",
    subtitle: "Embedded Electrical Hardware Schematics & GPIO Controller",
    category: "Electrical, Mechanical & Embedded Hardware",
    role: "Embedded Systems & Electrical Hardware Engineer",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "Embedded Hardware Lab",
    archetype: "Archetype C: Physical GPIO & Embedded Controller Simulation",
    description:
      "Physical GPIO embedded controller bridging Raspberry Pi electrical pins with real-time hardware status simulation and actuator control circuits.",
    summary:
      "Physical GPIO embedded controller bridging Raspberry Pi electrical pins with real-time hardware status simulation and actuator control circuits.",
    highlights: [
      "Engineered low-level Python GPIO communication scripts capturing real-time electrical pin states.",
      "Designed embedded control schematics simulating physical electrical signaling and actuator responses.",
      "Demonstrated bi-directional electrical command execution across hardware interface modules."
    ],
    tags: ["Python GPIO", "Raspberry Pi", "Electrical Schematics", "Actuator Circuits"],
    techStack: ["Python GPIO", "Raspberry Pi", "Electrical Schematics", "Actuator Circuits"],
    metrics: "Sub-50ms GPIO signaling • Electrical hardware simulation accuracy",
    badgeColor: "bg-cyan-600 text-white"
  },
  {
    id: "pusri-plc-interlocks",
    title: "PT Pupuk Sriwidjaja — Differential Pressure Protection System",
    subtitle: "Industrial Electrical & Mechanical PLC Safety Interlock",
    category: "Electrical, Mechanical & Embedded Hardware",
    role: "Industrial Electrical / Mechanical Safety Engineer",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "Chemical Plant Industrial Safety Interlock",
    archetype: "Archetype C: Industrial Electrical / Mechanical PLC Interlock",
    description:
      "High-reliability industrial safety interlock system monitoring real-time differential pressure across chemical fertilizer production lines to prevent mechanical overpressure incidents.",
    summary:
      "High-reliability industrial safety interlock system monitoring real-time differential pressure across chemical fertilizer production lines to prevent mechanical overpressure incidents.",
    highlights: [
      "Monitored high-frequency differential pressure transducers linked to industrial PLC hardware.",
      "Architected automated electrical trip thresholds and physical mechanical safety interlocks under strict tolerance.",
      "Designed localized HMI telemetry indicators for immediate electrical safety compliance verification."
    ],
    tags: ["Industrial PLC", "Electrical Interlocks", "Mechanical Transducers", "HMI Systems"],
    techStack: ["Industrial PLC", "Electrical Interlocks", "Mechanical Transducers", "HMI Systems"],
    metrics: "Sub-10ms Trip threshold precision • Zero mechanical overpressure incidents",
    badgeColor: "bg-blue-700 text-white"
  },

  // ==========================================
  // 4. ACADEMIC, CLIENT & WEB PRACTICE SPAS
  // ==========================================
  {
    id: "synapse-sjakhyakirti",
    title: "Synapse Academy & Universitas Sjakhyakirti",
    subtitle: "EdTech Leadership, Academic Portals & IT Mentorship",
    category: "Academic, Client & Web Practice SPAs",
    role: "Founder, CTO & Principal Mentorship Lead",
    image: null,
    link: "https://sydemy.com/",
    liveUrl: "https://sydemy.com/",
    protectedUrlText: null,
    archetype: "Archetype F: EdTech Ecosystem & IT Leadership Mentorship",
    description:
      "Spearheaded the technical vision and educational curriculum for Synapse Academy (`Sydemy.com`) and Universitas Sjakhyakirti, transforming hundreds of engineering students into elite architects.",
    summary:
      "Spearheaded the technical vision and educational curriculum for Synapse Academy (`Sydemy.com`) and Universitas Sjakhyakirti, transforming hundreds of engineering students into elite architects.",
    highlights: [
      "Architected and deployed `sydemy.com`, a high-availability learning management system (LMS) serving thousands of aspiring software engineers.",
      "Mentored over 500+ developers in Clean Architecture, Cloud-Native DevOps, and Fortune 500 engineering standards.",
      "Collaborated with academic institutions to align university IT curricula with real-world enterprise requirements."
    ],
    tags: ["React.js", "Node.js", "GraphQL", "PostgreSQL", "Tailwind CSS", "AWS CloudFront"],
    techStack: ["React.js", "Node.js", "GraphQL", "PostgreSQL", "Tailwind CSS", "AWS CloudFront"],
    metrics: "500+ Engineering alumni • High-availability EdTech platform",
    badgeColor: "bg-rose-600 text-white"
  },
  {
    id: "ismart-education",
    title: "iSmart Education Center — Learning & Attendance App",
    subtitle: "Modern Student Attendance & Academic Portal (Tangerang)",
    category: "Academic, Client & Web Practice SPAs",
    role: "Lead Full-Stack Developer",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "iSmart LMS Academic Portal",
    archetype: "Archetype A: LMS Dashboard & Real-Time Attendance Tracker",
    description:
      "Comprehensive digital management portal built for iSmart Education Center in Tangerang, handling student enrollment, classroom scheduling, and automated daily attendance tracking.",
    summary:
      "Comprehensive digital management portal built for iSmart Education Center in Tangerang, handling student enrollment, classroom scheduling, and automated daily attendance tracking.",
    highlights: [
      "Designed intuitive attendance logging interfaces used daily by teachers and academic administrators.",
      "Automated monthly progress reporting and tuition verification summaries for parents and staff.",
      "Ensured zero data discrepancies across multi-branch classroom rosters."
    ],
    tags: ["React.js", "PHP Laravel", "MySQL", "Tailwind CSS"],
    techStack: ["React.js", "PHP Laravel", "MySQL", "Tailwind CSS"],
    metrics: "100% Digital classroom attendance tracking • Multi-branch scalability",
    badgeColor: "bg-violet-600 text-white"
  },
  {
    id: "syihab-learning",
    title: "Syihab Learning Course Platform",
    subtitle: "Online Course & Mentorship Ecosystem (PT Syihab Digital)",
    category: "Academic, Client & Web Practice SPAs",
    role: "Lead Platform Architect",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "PT Syihab Digital Course Portal",
    archetype: "Archetype A: Online Course Management & Video Streaming Hub",
    description:
      "Modern e-learning platform specifically crafted for PT Syihab Digital to distribute structured technical courses, video modules, and student evaluations.",
    summary:
      "Modern e-learning platform specifically crafted for PT Syihab Digital to distribute structured technical courses, video modules, and student evaluations.",
    highlights: [
      "Implemented secure video streaming players with chapter markers and progress tracking.",
      "Built interactive quiz evaluation engines giving immediate grade feedback upon completion.",
      "Designed a clean administrative backend for seamless instructor curriculum publishing."
    ],
    tags: ["React.js", "Node.js Express", "MongoDB", "Tailwind CSS"],
    techStack: ["React.js", "Node.js Express", "MongoDB", "Tailwind CSS"],
    metrics: "Seamless video curriculum streaming • Instant automated grading",
    badgeColor: "bg-purple-700 text-white"
  },
  {
    id: "client-kreatifision-hyperhire",
    title: "Client Solutions — Kreatifision & HyperHire",
    subtitle: "Corporate Digital Agency Portals & Talent Matching Engine",
    category: "Academic, Client & Web Practice SPAs",
    role: "Lead Consultant & Full-Stack Engineer",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "Corporate Client Portals",
    archetype: "Archetype A: High-Performance Agency & Talent Portals",
    description:
      "Engineered bespoke digital platforms for corporate clients including Kreatifision creative agency and HyperHire automated tech recruitment engine.",
    summary:
      "Engineered bespoke digital platforms for corporate clients including Kreatifision creative agency and HyperHire automated tech recruitment engine.",
    highlights: [
      "Delivered pixel-perfect, responsive corporate showcase platforms optimized for high SEO ranking and lead conversion.",
      "Built candidate screening workflows for HyperHire matching developer resumes against specific enterprise job profiles.",
      "Achieved sub-second page loads through server-side rendering and asset caching."
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    metrics: "Sub-second page loads • High client conversion rates",
    badgeColor: "bg-fuchsia-600 text-white"
  },
  {
    id: "learn-quran-tafsir",
    title: "Learn Quran Tafsir App",
    subtitle: "Interactive Islamic Learning & Tafsir Engine (PT Bina Digital)",
    category: "Academic, Client & Web Practice SPAs",
    role: "Full-Stack Web & Mobile Engineer",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "PT Bina Digital Tafsir Portal",
    archetype: "Archetype D: High-Performance Dual Frame Mobile/Web App",
    description:
      "An intuitive digital tafsir and Quranic study application developed with PT Bina Digital to make deep theological commentary accessible through modern mobile and web interfaces.",
    summary:
      "An intuitive digital tafsir and Quranic study application developed with PT Bina Digital to make deep theological commentary accessible through modern mobile and web interfaces.",
    highlights: [
      "Indexed comprehensive multilingual tafsir datasets with instant keyword search speed.",
      "Engineered dual mobile/web responsive layouts ensuring perfect readability across smartphones and tablets.",
      "Integrated audio recitation playback controls synchronized word-by-word with verse highlights."
    ],
    tags: ["React Native", "React.js", "Node.js", "MongoDB", "Audio API"],
    techStack: ["React Native", "React.js", "Node.js", "MongoDB", "Audio API"],
    metrics: "Instant verse & tafsir search • Synchronized audio recitation engine",
    badgeColor: "bg-emerald-700 text-white"
  },
  {
    id: "recruitment-simulation",
    title: "HR Recruitment & Company Simulation Web Apps",
    subtitle: "Interactive Candidate Assessment & Corporate Simulation Portal",
    category: "Academic, Client & Web Practice SPAs",
    role: "Full-Stack Developer",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "Corporate Simulation Practice Portal",
    archetype: "Archetype A: Interactive Corporate HR Simulation Dashboard",
    description:
      "Interactive web simulation practice applications allowing candidates to experience real-world corporate decision-making and technical evaluation workflows prior to onboarding.",
    summary:
      "Interactive web simulation practice applications allowing candidates to experience real-world corporate decision-making and technical evaluation workflows prior to onboarding.",
    highlights: [
      "Simulated multi-tier interview questions and scenario-based technical challenges.",
      "Built dynamic score calculation logic providing immediate competency feedback.",
      "Designed clean, stress-free user interfaces aligned with modern enterprise design guidelines."
    ],
    tags: ["React.js", "Tailwind CSS", "JavaScript ES6+", "State API"],
    techStack: ["React.js", "Tailwind CSS", "JavaScript ES6+", "State API"],
    metrics: "Interactive scenario evaluation • Real-time competency scoring",
    badgeColor: "bg-sky-600 text-white"
  },
  {
    id: "startup-simulator-chat",
    title: "Startup Simulator & Mobile App Chat",
    subtitle: "Real-Time WebSocket Chat System & Business Strategy Game",
    category: "Academic, Client & Web Practice SPAs",
    role: "Real-Time Systems Developer",
    image: null,
    link: null,
    liveUrl: null,
    protectedUrlText: "Real-Time WebSocket Simulator",
    archetype: "Archetype D: Dual Mobile Frame & Real-Time WebSocket Engine",
    description:
      "A dynamic real-time communication platform combined with a startup business simulation strategy game demonstrating low-latency bi-directional state synchronization.",
    summary:
      "A dynamic real-time communication platform combined with a startup business simulation strategy game demonstrating low-latency bi-directional state synchronization.",
    highlights: [
      "Implemented bi-directional WebSocket chat rooms supporting instant messaging, typing indicators, and read receipts.",
      "Built interactive simulation game mechanics tracking virtual capital, customer churn, and product features.",
      "Designed sleek mobile-first dual frame UI simulating native smartphone chat applications."
    ],
    tags: ["React.js", "Socket.IO", "Node.js", "Express", "Tailwind CSS"],
    techStack: ["React.js", "Socket.IO", "Node.js", "Express", "Tailwind CSS"],
    metrics: "Sub-10ms WebSocket chat messaging • Real-time state sync",
    badgeColor: "bg-amber-600 text-white"
  },
  {
    id: "emart-react",
    title: "emart-react",
    subtitle: "Full-Stack Cart Simulation E-Commerce App",
    category: "Academic, Client & Web Practice SPAs",
    role: "Full-Stack React Developer",
    image: emart,
    link: "https://emartreact.vercel.app/",
    liveUrl: "https://emartreact.vercel.app/",
    protectedUrlText: null,
    archetype: "Archetype D: E-Commerce Global Redux State Simulation",
    description:
      "Cart simulation e-commerce app featuring CRUD operations and RESTful API methods using Axios, coupled with predictable global state management powered by Redux.",
    summary:
      "Cart simulation e-commerce app featuring CRUD operations and RESTful API methods using Axios, coupled with predictable global state management powered by Redux.",
    highlights: [
      "Architected global shopping cart state using predictable Redux actions and reducers.",
      "Integrated live product fetching, filtering, and detail inspection via Axios REST methods.",
      "Deployed live on Vercel (`emartreact.vercel.app`) demonstrating smooth e-commerce UX transitions."
    ],
    tags: ["React", "Redux", "Axios", "REST API", "E-Commerce"],
    techStack: ["React", "Redux", "Axios", "REST API", "E-Commerce"],
    metrics: "Predictable Redux state execution • Live verified Vercel SPA",
    badgeColor: "bg-blue-600 text-white"
  },
  {
    id: "pokeapp",
    title: "pokeapp",
    subtitle: "Interactive Pokédex & Middleware API Explorer",
    category: "Academic, Client & Web Practice SPAs",
    role: "React & Redux Developer",
    image: pokeapp,
    link: "https://pokeapp-opal.vercel.app/",
    liveUrl: "https://pokeapp-opal.vercel.app/",
    protectedUrlText: null,
    archetype: "Archetype D: Redux Middleware & REST API Engine",
    description:
      "Interactive Pokédex web app simulating CRUD operations and RESTful API calls with Axios. Implements complex state management with Redux middleware and custom UI design.",
    summary:
      "Interactive Pokédex web app simulating CRUD operations and RESTful API calls with Axios. Implements complex state management with Redux middleware and custom UI design.",
    highlights: [
      "Utilized Redux asynchronous middleware to handle external PokéAPI dataset fetching and error handling.",
      "Built custom search, evolution tree inspection, and stat radar visualizations.",
      "Live verified SPA deployed on Vercel (`pokeapp-opal.vercel.app`)."
    ],
    tags: ["React", "Redux Middleware", "Axios", "PokéAPI", "Tailwind CSS"],
    techStack: ["React", "Redux Middleware", "Axios", "PokéAPI", "Tailwind CSS"],
    metrics: "Deep PokéAPI data mapping • Smooth Redux middleware flow",
    badgeColor: "bg-amber-500 text-white"
  },
  {
    id: "note-app",
    title: "note-app",
    subtitle: "Clean React SPA State & Component Architecture Practice",
    category: "Academic, Client & Web Practice SPAs",
    role: "Front-End Developer",
    image: noteapp,
    link: "https://noteapp-ruby.vercel.app/",
    liveUrl: "https://noteapp-ruby.vercel.app/",
    protectedUrlText: null,
    archetype: "Archetype D: Clean Functional SPA Architecture",
    description:
      "Simple React application with dummy data implementing state management and functional components to create a clean UI, sharing data seamlessly with props and custom handlers.",
    summary:
      "Simple React application with dummy data implementing state management and functional components to create a clean UI, sharing data seamlessly with props and custom handlers.",
    highlights: [
      "Practiced foundational React state propagation and unidirectional data flows via props.",
      "Implemented note creation, deletion, archiving, and live keyword filtering.",
      "Live verified on Vercel (`noteapp-ruby.vercel.app`) with responsive UI styling."
    ],
    tags: ["React", "State Management", "Props", "CSS"],
    techStack: ["React", "State Management", "Props", "CSS"],
    metrics: "Zero-latency local state handling • Clean functional architecture",
    badgeColor: "bg-emerald-600 text-white"
  },
  {
    id: "imdb-clone-design",
    title: "imdb-clone-design",
    subtitle: "Dynamic Movie Database Explorer & Fetch API Practice",
    category: "Academic, Client & Web Practice SPAs",
    role: "Front-End SPA Developer",
    image: imdbclone,
    link: "https://tmdb-app-eight.vercel.app/",
    liveUrl: "https://tmdb-app-eight.vercel.app/",
    protectedUrlText: null,
    archetype: "Archetype D: TMDB Fetch API & Responsive Movie Grid",
    description:
      "Dynamic movie database clone implementing real-time data manipulation in React with RESTful fetch methods against the official TMDB external API.",
    summary:
      "Dynamic movie database clone implementing real-time data manipulation in React with RESTful fetch methods against the official TMDB external API.",
    highlights: [
      "Integrated real-time external REST queries against the Movie Database (TMDB) endpoints.",
      "Built responsive grid layouts with movie trailer previews, ratings, and genre filtering.",
      "Live verified SPA deployed on Vercel (`tmdb-app-eight.vercel.app`)."
    ],
    tags: ["React", "TMDB API", "Fetch API", "Responsive UI"],
    techStack: ["React", "TMDB API", "Fetch API", "Responsive UI"],
    metrics: "Real-time TMDB REST fetch • Responsive cinema grid UI",
    badgeColor: "bg-red-600 text-white"
  }
];
