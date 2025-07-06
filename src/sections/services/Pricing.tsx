import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 text-center reveal">Pricing</h2>
        <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto reveal">
          I offer flexible pricing options to accommodate different project
          requirements and budgets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors reveal">
            <h3 className="text-2xl font-bold mb-2">Hourly Rate</h3>
            <p className="text-4xl font-bold text-primary mb-6">
              $35
              <span className="text-muted-foreground text-sm font-normal">
                /hour
              </span>
            </p>
            <p className="text-muted-foreground mb-6">
              <b>Ideal for :</b> quick fixes, short-term needs, agile startups,
              or agencies needing expert hands.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Pay-as-you-go flexibility",
                "No long-term commitment",
                "Transparent hourly invoicing",
                "Great for bug fixes, feature tweaks, and code reviews",
                "Flexible scheduling for sprints or emergencies",
                "Direct communication & fast delivery",
                "Seamless handoff to internal teams or other vendors",
                "Cost-effective for tasks under limited budget",
              ].map((item, idx) => (
                <li
                  key={+idx}
                  className="flex gap-2 items-start leading-relaxed"
                >
                  <span className="text-primary mt-1">✓</span>
                  {item}
                </li>
              ))}
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
            <p className="text-4xl font-bold text-primary mb-6">
              $800–$8,000
              <span className="text-muted-foreground text-sm font-normal">
                /project
              </span>
            </p>
            <p className="text-muted-foreground mb-6">
              <b>Ideal for :</b> businesses with clear deliverables and a
              well-defined goal.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Detailed project proposal with timeline & scope",
                "Transparent fixed pricing — no surprises",
                "Legal contract and risk protection",
                "Professional contract & IP protection",
                "Scalable, tested, and maintainable codebase",
                "Milestone-based payment & progress checkpoints",
                "Regular updates & async check-ins",
                "Post-launch support, bug fixes (30 days)",
              ].map((item, idx) => (
                <li
                  key={+idx}
                  className="flex gap-2 items-start leading-relaxed"
                >
                  <span className="text-primary mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary w-full">
              Request Quote
            </Link>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors reveal">
            <h3 className="text-2xl font-bold mb-2">Retainer</h3>
            <p className="text-4xl font-bold text-primary mb-6">
              $1,500
              <span className="text-muted-foreground text-sm font-normal">
                /month
              </span>
            </p>
            <p className="text-muted-foreground mb-6">
              <b>Ideal for :</b> startups scaling fast, agencies, or teams
              needing monthly technical help.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Reserved monthly development",
                "Priority queue for critical tasks",
                "Discounted hourly rate on overflow",
                "Monthly report + insights",
                "Code audits and performance monitoring",
                "Adjust scope monthly to meet business needs",
                "Long-term collaboration with aligned roadmap",
                "Dedicated planning sessions for roadmap alignment",
              ].map((item, idx) => (
                <li
                  key={+idx}
                  className="flex gap-2 items-start leading-relaxed"
                >
                  <span className="text-primary mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-outline w-full">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
