import Link from "next/link";
import { Spirax } from "next/font/google";

const spirax = Spirax({ subsets: ["latin"], weight: "400" });
const Navigation = () => {
  return (
    <nav className="flex justify-between mx-[117px] pt-7 text-[18px] items-center text-white sticky z-50">
      <p className={`text-4xl  ${spirax.className}`}>Nusa Culture</p>
      <div className="flex">
        <ul className="flex justify-center items-center gap-[48px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Explore</Link>
          </li>
          <li>
            <Link href="/">Quiz</Link>
          </li>
          <li>
            <Link href="/">Favorite</Link>
          </li>
        </ul>
        <div className="flex ml-6 bg-[#C3C3C3]/[0.15] py-[7px] px-[22px] rounded-[26px]  justify-center items-center mr-[20px]">
          <p className="mr-2 text-[#565555]">ID</p>
          <div>|</div>
          <p className="ml-2">EN</p>
        </div>
        <div className=" bg-[#C3C3C3]/[0.15] w-[45px] h-[45px] rounded-[26px] flex justify-center items-center">
          <img src="iconProfile.svg" alt="" className="w-[25px] h-[25px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
