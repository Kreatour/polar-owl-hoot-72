import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Sticker, Users } from "lucide-react";

const CommunitySection = () => {
  const socialLinks = [
    {
      name: "Telegram",
      icon: MessageCircle,
      description: "Join the nest",
      color: "hover:text-secondary",
      bgColor: "hover:bg-secondary/20"
    },
    {
      name: "Twitter (X)",
      icon: Twitter,
      description: "Follow the hoots",
      color: "hover:text-accent",
      bgColor: "hover:bg-accent/20"
    },
    {
      name: "Sticker Pack",
      icon: Sticker,
      description: "Get the originals",
      color: "hover:text-primary",
      bgColor: "hover:bg-primary/20"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-meme mb-4 text-gradient-moonlight">
            Community Nest 🏠
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Come perch with the Polar fam. We don't fly anymore, but we hoot all night.
          </p>
        </div>

        {/* Animated branch with perched owls */}
        <div className="relative mb-12">
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="h-2 w-32 bg-gradient-owl rounded-full relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -top-6 right-8 w-6 h-6 bg-secondary rounded-full feather-float" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className={`group h-auto p-6 border-2 border-border ${link.bgColor} ${link.color} transition-all duration-300 hover:scale-105 hover:shadow-moonlight`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon className="h-8 w-8" />
                  <div>
                    <h3 className="font-bold text-lg">{link.name}</h3>
                    <p className="text-sm opacity-80">{link.description}</p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <Users className="h-12 w-12 text-moonlight mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gradient-owl mb-4">Join the Flock</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Even though we got CTO'd, our community spirit lives on. 
            Share memes, reminisce about the good times, and keep the owl wisdom alive.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-meme hover:shadow-meme text-accent-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Hoot with Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;