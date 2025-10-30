import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Exhibitions from "@/components/Exhibitions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <Exhibitions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
