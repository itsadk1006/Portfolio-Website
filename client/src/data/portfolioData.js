export const personalInfo = {
  name: "Aditya Kumar",
  headline: "Pre-final Year CSE Undergrad @ IIITD | Full-Stack Developer & Software Engineer",
  institution: "Indraprastha Institute of Information Technology Delhi (IIITD)",
  yearMajor: "3rd Year B.Tech in Computer Science and Engineering (CSE)",
  bio: "I'm a passionate Software Engineer and Full-Stack Developer with a knack for building scalable web applications and exploring the depths of computer science. Always eager to learn new technologies and solve complex problems.",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
  socials: {
    github: "https://github.com/itsadk1006",
    linkedin: "https://www.linkedin.com/in/aditya-kumar-330730301/",
    leetcode: "https://leetcode.com/u/itsadk1006/",
    x: "https://twitter.com",
    email: "mailto:istadk1006@gmail.com"
  },
  resumeLink: "https://drive.google.com/file/d/1kOPkc02RyyZQeCH1NffOX8f6k4Apau3a/view?usp=sharing"
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL"],
  frameworks: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS", "Framer Motion"],
  tools: ["Git", "Docker", "Postman", "Linux", "AWS", "MongoDB"],
  coreCS: ["Operating Systems", "DBMS", "Computer Networks", "OOP", "Data Structures", "Algorithms"],
  agenticAI: ["LangGraph", "ReAct Agents", "Multi-Agent Systems", "NLP", "Tavily Integration"]
};

export const internships = [
  
  {
    id: 1,
    company: "Hostiggo",
    role: "Web Developer Intern",
    duration: "Aug - 28 to Dec - 28",
    location: "",
    achievements: [
      "Improved website visibility by implementing SEO optimization techniques, including on-page SEO, metadata optimization, content optimization, and website performance improvements.",
      "Enhanced the website's UI/UX by redesigning key components, improving responsiveness, navigation, and overall user experience.",
      "Assisted in integrating payment gateway services by evaluating suitable payment providers and supporting the implementation of a secure and seamless payment workflow.",
      "Collaborated with the development team to optimize frontend functionality, resolve UI issues, and improve overall website performance."
    ],
    techStack: [],
    logo: "",
    link: ""
  },
  {
    id: 2,
    company: "Gaze Estimation for Smart Glasses",
    role:"",
    duration: "Present",
    location: "",
    achievements: [
      "Built a two-stage gaze estimation pipeline: object detection for pupil/iris localization, followed by regression models (Linear, MLP, CNN) for gaze mapping.",
      "Optimized model to 2.35 MiB weights / 63.28 KiB activation size, benchmarked at 7.407ms inference on reference hardware; deployed on Raspberry Pi 4 for real-time inference."
    ],
    techStack: [],
    logo: "",
    link: ""
  }
];

export const projects = [
  {
    id: 1,
    title: "NEXUSCART AI",
    description: "A dual-sided Agentic Commerce Gateway bridging intent-driven shoppers and retail merchants via natural language processing and deterministic financial math. Features zero-trust Human-in-the-Loop (HITL) spend limits, margin-aware upselling, and autonomous cross-platform fallback for out-of-stock inventory.",
    keyFeatures: ["INTENT PARSER", "QUICK-COMMERCE FALLBACK", "DYNAMIC GUARDRAILS", "MERCHANT DASHBOARD"],
    techStack: ["LangGraph", "Groq (Llama 3.3)", "FastAPI", "Next.js", "MongoDB", "Razorpay API"],
    liveDemoUrl: "",
    liveDemoAction: "Demo Video Uploading Soon!",
    githubUrl: "https://github.com/itsadk1006/NexusCartAI",
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    category: "FULL STACK AI"
  },
  {
    id: 2,
    title: "UNIVERSITY ERP SYSTEM",
    description: "A comprehensive Enterprise Resource Planning (ERP) desktop application designed to streamline university administration. It provides secure, role-based access for managing student records, course enrollments, faculty scheduling, and academic databases.",
    keyFeatures: ["STUDENT MANAGEMENT", "COURSE ENROLLMENT", "FACULTY DASHBOARD", "SECURE DATABASE"],
    techStack: ["Java", "Java Swing", "JDBC", "SQL"],
    liveDemoUrl: "https://drive.google.com/file/d/1B96blJd2PoqeBr0cLIw8-nAqcSmLchhh/view?usp=drive_link",
    githubUrl: "https://github.com/CosmicCoder1006/AP_GRP_PROJECT",
    featuredImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    category: "FULL STACK JAVA"
  },
  {
    id: 3,
    title: "DIGIREPORT",
    description: "An AI-assisted medical record platform designed to help doctors retrieve patient history, analyze previous treatments, and generate structured consultation reports through intelligent workflows.",
    keyFeatures: ["MEDICAL HISTORY", "AI AGENTS", "REPORT GENERATION"],
    techStack: ["React", "FastAPI", "PostgreSQL", "LangGraph", "OpenAI"],
    liveDemoUrl: "",
    liveDemoAction: "Project in Development Phase.",
    githubUrl: "",
    githubAction: "Project in Development Phase.",
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    category: "FULL STACK + AGENTIC AI"
  }
];

export const achievements = [
  "Top 5 in Hack4Health 2025.",
  "Achieved Knight status (1850+ rating) on LeetCode.",
];