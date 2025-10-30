import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art4 from "@/assets/art4.jpg";
import art5 from "@/assets/art5.jpg";
import art6 from "@/assets/art6.jpg";

const Collections = () => {
  const artworks = [
    {
      image: art1,
      title: "Geometric Flow",
      artist: "Elena Martinez",
      category: "Abstract Digital"
    },
    {
      image: art2,
      title: "Ethereal Dreams",
      artist: "Kai Chen",
      category: "AI Generated"
    },
    {
      image: art3,
      title: "Stellar Gateway",
      artist: "Marcus Johnson",
      category: "Concept Art"
    },
    {
      image: art4,
      title: "Aurora Mountains",
      artist: "Sofia Andersson",
      category: "Digital Landscape"
    },
    {
      image: art5,
      title: "Neon Pulse",
      artist: "Yuki Tanaka",
      category: "Cyberpunk"
    },
    {
      image: art6,
      title: "Enchanted Grove",
      artist: "Liam O'Connor",
      category: "Fantasy Art"
    }
  ];

  return (
    <section id="collections" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of digital paintings, AI art, and breathtaking concept designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div
              key={index}
              className="artwork-card group cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={`${artwork.title} by ${artwork.artist}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">{artwork.category}</span>
                <h3 className="text-2xl font-semibold mt-2 mb-1">{artwork.title}</h3>
                <p className="text-muted-foreground">by {artwork.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
