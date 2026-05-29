import { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: "1",
    title: "Zoom Booking Clone – AI-Powered Scheduling Web App",
    description:
      "An advanced Zoom-inspired scheduling web application built for seamless client-meeting management. This platform allows users to schedule 1:1 meetings with precise control over duration, availability, and meeting types.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "GetStream",
      "shadcn",
      "Tailwind CSS",
    ],
    image:
      "https://github.com/adrianhajdin/zoom-clone/assets/67959015/f09a8421-67d3-45ce-b9bc-a791cdc2774b",
    liveUrl: "https://yoom-today.vercel.app",
    githubUrl: "https://github.com/MohamedBrzan/video_chat_app",
    category: "Web Application",
  },
  {
    id: "2",
    title: "HP Tech – Enterprise Technology & IT Solutions Provider",
    description:
      "HP Tech is a modern B2B website crafted to showcase the company's enterprise-grade IT solutions, including infrastructure services, managed support, and consulting. Designed with a focus on clarity, trust, and professionalism, the site reflects HP Tech's commitment to solving complex technical challenges for modern businesses.",
    technologies: [
      "MUI",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Redux",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
    image: "/assets/images/hp-tech.png",
    liveUrl: "https://hp-tech.com/",
    githubUrl: "https://github.com/MohamedBrzan/high-point-frontend",
    category: "Web Application",
  },
  {
    id: "3",
    title: "HippoApp – AI-Powered Content Scheduling & Publishing Platform",
    description:
      "HippoApp is a sleek, AI-enhanced web application designed for creators, marketers, and small businesses to plan, generate, and publish content efficiently across multiple channels. Built with Next.js, TypeScript, and Tailwind CSS, it delivers both performance and productivity.",
    technologies: [
      "Shadcn-ui",
      "MongoDB",
      "Express.js",
      "Node.js",
      "tRPC",
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
    image:
      "https://raw.githubusercontent.com/joschan21/digitalhippo/refs/heads/master/public/thumbnail.jpg",
    githubUrl: "https://github.com/MohamedBrzan/Hippo_Digital_App",
    category: "Web Application",
  },
  {
    id: "4",
    title: "Headless CMS Landing Page – Powered by Prismic & Next.js",
    description:
      "A performant, SEO-optimized landing page powered by Prismic CMS, designed for dynamic content management without code changes. Built with a modern tech stack including Next.js, TypeScript, and Tailwind CSS, this project enables marketing and product teams to update landing page content effortlessly.",
    technologies: [
      "GSAP",
      "Prismic CMS",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "Sass",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    image: "/assets/images/glisten.png",
    liveUrl: "https://prismic-lp.vercel.app/",
    githubUrl: "https://github.com/MohamedBrzan/prismic_LP",
    category: "Web Application",
  },
  {
    id: "5",
    title: "FaceX – LinkedIn-Inspired Professional Networking Platform (Clone)",
    description:
      "FaceX is a modern, full-stack LinkedIn clone built to replicate key features of the world's leading professional networking platform. Designed to demonstrate expertise in complex UI design, authentication systems, real-time updates, and scalable backend architecture.",
    technologies: [
      "MUI",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Redux",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
    image: "/assets/images/face_x.webp",
    liveUrl: "https://facex-front.onrender.com",
    comingSoon: true,
    githubUrl: "https://github.com/MohamedBrzan/FaceX_Frontend",
    category: "Web Application",
  },
  {
    id: "6",
    title: "Flourish – Elegant eCommerce Template",
    description:
      "A sophisticated and responsive eCommerce HTML5 template crafted to elevate fashion, furniture, and lifestyle brands with style and functionality. Designed with a clean, product-centric layout, Flourish blends elegance and usability to create an immersive shopping experience.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "SEO-friendly markup",
      "JavaScript",
    ],
    image: "https://portfolio-becv.onrender.com/frontend_2.webp",
    liveUrl:
      "https://mohamedbrzan.github.io/Flourish-eCommerce-Template/index-2.html",
    githubUrl: "https://github.com/MohamedBrzan/Flourish-eCommerce-Template",
    category: "Web Application",
  },
  {
    id: "7",
    title: "Furnitica – Minimalist Furniture eCommerce Template",
    description:
      "Furnitica is a refined, minimalist HTML5 template tailored for furniture, interior design, and home decor stores. Built with clean aesthetics and a focus on visual storytelling, it combines breathtaking product imagery with a straightforward shopping experience to inspire and convert customers.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "SEO-friendly markup",
      "JavaScript",
    ],
    image: "https://portfolio-becv.onrender.com/frontend_3.webp",
    liveUrl:
      "https://mohamedbrzan.github.io/Furnitica-Minimalist-Furniture/index-2.html",
    githubUrl: "https://github.com/MohamedBrzan/Furnitica-Minimalist-Furniture",
    category: "Web Application",
  },
  {
    id: "8",
    title: "Ruby – Jewelry Store eCommerce Template",
    description:
      "An elegant Bootstrap 4-based HTML5 template designed specifically for jewelry and accessory stores. Ruby provides a premium aesthetic with full-featured eCommerce functionality, ideal for showcasing fine jewelry in a high-end online environment.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "SEO-friendly markup",
      "JavaScript",
    ],
    image:
      "https://superbthemes.com/wp-content/uploads/2024/10/ruby-ecommerce.png",
    liveUrl: "https://mohamedbrzan.github.io/Ruby-Jewelry-Store-eCommerce/",
    githubUrl: "https://github.com/MohamedBrzan/Ruby-Jewelry-Store-eCommerce",
    category: "Web Application",
  },
  {
    id: "9",
    title: "Mail-Service – Lightweight Email Sending API",
    description:
      "Mail-Service is a scalable production-ready NestJS mail server that receives contact form submissions and forwards them via SMTP. Optimized for deployment on Railway.com.",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Nodemailer",
      "Pnpm",
      "Docker",
      "Git",
      "Railway Deployment",
    ],
    image:
      "https://solutionsuggest.com/wp-content/uploads/2021/11/Top-10-Free-Image-Generation-APIs.jpg",
    githubUrl: "https://github.com/MohamedBrzan/Mail-Service",
    category: "API",
  },
  {
    id: "10",
    title: "SaaS Platform – Server-Side Backend",
    description:
      "SaaS Platform Server-Side is the foundational backend architecture designed to power full-cycle SaaS applications. Built with Node.js/TypeScript (or specify your stack), it provides a robust, secure, and scalable infrastructure for multi-tenant SaaS products.",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Pnpm",
      "Docker",
      "Git",
      "Redis",
      "Stripe",
      "Kafka",
    ],
    image: "/assets/images/saas.jpg",
    comingSoon: true,
    githubUrl: "https://github.com/MohamedBrzan/SaaS-Platform-Server-Side",
    category: "API",
  },
  {
    id: "11",
    title: "PostgreSQL APIs – CRUD & Reporting Backend",
    description:
      "PostgreSQL_APIs is a scalable, TypeScript-based backend built on Node.js and PostgreSQL, designed to expose efficient RESTful APIs for data-driven applications. This project delivers a robust foundation for managing, querying, and reporting on relational datasets with ease.",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Pnpm",
      "Git",
    ],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.n9GPZUpOsobk127-i8EdwgHaD4%3Fpid%3DApi&f=1&ipt=b1340ff601c1bddd55bb5b70fe8a21a1bff2a948e7d8811c408115d8962b112f&ipo=images",
    githubUrl: "https://github.com/MohamedBrzan/Postgresql_APIS",
    category: "API",
  },
  {
    id: "12",
    title: "ApexAPI – Salesforce Metadata & Callout Utility",
    description:
      "ApexAPI is a lightweight Apex-based tool designed to streamline interaction with Salesforce's ConnectAPI, simplifying the retrieval of metadata and repository contents programmatically.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Docker", "Pnpm", "Git"],
    image: "/assets/images/ApexAPI.jpg",
    githubUrl: "https://github.com/MohamedBrzan/ApexAPI",
    category: "API",
  },
  {
    id: "13",
    title: "FaceX Backend — LinkedIn-Style Social Network API",
    description:
      "FaceX is a fully-featured backend application built to power a modern, scalable LinkedIn-style professional networking platform. Designed with a microservice-ready architecture, it supports robust user authentication, connections, posts, and interaction features required for social platforms.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "Passport-local",
      "Passport-google-oauth20",
      "Passport",
      "CORS",
      "Pnpm",
      "Git",
    ],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.9R8tJalQmA66XelReLqUjwHaEt%3Fpid%3DApi&f=1&ipt=962309f6a66afd6a0e57448398b860f2e2bffebc9e7c812faf7ce34a3f01c309&ipo=images",
    githubUrl: "https://github.com/MohamedBrzan/facex_back",
    category: "API",
  },
  {
    id: "14",
    title: "MASKIN – Full-Stack Real Estate eCommerce Platform",
    description:
      "MASKIN is a comprehensive full-stack application designed to streamline real estate listings, property management, and client engagement in a scalable web environment. Developed with a microservices architecture, this platform delivers a modern, secure, and user-centric experience for both property owners and buyers.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google-auth-library",
      "CORS",
      "Nodemailer",
      "Redux",
      "Redux/Toolkit",
      "React.js",
      "Webpack",
      "Recharts",
      "slick-carousel",
      "Axios",
      "Git",
    ],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FOIP.rH8Ek7p1vjQ3Yl4kpJ5AtQHaE8%3Fr%3D0%26cb%3Dthvnextc1%26pid%3DApi&f=1&ipt=4d6e8d8929a395bedb0c5bcca11b9ac6b75a67d3137ac914f3c4ee76953cf8e9&ipo=images",
    githubUrl: "https://github.com/MohamedBrzan/MASKIN",
    category: "Web Application",
  },
  {
    id: "15",
    title: "GraphQL TS E-Commerce Backend",
    description:
      "A robust and scalable backend API built with TypeScript and GraphQL, designed to power modern e-commerce storefronts. This project provides a flexible, type-safe, and extensible GraphQL server optimized for product catalogs, user management, and order processing.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "GraphQL",
      "@apollo/server",
      "CORS",
      "i18next",
      "Git",
    ],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.-Cpq7sq_OCkirq8gKOlhDAHaD-%3Fpid%3DApi&f=1&ipt=52aa3e94d660026e3e8e3103eee920c31bfebbd1d9acd48fc8e8ecdf4980a094&ipo=images",
    githubUrl: "https://github.com/MohamedBrzan/Graphql_TS_E-Commerce_Backend",
    category: "API",
  },
];

export const getAllProjects = (): Project[] => projects;

export const getFeaturedProjects = (): Project[] => {
  const featuredIds = ["1", "4", "9"];
  return projects.filter((p) => featuredIds.includes(p.id));
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};
