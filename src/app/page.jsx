import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Carousel from "@/components/Carousel";
import CardFunfact from "@/components/CardFunfact";
import MapIndonesia from "@/components/MapIndonesia";
import { getIsIndo } from "@/utils/data";
import TitleMap from "@/components/TitleMap";
import TitleFunFact from "@/components/TitleFunFact";
import TitleVideo from "@/components/TitleVideo";
import Image from "next/image";

import dynamic from "next/dynamic";

const Video = dynamic(() => import("@/components/Video"), {
  ssr: false,
});

export default function Home() {
  const lang = getIsIndo();

  return (
    <div className="bg-[#181818] ">
      <Navigation />
      <Carousel />
      <div className=" h-screen w-full flex flex-col justify-center items-center">
        <div className="mb-[1wpx] text-[50px] font-semibold relative">
          <TitleMap />
        </div>

        <p className="mb-[40px] text-[#AEAEAE] w-[1000px] text-center mx-[100px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          voluptatibus aliquid esse magnam ullam illo laudantium!
          Teneturvoluptatum, nobis autem, magni aperiam minima omnis ducimus
          laboretempora quisquam expedita itaque?
        </p>
        <MapIndonesia />
      </div>
      <div className="w-full h-screen flex flex-col justify-center items-center  bg-[url('/bgFunFact.png')]">
        <div className="mb-[45px] font-semibold relative">
          <TitleFunFact />
        </div>
        <div className="flex justify-between w-[1050px]">
          <CardFunfact />
          <CardFunfact />
          <CardFunfact />
        </div>
      </div>
      <div className="h-screen flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center h-max mb-[20px]">
          <Image src="/imgVideo.svg" alt="hiasan" width={104} height={104} />
          <div className="font-semibold relative text-[50px]">
            <TitleVideo />
          </div>
          <Image src="/imgVideo2.svg" alt="hiasan" width={104} height={104} />
        </div>
        <Video />
      </div>
      <Footer />
    </div>
  );
}
