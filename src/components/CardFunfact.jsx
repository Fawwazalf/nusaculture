import Image from "next/image";

const CardFunfact = () => {
  return (
    <div className="w-[272px] h-[350px] rounded-[10px] bg-[#F1EBDA] p-[35px] flex flex-col items-center">
      <Image src="imgfunfact.svg" alt="" width={197.21} height={92.21} />
      <p className="text-[14px] font-semibold mt-[20px]">Funfact hahu</p>
      <div className="w-[60px] h-[3px] bg-black rounded-full mt-[10px] mb-[18px]"></div>
      <p className="text-[12px] text-justify">
        isi aja nanti isi aja nanti isi aja nanti isi aja nanti isi aja nanti
        isi aja nanti isi aja nanti isi aja nanti isi aja nanti isi aja nanti
        isi aja nanti isi aja nanti isi aja nanti isi aja nanti isi aja nanti
        isi aja nanti
      </p>
    </div>
  );
};

export default CardFunfact;
