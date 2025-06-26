const Bio = () => {
  // Sample skills
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Vue.js",
        "Angular",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Redux",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Django", "Laravel", "ASP.NET Core"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions"],
    },
    {
      category: "Tools & Methods",
      items: ["Git", "Agile/Scrum", "TDD", "REST", "GraphQL"],
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
                I'm Mohamed Brzan, a Full-Stack Engineer with over 3 years of
                experience in designing and developing web applications. My
                journey in software development began during my university
                years, where I discovered my passion for creating digital
                solutions that solve real-world problems.
              </p>
              <p>
                After completing my Master's degree in Computer Science, I
                worked with various companies ranging from startups to
                established enterprises, which has given me a diverse
                perspective on software development practices and methodologies.
              </p>
              <p>
                I specialize in building scalable web applications using modern
                technologies and frameworks. My approach to development is
                focused on creating clean, maintainable code that delivers
                exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical articles and tutorials.
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
