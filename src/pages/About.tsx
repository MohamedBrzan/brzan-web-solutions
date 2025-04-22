
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TestimonialCard, { Testimonial } from '@/components/TestimonialCard';

const About = () => {
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
    {
      id: '3',
      name: 'Emily Chen',
      role: 'Product Manager',
      company: 'InnoTech Solutions',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      content: 'Mohamed is a highly skilled developer who consistently delivered high-quality work on time. His ability to translate business requirements into technical solutions was invaluable to our project.',
    },
  ];

  // Sample skills
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'Laravel', 'ASP.NET Core'] },
    { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions'] },
    { category: 'Tools & Methods', items: ['Git', 'Agile/Scrum', 'TDD', 'REST', 'GraphQL'] },
  ];

  // Sample education
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      location: 'San Francisco, CA',
      period: '2018 - 2020',
      description: 'Specialized in Software Engineering with focus on distributed systems and cloud computing.',
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'National University',
      location: 'Boston, MA',
      period: '2014 - 2018',
      description: 'Graduated with honors, with a minor in Mathematics.',
    },
  ];

  // Sample work experience
  const experience = [
    {
      position: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Lead developer for multiple client projects. Designed and implemented scalable web applications using React, Node.js, and PostgreSQL. Mentored junior developers and conducted code reviews.',
    },
    {
      position: 'Full-Stack Developer',
      company: 'WebApp Innovations',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained various web applications for clients in finance and healthcare. Implemented responsive UI designs and RESTful APIs.',
    },
    {
      position: 'Software Engineering Intern',
      company: 'Global Tech',
      location: 'Seattle, WA',
      period: 'Summer 2019',
      description: 'Contributed to the development of internal tools using Vue.js and Django. Participated in agile development processes.',
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
      {/* Header Section */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground">
                Full-Stack Engineer with a passion for building innovative web applications.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-up">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Mohamed Brzan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <h2 className="section-heading">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Mohamed Brzan, a Full-Stack Engineer with over 3 years of experience in designing and developing 
                  web applications. My journey in software development began during my university years, where I 
                  discovered my passion for creating digital solutions that solve real-world problems.
                </p>
                <p>
                  After completing my Master's degree in Computer Science, I worked with various companies ranging 
                  from startups to established enterprises, which has given me a diverse perspective on software 
                  development practices and methodologies.
                </p>
                <p>
                  I specialize in building scalable web applications using modern technologies and frameworks. 
                  My approach to development is focused on creating clean, maintainable code that delivers 
                  exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge through technical articles and tutorials.
                </p>
              </div>
            </div>

            <div className="reveal">
              <h2 className="section-heading">My Skills</h2>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-2">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-secondary/30 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <h2 className="section-heading mb-12 mx-auto text-center">Work Experience</h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {experience.map((job, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border reveal">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.position}</h3>
                    <p className="text-primary">{job.company} | {job.location}</p>
                  </div>
                  <span className="text-muted-foreground mt-2 md:mt-0">{job.period}</span>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-heading mb-12 mx-auto text-center">Education</h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border reveal">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary">{edu.institution} | {edu.location}</p>
                  </div>
                  <span className="text-muted-foreground mt-2 md:mt-0">{edu.period}</span>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <h2 className="section-heading mb-12 mx-auto text-center">What Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="bg-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto reveal">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Interested in collaborating on a project or hiring me for a freelance gig?
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

export default About;
