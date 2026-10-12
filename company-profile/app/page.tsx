import Hero from "@/components/hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Products from "@/components/products";
import ContactSection from "@/components/contactSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Products />
      <ContactSection />
      
    </main>
  );
}