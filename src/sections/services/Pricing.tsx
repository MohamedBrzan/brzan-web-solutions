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
              $80
              <span className="text-muted-foreground text-sm font-normal">
                /hour
              </span>
            </p>
            <p className="text-muted-foreground mb-6">
              Best for smaller projects or ongoing collaboration with variable
              scope.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Regular progress updates
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Flexible scheduling
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Invoice based on actual hours
              </li>
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
            <p className="text-muted-foreground mb-6">
              Fixed price based on project requirements and deliverables.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Detailed proposal and contract
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Clear deliverables and timeline
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Milestone-based payments
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Post-project support
              </li>
            </ul>
            <Link to="/contact" className="btn btn-primary w-full">
              Request Quote
            </Link>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors reveal">
            <h3 className="text-2xl font-bold mb-2">Retainer</h3>
            <p className="text-4xl font-bold text-primary mb-6">
              $3,000
              <span className="text-muted-foreground text-sm font-normal">
                /month
              </span>
            </p>
            <p className="text-muted-foreground mb-6">
              Consistent support for ongoing development and maintenance needs.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Reserved development time
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Priority support
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Monthly progress reports
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Discounted hourly rate
              </li>
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
