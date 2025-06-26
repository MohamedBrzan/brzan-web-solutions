const Header = () => {
  return (
    <section className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
          My Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up">
          I offer a comprehensive range of services to help you build, optimize,
          and maintain your digital products.
        </p>
      </div>
    </section>
  );
};

export default Header;
