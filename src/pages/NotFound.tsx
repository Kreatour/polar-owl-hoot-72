import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-night px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl font-bold font-meme text-gradient-owl mb-4">404</h1>
          <Search className="h-16 w-16 text-moonlight mx-auto mb-4 opacity-50" />
        </div>
        
        <h2 className="text-2xl font-bold text-gradient-moonlight mb-4">
          Oops! This owl flew away
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Looks like this page got CTO'd too. Even owls can't find everything in the forest.
        </p>
        
        <Button 
          asChild
          size="lg"
          className="bg-gradient-owl hover:shadow-owl text-primary-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Return to Nest
          </a>
        </Button>
        
        <div className="mt-8 text-xs text-muted-foreground/60">
          <p>🦉 "Not all who wander are lost... but this page definitely is."</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
