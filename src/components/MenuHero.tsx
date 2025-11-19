import heroBanner from "@/assets/hero-banner.jpg";

const MenuHero = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <img 
        src={heroBanner}
        alt="Thee Kulture restaurant ambiance showcasing authentic dining experience"
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="animate-fade-in space-y-4">
          <h1 className="font-display text-6xl font-bold text-white md:text-8xl">
            Thee Kulture
          </h1>
          <p className="text-xl text-white/90 md:text-2xl">
            Where Flavor Meets Heritage
          </p>
          <div className="h-1 w-32 kulture-gradient mx-auto rounded-full kulture-glow" />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default MenuHero;
