import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="bg-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Interested in collaborating on a project or hiring me for a
            freelance gig?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking" className="btn btn-primary">
              Book a Meeting
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
