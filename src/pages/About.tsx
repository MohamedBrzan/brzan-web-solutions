import { useEffect } from "react";

import Testimonials from "@/sections/about/Testimonials";
import CallToAction from "@/sections/about/CallToAction";
import Education from "@/sections/about/Education";
import Experience from "@/sections/about/Experience";
import Bio from "@/sections/about/Bio";
import Header from "@/sections/about/Header";

const About = () => {
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
      {/* Header Section */}
      <Header />

      {/* Bio Section */}
      <Bio />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default About;
