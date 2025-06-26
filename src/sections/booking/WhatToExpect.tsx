const WhatToExpect = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center reveal">
          What to Expect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3">
              Booking Confirmation
            </h3>
            <p className="text-muted-foreground">
              After booking, you'll receive an email confirmation with meeting
              details and any preparation needed.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3">
              Meeting Reminder
            </h3>
            <p className="text-muted-foreground">
              You'll get a reminder 24 hours before our scheduled meeting with a
              link to join the video call.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center relative reveal">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3">Follow-Up</h3>
            <p className="text-muted-foreground">
              After our meeting, I'll send a summary of our discussion and next
              steps based on what we covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
