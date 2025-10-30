import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Digital Art Gallery</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("collections")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection("exhibitions")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Exhibitions
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Submit Art
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("collections")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection("exhibitions")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Exhibitions
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              Submit Art
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
