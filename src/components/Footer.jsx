import { Spirax } from "next/font/google";
import Image from "next/image";

const spirax = Spirax({ subsets: ["latin"], weight: "400" });
const Footer = () => {
  return (
    <div className="bg-[#2C3639] flex flex-col text-white justify-between h-[200px]">
      <div className="flex items-center w-full h-[150px] justify-between px-[150px]">
        <p className={`text-4xl text-center ${spirax.className}`}>
          Nusa Culture
        </p>
        <div className="">
          <div className="flex mb-[17px]">
            <Image src="IconEmail.svg" width={12.5} height={10} />
            <p className="text-[12px] ml-[7px]">pawpawculture@gmail.com</p>
          </div>
          <div className="flex">
            <Image src="IconDomain.svg" width={13.33} height={13.33} />
            <p className="text-[12px] ml-[7px]">www.nusaculture.com</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
      <div className="w-full text-center h-[50px] flex justify-center items-center">
        <p className="mt-[5px] text-[12px]">Made With Love By PawPaw!♡</p>
      </div>
    </div>
  );
};

export default Footer;
