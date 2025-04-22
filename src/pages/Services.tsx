
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, ExternalLink, ArrowRight, Layout, Database, LineChart, FileText, BookOpen, Globe } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
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
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">My Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up">
            I offer a comprehensive range of services to help you build, optimize, and maintain your digital products.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Custom Web Development"
              description="Tailor-made web applications designed for your specific business needs, built with modern technologies and best practices."
              icon={<Code size={32} />}
              className="reveal"
            />
            <ServiceCard
              title="Frontend Development"
              description="Responsive, accessible, and intuitive user interfaces that provide exceptional user experiences across all devices."
              icon={<Layout size={32} />}
              className="reveal"
            />
            <ServiceCard
              title="Backend Development"
              description="Robust server-side solutions, APIs, and database architectures that power your applications with security and scalability in mind."
              icon={<Database size={32} />}
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
            <ServiceCard
              title="Performance Optimization"
              description="Analysis and enhancement of your existing applications to improve speed, efficiency, and resource utilization."
              icon={<LineChart size={32} />}
              className="reveal"
            />
            <ServiceCard
              title="Code Review & Refactoring"
              description="Comprehensive assessment of your codebase with actionable recommendations and implementation of improvements."
              icon={<FileText size={32} />}
              className="reveal"
            />
            <ServiceCard
              title="Technical Documentation"
              description="Clear, comprehensive documentation for your applications, APIs, and development processes."
              icon={<BookOpen size={32} />}
              className="reveal"
            />
            <ServiceCard
              title="International Development"
              description="Multi-language support, localization, and globally accessible applications catering to diverse user bases."
              icon={<Globe size={32} />}
              className="reveal"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">My Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-semibold mt-4 mb-3">Discovery</h3>
              <p className="text-muted-foreground">Understanding your goals, requirements, and business context through in-depth discussions.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-semibold mt-4 mb-3">Planning</h3>
              <p className="text-muted-foreground">Defining project scope, selecting technologies, and creating a detailed roadmap.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-semibold mt-4 mb-3">Development</h3>
              <p className="text-muted-foreground">Implementing solutions with regular communication and progress updates.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-semibold mt-4 mb-3">Delivery & Support</h3>
              <p className="text-muted-foreground">Thorough testing, deployment, and ongoing support to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center reveal">Pricing</h2>
          <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto reveal">
            I offer flexible pricing options to accommodate different project requirements and budgets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors reveal">
              <h3 className="text-2xl font-bold mb-2">Hourly Rate</h3>
              <p className="text-4xl font-bold text-primary mb-6">$80<span className="text-muted-foreground text-sm font-normal">/hour</span></p>
              <p className="text-muted-foreground mb-6">Best for smaller projects or ongoing collaboration with variable scope.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Regular progress updates
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Flexible scheduling
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Invoice based on actual hours
                </li>
              </ul>
              <Link to="/contact" className="btn btn-outline w-full">
                Get Started
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg border border-primary shadow-lg shadow-primary/10 transform md:-translate-y-4 reveal">
              <div className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-2">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Project-Based</h3>
              <p className="text-muted-foreground mb-6">Fixed price based on project requirements and deliverables.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Detailed proposal and contract
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Clear deliverables and timeline
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Milestone-based payments
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Post-project support
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full">
                Request Quote
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors reveal">
              <h3 className="text-2xl font-bold mb-2">Retainer</h3>
              <p className="text-4xl font-bold text-primary mb-6">$3,000<span className="text-muted-foreground text-sm font-normal">/month</span></p>
              <p className="text-muted-foreground mb-6">Consistent support for ongoing development and maintenance needs.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Reserved development time
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Monthly progress reports
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Discounted hourly rate
                </li>
              </ul>
              <Link to="/contact" className="btn btn-outline w-full">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <h3 className="text-xl font-semibold mb-3">How long does a typical project take?</h3>
              <p className="text-muted-foreground">Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. I'll provide a detailed timeline during the proposal phase.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <h3 className="text-xl font-semibold mb-3">Do you offer maintenance services?</h3>
              <p className="text-muted-foreground">Yes, I offer ongoing maintenance and support services to ensure your application continues to function optimally. This can be arranged as a retainer or on an as-needed basis.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <h3 className="text-xl font-semibold mb-3">What technologies do you specialize in?</h3>
              <p className="text-muted-foreground">I specialize in modern web technologies including React, Vue.js, Node.js, and various databases. However, I'm adaptable and can work with different tech stacks based on project requirements.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <h3 className="text-xl font-semibold mb-3">Can you work with my existing team?</h3>
              <p className="text-muted-foreground">Absolutely. I'm experienced in collaborating with existing development teams, product managers, and designers. I can integrate into your workflow or lead development efforts as needed.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <h3 className="text-xl font-semibold mb-3">How do payments work?</h3>
              <p className="text-muted-foreground">For project-based work, I typically request a 30% deposit upfront, with the remainder paid at defined milestones. For hourly work, I invoice bi-weekly. Various payment methods are accepted for your convenience.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <h3 className="text-xl font-semibold mb-3">Do you sign NDAs?</h3>
              <p className="text-muted-foreground">Yes, I'm happy to sign Non-Disclosure Agreements to protect your intellectual property and business information before discussing project details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="bg-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto reveal">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Book a consultation to discuss your project requirements and how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking" className="btn btn-primary">
                Book a Consultation
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

export default Services;
