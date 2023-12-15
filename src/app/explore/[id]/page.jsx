"use client";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { getCulture } from "@/utils/data";
import { Ruthie } from "next/font/google";
import Image from "next/image";

import { useParams } from "next/navigation";

const ruthie = Ruthie({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const page = () => {
  const params = useParams();

  const culture = getCulture(parseInt(params.id));
  const titleCapitalize = culture.title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="bg-[#181818] w-full h-full">
      <Navigation />
      <div className="pt-[130px] flex flex-col items-center">
        <div className="flex">
          <div className="w-[480px] h-[430px]">
            <Image
              src={culture.img}
              alt={titleCapitalize}
              width={480}
              height={430}
              style={{
                borderRadius: "15px",
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
              quality={100}
              priority
            />
          </div>
          <div className="mt-[15px] flex flex-col items-center">
            <div className="flex items-center justify-center mb-[20px] w-max relative">
              <div className=" h-[30px] bg-[#725035] absolute w-full"></div>
              <p
                className={` ${ruthie.className} text-[40px] text-[#FFF9E9] relative mt-[-25px] tracking-[0.5em] indent-2    `}
              >
                -{titleCapitalize}-
              </p>
            </div>
            <div className="flex w-[760px] h-[355px]">
              <div className="w-[5px] h-full bg-[#DCD7C9] justify-center mt-[5px] mr-[25px] ml-[25px]"></div>
              <p className="text-[#FFF9E9] w-full h-full font-light text-justify">
                {culture.desc1}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex mt-[50px] mb-[125px]">
            <div className="flex w-[760px] h-[590px]">
              <p className="text-[#FFF9E9] w-full h-full font-light text-justify">
                {culture.desc2}
              </p>
              <div className="w-[5px] h-full bg-[#DCD7C9] justify-center mt-[5px] mr-[25px] ml-[25px]"></div>
            </div>
            <div className="w-[480px] h-[595px]">
              <Image
                src={culture.img}
                alt={titleCapitalize}
                width={480}
                height={595}
                style={{
                  borderRadius: "15px",
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
