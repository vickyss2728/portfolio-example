// src/data.ts
import type { Project, Experience, PersonalData, Venture } from './types/index';

export const personalData: PersonalData = {
  name: "Vigneshwaran P",
  role: "Junior Web Developer | UI/UX Designer",
  email: "vigneshwaranss2827@gmail.com",
  phone: "+91 9080743346",
  linkedin: "linkedin.com/in/vignesh-waran",
  location: "Madurai, India", // [cite: 53]
  summary: "Junior Web Developer with 1+ year of experience in MERN Stack, React.js, and Angular. Proven ability to build responsive web applications and design intuitive user interfaces." // [cite: 5, 6]
};

export const experience: Experience[] = [
  {
    id: 1,
    role: "MERN Stack Intern",
    company: "NoviTech R&D Private Limited",
    date: "Nov 2025 - Feb 2026",
    desc: "Gained practical exposure to MongoDB, Express, React, and Node.js. Developed full-stack applications and worked on API integration." // [cite: 29, 30, 31]
  },
  {
    id: 2,
    role: "Junior Web Developer / Image Auditor",
    company: "Chintam Technology, Madurai",
    date: "Oct 2024 - Nov 2025",
    desc: "Involved in web development, UI design, and manual testing. Fixed UI functional issues and ensured timely resolution of defects." // [cite: 20, 21, 23]
  },
  {
    id: 3,
    role: "Image Auditor / Tester",
    company: "SBL Knowledge Services Limited",
    date: "Nov 2022 - Dec 2023",
    desc: "Conducted image auditing and quality validation as per defined guidelines." // [cite: 25, 26, 27]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Fruits Shop E-Commerce",
    category: "Full Stack",
    description: "Responsive e-commerce website with organized product categories and interactive UI components.", // [cite: 39, 40]
    tech: ["React.js", "Node.js", "CSS3"]
  },
  {
    id: 2,
    title: "Land Auction Web App",
    category: "Web App",
    description: "Platform for real-time auction bidding with intuitive navigation and glassmorphism style.", // [cite: 42, 44]
    tech: ["MERN Stack", "Socket.io"]
  },
  {
    id: 3,
    title: "Navio Website",
    category: "CMS",
    description: "Customized WordPress website with SEO optimization and performance improvements.", // [cite: 46, 47]
    tech: ["WordPress", "SEO", "PHP"]
  }
];

export const ventures: Venture[] = [
    {
        id: 1,
        name: "Cooking Ponnu",
        role: "Content Creator",
        description: "My YouTube channel dedicated to culinary arts. I manage content strategy, video editing, and community engagement.",
        icon: "bi-youtube",
        color: "text-danger",
        link: "https://www.youtube.com/@cookingponnu"
    },
    {
        id: 2,
        name: "Sandy Boutique",
        role: "Founder",
        description: "Founder of a boutique business. I handle product curation, customer relations, and brand management.",
        icon: "bi-bag-heart-fill",
        color: "text-primary",
        link: "#"
    }
];