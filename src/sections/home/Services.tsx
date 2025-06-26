import { Link } from "react-router-dom";
import { ArrowRight, Code, ExternalLink } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <section className="py-20" id="services">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I offer a range of services to help you build and grow your digital
            products.
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
  );
};

export default Services;
