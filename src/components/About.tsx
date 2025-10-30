import { Palette, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Curated Excellence",
      description: "Hand-picked digital artworks that push the boundaries of creativity and innovation."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Artist Community",
      description: "Supporting talented digital artists and providing a platform to showcase their vision."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Premium Quality",
      description: "Every piece meets our high standards for artistic merit and technical execution."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Our Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're dedicated to promoting exceptional digital artists and bringing their imaginative creations to art enthusiasts worldwide. 
            Our gallery bridges the gap between traditional art appreciation and the digital frontier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="artwork-card p-8 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
