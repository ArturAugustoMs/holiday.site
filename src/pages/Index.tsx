import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HolidayCampSection from "@/components/HolidayCampSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Moveit from "@/components/Moveit";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HolidayCampSection />
      <Moveit/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
