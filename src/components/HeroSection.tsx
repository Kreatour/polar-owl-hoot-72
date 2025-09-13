import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sticker, Twitter, Copy, Check, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import polarOwlHero from "@/assets/polar-owl-hero-curious.gif";

const HeroSection = () => {
  const [isNightVision, setIsNightVision] = useState(false);
  const [copiedCA, setCopiedCA] = useState(false);
  const { toast } = useToast();
  
  // Contract address
  const contractAddress = "EQCLc8jRnpyRqZPthgH7dM4G-cDFpW7MY4k3Pj1_7fWPhQfN";

  const toggleNightVision = () => {
    setIsNightVision(!isNightVision);
  };

  const copyContractAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopiedCA(true);
      toast({
        title: "Contract Address Copied!",
        description: "CA has been copied to your clipboard",
      });
      setTimeout(() => setCopiedCA(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy manually: " + contractAddress,
        variant: "destructive",
      });
    }
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

        {/* Contract Address */}
        <div className="mb-6 p-4 bg-card/30 backdrop-blur-sm rounded-2xl border border-border max-w-md mx-auto">
          <p className="text-sm text-muted-foreground mb-2">Contract Address:</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-sm font-mono bg-muted/50 p-2 rounded text-foreground overflow-hidden text-ellipsis">
              {contractAddress.slice(0, 20)}...{contractAddress.slice(-8)}
            </code>
            <Button
              size="sm"
              variant="ghost"
              onClick={copyContractAddress}
              className="p-2 hover:bg-accent/20"
            >
              {copiedCA ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-meme hover:shadow-meme text-primary-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Buy Polar Owl
          </Button>
          
          {/* Social Icon Buttons */}
          <div className="flex gap-4 justify-center items-center">
            <Button 
              size="icon"
              variant="outline"
              className="w-12 h-12 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full transition-all duration-300 hover:scale-110"
            >
              <Twitter className="h-6 w-6" />
            </Button>
            
            <Button 
              size="icon"
              variant="outline"
              className="w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </div>
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