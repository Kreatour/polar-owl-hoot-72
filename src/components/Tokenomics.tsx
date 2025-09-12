import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Infinity, Users, Sparkles } from "lucide-react";

const Tokenomics = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-meme mb-4 text-gradient-meme">
            Hootenomics 🦉
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The economics of wisdom, memes, and community spirit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-card/50 to-primary/10 backdrop-blur-sm border-primary/20 hover:shadow-owl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <Infinity className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-gradient-owl">Supply</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-bold text-2xl text-gradient-moonlight mb-2">∞</p>
              <p className="text-muted-foreground">
                Infinite wisdom, finite memes
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card/50 to-secondary/10 backdrop-blur-sm border-secondary/20 hover:shadow-moonlight transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-2" />
              <CardTitle className="text-gradient-moonlight">Distribution</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-bold text-2xl text-gradient-meme mb-2">100%</p>
              <p className="text-muted-foreground">
                To the community (and 0% left after the CTO)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card/50 to-accent/10 backdrop-blur-sm border-accent/20 hover:shadow-meme transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <Sparkles className="h-12 w-12 text-accent mx-auto mb-2" />
              <CardTitle className="text-gradient-meme">Utility</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-bold text-2xl text-gradient-owl mb-2">Pure</p>
              <p className="text-muted-foreground">
                Meme fuel, sticker flex, community nostalgia
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground italic">
              "Economics? We had infinite supply and zero liquidity after the CTO. 
              But somehow, the value keeps growing in our hearts." 💔
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;