import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard, { Project } from "@/components/ProjectCard";

const FeaturedProjects = () => {
  // Sample data for featured projects
  const featuredProjects: Project[] = [
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
