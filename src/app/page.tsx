import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TipsSection from "@/components/TipsSection";
import RecipesSection from "@/components/RecipesSection";
import GettingStarted from "@/components/GettingStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TipsSection />
        <RecipesSection />
        <GettingStarted />
      </main>
      <Footer />
    </div>
  );
}
