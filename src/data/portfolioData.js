// ============================================================
// portfolioData.js — Centralized configuration for Md Yusuf's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Sahil Kalarkar",
  firstName: "Sahil",
  brandName: "Sahil Kalarkar",
  title: "Full Stack & MERN Developer",
  location: "Talasari, Palghar, India",
  phone: "+91 86987-04078",
  emails: {
    primary: "sahilkalarkar@gmail.com",
    secondary: "sahilkalarkar03@gmail.com",
  },
  summary:
    "Aspiring software engineer and motivated B.E. Computer Science student with solid skills in MERN, React, and Next. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: "/Md_Yusuf_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/SahilKalarkar",
  linkedin: "https://www.linkedin.com/in/sahil-kalarkar-b09b79233/",
  instagram: "https://www.instagram.com/sahil_kalarkar/",
};

export const heroContent = {
  greeting: "Hi, I'm Sahil 👋",
  titleHighlight: "Full Stack & MERN Developer",
  subtitle:
    "Engineer by craft, entrepreneur by vision. Building modern, fast, and responsive websites. Your vision, my code.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sahilkalarkar@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Sahil Kalarkar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/SAHIL_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sahil Kalarkar</span>, an aspiring software engineer based in Talasari, Palghar, India, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ["Java", "Spring Boot", "React.js", "Next.js", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C Language", level: 85 },
        { name: "Core Java", level: 90 },
        // { name: "Python", level: 75 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "Next.js", level: 92 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 80 },
      ]
    },
    // {
    //   title: "Backend",
    //   skills: [
    //     { name: "Spring Boot", level: 88 },
    //     { name: "FastAPI", level: 75 },
    //     { name: "REST APIs", level: 90 }
    //   ]
    // },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        // { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        // { name: "n8n", level: 82 },
        { name: "MongoDB Compass", level: 85 },
        // { name: "Antigravity", level: 80 },
        // { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        // { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic Reels",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "50+ Reels Created",
      icon: "🎥"
    },
    {
      title: "Travel Videos",
      description: "Immersive travel vlogs and aesthetic edits capturing cultures, landscapes, and visual rhythms.",
      stats: "15+ Countries/Cities",
      icon: "✈️"
    },
    {
      title: "Educational Reels",
      description: "Fast-paced tech tutorials and educational content designed to simplify coding and software engineering.",
      stats: "100k+ Views",
      icon: "🧠"
    },
    {
      title: "My Own Creative Edits",
      description: "Experimental transitions, 3D overlays, and trendsetting visual effects that push creative bounds.",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "National Service Scheme (NSS)",
    description: "Actively volunteered in three NSS camps, contributing to community service initiatives, social awareness programs, cleanliness drives, and teamwork-focused activities that promoted leadership and civic responsibility.",
    role: "Volunteer",
    badge: "3× Volunteer"
  },
  {
    title: "Electoral Literacy Club",
    description: "Coordinated voter awareness initiatives, organized educational activities on electoral rights and responsibilities, and promoted informed participation in the democratic process among students.",
    role: "Coordinator",
    badge: "Leadership"
  },
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Edgemine Technologies LLP",
    role: "Jr. Frontend Developer",
    duration: "July 2025 - February 2026",
    skills: ["Frontend Development", "Responsive Layouts", "API Integration", "Web Performance"],
    tech: ["React.js", "CSS3", "JavaScript", "Tailwind CSS"]
  },
  // {
  //   organization: "Canva",
  //   role: "Visual Content Creator & Designer",
  //   duration: "May 2024 - June 2024",
  //   skills: ["Visual Designing", "Poster Design", "Team Branding", "Asset Creation"],
  //   tech: ["Canva Pro", "Figma", "Canva Design Suite"]
  // },
  // {
  //   organization: "CollegeTips.in",
  //   role: "Web Development Intern",
  //   duration: "1 Month (Offline)",
  //   skills: ["Frontend Development", "Responsive Layouts", "API Testing", "Web Performance"],
  //   tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
  // }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "hospitalcare",
    number: "01",
    badge: null,
    title: "HospitalCare",
    description:
      "Built a Hospital Management System (HMS) real-time appointment booking for patients and powerful admin dashboard featuring doctor/department management,etc. Designed modern UI with React, Node.js, MySQL delivering seamless performance, scalability, and exceptional user experience.",
    techTags: [
      "React",
      "MySQL",
      "Node.js",
      "Express.js",
      "JWT",
    ],
    links: {
      github: "https://github.com/SahilKalarkar/hms",
      frontendDemo: "https://hms-eta-blush.vercel.app/",
    },
    isFlagship: true,
  },
  {
    id: "xyzit",
    number: "02",
    badge: null,
    title: "XYZ IT Solutions",
    description:
      "Developed a responsive website for XYZ IT Solutions to showcase company services, workflow, and team details. Designed a clean, modern UI focused on performance, usability, and seamless user experience.",
    techTags: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI"],
    links: {
      github: "https://github.com/SahilKalarkar/xyzit",
      frontendDemo: "https://xyzit.vercel.app/",
      // backendApi: "https://karigar-zny2.onrender.com",
    },
    isFlagship: false,
  },
  {
    id: "powerforge",
    number: "03",
    badge: null,
    title: "PowerForge - GYM Website",
    description:
      "Built comprehensive gym management platform with real-time member tracking, admin dashboard for CRUD operations on members/admins/trainers, etc. Designed modern responsive UI with Next.js (React), PHP/MySQL backend delivering seamless performance across devices.",
    techTags: ["Next.js", "Node.js", "Express.js", "MySQL"],
    links: {
      github: "https://github.com/SahilKalarkar/gym-management-system_v1",
      frontendDemo: "https://powerforgesm.vercel.app/",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "C Language",
      issuer: "Aim's Classes",
      icon: "⚙️",
    },
    {
      name: "Core Java",
      issuer: "Aim's Classes",
      icon: "☕",
    },
    {
      name: "Full Stack Web Development",
      issuer: "Apna College",
      icon: "",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/file/d/1ObdGWtVSx8SsfR4AcbCySSd9LFXcAs9f/view?usp=sharing",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "IES College of Technology (RGPV)",
  cgpa: "8.35",
  graduation: "2027",
  twelfth: "12th Science – 81%",
  tenth: "10th CBSE – 70%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "MERN · React · Next",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE · CGPA 6.65",
  copyright: `© ${new Date().getFullYear()} Sahil Kalarkar | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
