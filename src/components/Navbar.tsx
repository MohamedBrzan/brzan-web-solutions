import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `transition-colors ${
      isActive(path)
        ? "text-primary font-medium"
        : "text-foreground hover:text-primary"
    }`;

  return (
    <nav className="py-4 bg-background/95 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-foreground">
          MB<span className="text-primary">.</span>
        </Link>

        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/booking" className="btn btn-primary">
              Book a Meeting
            </Link>
          </li>
        </ul>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-background z-40 md:hidden">
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center p-4">
                <Link to="/" className="text-2xl font-bold text-foreground">
                  MB<span className="text-primary">.</span>
                </Link>
                <button
                  className="text-foreground"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col space-y-6 p-6 bg-background">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`${linkClass(link.to)} text-xl`}
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Link
                    to="/booking"
                    className="btn btn-primary w-full text-center block"
                    onClick={toggleMenu}
                  >
                    Book a Meeting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
