import TestimonialCard, { Testimonial } from "@/components/TestimonialCard";

const Testimonials = () => {
  // Sample testimonials
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechInnovate",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
      content:
        "Mohamed delivered an exceptional web application that exceeded our expectations. His technical expertise and attention to detail made him a pleasure to work with.",
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      role: "Founder",
      company: "StartUp Labs",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content:
        "Working with Mohamed was a seamless experience. He understood our requirements perfectly and delivered a solution that has greatly improved our business operations.",
    },
    {
      id: "3",
      name: "Emily Chen",
      role: "Product Manager",
      company: "InnoTech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      content:
        "Mohamed is a highly skilled developer who consistently delivered high-quality work on time. His ability to translate business requirements into technical solutions was invaluable to our project.",
    },
  ];

  return (
    <section className="py-16 bg-card/30">
      <div className="container">
        <h2 className="section-heading mb-12 mx-auto text-center">
          What Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
