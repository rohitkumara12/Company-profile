import AboutSection from "@/components/AboutSection";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutSection/>
      <Products/>
    </main>
  )
   
}


