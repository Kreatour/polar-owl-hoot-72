import wiseOwlSticker from "@/assets/stickers/polar-owl-wise.gif";

const WiseOwlSection = () => {
  return (
    <section className="py-8 px-4 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="relative inline-block">
          <img 
            src={wiseOwlSticker} 
            alt="Wise Polar Owl pointing up with wisdom"
            className="w-32 h-32 mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-moonlight opacity-10 blur-xl animate-pulse"></div>
        </div>
        
        <p className="text-lg font-bold text-gradient-moonlight mt-4 opacity-80">
          "Listen up, fellow degenerates..."
        </p>
      </div>
    </section>
  );
};

export default WiseOwlSection;