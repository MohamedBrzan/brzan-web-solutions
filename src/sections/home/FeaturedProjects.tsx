import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard, { Project } from "@/components/ProjectCard";

const FeaturedProjects = () => {
  // Sample data for featured projects
  const featuredProjects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with product management, cart functionality, and payment processing.",
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
        "A task management application with real-time updates, team collaboration, and performance analytics.",
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
        "A RESTful API providing comprehensive weather forecasts with caching and geolocation features.",
      technologies: ["Express.js", "Redis", "OpenWeatherMap API"],
      image:
        "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/mohamedbrzan/weather-api",
      category: "API",
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Take a look at some of my recent projects.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="mt-4 md:mt-0 text-primary font-medium group flex items-center hover:underline"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={`reveal`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
