"use client";
import { getIsIndo } from "@/utils/data";

const TitleFunFact = () => {
  const lang = getIsIndo();
  return (
    <>
      <div className="absolute flex justify-center  items-center z-10 text-[17px] md:text-[34px] lg:text-[42px] w-full   ">
        <p
          style={{
            WebkitTextStroke: "0.5px #FFFFFF ",
            opacity: 0.42,
            color: "transparent",
          }}
        >
          {lang ? "Fakta Menarik" : "Fun Facts"}
        </p>
      </div>
      <p
        className="relative top-[6px] md:top-[12px] z-20 text-[#D5CDB6] text-[20px] md:text-[40px] lg:text-[50px] "
        style={{ textShadow: "0 0 10px rgba(214, 206, 186, 0.5)" }}
      >
        {lang ? "Fakta Menarik" : "Fun Facts"}
      </p>
    </>
  );
};

export default TitleFunFact;
