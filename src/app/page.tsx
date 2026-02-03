import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Marketing from "@/components/Marketing";
import MyGrids from "@/components/MyGrids";
import Navbar from "@/components/Navbar";
import Ownership from "@/components/Ownership";
import Partnership from "@/components/Partnership";
import PropertyDetails from "@/components/PropertyDetails";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyItMatters from "@/components/WhyItMatters";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar/>
      <HeroSection/>
      <Ownership/>
      <Benefits/>
      <PropertyDetails/>
      <WhyItMatters/>
      <MyGrids/>
      <WhyChooseUs/>
      <Partnership/>
      <Testimonials/>
      <Marketing/>
      <Footer/>
    </div>
  );
}
