import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Zap } from "lucide-react";
import stickerCoffee from "@/assets/stickers/polar-owl-coffee.gif";

const AboutSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-meme text-center mb-4 text-gradient-owl">
          What's Polar Owl?
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-8 relative">
          <p className="text-lg text-foreground leading-relaxed">
            Polar Owl was never just a coin — it was a <span className="text-gradient-moonlight font-bold">vibe</span>. 
            Hatched from OG Telegram stickers, this owl brought wisdom, memes, and community energy to the TON forest. 
            Sure, it got CTO'd, but <span className="text-gradient-meme font-bold">legends never really die</span> — 
            they just migrate to memes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-owl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Brain className="h-12 w-12 text-moonlight mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gradient-moonlight mb-2">Wisdom</h3>
              <p className="text-muted-foreground">
                Born from the ancient knowledge of OG Telegram sticker packs
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-moonlight transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gradient-meme mb-2">Community</h3>
              <p className="text-muted-foreground">
                United by memes, bonded by the shared experience of getting CTO'd
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-meme transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gradient-owl mb-2">Legacy</h3>
              <p className="text-muted-foreground">
                The spirit lives on in every hoot, every meme, every remember
              </p>
            </CardContent>
          </Card>
        </div>
        
          {/* Coffee owl */}
          <div className="absolute top-0 right-8 opacity-60 feather-float">
            <img 
              src={stickerCoffee} 
              alt="Coffee Owl sticker" 
              className="w-12 h-12 rounded-full"
            />
          </div>
      </div>
    </section>
  );
};

export default AboutSection;