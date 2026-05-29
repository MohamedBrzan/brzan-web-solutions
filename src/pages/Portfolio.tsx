import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ProjectCard, { Project } from "@/components/ProjectCard";
import useScrollReveal from "@/hooks/useScrollReveal";
import { getAllProjects, getProjectsByCategory } from "@/services/projectService";

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(getAllProjects());
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = useMemo(() => [
    "All",
    ...Array.from(new Set(getAllProjects().map((project) => project.category))),
  ], []);

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    setFilteredProjects(getProjectsByCategory(category));
  };

  useScrollReveal();

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={activeFilter}>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="card-enter"
                style={{ animationDelay: `${index * 80}ms` }}
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
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
