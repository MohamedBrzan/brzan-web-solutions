import React, { useState, useEffect } from "react";
import ProjectCard, { Project } from "@/components/ProjectCard";

// Sample project data
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
      "getstream",
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
    title: "Headless CMS Landing Page – Powered by Prismic & Next.js",
    description:
      "A performant, SEO-optimized landing page powered by Prismic CMS, designed for dynamic content management without code changes. Built with a modern tech stack including Next.js, TypeScript, and Tailwind CSS, this project enables marketing and product teams to update landing page content effortlessly.",
    technologies: [
      "gsap",
      "prismic CMS",
      "typescript",
      "Next.js",
      "Javascript",
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
    id: "3",
    title: "HippoApp – AI-Powered Content Scheduling & Publishing Platform",
    description:
      "HippoApp is a sleek, AI-enhanced web application designed for creators, marketers, and small businesses to plan, generate, and publish content efficiently across multiple channels. Built with Next.js, TypeScript, and Tailwind CSS, it delivers both performance and productivity.",
    technologies: [
      "Shadcn-ui",
      "Mongodb",
      "Express.js",
      "Nodejs",
      "tRPC",
      "Next.js",
      "React.js",
      "typescript",
      "Javascript",
      "Tailwind CSS",
    ],
    image:
      "https://raw.githubusercontent.com/joschan21/digitalhippo/refs/heads/master/public/thumbnail.jpg",
    // liveUrl: "https://hippoapp.onrender.com/",
    githubUrl: "https://github.com/MohamedBrzan/Hippo_Digital_App",
    category: "Web Application",
  },
  {
    id: "4",
    title: "HP Tech – Enterprise Technology & IT Solutions Provider",
    description:
      "HP Tech is a modern B2B website crafted to showcase the company's enterprise-grade IT solutions, including infrastructure services, managed support, and consulting. Designed with a focus on clarity, trust, and professionalism, the site reflects HP Tech’s commitment to solving complex technical challenges for modern businesses.",
    technologies: [
      "MUI",
      "Mongodb",
      "Express.js",
      "Nodejs",
      "Redux",
      "React.js",
      "typescript",
      "Javascript",
      "Tailwind CSS",
    ],
    image: "/assets/images/hp-tech.png",
    liveUrl: "https://hp-tech.com/",
    githubUrl: "https://github.com/MohamedBrzan/high-point-frontend",
    category: "Web Application",
  },
  {
    id: "5",
    title: "FaceX – LinkedIn-Inspired Professional Networking Platform (Clone)",
    description:
      "FaceX is a modern, full-stack LinkedIn clone built to replicate key features of the world’s leading professional networking platform. Designed to demonstrate expertise in complex UI design, authentication systems, real-time updates, and scalable backend architecture.",
    technologies: [
      "MUI",
      "Mongodb",
      "Express.js",
      "Nodejs",
      "Redux",
      "React.js",
      "typescript",
      "Javascript",
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
      "SEO‑friendly markup",
      "Javascript",
    ],
    image: "https://portfolio-becv.onrender.com/frontend_2.webp",
    liveUrl:
      "https://mohamedbrzan.github.io/Flourish-eCommerce-Template/index-2.html",
    githubUrl: "https://github.com/MohamedBrzan/Flourish-eCommerce-Template",
    category: "Web Application",
  },
  {
    id: "7",
    title: "🪑 Furnitica – Minimalist Furniture eCommerce Template",
    description:
      "Furnitica is a refined, minimalist HTML5 template tailored for furniture, interior design, and home decor stores. Built with clean aesthetics and a focus on visual storytelling, it combines breathtaking product imagery with a straightforward shopping experience to inspire and convert customers.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "SEO‑friendly markup",
      "Javascript",
    ],
    image: "https://portfolio-becv.onrender.com/frontend_3.webp",
    liveUrl:
      "https://mohamedbrzan.github.io/Furnitica-Minimalist-Furniture/index-2.html",
    githubUrl: "https://github.com/MohamedBrzan/Furnitica-Minimalist-Furniture",
    category: "Web Application",
  },
  {
    id: "8",
    title: "💎 Ruby – Jewelry Store eCommerce Template",
    description:
      "An elegant Bootstrap 4-based HTML5 template designed specifically for jewelry and accessory stores. Ruby provides a premium aesthetic with full-featured eCommerce functionality, ideal for showcasing fine jewelry in a high-end online environment.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "SEO‑friendly markup",
      "Javascript",
    ],
    image:
      "https://superbthemes.com/wp-content/uploads/2024/10/ruby-ecommerce.png",
    liveUrl: "https://mohamedbrzan.github.io/Ruby-Jewelry-Store-eCommerce/",
    githubUrl: "https://github.com/MohamedBrzan/Ruby-Jewelry-Store-eCommerce",
    category: "Web Application",
  },
  {
    id: "9",
    title: "📬 Mail-Service – Lightweight Email Sending API",
    description:
      "Mail-Service is a scalable production-ready NestJS mail server that receives contact form submissions and forwards them via SMTP. Optimized for deployment on Railway.com.",
    technologies: [
      "Nodejs",
      "Nestjs",
      "Typescript",
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
    title: "🛠️ SaaS Platform – Server‑Side Backend",
    description:
      "SaaS Platform Server-Side is the foundational backend architecture designed to power full-cycle SaaS applications. Built with Node.js/TypeScript (or specify your stack), it provides a robust, secure, and scalable infrastructure for multi-tenant SaaS products.",
    technologies: [
      "Nodejs",
      "Nestjs",
      "Typescript",
      "MongoDB",
      "Pnpm",
      "Docker",
      "Git",
      "Redis",
      "Strip",
      "Kafka",
    ],
    image: "/assets/images/saas.jpg",
    comingSoon: true,
    githubUrl: "https://github.com/MohamedBrzan/SaaS-Platform-Server-Side",
    category: "API",
  },
  {
    id: "11",
    title: "🗄️ PostgreSQL APIs – CRUD & Reporting Backend",
    description:
      "PostgreSQL_APIs is a scalable, TypeScript-based backend built on Node.js and PostgreSQL, designed to expose efficient RESTful APIs for data-driven applications. This project delivers a robust foundation for managing, querying, and reporting on relational datasets with ease.",
    technologies: [
      "Nodejs",
      "Nestjs",
      "Typescript",
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
    title: "🚀 ApexAPI – Salesforce Metadata & Callout Utility",
    description:
      "ApexAPI is a lightweight Apex-based tool designed to streamline interaction with Salesforce’s ConnectAPI, simplifying the retrieval of metadata and repository contents programmatically.",
    technologies: ["Nodejs", "Express.js", "MongoDB", "Docker", "Pnpm", "Git"],
    image: "/assets/images/ApexAPI.jpg",
    githubUrl: "https://github.com/MohamedBrzan/Postgresql_APIS",
    category: "API",
  },
  {
    id: "13",
    title: "🧠 FaceX Backend — LinkedIn-Style Social Network API",
    description:
      "FaceX is a fully-featured backend application built to power a modern, scalable LinkedIn-style professional networking platform. Designed with a microservice-ready architecture, it supports robust user authentication, connections, posts, and interaction features required for social platforms.",
    technologies: [
      "Nodejs",
      "Express.js",
      "MongoDB",
      "JWT",
      "stripe",
      "passport-local",
      "passport-google-oauth20",
      "passport",
      "cors",
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
    title: "🏠 MASKIN – Full-Stack Real Estate eCommerce Platform",
    description:
      "MASKIN is a comprehensive full-stack application designed to streamline real estate listings, property management, and client engagement in a scalable web environment. Developed with a microservices architecture, this platform delivers a modern, secure, and user-centric experience for both property owners and buyers.",
    technologies: [
      "Nodejs",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google-auth-library",
      "Cors",
      "Nodemailer",
      "ٌRedux",
      "ٌRedux/Toolkit",
      "ٌReact.js",
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
    title: "🛍️ GraphQL TS E-Commerce Backend",
    description:
      "A robust and scalable backend API built with TypeScript and GraphQL, designed to power modern e-commerce storefronts. This project provides a flexible, type-safe, and extensible GraphQL server optimized for product catalogs, user management, and order processing.",
    technologies: [
      "Nodejs",
      "Express.js",
      "MongoDB",
      "JWT",
      "GraphQL",
      "@apollo/server",
      "Cors",
      "i18next",
      "Git",
    ],
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.-Cpq7sq_OCkirq8gKOlhDAHaD-%3Fpid%3DApi&f=1&ipt=52aa3e94d660026e3e8e3103eee920c31bfebbd1d9acd48fc8e8ecdf4980a094&ipo=images",
    githubUrl: "https://github.com/MohamedBrzan/Graphql_TS_E-Commerce_Backend",
    category: "API",
  },
];

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Extract unique categories from projects
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  useEffect(() => {
    // Add scroll reveal animation
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check

    return () => window.removeEventListener("scroll", reveal);
  }, [filteredProjects]);

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            My Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            A showcase of my projects across different technologies and problem
            domains.
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category
                    ? "bg-primary text-white"
                    : "bg-card text-foreground hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                className={`reveal`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/30">
        <div className="container text-center reveal">
          <h2 className="text-3xl font-bold mb-6">Want to See More?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Check out my GitHub profile for more projects and contributions or
            contact me to discuss how I can help with your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/mohamedbrzan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit My GitHub
            </a>
            <a href="/contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
