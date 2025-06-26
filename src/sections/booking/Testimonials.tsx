import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center reveal">
          Client Feedback
        </h2>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border reveal">
            <blockquote className="text-muted-foreground italic mb-4">
              "Our consultation with Mohamed was incredibly valuable. He
              provided clear insights on our tech stack decisions and helped us
              avoid potential pitfalls in our development approach. The meeting
              was well-structured and the follow-up documentation was
              excellent."
            </blockquote>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/43.jpg"
                alt="David Wilson"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold">David Wilson</h4>
                <p className="text-sm text-muted-foreground">
                  CTO, StartupLaunch
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border reveal">
            <blockquote className="text-muted-foreground italic mb-4">
              "The technical mentoring sessions with Mohamed have been
              game-changing for our development team. His ability to explain
              complex concepts in an understandable way has significantly
              improved our team's skills. We'll definitely be booking more
              sessions."
            </blockquote>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/33.jpg"
                alt="Jennifer Adams"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold">Jennifer Adams</h4>
                <p className="text-sm text-muted-foreground">
                  Engineering Manager, TechFlow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
