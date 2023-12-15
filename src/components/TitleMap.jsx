"use client";
import { getIsIndo } from "@/utils/data";

const TitleMap = () => {
  const lang = getIsIndo();
  return (
    <>
      <p
        className="absolute top-[2px] left-[4px] z-10 w-max "
        style={{
          WebkitTextStroke: "1px #FFFFFF ",
          opacity: 0.42,
          color: "transparent",
        }}
      >
        {lang ? "Mari Cari Tahu Bersama Kami!" : "Let’s Explore With Us!"}
      </p>
      <p className="relative z-20 text-[#D5CDB6] ">
        {lang ? "Mari Cari Tahu Bersama Kami!" : "Let’s Explore With Us!"}
      </p>
    </>
  );
};

export default TitleMap;
