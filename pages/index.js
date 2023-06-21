import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="px-32 pb-96">
      <Hero />
    </div>
  );
}
