import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import Carousel from "@/components/Carousel";
import MapLayout from "@/layouts/MapLayout";
import FunFactLayout from "@/layouts/FunFactLayout";

export default function Home() {
  return (
    <div className="bg-[#181818] ">
      <Navigation />
      <Carousel />
      <MapLayout />
      <FunFactLayout />

      <Footer />
    </div>
  );
}
