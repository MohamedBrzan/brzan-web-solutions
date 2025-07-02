import { Link } from "react-router-dom";
import SocialLinks from "@/common/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold text-foreground mb-4 block"
            >
              MB<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-Stack Engineer with over 3 years of experience building
              scalable web applications and delivering high-quality solutions
              for clients worldwide.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Location: Remote, Worldwide
              </li>
              <li>
                <a
                  href="mailto:mohamedbrzan.dev@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mohamedbrzan.dev@gmail.com
                </a>
              </li>
              <li className="pt-4">
                <Link to="/booking" className="btn btn-primary">
                  Book a Meeting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground">
          <p>© {currentYear} Mohamed Brzan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
