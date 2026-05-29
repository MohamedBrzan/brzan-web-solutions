import useScrollReveal from "@/hooks/useScrollReveal";

import Header from "@/sections/booking/Header";
import BookingOptions from "@/sections/booking/BookingOptions";
import Testimonials from "@/sections/booking/Testimonials";
import WhatToExpect from "@/sections/booking/WhatToExpect";

const Booking = () => {
  useScrollReveal();

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
