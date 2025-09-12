import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import sticker1 from "@/assets/sticker-1.png";
import sticker2 from "@/assets/sticker-2.png";
import sticker3 from "@/assets/sticker-3.png";

const StickerShowcase = () => {
  const stickers = [
    { id: 1, image: sticker1, name: "Happy Owl" },
    { id: 2, image: sticker2, name: "Wise Owl" },
    { id: 3, image: sticker3, name: "CTO'd Owl" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-meme mb-4 text-gradient-moonlight">
          Sticker Showcase
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          The stickers that started it all. Straight out of Telegram's OG archives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stickers.map((sticker, index) => (
            <div 
              key={sticker.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-moonlight transition-all duration-300 sticker-wiggle">
                <img 
                  src={sticker.image} 
                  alt={`${sticker.name} - Polar Owl sticker`}
                  className="w-32 h-32 mx-auto mb-4 rounded-xl hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-bold text-lg text-gradient-owl">{sticker.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-gradient-meme hover:shadow-meme text-accent-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 meme-bounce"
        >
          <Download className="mr-2 h-5 w-5" />
          Add Sticker Pack
        </Button>
      </div>
    </section>
  );
};

export default StickerShowcase;