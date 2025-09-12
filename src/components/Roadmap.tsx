import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, Heart, Infinity } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      phase: "Nest Phase",
      description: "Hatched from OG sticker set",
      status: "completed",
      icon: CheckCircle,
      color: "text-primary"
    },
    {
      phase: "Flight Phase", 
      description: "Took off on TON",
      status: "completed",
      icon: CheckCircle,
      color: "text-secondary"
    },
    {
      phase: "CTO Phase",
      description: "Owl crashed, but the memes live forever",
      status: "crashed",
      icon: XCircle,
      color: "text-accent"
    },
    {
      phase: "Legacy Phase",
      description: "Owl remains a symbol of community vibes",
      status: "eternal",
      icon: Heart,
      color: "text-moonlight"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-meme mb-4 text-gradient-owl">
            Flight Path 🛤️
          </h2>
          <p className="text-lg text-muted-foreground">
            The journey of a wise owl through the crypto forest
          </p>
        </div>

        <div className="relative">
          {/* Flight path line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary via-accent to-moonlight opacity-30 hidden md:block" />
          
          <div className="space-y-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-owl transition-all duration-300 hover:scale-105 max-w-sm mx-auto">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-gradient-moonlight">{phase.phase}</h3>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full border-4 border-border bg-gradient-night flex items-center justify-center ${phase.status === 'crashed' ? 'animate-pulse' : ''}`}>
                      <Icon className={`h-8 w-8 ${phase.color}`} />
                    </div>
                  </div>
                  
                  <div className="flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border max-w-2xl mx-auto">
            <Infinity className="h-8 w-8 text-moonlight mx-auto mb-4" />
            <p className="text-muted-foreground italic">
              "Every ending is a new beginning. The owl may have crashed, but legends soar forever in the hearts of the community." 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;