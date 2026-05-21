import Navbar13 from "@/components/Navbar13";
import Hero13 from "@/components/Hero13";
import TipsSection13 from "@/components/TipsSection13";
import RecipesSection13 from "@/components/RecipesSection13";
import GettingStarted13 from "@/components/GettingStarted13";
import Footer13 from "@/components/Footer13";

export default function ODS13() {
  return (
    <div className="min-h-screen">
      <Navbar13 />
      <main>
        <Hero13 />
        <TipsSection13 />
        <RecipesSection13 />
        <GettingStarted13 />
      </main>
      <Footer13 />
    </div>
  );
}
