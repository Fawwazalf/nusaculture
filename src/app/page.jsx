import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import Carousel from "@/components/Carousel";
import MapIndonesia from "@/components/MapIndonesia";
import Funfact from "@/components/Funfact";

export default function Home() {
  return (
    <div className="bg-[#181818] ">
      <Navigation />
      <Carousel />
      <MapIndonesia />
      <FunFact />
      <Footer />
    </div>
  );
}
