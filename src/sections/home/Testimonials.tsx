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
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            What my clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
