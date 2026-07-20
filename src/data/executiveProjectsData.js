const executiveProjectsData = [
  {
    id: "ifg-lifehub",
    title: "PT Asuransi Jiwa IFG (IFG Life) — Corporate LifeHub",
    subtitle: "Enterprise Policy Management, Underwriting & BPMN Workflow Portal",
    category: "Enterprise BUMN",
    role: "Front-End Architecture Lead",
    liveUrl: "https://hub-asum-dev.ifg-life.id/",
    protectedUrlText: null,
    archetype: "Archetype D: Enterprise Insurance Hub & Zero-Trust Portal",
    summary:
      "The core corporate digital portal for IFG Life (`Asum Dev Hub`), managing comprehensive insurance underwriting workflows, policy administration, and actuarial analytics powered by high-performance Java Quarkus and BPMN process integration.",
    highlights: [
      "Architected secure, responsive front-end applications handling sensitive financial and medical underwriting data.",
      "Integrated Java Quarkus backend microservices with BPMN workflow engines for automated policy approval and multi-tier underwriting routing.",
      "Implemented zero-trust OIDC/OAuth2 authentication with enterprise multi-factor security layers.",
      "Reduced underwriting turnaround time threefold through automated form validation and BPMN decision pipelines."
    ],
    techStack: ["Next.js", "Tailwind CSS", "Redux Toolkit", "Java Quarkus", "BPMN Workflow", "PostgreSQL", "OIDC/OAuth2"],
    metrics: "50k+ Concurrent policyholders • 3x Faster underwriting turnaround • ISO 27001 compliant UX",
    badgeColor: "bg-blue-600 text-white"
  },
  {
    id: "cisea-ptba",
    title: "PT Bukit Asam Tbk — CISEA Facelift Super-App",
    subtitle: "Enterprise Mining & Operations Integration Platform",
    category: "Enterprise BUMN",
    role: "Lead Project Management / Business Analyst & Senior Full-Stack Engineer",
    liveUrl: "http://cisea.bukitasam.co.id/",
    protectedUrlText: null,
    archetype: "Archetype A & B: Super-App Micro-Frontend & Unified API Gateway",
    summary:
      "A monumental enterprise integration platform unifying over 100+ disjointed operational and mining management modules into a cohesive, zero-latency Super-App ecosystem.",
    highlights: [
      "Integrated 100+ high-throughput mining, logistics, and HR modules into a single pane of glass.",
      "Architected a resilient Micro-Frontend UI layer with role-based access control (RBAC) and enterprise SSO.",
      "Engineered a high-performance API Gateway routing legacy ERP endpoints to modern reactive front-ends.",
      "Achieved 99.9% uptime across mission-critical coal production operational dashboards."
    ],
    techStack: ["React.js", "Tailwind CSS", "TypeScript", "Node.js", "Laravel API Gateway", "Docker", "Kubernetes"],
    metrics: "40% Faster operational reporting • 100+ Integrated modules • 99.9% High Availability",
    badgeColor: "bg-amber-500 text-white"
  },
  {
    id: "hcms-pusri",
    title: "PT Pupuk Sriwidjaja (Pusri) — HCMS Web App",
    subtitle: "Human Capital Management System & EAP Consultation Portal",
    category: "Enterprise BUMN",
    role: "Lead Enterprise Full-Stack Engineer",
    liveUrl: null,
    protectedUrlText: "hcms.pusri.co.id (`Protected Employee Portal`)",
    archetype: "Archetype A: Enterprise SDM Dashboard & Multi-Database Orchestration",
    summary:
      "The comprehensive internal corporate portal (`hcms.pusri.co.id`) engineered for full-service employee lifecycle management, organizational structure administration, and mental health consultation across PT Pupuk Sriwidjaja Palembang.",
    highlights: [
      "Architected complete SDM lifecycle tracking including employee rotation, mutation, promotion, and role experience workflows.",
      "Engineered the Employee Assistance Program (EAP) module for secure, confidential psychological checking and mental health consultation for every employee.",
      "Built multi-RDBMS synchronization layers orchestrating data across MySQL, PostgreSQL, and Microsoft SQL Server (MSSQL).",
      "Implemented responsive asynchronous UI interactions using modern Laravel Blade, AJAX, and high-performance jQuery event handlers.",
      "Engineered core backend services using Laravel PHP, while integrating specific high-performance microservices utilizing Express.js and Go."
    ],
    techStack: ["PHP", "Laravel", "Express.js", "Go", "AJAX", "jQuery", "MySQL", "PostgreSQL", "Microsoft SQL Server (MSSQL)"],
    metrics: "100% Automated SDM rotation workflows • Confidential EAP consultation portal • Multi-database RDBMS sync",
    badgeColor: "bg-emerald-600 text-white"
  },
  {
    id: "tkno-pusri",
    title: "PT Pupuk Sriwidjaja (Pusri) — TKNO Web App",
    subtitle: "Tata Kelola & Naskah Organisasi Governance Portal",
    category: "Enterprise BUMN",
    role: "Full-Stack System Developer",
    liveUrl: null,
    protectedUrlText: "Internal Corporate Governance Portal",
    archetype: "Archetype A: Decoupled SPA & REST API Governance Portal",
    summary:
      "An enterprise governance application streamlining internal employee contracts, structural documentation (`Naskah Organisasi`), and corporate compliance workflows across Pusri departments.",
    highlights: [
      "Built a fast, reactive front-end Single Page Application (SPA) utilizing modern React.js.",
      "Designed secure RESTful APIs and authentication pipelines using PHP Laravel back-end architecture.",
      "Automated internal employee contracting approval chains with role-based access restrictions.",
      "Significantly accelerated contract processing and organizational documentation archival."
    ],
    techStack: ["React.js", "PHP", "Laravel REST API", "MySQL", "Tailwind CSS"],
    metrics: "Streamlined corporate contracting • Reactive SPA user experience • Secure role segregation",
    badgeColor: "bg-teal-600 text-white"
  },
  {
    id: "investree-internship",
    title: "PT Investree Radhika Jaya — Student Intern Monitoring App",
    subtitle: "Fintech Enterprise HR Daily Activity & Milestone Tracker",
    category: "Fintech Enterprise",
    role: "Full-Stack System Developer",
    liveUrl: null,
    protectedUrlText: "Internal Fintech HR Monitoring Portal",
    archetype: "Archetype A: Corporate HR Daily Activity Tracker & Evaluation Engine",
    summary:
      "Internal corporate management application engineered specifically for PT Investree Radhika Jaya (Financial Technology Enterprise) to monitor daily activities, track task milestones, and evaluate student intern performance across departments.",
    highlights: [
      "Designed real-time daily activity logging interfaces enabling student interns to submit shift logs and deliverables asynchronously.",
      "Built supervisor verification and milestone evaluation pipelines to track KPI completion across multiple Fintech departments.",
      "Developed comprehensive supervisor review reports with role-based access control (RBAC) ensuring data confidentiality.",
      "Implemented a clean, responsive web interface combining React front-end components with a robust PHP Laravel REST API."
    ],
    techStack: ["React.js", "PHP Laravel", "MySQL", "Tailwind CSS", "RESTful API"],
    metrics: "100% Digital daily intern activity monitoring • Streamlined KPI evaluations • Secure departmental RBAC",
    badgeColor: "bg-purple-600 text-white"
  },
  {
    id: "synapse-sjakhyakirti",
    title: "Synapse Academy & Universitas Sjakhyakirti",
    subtitle: "EdTech Leadership, Academic Portals & IT Mentorship",
    category: "Academic & Leadership",
    role: "Founder, Chief Technology Officer & Principal Mentorship Lead",
    liveUrl: "https://sydemy.com/",
    protectedUrlText: null,
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
