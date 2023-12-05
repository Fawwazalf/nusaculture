import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import Carousel from "@/components/Carousel";
import { Caladea } from "next/font/google";
import MapIndonesia from "@/components/MapIndonesia";
import CardFunfact from "@/components/CardFunfact";

export default function Home() {
  return (
    <div className="bg-[#181818] ">
      <Navigation />
      <Carousel />
      <div className="w-full h-full mt-[130px] flex flex-col justify-center items-center text-white">
        <p className="mb-[10px] text-[50px] font-semibold text-[#D5CDB6]">Let’s Explore With Us!</p>
        <p className="mb-[80px] text-white/30">Let’s Explore With Us!</p>
        <MapIndonesia />
      </div>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="mb-[45px] text-[40px] font-semibold text-[#D5CDB6]">Fakta Menarik</p>
        <div className="flex justify-between w-[1050px]">
          <CardFunfact/> 
          <CardFunfact/>
          <CardFunfact/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
