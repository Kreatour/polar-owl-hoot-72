import { useEffect, useState } from "react";
import polarOwlHero from "@/assets/polar-owl-hero.png";
import stickerCoffee2 from "@/assets/stickers/polar-owl-coffee-2.gif";

const Footer = () => {
  const [hootCount, setHootCount] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'h' && window.scrollY > document.body.scrollHeight - window.innerHeight - 100) {
        setHootCount(prev => prev + 1);
        
        // Play hoot sound effect (visual feedback)
        const hootElement = document.createElement('div');
        hootElement.textContent = '🦉 HOOT!';
        hootElement.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gradient-moonlight animate-bounce z-50 pointer-events-none';
        document.body.appendChild(hootElement);
        
        setTimeout(() => {
          document.body.removeChild(hootElement);
        }, 2000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <footer className="py-16 px-4 bg-gradient-to-t from-card/50 to-background border-t border-border relative">
      {/* Floating coffee sticker */}
      <div className="absolute top-8 left-4 md:left-12 z-10 opacity-50 hover:opacity-90 transition-opacity duration-300 feather-float" style={{ animationDelay: '1s' }}>
        <img 
          src={stickerCoffee2} 
          alt="Coffee owl with big eyes"
          className="w-14 h-14 md:w-18 md:h-18 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      </div>
      
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="mb-6">
            <img 
              src={polarOwlHero} 
              alt="Polar Owl footer logo" 
              className="w-16 h-16 mx-auto rounded-full bg-gradient-owl p-2 opacity-80"
            />
          </div>
          
          <h3 className="text-2xl font-bold font-meme text-gradient-owl mb-4">
            Polar Owl
          </h3>
          
          <div className="max-w-2xl mx-auto bg-muted/20 rounded-lg p-6 border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Polar Owl was CTO'd. This site is for memes, nostalgia, and community fun — not financial advice. 
              <span className="text-gradient-meme font-semibold"> Hoot responsibly.</span>
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-gradient-owl" />
            <span className="text-muted-foreground text-sm">🦉</span>
            <div className="w-12 h-0.5 bg-gradient-owl" />
          </div>
          
          <p className="text-xs text-muted-foreground">
            Built with ❤️ for the Polar Owl community
          </p>
          
          {hootCount > 0 && (
            <p className="text-xs text-moonlight mt-2 animate-pulse">
              Hoot counter: {hootCount} 🦉
            </p>
          )}
          
          <p className="text-xs text-muted-foreground/60 mt-4 italic">
            Easter egg: Scroll to bottom and press 'H' to make the owl hoot back! 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;