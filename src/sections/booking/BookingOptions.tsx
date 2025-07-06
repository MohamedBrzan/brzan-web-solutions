import BookingForm from "@/components/BookingForm";
import { Calendar, Clock } from "lucide-react";

const BookingOptions = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <h2 className="section-heading mb-8">Meeting Options</h2>

            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start">
                  <Calendar className="text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Initial Consultation
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      A 30-minute session to discuss your project requirements,
                      goals, and how I can help you achieve them.
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <b className="mt-1">✨ Ideal for :</b> First-time clients
                      exploring options
                    </p>
                    <div className="flex items-center mt-4">
                      <Clock className="text-muted-foreground mr-2" size={16} />
                      <span className="text-muted-foreground">30 minutes</span>
                      <span className="mx-3 text-muted-foreground">•</span>
                      <span className="font-medium">$30</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start">
                  <Calendar className="text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Project Discussion
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      A comprehensive 60-minute session to dive deep into your
                      project, discuss technical approaches, timelines, and
                      deliverables.
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <b className="mt-1">🎯 Ideal for :</b> Startups ready to
                      formalize project
                    </p>
                    <div className="flex items-center mt-4">
                      <Clock className="text-muted-foreground mr-2" size={16} />
                      <span className="text-muted-foreground">60 minutes</span>
                      <span className="mx-3 text-muted-foreground">•</span>
                      <span className="font-medium">$60</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start">
                  <Calendar className="text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Code Review</h3>
                    <p className="text-muted-foreground mb-2">
                      A 45-minute session to review your code, identify
                      potential improvements, and provide actionable
                      recommendations.
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <b className="mt-1">🔍 Focus Areas :</b> Performance,
                      readability, security tips
                      <br />
                      <b>🧠 Ideal for :</b> junior/mid developers and CTOs
                    </p>
                    <div className="flex items-center mt-4">
                      <Clock className="text-muted-foreground mr-2" size={16} />
                      <span className="text-muted-foreground">45 minutes</span>
                      <span className="mx-3 text-muted-foreground">•</span>
                      <span className="font-medium">$50</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start">
                  <Calendar className="text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Technical Mentoring
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      A 60-minute personalized mentoring session focused on
                      helping you improve your technical skills and overcome
                      specific challenges.
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <b className="mt-1">👨‍🏫 Ideal for :</b> Junior devs or
                      career transitioners
                    </p>
                    <div className="flex items-center mt-4">
                      <Clock className="text-muted-foreground mr-2" size={16} />
                      <span className="text-muted-foreground">60 minutes</span>
                      <span className="mx-3 text-muted-foreground">•</span>
                      <span className="font-medium">$75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                Need a custom arrangement?
              </h3>
              <p className="text-muted-foreground mb-4">
                If you require a different meeting duration or have specific
                needs, please contact me directly to arrange a custom booking.
              </p>
              <a href="/contact" className="text-primary hover:underline">
                Contact for custom arrangement →
              </a>
            </div>
          </div>

          <div className="reveal">
            <h2 className="section-heading mb-8">Book Your Session</h2>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingOptions;
