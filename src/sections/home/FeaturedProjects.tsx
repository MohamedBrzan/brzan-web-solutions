import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/services/projectService";

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects();

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
