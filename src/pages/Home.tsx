import useScrollReveal from "@/hooks/useScrollReveal";

import Testimonials from "@/sections/home/Testimonials";
import Blog from "@/sections/home/Blog";
import CallToAction from "@/sections/home/CallToAction";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
import Services from "@/sections/home/Services";
import Hero from "@/sections/home/Hero";

const Home = () => {
  useScrollReveal();

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
