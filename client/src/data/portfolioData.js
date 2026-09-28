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
    email: "mailto:istadk1006@gamil.com"
  },
  resumeLink: "client\src\data\Resume.pdf"
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
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with a user-friendly interface and secure payment gateway integration.",
    keyFeatures: ["User authentication", "Product catalog", "Shopping cart", "Stripe payment"],
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featuredImage: "https://images.unsplash.com/photo-1557821552-1710515302a9?auto=format&fit=crop&q=80&w=800",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Distributed File System",
    description: "A custom distributed file system designed for high fault tolerance and data replication across multiple nodes.",
    keyFeatures: ["Data replication", "Fault tolerance", "Concurrency control", "Gossip protocol"],
    techStack: ["C++", "gRPC", "Linux", "Docker"],
    liveDemoUrl: "",
    githubUrl: "https://github.com",
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    category: "Systems/AI"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A Kanban-style task management application to boost productivity with drag-and-drop features.",
    keyFeatures: ["Drag-and-drop", "Real-time updates", "Team collaboration", "Analytics dashboard"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    liveDemoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featuredImage: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?auto=format&fit=crop&q=80&w=800",
    category: "Full Stack"
  }
];

export const achievements = [
  "Top 5 in Hack4Health 2025.",
  "Achieved Knight status (1850+ rating) on LeetCode.",
];