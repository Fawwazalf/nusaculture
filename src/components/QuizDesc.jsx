"use client";

import { getIsIndo } from "@/utils/data";
import Link from "next/link";

const QuizDesc = () => {
  const lang = getIsIndo();
  return (
    <>
      <div className="relative text-[48px] lg:text-[80px] font-semibold w-min">
        <p
          className="absolute top-[1px] left-[4px] z-10 w-full "
          style={{
            WebkitTextStroke: "1px #FFFFFF ",
            opacity: 0.42,
            color: "transparent",
          }}
        >
          {lang ? "KUIS BUDAYA!" : "CULTURE QUIZ!"}
        </p>
        <p className="z-20 text-[#D5CDB6] w-full ">
          {lang ? "KUIS BUDAYA!" : "CULTURE QUIZ!"}
        </p>
      </div>
      <p className="text-[12px]  lg:text-[16px]  text-[#FFFFFF]/[0.5] mb-[19px]">
        |
        {lang
          ? " Mari bermain quiz seputar kebudayaan Indonesia"
          : " Let's play a quiz about Indonesian culture"}
      </p>
      <Link
        href="/quiz/play"
        className="bg-[#725035] font-semibold text-[#FFF9E9] text-[12px] lg:text-[18px] py-[10px] px-[50px] rounded-[100px] "
      >
        {lang ? "Mulai" : "Start"}
      </Link>
    </>
  );
};

export default QuizDesc;
