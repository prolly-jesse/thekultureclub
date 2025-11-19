import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" });

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    const trimmedEmail = email.trim().toLowerCase();
    const result = emailSchema.safeParse(trimmedEmail);
    
    if (!result.success) {
      toast({
        title: "Invalid email",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: trimmedEmail });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already subscribed",
            description: "This email is already on our newsletter list.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Thank you for subscribing!",
          description: "We'll keep you updated with our latest news.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-accent/5 to-card border-t-2 border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
          Stay Connected
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Phone */}
          <Card className="p-4 sm:p-6 text-center hover:shadow-xl transition-smooth hover:scale-105 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <Phone className="text-white" size={20} />
            </div>
            <h3 className="font-display text-base sm:text-lg font-semibold mb-2">Phone</h3>
            <a 
              href="tel:0111468845" 
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              011 146 8845
            </a>
            <p className="text-sm text-muted-foreground mt-1">Management</p>
          </Card>

          {/* Email */}
          <Card className="p-4 sm:p-6 text-center hover:shadow-xl transition-smooth hover:scale-105 border-2 hover:border-accent/50 bg-gradient-to-br from-card to-accent/5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg">
              <Mail className="text-white" size={20} />
            </div>
            <h3 className="font-display text-base sm:text-lg font-semibold mb-2">Email</h3>
            <a 
              href="mailto:thee.kultureklub@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-smooth break-all"
            >
              thee.kultureklub@gmail.com
            </a>
          </Card>

          {/* Address */}
          <Card className="p-4 sm:p-6 text-center hover:shadow-xl transition-smooth hover:scale-105 border-2 hover:border-secondary/50 bg-gradient-to-br from-card to-secondary/5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
              <MapPin className="text-white" size={20} />
            </div>
            <h3 className="font-display text-base sm:text-lg font-semibold mb-2">Location</h3>
            <a 
              href="https://maps.app.goo.gl/Wopz5GhDRHNko77n7" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth text-sm block"
            >
              <p className="font-medium">Thee Kulture Café & Bistro</p>
              <p>Ralph Bunche Rd, Nairobi</p>
              <p>PR44+99 Nairobi</p>
            </a>
          </Card>

          {/* Social Media */}
          <Card className="p-4 sm:p-6 text-center hover:shadow-xl transition-smooth hover:scale-105 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg animate-pulse">
              <Instagram className="text-white" size={20} />
            </div>
            <h3 className="font-display text-base sm:text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center mt-4">
              <a 
                href="https://www.instagram.com/theekulture/?utm_source=ig_web_button_share_sheet" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-card via-accent/5 to-primary/10 border-2 border-primary/30 rounded-xl p-6 sm:p-8 text-center shadow-2xl">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-3 sm:mb-4 shadow-lg">
            <Send className="text-white" size={24} />
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stay Updated</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Subscribe to our newsletter for updates on events and special offers
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-2 border-primary/30 focus:border-primary h-11 sm:h-12 text-sm sm:text-base"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="kulture-gradient text-white hover:shadow-lg transition-smooth h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
