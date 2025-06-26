import ServiceCard from "@/components/ServiceCard";
import {
  Code,
  ExternalLink,
  ArrowRight,
  Layout,
  Database,
  LineChart,
  FileText,
  BookOpen,
  Globe,
} from "lucide-react";

const MainServices = () => {
  return (
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
  );
};

export default MainServices;
