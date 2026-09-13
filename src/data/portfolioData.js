export const personalInfo = {
  name: "VINAY",
  fullName: "Chinnam Vinay",
  title: "AI/ML Engineer",
  tagline: "Building intelligent solutions with Python, Machine Learning and AI to solve real-world problems.",
  secondaryTagline: "Turning ideas into intelligent, practical and scalable solutions.",
  statusBadge: "OPEN TO LEARNING • BUILDING • COLLABORATING",
  bio: "I'm Vinay, an Artificial Intelligence and Machine Learning student focused on building practical technology solutions. I work primarily with Python and enjoy exploring machine learning, AI-powered applications, APIs and modern web technologies. My goal is to grow into an AI/ML Engineer by continuously learning, building projects and solving real-world problems.",
  
  location: "Eluru, Andhra Pradesh, India",
  college: "Ramachandra College of Engineering, Eluru",
  degree: "B.Tech — Artificial Intelligence & Machine Learning",
  academics: "2024 — 2028",
  year: "3rd Year",
  cgpa: "7.6",
  languages: ["Telugu", "English"],

  resumeUrl: "/Chinnam_Vinay_Resume.pdf",
  resumeFileName: "Chinnam_Vinay_Resume.pdf",

  socials: {
    github: "https://github.com/vinayraj75",
    githubUsername: "vinayraj75",
    linkedin: "https://www.linkedin.com/in/chinnam-vinay-37a514355/",
    email: import.meta.env.VITE_CONTACT_EMAIL || "",
  },

  hackathonTeam: "DuoXtitans",
  careerGoal: "AI/ML Engineer",
};

export const currentStatus = {
  building: [
    { title: "Smart Agriculture AI", desc: "Plant disease diagnosis & medicine advisory system" },
    { title: "Full Stack AI Apps", desc: "Integrating FastAPI microservices with modern frontends" },
  ],
  learning: [
    "Machine Learning & Deep Learning",
    "Computer Vision Architectures",
    "AI Engineering & FastAPI",
    "Scalable Python APIs",
  ]
};

export const skillsData = {
  programming: [
    { name: "Python", level: "Primary Language", proficiency: "Working Knowledge", desc: "Core language for ML modeling, data pipelines, automation & backend APIs." },
    { name: "C", level: "Systems / Foundations", proficiency: "Working Knowledge", desc: "Structured programming, memory concepts & foundational algorithms." },
    { name: "Java", level: "Object Oriented", proficiency: "Familiar", desc: "OOP principles, modular architecture & algorithmic problem-solving." },
  ],
  aiMl: [
    { name: "Machine Learning", level: "Core Discipline", proficiency: "Currently Learning", desc: "Supervised & unsupervised algorithms, feature engineering & model evaluation." },
    { name: "Artificial Intelligence", level: "Specialization", proficiency: "Currently Learning", desc: "Heuristic search, decision agents & intelligent system design." },
    { name: "Deep Learning", level: "Neural Networks", proficiency: "Currently Learning", desc: "Neural network fundamentals, multi-layer architectures & representation learning." },
    { name: "Computer Vision", level: "Visual Intelligence", proficiency: "Currently Learning", desc: "Image classification, spatial feature extraction & disease diagnosis pipelines." },
    { name: "Data Processing", level: "Data Science", proficiency: "Working Knowledge", desc: "Cleaning, transforming, and structuring numerical and categorical datasets." },
  ],
  frameworks: [
    { name: "FastAPI", level: "Modern API Framework", proficiency: "Currently Learning", desc: "High-performance asynchronous REST endpoints for ML model serving." },
    { name: "TensorFlow", level: "Deep Learning Library", proficiency: "Currently Learning", desc: "Building, compiling, and evaluating neural network classification models." },
    { name: "REST APIs", level: "Web Services", proficiency: "Working Knowledge", desc: "Client-server architecture, JSON schemas & HTTP request workflows." },
  ],
  webTools: [
    { name: "React", level: "Frontend UI", proficiency: "Working Knowledge", desc: "Component architecture, hooks, and dynamic client interfaces." },
    { name: "JavaScript", level: "Modern Web", proficiency: "Working Knowledge", desc: "ES6+ asynchronous workflows, API consumption & interactive state." },
    { name: "Git & GitHub", level: "Version Control", proficiency: "Working Knowledge", desc: "Distributed versioning, repository tracking & code collaboration." },
  ],
};

export const coreStrengths = [
  "Problem Solving",
  "Project Development",
  "API Integration",
  "Team Collaboration"
];

export const techStack = [
  { name: "Python", category: "Core Language", highlight: true },
  { name: "Machine Learning", category: "AI / Modeling", highlight: true },
  { name: "TensorFlow", category: "Deep Learning", highlight: true },
  { name: "FastAPI", category: "API Backend", highlight: true },
  { name: "Computer Vision", category: "Visual AI", highlight: true },
  { name: "React", category: "Frontend UI", highlight: false },
  { name: "JavaScript", category: "Web Core", highlight: false },
  { name: "Git & GitHub", category: "Version Control", highlight: false },
];

