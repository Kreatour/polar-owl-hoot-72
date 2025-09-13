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
import stickerDoctor from "@/assets/stickers/polar-owl-doctor.gif";

const StickerShowcase = () => {
  const stickers = [
    { 
      id: 1, 
      image: stickerOk, 
      name: "OK Owl", 
      size: "w-32 h-32",
      position: "col-span-1 row-span-1",
      rotation: "rotate-12"
    },
    { 
      id: 2, 
      image: stickerParty, 
      name: "Party Owl", 
      size: "w-40 h-40",
      position: "col-span-1 row-span-2",
      rotation: "-rotate-6"
    },
    { 
      id: 3, 
      image: stickerDoctor, 
      name: "Dr. Owl", 
      size: "w-36 h-36",
      position: "col-span-1 row-span-1",
      rotation: "rotate-3"
    },
    { 
      id: 4, 
      image: stickerLaugh, 
      name: "CTO'd Owl", 
      size: "w-28 h-28",
      position: "col-span-1 row-span-1",
      rotation: "-rotate-12"
    },
    { 
      id: 5, 
      image: stickerShy, 
      name: "Shy Owl", 
      size: "w-32 h-32",
      position: "col-span-1 row-span-1",
      rotation: "rotate-6"
    },
    { 
      id: 6, 
      image: stickerFormal, 
      name: "Formal Owl", 
      size: "w-36 h-36",
      position: "col-span-1 row-span-1",
      rotation: "-rotate-3"
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

        {/* Creative masonry-style layout */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-meme-glow/10 to-moonlight/5 rounded-3xl blur-3xl"></div>
          
          {/* Floating stickers arrangement */}
          <div className="relative grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-8">
            
            {/* Top row - scattered */}
            <div className="col-start-1 md:col-start-2 transform -translate-y-4 rotate-12">
              <div className="group cursor-pointer">
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:-rotate-6">
                  <img src={stickerOk} alt="OK Owl" className="w-20 h-20 mx-auto group-hover:animate-bounce" />
                  <p className="text-xs font-bold text-center mt-2 text-gradient-owl">OK Owl</p>
                </div>
              </div>
            </div>

            <div className="col-start-3 md:col-start-4 lg:col-start-5 transform translate-y-8 -rotate-6">
              <div className="group cursor-pointer">
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-meme-glow/50 transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <img src={stickerShy} alt="Shy Owl" className="w-24 h-24 mx-auto group-hover:animate-pulse" />
                  <p className="text-xs font-bold text-center mt-2 text-gradient-meme">Shy Owl</p>
                </div>
              </div>
            </div>

            {/* Center feature - larger */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2 col-start-1 md:col-start-1 lg:col-start-2 row-start-2 transform rotate-3">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-6 border-2 border-accent/30 hover:border-accent transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                  <img src={stickerParty} alt="Party Owl" className="w-32 h-32 lg:w-40 lg:h-40 mx-auto group-hover:animate-spin group-hover:scale-110 transition-all duration-300" />
                  <p className="text-sm font-bold text-center mt-3 text-gradient-accent">Party Owl</p>
                  <div className="w-16 h-1 bg-gradient-accent mx-auto mt-2 rounded-full opacity-60 group-hover:opacity-100"></div>
                </div>
              </div>
            </div>

            {/* Right side scattered */}
            <div className="col-start-3 md:col-start-4 lg:col-start-5 row-start-2 transform translate-y-4 rotate-6">
              <div className="group cursor-pointer">
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-rotate-12">
                  <img src={stickerDoctor} alt="Dr. Owl" className="w-28 h-28 mx-auto group-hover:animate-bounce" />
                  <p className="text-xs font-bold text-center mt-2 text-gradient-primary">Dr. Owl</p>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="col-start-2 md:col-start-1 lg:col-start-1 row-start-3 transform -translate-y-2 -rotate-12">
              <div className="group cursor-pointer">
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-moonlight/50 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <img src={stickerLaugh} alt="CTO'd Owl" className="w-22 h-22 mx-auto group-hover:animate-pulse" />
                  <p className="text-xs font-bold text-center mt-2 text-gradient-moonlight">CTO'd Owl</p>
                </div>
              </div>
            </div>

            <div className="col-start-3 md:col-start-3 lg:col-start-4 row-start-3 transform translate-y-6 rotate-9">
              <div className="group cursor-pointer">
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-polar-ice/50 transition-all duration-300 hover:scale-110 hover:-rotate-3">
                  <img src={stickerFormal} alt="Formal Owl" className="w-26 h-26 mx-auto group-hover:animate-bounce" />
                  <p className="text-xs font-bold text-center mt-2 text-gradient-polar">Formal Owl</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-meme hover:shadow-meme text-accent-foreground font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-110 group relative overflow-hidden"
            onClick={() => window.open('https://t.me/addstickers/Polar_Owl', '_blank')}
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