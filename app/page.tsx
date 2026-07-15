import LoadingScreen from "@/components/LoadingScreen";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import VideoShowcase from "@/components/sections/VideoShowcase";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <Navbar />

      <main className="bg-[#050505] text-white overflow-x-hidden">
        <Hero />
        <Services />
        <FeaturedWork />
        <VideoShowcase />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}