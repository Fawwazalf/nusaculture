"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const page = () => {
  const searchParams = useSearchParams();

  const userScore = searchParams.get("score");

  return (
    <div className="bg-[#181818] w-full h-screen flex flex-col justify-center items-center">
      <p className="text-[48px] font-semibold text-[#D6CEBA]">
        CONGRATULATIONS!
      </p>
      <Image src="/champ.svg" width={396} height={396} alt="" />
      <p className="text-[#DCD7C9] text-[18px] font-semibold mt-[5px]">
        Skor Anda
      </p>
      {userScore !== null ? (
        <p className="text-[36px] font-semibold text-[#DCD7C9]">
          <span className="text-[#9B6D48]">{userScore}</span> / 100
        </p>
      ) : (
        <p className="text-[36px] font-semibold text-[#DCD7C9]">
          Score not available
        </p>
      )}
      <div className="w-[525px] flex justify-between mt-[45px]">
        <Link href="/quiz">
          <button className="bg-[#FFF9E9]/10 border-2 border-[#FFF9E9] text-white text-[18px] font-medium w-[230px] h-[50px] rounded-[100px]">
            Mulai Ulang
          </button>
        </Link>
        <Link href="/quiz">
          <button className="bg-[#FFF9E9]/10 border-2 border-[#FFF9E9] text-white text-[18px] font-medium w-[230px] h-[50px] rounded-[100px]">
            Selanjutnya
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
