import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sticker } from "lucide-react";
import polarOwlHero from "@/assets/polar-owl-hero.png";

const HeroSection = () => {
  const [isNightVision, setIsNightVision] = useState(false);

  const toggleNightVision = () => {
    setIsNightVision(!isNightVision);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl text-center">
        {/* Hero Owl */}
        <div 
          className={`relative mb-8 cursor-pointer transition-all duration-300 ${isNightVision ? 'night-vision' : ''}`}
          onClick={toggleNightVision}
        >
          <img 
            src={polarOwlHero} 
            alt="Polar Owl mascot - wise memecoin owl" 
            className="w-64 h-64 mx-auto owl-blink shadow-owl rounded-full bg-gradient-owl p-4 hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-full moonlight-glow opacity-20 pointer-events-none" />
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-bold font-meme mb-6 text-gradient-owl leading-tight">
          Polar Owl
        </h1>
        
        <p className="text-xl md:text-2xl font-bold text-gradient-meme mb-4">
          The Owl that flew... and then got CTO'd 🪦
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Born from OG Telegram stickers. Wise, meme-able, and unforgettable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-moonlight hover:shadow-moonlight text-primary-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Join the Nest (Telegram)
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-accent text-accent hover:bg-gradient-meme hover:text-accent-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Sticker className="mr-2 h-5 w-5" />
            Get Stickers
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 opacity-20">
          <div className="w-4 h-4 bg-moonlight rounded-full feather-float" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-20">
          <div className="w-6 h-6 bg-polar-ice rounded-full feather-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-20">
          <div className="w-3 h-3 bg-meme-glow rounded-full feather-float" style={{ animationDelay: '3s' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;