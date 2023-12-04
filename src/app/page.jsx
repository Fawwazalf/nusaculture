import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import Carousel from "@/components/Carousel";
import { Caladea } from "next/font/google";
import MapIndonesia from "@/components/MapIndonesia";

export default function Home() {
  return (
    <div className="bg-[#181818] ">
      <Navigation />
      <Carousel />
      <MapIndonesia />
      <Footer />
    </div>
  );
}
