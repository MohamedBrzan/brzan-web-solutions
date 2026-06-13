import MarkdownRenderer from "@/components/MarkdownRenderer";

const Experience = () => {
  // Sample work experience
  const experience = [
    {
      position: "Mid-level Backend Engineer",
      company: "Revamp Consulting",
      location: "Egypt, Cairo - Remotely",
      period: "July 2025 - Present",
      description:`Designed, developed, and maintained scalable web applications and Shopify apps using Node.js, Express.js, and MongoDB. Built and containerized services with Docker, configured Nginx for deployment and reverse-proxy workflows, integrated Sentry for monitoring and error tracking, collaborated closely with frontend and backend teams, and optimized API performance, scalability, and system reliability.

Key product contributions include:

• Wishlist Hero (https://apps.shopify.com/wishlist-hero) – Contributed to the ongoing development and enhancement of one of Shopify's popular wishlist applications, implementing new features, improving existing functionality, and maintaining platform stability.

• Back in Stock Hero – Built the backend architecture from scratch for a Shopify application that enables customers to subscribe to out-of-stock products and automatically notifies merchants of product demand. Developed notification workflows, email template management, and automated customer communication systems.

• Request a Quote Hero – Developed the backend system from the ground up for a Shopify application that allows customers to request quotes for individual products or bulk purchases. Implemented location-based pricing capabilities, customer-specific offers, proposal workflows, approval processes, email communications, and real-time notification systems.

• Order Hub – Engineered a custom order management platform enabling Shopify merchants to connect their stores and streamline order operations. Developed configurable order trigger rules, user invitation workflows, role-based access control (Admin, Manager, and Representative roles), team management features, Shopify-integrated billing mechanisms, and assignment workflows to improve operational efficiency.
`
    },
    {
      position: "Mid-level Full-Stack Developer",
      company: "Appout ITS",
      location: "Egypt, Tanta - Hybrid",
      period: "May 2024 - July 2025",
      description:`Developed high-performance RESTful and GraphQL APIs using Node.js and Express, increasing service throughput by 35% and reducing MongoDB query latency by 40% through profiling and optimization. Automated backend processes, collaborated cross-functionally with frontend teams, and continuously improved system reliability and performance.

Played a key role in the development of RoboDesk, an omnichannel customer engagement platform, delivering new product capabilities and backend enhancements. Designed and implemented integrations to support AI-powered assistant functionality, enabling intelligent customer interactions, workflow automation, and enhanced user experiences across multiple communication channels.
`
    },
    {
      position: "Full-Stack Developer",
      company: "Maskin",
      location: " Remote (Saudi Arabia)",
      period: "May 2023 - May 2024",
      description:
        "Designed scalable microservices with Express and Docker, implemented secure RBAC using JWT and OAuth 2.0, optimized API performance, and created reusable abstractions.",
    },
    {
      position: "Software Engineering",
      company: "High Point Tech Solutions Inc.",
      location: " Remote (Saudi Arabia)",
      period: "Jan 2022 - May 2023",
      description:
        "Built MERN backend services for 100k+ users, improved query performance with MongoDB indexing, authored Swagger API docs, wrote Jest tests, and implemented logging with Winston and Morgan.",
    },
  ];

  return (
    <section className="py-16 bg-card/30">
      <div className="container">
        <h2 className="section-heading mb-12 mx-auto text-center">
          Work Experience
        </h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {experience.map((job, index) => (
            <div
              key={+index}
              className="bg-card p-6 rounded-lg border border-border reveal"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <p className="text-primary">
                    {job.company} | {job.location}
                  </p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">
                  {job.period}
                </span>
              </div>
              <p className="text-muted-foreground">
                <MarkdownRenderer content={job.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
