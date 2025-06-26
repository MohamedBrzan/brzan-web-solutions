import { Link } from "react-router-dom";
import SocialLinks from "@/common/SocialLinks";

const Hero = () => {
  return (
    <section className="py-20 flex items-center min-h-[90vh] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Full-Stack Engineer & Software Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
              I'm Mohamed Brzan, a Full-Stack Engineer with over 3 years of
              experience in building scalable web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="btn btn-primary">
                View Portfolio
              </Link>
              <Link to="/booking" className="btn btn-outline">
                Book a Meeting
              </Link>
            </div>
            <SocialLinks size={24} className="mt-8 flex space-x-6" />
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mohamed Brzan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
