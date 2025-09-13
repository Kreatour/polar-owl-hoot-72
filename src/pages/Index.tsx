import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import WiseOwlSection from "@/components/WiseOwlSection";
import AboutSection from "@/components/AboutSection";
import StickerShowcase from "@/components/StickerShowcase";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-night">
      <TopBanner />
      <main>
        <HeroSection />
        <WiseOwlSection />
        <AboutSection />
        <StickerShowcase />
        <Tokenomics />
        <Roadmap />
        <CommunitySection />
      </main>
      <Footer />
      
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-moonlight rounded-full opacity-20 feather-float" />
        <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-polar-ice rounded-full opacity-15 feather-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-meme-glow rounded-full opacity-25 feather-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-primary rounded-full opacity-20 feather-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <Toaster />
    </div>
  );
};

export default Index;