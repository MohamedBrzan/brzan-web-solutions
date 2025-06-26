import { useEffect } from "react";
import CallToAction from "@/sections/services/CallToAction";
import FAQs from "@/sections/services/FAQs";
import Pricing from "@/sections/services/Pricing";
import Process from "@/sections/services/Process";
import MainServices from "@/sections/services/MainServices";
import Header from "@/sections/services/Header";

const Services = () => {
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

      {/* Main Services Section */}
      <MainServices />

      {/* Process Section */}
      <Process />

      {/* Pricing Section */}
      <Pricing />

      {/* FAQs Section */}
      <FAQs />

      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default Services;
