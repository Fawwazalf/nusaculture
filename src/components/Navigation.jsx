import Link from "next/link";
import { Spirax } from "next/font/google";
import Image from "next/image";

const spirax = Spirax({ subsets: ["latin"], weight: "400", display: "swap" });
const Navigation = () => {
  return (
    <nav className="flex justify-between w-full px-[117px] py-5 text-[18px] items-center text-[#DCD7C9] fixed z-50 backdrop-blur-sm bg-black/10">
      <p className={`text-4xl  ${spirax.className}`}>Nusa Culture</p>
      <div className="flex">
        <ul className="flex justify-center items-center gap-[48px]">
          <li className="hover:underline underline-offset-4">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline underline-offset-4">
            <Link href="/explore">Explore</Link>
          </li>
          <li className="hover:underline underline-offset-4">
            <Link href="/">Quiz</Link>
          </li>
          <li className="hover:underline underline-offset-4">
            <Link href="/">Favorite</Link>
          </li>
        </ul>
        <div className="flex ml-6 bg-[#C3C3C3]/[0.15] py-[7px] px-[22px] rounded-[26px]  justify-center items-center mr-[20px]">
          <p className="mr-2 text-[#565555] cursor-pointer">ID</p>
          <div>|</div>
          <p className="ml-2 cursor-pointer">EN</p>
        </div>
        <div className=" bg-[#C3C3C3]/[0.15] w-[45px] h-[45px] rounded-[26px] flex justify-center items-center cursor-pointer">
          <Image src="/IconProfile.svg" alt="" width={25} height={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
