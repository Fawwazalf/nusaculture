import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Carousel from "@/components/Carousel";
import CardFunfact from "@/components/CardFunfact";
import MapIndonesia from "@/components/MapIndonesia";

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
  return (
    <div className="bg-[#181818] ">
      <Navigation />
      <Carousel />
      <div className="h-[70vh] md:h-screen w-full flex flex-col justify-center items-center">
        <TitleMap />

        <MapIndonesia />
      </div>

      <div className="w-full h-full md:h-screen flex flex-col justify-center items-center  bg-[url('/bgFunFact.png')]">
        <TitleFunFact />

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
      <div className="w-full max-h-screen mb-[50px] md:h-screen flex flex-col justify-center items-center ">
        <Video />
      </div>
      <Footer />
    </div>
  );
}
