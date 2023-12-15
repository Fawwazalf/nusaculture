import Image from "next/image";

const CardFunfact = () => {
  return (
    <div
      className="w-[165px] h-[260px] rounded-[5px] md:w-[272px] md:h-[350px] md:rounded-[10px] bg-[#F1EBDA] p-[17px] md:p-[35px] flex flex-col items-center "
      style={{ boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.20)" }}
    >
      <Image src="imgfunfact.svg" alt="" width={197.21} height={92.21} />
      <p className="text-[12px] md:text-[14px] font-semibold mt-[10px] md:mt-[20px]">Funfact hahu</p>
      <div className="w-[60px] h-[2px] bg-black rounded-full mt-[3px] mb-[15px] md:mt-[3px] md:mb-[14px]"></div>
      <p className="text-[9px] md:text-[12px] text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, quasi hic
        rem incidunt ullam, maxime iste omnis voluptatem fugit et nostrum veniam
        suscipit amet voluptate ex ducimus labore commodi? Perferendis!
      </p>
    </div>
  );
};

export default CardFunfact;
