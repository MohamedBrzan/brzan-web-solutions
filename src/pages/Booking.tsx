import { useEffect } from "react";

import Header from "@/sections/booking/Header";
import BookingOptions from "@/sections/booking/BookingOptions";
import WhatToExpect from "@/sections/booking/WhattoExpect";
import Testimonials from "@/sections/booking/Testimonials";

const Booking = () => {
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
    <div>
      {/* Header Section */}
      <Header />

      {/* Booking Options */}
      <BookingOptions />

      {/* What to Expect Section */}
      <WhatToExpect />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Booking;
