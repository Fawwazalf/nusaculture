"use client";

import { getIsIndo } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const page = () => {
  const lang = getIsIndo();
  const searchParams = useSearchParams();

  const userScore = searchParams.get("score");

  return (
    <div className="bg-[#181818] w-full h-screen flex flex-col justify-center items-center">
      <p
        className="text-[26px] md:text-[38px] lg:text-[48px] font-semibold text-[#D6CEBA]"
        style={{ textShadow: "0 0 10px rgba(214, 206, 186, 0.5)" }}
      >
        {lang ? "SELAMAT!" : "CONGRATULATIONS!"}
      </p>
      <div className=" w-[265px] h-[265px] md:w-[350px] md:h-[350px] lg:w-[396px] lg:h-[396px]">
        <Image
          src="/champ.svg"
          width={396}
          height={396}
          alt=""
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <p className="text-[#DCD7C9] text-[16px] md:text-[18px] font-semibold mt-[5px]">
        {lang ? "Skor Anda" : "Your Scores"}
      </p>
      {userScore !== null ? (
        <p className=" text-[32px] md:text-[36px] font-semibold text-[#DCD7C9]">
          <span className="text-[#9B6D48]">{userScore}</span> / 100
        </p>
      ) : (
        <p className="text-[36px] font-semibold text-[#DCD7C9]">
          {lang ? "Skor tidak tersedia" : "Score not available"}
        </p>
      )}
      <div className="w-[265px] md:w-[490px] lg:w-[525px] flex justify-between mt-[30px] md:mt-[45px]">
        <Link href="/quiz">
          <button className="bg-[#FFF9E9]/10 border-2 border-[#FFF9E9] text-white text-[12px] md:text-[16px] lg:text-[18px] font-medium w-[125px] md:w-[230px] h-[38px] md:h-[55px] rounded-[100px] hover:border-[#725035]">
            {lang ? "Mulai Ulang" : "Start Again"}
          </button>
        </Link>
        <Link href="/quiz">
          <button className="bg-[#FFF9E9]/10 border-2 border-[#FFF9E9] text-white text-[12px] md:text-[16px] lg:text-[18px] font-medium w-[125px] md:w-[230px] h-[38px] md:h-[55px] rounded-[100px] hover:border-[#725035]">
            {lang ? "Selanjutnya" : "Next"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
