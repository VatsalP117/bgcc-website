import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });
import Nav from "@/components/Nav";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div className="flex flex-col h-full w-full  font-poppins">
      <div className="flex flex-col h-screen bg-hero bg-cover bg-center bg-no-repeat">
        <Nav />
        <section className="landing-text h-full flex flex-col justify-center items-center gap-4 ">
          <h1 className="text-6xl lg:text-8xl font-bold text-white text-center">
            BITS Goa Consulting Club
          </h1>
          <h2 className="text-2xl lg:text-4xl text-[#E5CF5F]">
            Insight. Impact. Excellence
          </h2>
        </section>
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
}
