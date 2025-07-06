const Bio = () => {
  // Sample skills
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Angular",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Redux",
      ],
    },
    // {
    //   category: "Backend",
    //   items: ["Node.js", "Express.js", "Django", "Laravel", "ASP.NET Core"],
    // },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Next.js"],
    },
    // {
    //   category: "Databases",
    //   items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    // },
    {
      category: "Unit Testing",
      items: ["Jest"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "Redis"],
    },
    // {
    //   category: "DevOps",
    //   items: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions"],
    // },
    {
      category: "DevOps",
      items: ["Docker"],
    },
    // {
    //   category: "Tools & Methods",
    //   items: ["Git", "Agile/Scrum", "TDD", "REST", "GraphQL"],
    // },
    {
      category: "Tools & Methods",
      items: ["Git", "Agile/Scrum", "REST", "GraphQL"],
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <h2 className="section-heading">My Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm <b>Mohamed Brzan</b>, a Full-Stack JavaScript Engineer with
                over 3 years of experience building and deploying scalable web
                applications using technologies like React, Node.js, Next.js,
                Nest.js, and MongoDB.
              </p>
              <p>
                My journey into software development began during my university
                studies in <b>Survey Engineering</b>, where I found a deep
                passion for building real-world digital solutions. Since then,
                I've worked with <b>diverse companies</b> — from local teams to
                remote international startups — delivering{" "}
                <b>robust, production-ready applications</b> with modern
                architectures, including{" "}
                <b>
                  microservices, CI/CD pipelines, and containerized deployments
                  with Docker.
                </b>
              </p>
              <p>
                I specialize in creating clean, maintainable code and seamless
                user experiences. Whether it's architecting APIs, optimizing
                database performance, or setting up end-to-end environments, I
                take a thoughtful, results-driven approach to every project.
              </p>
              <p>
                When I’m not writing code, I’m usually{" "}
                <b>exploring new tech trends, contributing to open-source</b>,
                or <b>sharing knowledge</b> through tutorials and mentorship.
              </p>
            </div>
          </div>

          <div className="reveal">
            <h2 className="section-heading">My Skills</h2>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={+index}>
                  <h3 className="text-lg font-semibold mb-2">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={+skillIndex}
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
  );
};

export default Bio;