export const projectsData = [
  {
    id: "smart-crop-system",
    title: "Smart Crop Recommendation & Leaf Disease Detection System",
    category: "AI / Machine Learning",
    tagline: "AI-powered agriculture solution assisting farmers with instant plant disease identification and treatment guidance.",
    description: "An AI-powered agriculture solution designed to help farmers identify plant leaf diseases and receive useful recommendations.",
    problem: "Farmers in rural regions often suffer catastrophic crop losses due to delayed diagnosis of leaf infections and lack of immediate access to agricultural experts, leading to improper chemical use and ballooning expenses.",
    solution: "A computer vision and ML pipeline that accepts leaf photographs, performs disease classification, identifies pathogen symptoms, and presents a cost-effective treatment regimen along with precautionary steps.",
    workflow: [
      { step: 1, title: "Image Capture", desc: "Farmer captures or uploads a leaf photograph through their smartphone or device." },
      { step: 2, title: "AI Analysis", desc: "Computer vision model extracts spatial leaf features and patterns." },
      { step: 3, title: "Classification", desc: "Determines whether the plant leaf is healthy or affected by a specific disease." },
      { step: 4, title: "Symptom Retrieval", desc: "Correlates disease characteristics and stages with an agricultural knowledge base." },
      { step: 5, title: "Remedy & Cost Estimation", desc: "Recommends exact medicinal treatments and calculates approximate medicine costs." },
      { step: 6, title: "Precautions", desc: "Provides protective measures and field hygiene practices to prevent future spread." },
    ],
    features: [
      "Leaf image classification via Computer Vision",
      "Accurate disease vs. healthy leaf identification",
      "In-depth symptom breakdowns and disease explanations",
      "Tailored treatment recommendations",
      "Medicine cost estimation to prevent farmer exploitation",
      "Practical preventative guidelines and precautions",
    ],
    technologies: ["Python", "Computer Vision", "Machine Learning", "TensorFlow", "FastAPI"],
    github: "https://github.com/vinayraj75",
    demo: null,
    status: "In Active Development",
    featured: true,
  },
  {
    id: "reuters-classification",
    title: "Reuters News Classification",
    category: "Deep Learning / NLP",
    tagline: "Multi-class text classification model built with TensorFlow/Keras using the Reuters news dataset.",
    description: "Built a multi-class text classification model with TensorFlow/Keras using the Reuters dataset; explored neural-network training, ReLU activation, epochs and one-hot encoded labels.",
    problem: "Accurately categorizing high-throughput journalistic news wire texts into specific topic classes requires effective word-index representations and robust multi-class loss optimization.",
    solution: "Trained a feedforward neural network in TensorFlow/Keras leveraging dense layers with ReLU activations, softmax multi-class output, categorical cross-entropy, and validation epoch tuning.",
    features: [
      "Reuters news wire text tokenization & vectorization",
      "One-hot multi-class categorical encoding",
      "Deep neural network training with ReLU activations",
      "Validation tracking across multiple training epochs",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Deep Learning"],
    github: "https://github.com/vinayraj75",
    demo: null,
    status: "Completed / Academic",
    featured: true,
  },
  {
    id: "ai-weather-prediction",
    title: "AI Weather Prediction",
    category: "Artificial Intelligence / Machine Learning",
    tagline: "Intelligent atmospheric analysis and forecasting using historical meteorological datasets.",
    description: "An AI/ML project focused on data-driven weather analysis and prediction using Python and AI/ML techniques.",
    problem: "Complex climate shifts make raw sensory readings difficult to interpret locally without structured pattern analysis and algorithmic prediction.",
    solution: "A data pipeline utilizing machine learning regression and classification to process atmospheric variables (humidity, pressure, temperature) and forecast weather trends.",
    features: [
      "Atmospheric dataset cleaning and normalization",
      "Feature correlation analysis between temperature and barometric pressure",
      "Time-series trend forecasting with ML models",
      "Clean visual reporting of predicted conditions",
    ],
    technologies: ["Python", "Machine Learning", "AI", "Data Processing"],
    github: "https://github.com/vinayraj75",
    demo: null,
    status: "Prototype / Academic Research",
    featured: true,
  },
  {
    id: "seo-optimizer-pro",
    title: "SEO Optimizer Pro",
    category: "AI / Web Application",
    tagline: "Content structure and optimization assistant designed for modern search discoverability.",
    description: "Modern SEO-focused web application concept for content optimization and search-oriented improvements using React, Python/FastAPI and AI-assisted workflows.",
    problem: "Writers and developers often struggle to audit on-page metadata, semantic readability, and heading hierarchy before publishing.",
    solution: "A fast web analysis utility that inspects page content, evaluates keyword distributions, audits semantic DOM hierarchy, and generates optimization pointers.",
    features: [
      "Real-time semantic heading validator (H1, H2, H3 hierarchy)",
      "Keyword density and distribution checker",
      "Meta tags and OpenGraph completeness verification",
      "Readability score calculations with actionable fixes",
    ],
    technologies: ["React", "Python", "FastAPI", "AI"],
    github: "https://github.com/vinayraj75",
    demo: null,
    status: "In Development",
    featured: true,
  },
];

export const hackathonsData = [
  {
    title: "Prakalp Hackathon",
    team: "DuoXtitans",
    award: "3rd Prize Winner",
    category: "Innovation & Problem Solving",
    description: "Competed as part of DuoXtitans to ideate, prototype, and defend an impactful technical solution against rigorous evaluation criteria.",
    highlight: "Won 3rd Prize among competitive multi-college teams for technical viability and presentation.",
  }
];

export const certificationsData = [
  {
    id: "nptel-iot",
    title: "Introduction to Internet of Things (IoT)",
    issuer: "NPTEL — IIT Kharagpur",
    type: "Elite Certification",
    period: "Jan–Apr 2026",
    duration: "12 Weeks",
    score: "62%",
    credits: "4 Credits Recommended",
    description: "Rigorous 12-week course covering IoT hardware architecture, sensor integration, network protocols, cloud connectivity, and edge processing.",
    status: "Completed",
    featured: true,
    link: null,
  },
  {
    id: "oracle-genai",
    title: "Oracle Generative AI",
    issuer: "Oracle",
    type: "Professional Credential",
    period: "2025 - 2026",
    duration: "Curriculum Program",
    score: "Certified",
    credits: null,
    description: "Foundations of Large Language Models (LLMs), prompt engineering, fine-tuning methodologies, and cloud-native AI deployment.",
    status: "Certificate details available",
    featured: false,
    link: null,
  },
  {
    id: "cert-python",
    title: "Python Programming",
    issuer: "Technical Certification",
    type: "Core Programming",
    period: "2024 - 2025",
    duration: "Comprehensive Course",
    score: "Completed",
    credits: null,
    description: "In-depth training covering object-oriented design, functional programming, data structures, and script automation in Python.",
    status: "Certificate details available",
    featured: false,
    link: null,
  },
  {
    id: "cert-c",
    title: "C Programming",
    issuer: "Technical Certification",
    type: "Systems Foundations",
    period: "2023 - 2024",
    duration: "Academic Program",
    score: "Completed",
    credits: null,
    description: "Pointers, low-level memory allocation, dynamic data structures, and algorithmic computational complexity.",
    status: "Certificate details available",
    featured: false,
    link: null,
  },
  {
    id: "cert-java",
    title: "Java Programming",
    issuer: "Technical Certification",
    type: "Enterprise Language",
    period: "2024",
    duration: "Modular Course",
    score: "Completed",
    credits: null,
    description: "Classes, interfaces, inheritance, exception handling, and collections framework implementation in Java.",
    status: "Certificate details available",
    featured: false,
    link: null,
  },
];

export const achievementsData = [
  {
    title: "3rd Prize — Prakalp Hackthon",
    organization: "College-Level Hackathon",
    team: "DuoXtitans",
    year: "2025 / 2026",
    summary: "Secured 3rd place for designing and pitching a high-utility technical prototype under tight hackathon time constraints.",
    badge: "Podium Finish",
  },
];

export const educationData = [
  {
    institution: "Ramachandra College of Engineering, Eluru",
    location: "Eluru, Andhra Pradesh",
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    period: "2024 — 2028",
    year: "3rd Year",
    cgpa: "7.6",
    highlights: [
      "Rigorous coursework in Artificial Intelligence, Machine Learning, Deep Learning, and Python Development.",
      "Hands-on lab work in Data Structures, TensorFlow modeling, and REST API Integrations.",
      "College-level hackathon achievement: 3rd Prize at Prakalp Hackathon.",
    ],
  },
];

export const focusAreas = [
  {
    title: "AI Engineering",
    desc: "Bridging the gap between standalone machine learning models and robust, production-grade applications.",
    icon: "Cpu",
  },
  {
    title: "Machine Learning",
    desc: "Developing data-driven predictive models with focus on algorithmic reliability and feature engineering.",
    icon: "Brain",
  },
  {
    title: "Computer Vision",
    desc: "Implementing image classification and spatial feature extraction for real-world visual applications.",
    icon: "Scan",
  },
  {
    title: "Python Development",
    desc: "Writing clean, modular, and performant Python code for data processing and backend automation.",
    icon: "Code2",
  },
  {
    title: "FastAPI Architectures",
    desc: "Building lightweight, asynchronous REST APIs for serving intelligent model predictions to clients.",
    icon: "Server",
  },
  {
    title: "Real-World AI Applications",
    desc: "Applying technology directly to solve human challenges in agriculture, weather, and utilities.",
    icon: "Sparkles",
  },
];
