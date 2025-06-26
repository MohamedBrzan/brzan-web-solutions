const Experience = () => {
  // Sample work experience
  const experience = [
    {
      position: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      description:
        "Lead developer for multiple client projects. Designed and implemented scalable web applications using React, Node.js, and PostgreSQL. Mentored junior developers and conducted code reviews.",
    },
    {
      position: "Full-Stack Developer",
      company: "WebApp Innovations",
      location: "New York, NY",
      period: "2020 - 2022",
      description:
        "Developed and maintained various web applications for clients in finance and healthcare. Implemented responsive UI designs and RESTful APIs.",
    },
    {
      position: "Software Engineering Intern",
      company: "Global Tech",
      location: "Seattle, WA",
      period: "Summer 2019",
      description:
        "Contributed to the development of internal tools using Vue.js and Django. Participated in agile development processes.",
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
              <p className="text-muted-foreground">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
