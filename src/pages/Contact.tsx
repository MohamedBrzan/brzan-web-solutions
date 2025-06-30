import React, { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
      <section className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Have a project in mind or want to discuss a potential collaboration?
            Reach out below!
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <h2 className="section-heading mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:mohamedbrzan.dev@gmail.com"
                    className="text-primary hover:underline flex items-center"
                  >
                    <Mail size={20} className="mr-2" />
                    mohamedbrzan.dev@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/mohamedbrzan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohamed-brzan-01966518a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Remote, Worldwide</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Availability</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance projects and
                    consulting work. My typical response time is within 24
                    hours.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Book a Meeting</h3>
                <p className="text-muted-foreground mb-4">
                  If you prefer to schedule a call or video chat, you can book a
                  time slot directly through my booking system.
                </p>
                <a href="/booking" className="btn btn-primary">
                  Schedule a Meeting
                </a>
              </div>
            </div>

            <div className="reveal">
              <h2 className="section-heading mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <h3 className="text-xl font-semibold mb-3">
                What information should I include in my message?
              </h3>
              <p className="text-muted-foreground">
                For the most effective communication, include details about your
                project, timeline, budget range, and any specific requirements
                or questions you have.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <h3 className="text-xl font-semibold mb-3">
                How quickly will you respond?
              </h3>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 24 hours during
                business days. For urgent matters, please indicate this in your
                message subject.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <h3 className="text-xl font-semibold mb-3">
                Do you work with clients internationally?
              </h3>
              <p className="text-muted-foreground">
                Yes, I work with clients from around the world. I'm comfortable
                with remote collaboration and can adapt to different time zones
                for meetings and communication.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <h3 className="text-xl font-semibold mb-3">
                What happens after I send a message?
              </h3>
              <p className="text-muted-foreground">
                After receiving your message, I'll review your requirements and
                respond with clarifying questions if needed. Then, we can
                schedule an initial consultation to discuss your project in
                detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
