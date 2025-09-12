import { Feather } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="sticky top-0 z-50 bg-gradient-night border-b border-border backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-2">
          <Feather className="h-4 w-4 text-moonlight feather-float" />
          <p className="text-sm font-meme font-bold text-gradient-moonlight animate-pulse">
            "Wisdom never dies, it just migrates to memes."
          </p>
          <Feather className="h-4 w-4 text-moonlight feather-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;