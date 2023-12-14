"use client";
import Link from "next/link";
import { Spirax } from "next/font/google";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

const spirax = Spirax({ subsets: ["latin"], weight: "400", display: "swap" });
const Navigation = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [top, setTop] = useState(true);

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.current <= 0) {
      setTop(true);
    } else if (scrollY.prev > scrollY.current && scrollY.current > 0) {
      setHidden(false);
      setTop(false);
    } else {
      setHidden(true);
    }
  });
  return (
    <motion.nav
      variants={{
        topest: { y: 0, background: "transparent" },
        visible: { y: 0, backgroundColor: "#181818" },
        hidden: { y: -100, backgroundColor: "#181818" },
      }}
      animate={hidden ? "hidden" : top ? "topest" : "visible"}
      initial={"topest"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`flex justify-between w-full px-[117px] py-5 text-[18px] items-center text-[#DCD7C9] font-medium fixed  z-50 
      }`}
    >
      <p className={`text-4xl  ${spirax.className}`}>Nusa Culture</p>
      <div className="flex">
        <ul className="flex justify-center items-center gap-[48px]">
          <li className={`hover:underline underline-offset-[5px]  ${pathname === '/' ? 'underline underline-offset-[5px]' : ''}`}>
            <Link href="/">HOME</Link>
          </li>
          <li className={`hover:underline underline-offset-[5px] ${pathname === '/explore' ? 'underline underline-offset-[5px]' : ''}`}>
            <Link href="/explore">EXPLORE</Link>
          </li>
          <li className={`hover:underline underline-offset-[5px] ${pathname === '/quiz' ? 'underline underline-offset-[5px]' : ''}`}>
            <Link href="/quiz">QUIZ</Link>
          </li>
          <li className={`hover:underline underline-offset-[5px] ${pathname === '/favorite' ? 'underline underline-offset-[5px]' : ''}`}>
            <Link href="/favorite">FAVORITE</Link>
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
    </motion.nav>
  );
};

export default Navigation;
