import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroArtwork from "@/assets/hero-artwork.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Where Digital Art
              <span className="block gradient-text">Comes to Life</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Discover breathtaking digital masterpieces, AI-generated art, and concept designs from visionary artists around the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                onClick={() => scrollToSection("collections")}
              >
                Explore Gallery
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-secondary"
                onClick={() => scrollToSection("contact")}
              >
                Submit Your Work
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="artwork-card overflow-hidden">
              <img
                src={heroArtwork}
                alt="Featured digital artwork showcasing cyberpunk cityscape"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
