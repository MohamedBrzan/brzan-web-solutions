
import React, { useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

const Booking = () => {
  // Add scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">Book a Meeting</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Schedule a consultation, project discussion, or mentoring session.
          </p>
        </div>
      </section>

      {/* Booking Options */}
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
                      <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                      <p className="text-muted-foreground mb-2">
                        A 30-minute session to discuss your project requirements, goals, and how I can help you achieve them.
                      </p>
                      <div className="flex items-center mt-4">
                        <Clock className="text-muted-foreground mr-2" size={16} />
                        <span className="text-muted-foreground">30 minutes</span>
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
                      <h3 className="text-xl font-semibold mb-2">Project Discussion</h3>
                      <p className="text-muted-foreground mb-2">
                        A comprehensive 60-minute session to dive deep into your project, discuss technical approaches, 
                        timelines, and deliverables.
                      </p>
                      <div className="flex items-center mt-4">
                        <Clock className="text-muted-foreground mr-2" size={16} />
                        <span className="text-muted-foreground">60 minutes</span>
                        <span className="mx-3 text-muted-foreground">•</span>
                        <span className="font-medium">$100</span>
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
                        A 45-minute session to review your code, identify potential improvements, and provide actionable 
                        recommendations.
                      </p>
                      <div className="flex items-center mt-4">
                        <Clock className="text-muted-foreground mr-2" size={16} />
                        <span className="text-muted-foreground">45 minutes</span>
                        <span className="mx-3 text-muted-foreground">•</span>
                        <span className="font-medium">$75</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start">
                    <Calendar className="text-primary mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Technical Mentoring</h3>
                      <p className="text-muted-foreground mb-2">
                        A 60-minute personalized mentoring session focused on helping you improve your technical skills
                        and overcome specific challenges.
                      </p>
                      <div className="flex items-center mt-4">
                        <Clock className="text-muted-foreground mr-2" size={16} />
                        <span className="text-muted-foreground">60 minutes</span>
                        <span className="mx-3 text-muted-foreground">•</span>
                        <span className="font-medium">$100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-card/50 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Need a custom arrangement?</h3>
                <p className="text-muted-foreground mb-4">
                  If you require a different meeting duration or have specific needs, 
                  please contact me directly to arrange a custom booking.
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

      {/* What to Expect Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">What to Expect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-semibold mt-4 mb-3">Booking Confirmation</h3>
              <p className="text-muted-foreground">
                After booking, you'll receive an email confirmation with meeting details and any preparation needed.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-semibold mt-4 mb-3">Meeting Reminder</h3>
              <p className="text-muted-foreground">
                You'll get a reminder 24 hours before our scheduled meeting with a link to join the video call.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-semibold mt-4 mb-3">Follow-Up</h3>
              <p className="text-muted-foreground">
                After our meeting, I'll send a summary of our discussion and next steps based on what we covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">Client Feedback</h2>
          
          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border reveal">
              <blockquote className="text-muted-foreground italic mb-4">
                "Our consultation with Mohamed was incredibly valuable. He provided clear insights on our tech stack decisions 
                and helped us avoid potential pitfalls in our development approach. The meeting was well-structured and 
                the follow-up documentation was excellent."
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
                "The technical mentoring sessions with Mohamed have been game-changing for our development team. His ability to 
                explain complex concepts in an understandable way has significantly improved our team's skills. We'll definitely 
                be booking more sessions."
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
    </div>
  );
};

export default Booking;
