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
import LandingQuiz from "@/components/LandingQuiz";

const Video = dynamic(() => import("@/components/Video"), {
  ssr: false,
});

export default function Home() {
  const lang = getIsIndo();

  return (
    <div className="bg-[#181818] ">
      <Navigation />
      <Carousel />
      <div className="h-[70vh] md:h-screen w-full flex flex-col justify-center items-center">
        <div className="mb-[10px] text-[20px] md:text-[40px] lg:text-[50px] font-semibold relative w-fit">
          <TitleMap />
        </div>

        <p className="mb-[40px] text-[#AEAEAE] text-[10px] md:text-[14px] w-[75%] text-center ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          voluptatibus aliquid esse magnam ullam illo laudantium!
        </p>
        <MapIndonesia />
      </div>
      <div className="w-full h-full md:h-screen flex flex-col justify-center items-center  bg-[url('/bgFunFact.png')]">
        <div className="mb-[45px] font-semibold relative">
          <TitleFunFact />
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:justify-between w-[80%] md:w-[600px] lg:w-[900px] xl:w-[1050px]">
          <CardFunfact
            title="1728 WBTb"
            desc="Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi telah menetapkan sebanyak 1728 Warisan Budaya Takbenda (WBTb) Indonesia sejak tahun 2013 hingga 2022
"
          />
          <CardFunfact
            title="11.622 Budaya"
            desc="Per November 2022, terdapat 11.622 warisan budaya yang dicatat dan 1.728 di antaranya telah ditetapkan."
          />
          <CardFunfact
            title="peringkat ke-39 sedunia"
            desc="Kekayaan budaya Indonesia mengantarkan negara yang dilewati khatulistiwa menempati peringkat ke-39 sedunia dalam 'World Cultural Heritage' versi 'World Economic Forum' (WEF)."
          />
        </div>
      </div>
      <LandingQuiz />
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center h-max mb-[20px]">
          <div className="w-[45px] h-[45px] md:w-[90px] md:h-[90px] lg:w-[104px] lg:h-[104px]">
            <Image
              src="/imgVideo.svg"
              alt="hiasan"
              width={104}
              height={104}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="font-semibold relative text-[20px] md:text-[40px] lg:text-[50px] w-full">
            <TitleVideo />
          </div>
          <div className="w-[45px] h-[45px] md:w-[90px] md:h-[90px] lg:w-[104px] lg:h-[104px]">
            <Image
              src="/imgVideo2.svg"
              alt="hiasan"
              width="104"
              height="104"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </div>
        <Video />
      </div>
      <Footer />
    </div>
  );
}
