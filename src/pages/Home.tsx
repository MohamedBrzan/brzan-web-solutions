
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import ProjectCard, { Project } from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import BlogPostCard, { BlogPost } from '@/components/BlogPostCard';
import TestimonialCard, { Testimonial } from '@/components/TestimonialCard';

const Home = () => {
  // Sample data for featured projects
  const featuredProjects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with product management, cart functionality, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/mohamedbrzan/ecommerce-platform',
      category: 'Web Application',
    },
    {
      id: '2',
      title: 'Task Management System',
      description: 'A task management application with real-time updates, team collaboration, and performance analytics.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/mohamedbrzan/task-manager',
      category: 'Web Application',
    },
    {
      id: '3',
      title: 'Weather Forecast API',
      description: 'A RESTful API providing comprehensive weather forecasts with caching and geolocation features.',
      technologies: ['Express.js', 'Redis', 'OpenWeatherMap API'],
      image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/mohamedbrzan/weather-api',
      category: 'API',
    },
  ];

  // Sample data for blog posts
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the key architectural patterns and best practices for building React applications that scale.',
      date: 'April 12, 2023',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'building-scalable-react-applications',
    },
    {
      id: '2',
      title: 'Optimizing MongoDB for Performance',
      excerpt: 'Discover techniques to enhance MongoDB performance through indexing, sharding, and query optimization.',
      date: 'March 5, 2023',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'optimizing-mongodb-for-performance',
    },
  ];

  // Sample testimonials
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechInnovate',
      avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
      content: 'Mohamed delivered an exceptional web application that exceeded our expectations. His technical expertise and attention to detail made him a pleasure to work with.',
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      role: 'Founder',
      company: 'StartUp Labs',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'Working with Mohamed was a seamless experience. He understood our requirements perfectly and delivered a solution that has greatly improved our business operations.',
    },
  ];

  // Add scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 flex items-center min-h-[90vh] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Full-Stack Engineer & Software Developer
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-md">
                I'm Mohamed Brzan, a Full-Stack Engineer with over 3 years of experience in building scalable web applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="btn btn-primary">
                  View Portfolio
                </Link>
                <Link to="/booking" className="btn btn-outline">
                  Book a Meeting
                </Link>
              </div>
              <div className="mt-8 flex space-x-6">
                <a
                  href="https://github.com/mohamedbrzan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/mohamedbrzan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:mohamed.brzan@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                  <img
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Mohamed Brzan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border border-border">
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              I offer a range of services to help you build and grow your digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Custom Web Development"
              description="Tailor-made web applications designed for your specific business needs, built with modern technologies and best practices."
              icon={<Code size={32} />}
              className="reveal"
            />
            <ServiceCard
              title="Software Consulting"
              description="Strategic technical advice to help you make informed decisions about architecture, technology stack, and development practices."
              icon={<ExternalLink size={32} />}
              className="reveal"
            />
            <ServiceCard
              title="Technical Mentoring"
              description="Personalized coaching and guidance for developers looking to improve their skills and advance their careers."
              icon={<ArrowRight size={32} />}
              className="reveal"
            />
          </div>

          <div className="mt-12 text-center reveal">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 reveal">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground">
                Take a look at some of my recent projects.
              </p>
            </div>
            <Link to="/portfolio" className="mt-4 md:mt-0 text-primary font-medium group flex items-center hover:underline">
              View All Projects
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              What my clients have to say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 reveal">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
              <p className="text-muted-foreground">
                Technical insights and tutorials from my blog.
              </p>
            </div>
            <Link to="/blog" className="mt-4 md:mt-0 text-primary font-medium group flex items-center hover:underline">
              View All Articles
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let's collaborate to bring your ideas to life and create exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking" className="btn btn-primary">
                Book a Meeting
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
