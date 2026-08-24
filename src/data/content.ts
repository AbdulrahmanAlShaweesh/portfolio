export const site = {
  headline: "FullStack .NET & React Engineer",
  subheadline:
    "Building scalable, maintainable enterprise solutions with modern architectural patterns.",
  primaryCta: "View Projects",
  secondaryCta: "Download Resume",
  email: "",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
} as const

export const navLinks = [
  { href: "#about", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const

export const experience = [
  {
    id: "aspnet-fullstack",
    title: "ASP.NET Full Stack Engineer",
    highlights: [
      "Developing enterprise ERP modules, optimizing workflows, and improving system efficiency.",
      "Implementation of modern patterns like Clean/Onion Architecture and Specification Pattern.",
      "Configuring CI/CD pipelines and managing automated deployments to Azure IIS via Docker.",
    ],
    tags: ["Clean Architecture", "Specification Pattern", "Azure IIS", "Docker", "CI/CD"],
  },
  {
    id: "data-analysis",
    title: "Data Analysis Specialist",
    highlights: [
      "Designed interactive Power BI dashboards for contract monitoring and procurement.",
      "Consolidated data from multiple sources to improve reporting efficiency for stakeholders.",
    ],
    tags: ["Power BI", "Contract Monitoring", "Procurement", "Reporting"],
  },
] as const

export const techStack = [
  {
    id: "frontend",
    category: "Frontend",
    items: [
      "React.js",
      "Angular",
      "Redux",
      "Tailwind CSS",
      "Hero UI",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Toastify",
      "Formik",
      "State Management/Routing",
    ],
  },
  {
    id: "backend",
    category: "Backend & APIs",
    items: [
      "C#",
      ".NET Framework",
      "ASP.NET Core",
      "RESTful Web APIs",
      "API Security (OAuth, JWT)",
      "Microsoft SQL Server",
      "Entity Framework",
      "LINQ",
      "MVC",
    ],
  },
  {
    id: "architecture",
    category: "Architecture & Patterns",
    items: [
      "Object-Oriented Programming (OOP)",
      "Role-Based Permissions/Identity",
      "Clean/Onion Architecture",
      "N-Tier Architecture",
      "SOLID Principles",
      "Integration Architecture & Design",
      "Unit of Work Pattern",
      "Service Manager Pattern",
      "Repository Pattern",
      "Specification Pattern",
      "Dependency Injection (DI)",
    ],
  },
  {
    id: "devops",
    category: "DevOps & Tools",
    items: [
      "Git",
      "GitHub",
      "IIS CI/CD & DevOps",
      "Postman",
      "Stimulsoft Design",
      "Caching",
      "JWT & Refresh Tokens",
      "Custom Middleware",
      "Exception Handling",
      "Debugging",
      "Draw.io",
    ],
  },
] as const

export const featuredProject = {
  title: "Gym Management System",
  type: "Personal Project",
  architecture:
    "Three-layer architecture separating presentation, business logic, and data access.",
  stack: ["ASP.NET Core", "React"],
  wins: [
    "Implemented 20+ business rules including capacity-limited booking and active-membership validation.",
    "Designed a normalized relational schema of 8 entities.",
    "Applied Repository and Unit of Work patterns with Dependency Injection and AutoMapper.",
    "Integrated ASP.NET Core Identity for role-based authorization with soft-delete behavior.",
  ],
  href: "http://abdulrahman-gym.runasp.net/",
} as const

export const confidentialWork = {
  description: "Designed and implemented robust, proprietary systems for corporate clients, focusing on secure data management and high-performance workflows.",
  domains: [
    {
      domain: "Enterprise Resource Planning (ERP)",
      description: "Engineered core modules focusing on high-concurrency order workflows, role-based security, and real-time inventory tracking.",
      stack: [".NET 8", "React", "PostgreSQL", "Redis"],
    },
    {
  domain: "Clinic Management Systems",
  description: "Developed patient scheduling, electronic health records (EHR),\nand automated billing workflows with role-based security.",
  stack: [".NET Core", "React", "SQL Server", "SignalR"],
},
    {
      domain: "Restaurant Management Platforms",
      description: "Engineered high-concurrency order processing and real-time kitchen display dashboards handling peak-traffic orders.",
      stack: [".NET", "React", "Tailwind CSS", "RabbitMQ"],
    },
  ],
} as const

