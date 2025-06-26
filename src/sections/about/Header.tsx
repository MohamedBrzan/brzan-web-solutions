const Header = () => {
  return (
    <section className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Full-Stack Engineer with a passion for building innovative web
              applications.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mohamed Brzan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
