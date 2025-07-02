import MarkdownRenderer from "@/components/MarkdownRenderer";

const Experience = () => {
  // Sample work experience
  const experience = [
    {
      position: "Mid-level Full-Stack Developer",
      company: "Appout ITS",
      location: "Egypt, Tanta - Hybrid",
      period: "May 2024 - Present",
      description:
        "Developed RESTful and GraphQL APIs with Node.js and Express (35% faster throughput), optimized MongoDB queries (40% latency reduction), automated backend processes, collaborated with frontend teams, and enhanced backend performance with profiling.",
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
