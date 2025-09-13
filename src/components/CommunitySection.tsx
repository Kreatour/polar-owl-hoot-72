import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Sticker, Users } from "lucide-react";
import stickerParty from "@/assets/stickers/polar-owl-party.gif";

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
    <section className="py-12 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold font-meme mb-4 text-gradient-moonlight">
            Community Nest 🏠
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Come perch with the Polar fam. We don't fly anymore, but we hoot all night.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className={`group p-4 border-2 border-border ${link.bgColor} ${link.color} transition-all duration-300 hover:scale-105 hover:shadow-moonlight`}
              >
                <Icon className="h-6 w-6" />
              </Button>
            );
          })}
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border max-w-2xl mx-auto">
          <Users className="h-8 w-8 text-moonlight mx-auto mb-3" />
          <h3 className="text-xl font-bold text-gradient-owl mb-2">Join the Flock</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Share memes, reminisce about the good times, and keep the owl wisdom alive.
          </p>
          <Button 
            size="default" 
            className="bg-gradient-meme hover:shadow-meme text-accent-foreground font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Hoot with Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;