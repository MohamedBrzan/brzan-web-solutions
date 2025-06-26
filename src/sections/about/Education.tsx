const Education = () => {
  // Sample education
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      period: "2018 - 2020",
      description:
        "Specialized in Software Engineering with focus on distributed systems and cloud computing.",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "National University",
      location: "Boston, MA",
      period: "2014 - 2018",
      description: "Graduated with honors, with a minor in Mathematics.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="section-heading mb-12 mx-auto text-center">Education</h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={+index}
              className="bg-card p-6 rounded-lg border border-border reveal"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-primary">
                    {edu.institution} | {edu.location}
                  </p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
