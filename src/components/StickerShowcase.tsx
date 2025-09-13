import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import stickerOk from "@/assets/stickers/polar-owl-ok.gif";
import stickerParty from "@/assets/stickers/polar-owl-party.gif";
import stickerQuestion from "@/assets/stickers/polar-owl-question.gif";
import stickerTravel from "@/assets/stickers/polar-owl-travel.gif";
import stickerShy from "@/assets/stickers/polar-owl-shy.gif";
import stickerLaugh from "@/assets/stickers/polar-owl-laugh.gif";
import stickerFormal from "@/assets/stickers/polar-owl-formal.gif";
import stickerCoffee from "@/assets/stickers/polar-owl-coffee.gif";

const StickerShowcase = () => {
  const stickers = [
    { 
      id: 1, 
      image: stickerOk, 
      name: "OK Owl", 
      rotation: "rotate-12",
      scale: "scale-110",
      delay: "0s" 
    },
    { 
      id: 2, 
      image: stickerParty, 
      name: "Party Owl", 
      rotation: "-rotate-6",
      scale: "scale-105",
      delay: "0.3s" 
    },
    { 
      id: 3, 
      image: stickerQuestion, 
      name: "Curious Owl", 
      rotation: "rotate-3",
      scale: "scale-115",
      delay: "0.6s" 
    },
    { 
      id: 4, 
      image: stickerLaugh, 
      name: "CTO'd Owl", 
      rotation: "-rotate-4",
      scale: "scale-120",
      delay: "0.9s" 
    },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <Sparkles className="h-8 w-8 text-moonlight mx-auto mb-2 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold font-meme mb-4 text-gradient-moonlight">
            OG Sticker Vault
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          The legendary stickers that launched a thousand memes. Pure Telegram nostalgia! 🎭
        </p>

        {/* Clean grid layout for better presentation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          {stickers.map((sticker, index) => (
            <div 
              key={sticker.id}
              className="cursor-pointer group relative"
              style={{ animationDelay: sticker.delay }}
            >
              <div className={`bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-3xl p-6 border-2 border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-meme-glow/30 hover:scale-105 feather-float ${sticker.rotation}`}>
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={sticker.image} 
                    alt={`${sticker.name} - Polar Owl sticker`}
                    className="w-24 h-24 md:w-32 md:h-32 mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  />
                  <div className="absolute inset-0 bg-gradient-meme opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                </div>
                <h3 className="font-bold text-sm md:text-base text-gradient-owl group-hover:text-gradient-meme transition-all duration-300">
                  {sticker.name}
                </h3>
                <div className="w-12 h-1 bg-gradient-moonlight mx-auto mt-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-meme hover:shadow-meme text-accent-foreground font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-110 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              Collect All Stickers
            </span>
            <div className="absolute inset-0 bg-gradient-owl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Button>
          <p className="text-xs text-muted-foreground mt-3 opacity-70">
            Add the OG collection to your Telegram! 📱
          </p>
        </div>
      </div>
      
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-moonlight/30 rounded-full feather-float"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-meme-glow/40 rounded-full feather-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-8 w-4 h-4 bg-primary/20 rounded-full feather-float" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default StickerShowcase;