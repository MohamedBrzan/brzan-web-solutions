import React, { useState, useEffect } from "react";
import ProjectCard, { Project } from "@/components/ProjectCard";

// Sample project data
const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with product management, cart functionality, and payment processing. Features include inventory management, user authentication, and administrative dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohamedbrzan/ecommerce-platform",
    category: "Web Application",
  },
  {
    id: "2",
    title: "Task Management System",
    description:
      "A task management application with real-time updates, team collaboration, and performance analytics. Includes features like task assignment, deadline tracking, and progress reporting.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohamedbrzan/task-manager",
    category: "Web Application",
  },
  {
    id: "3",
    title: "Weather Forecast API",
    description:
      "A RESTful API providing comprehensive weather forecasts with caching and geolocation features. The API includes endpoints for current conditions, 5-day forecasts, and historical data.",
    technologies: ["Express.js", "Redis", "OpenWeatherMap API"],
    image:
      "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/mohamedbrzan/weather-api",
    category: "API",
  },
  {
    id: "4",
    title: "Personal Finance Tracker",
    description:
      "A financial management application that helps users track expenses, set budgets, and visualize spending patterns. Features include expense categorization, budget alerts, and financial reports.",
    technologies: ["React", "Redux", "Express.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohamedbrzan/finance-tracker",
    category: "Web Application",
  },
  {
    id: "5",
    title: "Social Media Dashboard",
    description:
      "A social media analytics dashboard that aggregates metrics from multiple platforms. It provides insights on engagement, audience growth, and content performance.",
    technologies: ["Angular", "D3.js", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohamedbrzan/social-dashboard",
    category: "Web Application",
  },
  {
    id: "6",
    title: "Content Management System",
    description:
      "A headless CMS that enables content creators to manage digital content across multiple platforms. Features include content modeling, versioning, and API access.",
    technologies: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohamedbrzan/headless-cms",
    category: "Web Application",
  },
  {
    id: "7",
    title: "Real-time Chat Application",
    description:
      "A messaging platform with features like group chats, direct messaging, and file sharing. The application uses WebSockets for real-time communication.",
    technologies: ["React", "Socket.io", "Express.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mohamedbrzan/chat-app",
    category: "Web Application",
  },
  {
    id: "8",
    title: "Inventory Management API",
    description:
      "A RESTful API designed for inventory management with features like stock tracking, order management, and reporting. It includes authentication and rate limiting.",
    technologies: ["Node.js", "Express.js", "MySQL", "Docker"],
    image:
      "https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/mohamedbrzan/inventory-api",
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
