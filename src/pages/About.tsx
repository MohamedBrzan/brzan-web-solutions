import useScrollReveal from "@/hooks/useScrollReveal";

import Testimonials from "@/sections/about/Testimonials";
import CallToAction from "@/sections/about/CallToAction";
import Education from "@/sections/about/Education";
import Experience from "@/sections/about/Experience";
import Bio from "@/sections/about/Bio";
import Header from "@/sections/about/Header";

const About = () => {
  useScrollReveal();

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
