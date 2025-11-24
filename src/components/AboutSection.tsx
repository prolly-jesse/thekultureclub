import { Clock, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
      {/* Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center transition-smooth animate-fade-in">
        <div className="space-y-4 transition-smooth">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Vision & Heart
            </h3>
          </div>
          <p className="text-foreground/80 leading-relaxed">
            At the heart of Thee Kulture is a desire to build a space grounded
            in purpose, creativity, and community. While designed as a social
            hub, our mission extends far beyond entertainment. We aim to create
            an atmosphere where people can unwind, share stories, celebrate
            culture, and live responsibly.
          </p>
          <div className="space-y-3 pt-4">
            <div className="flex gap-3 items-start p-3 bg-primary/5 rounded-lg border border-primary/20 transition-smooth hover:bg-primary/10">
              <span className="text-primary text-xl">•</span>
              <p className="text-foreground/80 text-sm sm:text-base">
                We do not promote drunkenness or disorder. Everything we
                serve—from cocktails to coffee—is offered with a strong emphasis
                on responsibility and moderation.
              </p>
            </div>
            <div className="flex gap-3 items-start p-3 bg-accent/5 rounded-lg border border-accent/20 transition-smooth hover:bg-accent/10">
              <span className="text-accent text-xl">•</span>
              <p className="text-foreground/80 text-sm sm:text-base">
                We are intentional about values. Our programs and environment
                are crafted to inspire wholesome experiences and deeper
                connections.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-card to-primary/5 border-2 border-primary/30 rounded-xl p-5 sm:p-6 space-y-4 transition-smooth hover:shadow-xl hover:scale-[1.02] hover:border-primary/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-secondary to-primary rounded-lg">
                <Clock className="text-white" size={24} />
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Operating Hours
              </h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-3 border-b border-border/50 transition-smooth hover:bg-primary/5 rounded px-2">
                <span className="font-medium">Monday to Saturday:</span>
                <span className="text-primary font-semibold">
                  6:00 AM – 11:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center py-3 transition-smooth hover:bg-secondary/5 rounded px-2">
                <span className="font-medium">Sunday:</span>
                <span className="text-secondary font-semibold">
                  6:00 AM – 11:00 PM
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Hours intentionally structured to promote safety, boundaries, and
              rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
