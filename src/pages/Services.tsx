import useScrollReveal from "@/hooks/useScrollReveal";
import CallToAction from "@/sections/services/CallToAction";
import FAQs from "@/sections/services/FAQs";
import Pricing from "@/sections/services/Pricing";
import Process from "@/sections/services/Process";
import MainServices from "@/sections/services/MainServices";
import Header from "@/sections/services/Header";

const Services = () => {
  useScrollReveal();

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
