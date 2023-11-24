import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import Carousel from "@/components/Carousel";
import { Caladea } from "next/font/google";

export default function Home() {
  return (
    <>
      <Navigation />
      <Carousel />
      <Footer />
    </>
  );
}
