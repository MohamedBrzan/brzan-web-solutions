const Process = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center reveal">
          My Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3">Discovery</h3>
            <p className="text-muted-foreground">
              Understanding your goals, requirements, and business context
              through in-depth discussions.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3">Planning</h3>
            <p className="text-muted-foreground">
              Defining project scope, selecting technologies, and creating a
              detailed roadmap.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3">Development</h3>
            <p className="text-muted-foreground">
              Implementing solutions with regular communication and progress
              updates.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3">
              Delivery & Support
            </h3>
            <p className="text-muted-foreground">
              Thorough testing, deployment, and ongoing support to ensure
              long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
