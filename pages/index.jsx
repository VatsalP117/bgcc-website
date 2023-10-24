import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Stratergies from "@/components/Stratergies";
import Newsletter from "@/components/Newsletter";
import Clients from "@/components/Clients";
import SeeAll from "@/components/SeeAll";
import { useState } from "react";
export default function Home() {
  return (
    <div className="flex flex-col h-full w-full  font-poppins">
      <div className="flex flex-col h-screen bg-hero bg-cover bg-center bg-no-repeat overflow-y-auto">
        <Nav />
        <section className="landing-text h-full flex flex-col justify-center items-center gap-4 ">
          <h1 className="text-6xl lg:text-7xl font-bold text-white text-center">
            BITS Goa Consulting Club
          </h1>
          <h2 className="text-2xl lg:text-4xl text-[#E5CF5F]">
            Insight. Impact. Excellence
          </h2>
        </section>
      </div>
      <Services />
      <div className="flex flex-col items-center gap-4 lg:gap-6 mx-auto mb-10 lg:mb-16 p-6 md:p-12 lg:p-16 xl:p-20">
        <SeeAll />
        <Stratergies />
      </div>
      <Clients />
      <Newsletter />
    </div>
  );
}
