import React from "react";

const FAQs = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center reveal">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border reveal">
            <h3 className="text-xl font-semibold mb-3">
              How long does a typical project take?
            </h3>
            <p className="text-muted-foreground">
              Project timelines vary based on complexity and scope. A simple
              website might take 2-4 weeks, while a complex web application
              could take 3-6 months. I'll provide a detailed timeline during the
              proposal phase.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border reveal">
            <h3 className="text-xl font-semibold mb-3">
              Do you offer maintenance services?
            </h3>
            <p className="text-muted-foreground">
              Yes, I offer ongoing maintenance and support services to ensure
              your application continues to function optimally. This can be
              arranged as a retainer or on an as-needed basis.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border reveal">
            <h3 className="text-xl font-semibold mb-3">
              What technologies do you specialize in?
            </h3>
            <p className="text-muted-foreground">
              I specialize in modern web technologies including React, Vue.js,
              Node.js, and various databases. However, I'm adaptable and can
              work with different tech stacks based on project requirements.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border reveal">
            <h3 className="text-xl font-semibold mb-3">
              Can you work with my existing team?
            </h3>
            <p className="text-muted-foreground">
              Absolutely. I'm experienced in collaborating with existing
              development teams, product managers, and designers. I can
              integrate into your workflow or lead development efforts as
              needed.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border reveal">
            <h3 className="text-xl font-semibold mb-3">
              How do payments work?
            </h3>
            <p className="text-muted-foreground">
              For project-based work, I typically request a 30% deposit upfront,
              with the remainder paid at defined milestones. For hourly work, I
              invoice bi-weekly. Various payment methods are accepted for your
              convenience.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border reveal">
            <h3 className="text-xl font-semibold mb-3">Do you sign NDAs?</h3>
            <p className="text-muted-foreground">
              Yes, I'm happy to sign Non-Disclosure Agreements to protect your
              intellectual property and business information before discussing
              project details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
