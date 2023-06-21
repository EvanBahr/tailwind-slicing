import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Section1 from "@/components/section1";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-24 pb-96">
        <Hero />
        <Section1 />
      </div>
    </div>
  );
}
