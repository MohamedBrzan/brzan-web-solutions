const Header = () => {
  return (
    <section className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
          Book a Meeting
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
          Schedule a consultation, project discussion, or mentoring session.
        </p>
      </div>
    </section>
  );
};

export default Header;
