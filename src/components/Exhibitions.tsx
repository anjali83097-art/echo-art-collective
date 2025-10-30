import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "./ui/button";

const Exhibitions = () => {
  const exhibitions = [
    {
      title: "Digital Futures",
      date: "January 15 - February 28, 2025",
      location: "Virtual Gallery",
      artists: "12 Featured Artists",
      description: "Explore the cutting edge of AI-generated art and digital innovation in this groundbreaking online exhibition."
    },
    {
      title: "Cyberpunk Dreams",
      date: "March 10 - April 20, 2025",
      location: "Online Exhibition",
      artists: "8 Featured Artists",
      description: "Immerse yourself in neon-lit visions of the future through stunning cyberpunk-inspired digital artworks."
    },
    {
      title: "Abstract Dimensions",
      date: "May 5 - June 15, 2025",
      location: "Virtual Space",
      artists: "15 Featured Artists",
      description: "A celebration of abstract digital art that challenges perception and explores new artistic dimensions."
    }
  ];

  return (
    <section id="exhibitions" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="gradient-text">Exhibitions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for exclusive online art shows featuring the finest digital artists from around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="artwork-card p-8 hover-lift flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-4">{exhibition.title}</h3>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{exhibition.date}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{exhibition.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{exhibition.artists}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{exhibition.description}</p>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
