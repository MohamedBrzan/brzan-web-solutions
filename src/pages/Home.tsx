import { useEffect } from "react";

import Testimonials from "@/sections/home/Testimonials";
import Blog from "@/sections/home/Blog";
import CallToAction from "@/sections/home/CallToAction";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
import Services from "@/sections/home/Services";
import Hero from "@/sections/home/Hero";

const Home = () => {
  // Add scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog Section */}
      <Blog />

      {/* Call to Action Section */}
      <CallToAction />
    </>
  );
};

export default Home;
