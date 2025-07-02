import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 bg-background/95 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-foreground">
          MB<span className="text-primary">.</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/booking" className="btn btn-primary">
              Book a Meeting
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
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
                <li>
                  <Link
                    to="/"
                    className="text-foreground hover:text-primary transition-colors text-xl"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-foreground hover:text-primary transition-colors text-xl"
                    onClick={toggleMenu}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-foreground hover:text-primary transition-colors text-xl"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-foreground hover:text-primary transition-colors text-xl"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-foreground hover:text-primary transition-colors text-xl"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-foreground hover:text-primary transition-colors text-xl"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li className="pt-4">
                  <Link
                    to="/booking"
                    className="btn btn-primary w-full text-center"
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
