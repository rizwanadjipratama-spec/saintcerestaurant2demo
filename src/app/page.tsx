import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Reservation from "@/components/Reservation";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <Reservation />
      <Info />
      <Footer />
    </main>
  );
}
