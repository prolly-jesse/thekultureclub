import { Calendar } from "lucide-react";

const WeeklyExperience = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-card/30 to-primary/5 border-y-2 border-primary/20 pattern-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 transition-smooth">
        <div className="text-center space-y-3 mb-8 sm:mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl animate-pulse">
              <Calendar className="text-white" size={28} />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Weekly Experiences</h2>
          </div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Each day at Thee Kulture is curated around a meaningful theme that invites people to connect, reflect, and celebrate responsibly
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Movie Monday */}
          <div className="bg-gradient-to-br from-card to-primary/10 border-2 border-primary/30 rounded-xl p-4 sm:p-6 hover:border-primary transition-smooth hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Movie Monday</h3>
            <p className="text-foreground/80 text-sm">
              Ease into the week with cinematic vibes. From classic films to crowd favorites, we unwind together—one movie at a time.
            </p>
          </div>

          {/* Thrive Tuesday */}
          <div className="bg-gradient-to-br from-card to-accent/10 border-2 border-accent/30 rounded-xl p-4 sm:p-6 hover:border-accent transition-smooth hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Thrive Tuesday</h3>
            <p className="text-foreground/80 text-sm">
              A night for growth, purpose, and real conversations. Whether it's mindset, faith, or vision—we gather to thrive, not just survive.
            </p>
          </div>

          {/* Women Crush Wednesday */}
          <div className="bg-gradient-to-br from-card to-secondary/10 border-2 border-secondary/30 rounded-xl p-4 sm:p-6 hover:border-secondary transition-smooth hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Women Crush Wednesday</h3>
            <p className="text-foreground/80 text-sm">
              A celebration of powerful women. We share stories, honor feminine strength, and create a space for connection and beauty to shine.
            </p>
          </div>

          {/* Throwback Thursday */}
          <div className="bg-gradient-to-br from-card to-primary/10 border-2 border-primary/30 rounded-xl p-4 sm:p-6 hover:border-primary transition-smooth hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Throwback Thursday</h3>
            <p className="text-foreground/80 text-sm">
              Rewind the vibe with the best of the 80s, 90s, and 2000s. Come dressed for the memories, stay for the nostalgia.
            </p>
          </div>

          {/* Fiesta Friday */}
          <div className="bg-gradient-to-br from-card to-accent/10 border-2 border-accent/30 rounded-xl p-4 sm:p-6 hover:border-accent transition-smooth hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Fiesta Friday</h3>
            <p className="text-foreground/80 text-sm">
              Where the world meets the dance floor. Afrobeat, Amapiano, Reggaeton, and other global sounds make Fridays a cultural celebration.
            </p>
          </div>

          {/* Soul Saturday */}
          <div className="bg-gradient-to-br from-card to-secondary/10 border-2 border-secondary/30 rounded-xl p-4 sm:p-6 hover:border-secondary transition-smooth hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Soul Saturday</h3>
            <p className="text-foreground/80 text-sm">
              An evening of rhythm and reflection. Neo-soul, live music, spoken word, and a touch of Amapiano—for hearts that feel and souls that dance.
            </p>
          </div>

          {/* Sabbath Sunday */}
          <div className="bg-gradient-to-br from-card via-primary/5 to-secondary/10 border-2 border-primary/40 rounded-xl p-4 sm:p-6 hover:border-primary transition-smooth hover:shadow-2xl hover:scale-[1.02] col-span-full">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Sabbath Sunday</h3>
            <p className="text-foreground/80 text-sm">
              A sacred pause. A day of worship, rest, and reconnection with what truly matters. Come recharge your spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyExperience;