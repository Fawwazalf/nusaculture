"use client";
import Link from "next/link";
import { Spirax } from "next/font/google";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { setEng, setIndo, getIsIndo, logout, getIsLogin } from "@/utils/data";
import { useRouter } from "next/navigation";

const spirax = Spirax({ subsets: ["latin"], weight: "400", display: "swap" });

const Navigation = () => {
  const lang = getIsIndo();
  const router = useRouter();
  const isLogin = getIsLogin();
  const [isOpen, setIsOpen] = useState(false);
  const handleClickProfile = () => {
    setIsOpen(true);
  };
  const handleExitProfile = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    router.push("login");
  };

  const pathname = usePathname();
  const handleSetIndo = () => {
    setIndo();
    router.refresh();
  };

  const handleSetEng = () => {
    setEng();
    router.refresh();
  };

  const handleLogout = () => {
    logout();
    router.refresh();
  };

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
    <>
      <motion.nav
        variants={{
          topest: { y: 0, background: "transparent" },
          visible: { y: 0, backgroundColor: "#181818" },
          hidden: { y: -100 },
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
            <li
              className={`hover:underline underline-offset-[5px]  ${
                pathname === "/" ? "underline underline-offset-[5px]" : ""
              }`}
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              className={`hover:underline underline-offset-[5px] ${
                pathname === "/explore"
                  ? "underline underline-offset-[5px]"
                  : ""
              }`}
            >
              <Link href="/explore">EXPLORE</Link>
            </li>
            <li
              className={`hover:underline underline-offset-[5px] ${
                pathname === "/quiz" ? "underline underline-offset-[5px]" : ""
              }`}
            >
              <Link href="/quiz">QUIZ</Link>
            </li>
            <li
              className={`hover:underline underline-offset-[5px] ${
                pathname === "/favorite"
                  ? "underline underline-offset-[5px]"
                  : ""
              }`}
            >
              <Link href="/favorite">FAVORITE</Link>
            </li>
          </ul>
          <div className="flex ml-6 bg-[#C3C3C3]/[0.15] py-[7px] px-[22px] rounded-[26px]  justify-center items-center mr-[20px]">
            <p
              className={` ${lang ? "" : "text-[#565555]"} mr-2 cursor-pointer`}
              onClick={() => handleSetIndo()}
            >
              ID
            </p>
            <div>|</div>
            <p
              className={` ${lang ? "text-[#565555]" : ""} ml-2 cursor-pointer`}
              onClick={() => handleSetEng()}
            >
              EN
            </p>
          </div>
          <div
            className=" bg-[#C3C3C3]/[0.15] w-[45px] h-[45px] rounded-[26px] flex justify-center items-center cursor-pointer"
            onClick={() => handleClickProfile()}
          >
            <Image src="/IconProfile.svg" alt="" width={25} height={25} />
          </div>
        </div>
      </motion.nav>
      <motion.div
        className="flex flex-col items-center fixed  top-[150px] right-[117px] z-40"
        variants={{
          open: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
          closed: {
            opacity: 0,
            scale: 0,
            y: -100,
            transition: { duration: 0.2 },
          },
          scroll: {
            scale: 1,
            opacity: 1,
            y: -90,
            transition: { duration: 0.5 },
          },
        }}
        initial={false}
        animate={isOpen ? (hidden ? "scroll" : "open") : "closed"}
      >
        <div className="w-[118px] h-[118px] bg-[#F1ECDE] mt-[-59px] flex justify-center items-center rounded-full fixed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.3333 13.9167C17.3333 10.292 18.7732 6.81587 21.3362 4.25287C23.8992 1.68988 27.3754 0.25 31 0.25C34.6246 0.25 38.1008 1.68988 40.6638 4.25287C43.2268 6.81587 44.6667 10.292 44.6667 13.9167C44.6667 17.5413 43.2268 21.0175 40.6638 23.5805C38.1008 26.1435 34.6246 27.5833 31 27.5833C27.3754 27.5833 23.8992 26.1435 21.3362 23.5805C18.7732 21.0175 17.3333 17.5413 17.3333 13.9167ZM17.3333 34.4167C12.8026 34.4167 8.45734 36.2165 5.25359 39.4203C2.04985 42.624 0.25 46.9692 0.25 51.5C0.25 54.2185 1.32991 56.8256 3.25216 58.7478C5.1744 60.6701 7.78153 61.75 10.5 61.75H51.5C54.2185 61.75 56.8256 60.6701 58.7478 58.7478C60.6701 56.8256 61.75 54.2185 61.75 51.5C61.75 46.9692 59.9502 42.624 56.7464 39.4203C53.5427 36.2165 49.1974 34.4167 44.6667 34.4167H17.3333Z"
              fill="#20292C"
            />
          </svg>
        </div>
        <div className="w-[350px] h-[258px] bg-[#20292C] rounded-[20px]">
          <div className="flex justify-end m-[20px]">
            <button onClick={() => handleExitProfile()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M5.096 3.178L10.5 8.582L15.876 3.206C15.9948 3.0796 16.1378 2.97849 16.2966 2.90873C16.4554 2.83896 16.6266 2.80198 16.8 2.8C17.1713 2.8 17.5274 2.9475 17.79 3.21005C18.0525 3.4726 18.2 3.8287 18.2 4.2C18.2033 4.37164 18.1714 4.54214 18.1064 4.70103C18.0414 4.85993 17.9446 5.00386 17.822 5.124L12.376 10.5L17.822 15.946C18.0527 16.1717 18.188 16.4774 18.2 16.8C18.2 17.1713 18.0525 17.5274 17.79 17.7899C17.5274 18.0525 17.1713 18.2 16.8 18.2C16.6216 18.2074 16.4436 18.1776 16.2773 18.1125C16.111 18.0475 15.96 17.9485 15.834 17.822L10.5 12.418L5.11 17.808C4.99171 17.9302 4.85039 18.0277 4.6942 18.095C4.53802 18.1623 4.37005 18.198 4.2 18.2C3.8287 18.2 3.4726 18.0525 3.21005 17.7899C2.9475 17.5274 2.8 17.1713 2.8 16.8C2.79674 16.6284 2.82858 16.4579 2.89358 16.299C2.95859 16.1401 3.05537 15.9961 3.178 15.876L8.624 10.5L3.178 5.054C2.94726 4.82826 2.81196 4.52258 2.8 4.2C2.8 3.8287 2.9475 3.4726 3.21005 3.21005C3.4726 2.9475 3.8287 2.8 4.2 2.8C4.536 2.8042 4.858 2.94 5.096 3.178Z"
                  fill="#DCD7C9"
                />
              </svg>
            </button>
          </div>
          <div className=" flex flex-col items-center">
            <div className="flex w-[230px] mt-[30px] justify-center">
              <p className="text-white font-medium mr-[8px]">
                {isLogin ? "Sudah Login" : "Belum Login"}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2 11.64V13.6667C2 13.8533 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62666L9.37333 4.12666L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69333C13.8685 4.63165 13.9175 4.5584 13.951 4.47775C13.9844 4.3971 14.0016 4.31064 14.0016 4.22333C14.0016 4.13602 13.9844 4.04956 13.951 3.96891C13.9175 3.88827 13.8685 3.81501 13.8067 3.75333L12.2467 2.19333C12.185 2.13153 12.1117 2.0825 12.0311 2.04904C11.9504 2.01559 11.864 1.99837 11.7767 1.99837C11.6894 1.99837 11.6029 2.01559 11.5223 2.04904C11.4416 2.0825 11.3683 2.13153 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333Z"
                  fill="#725035"
                />
              </svg>
            </div>
            <p className="text-white/60 text-[14px] mt-[16px] mb-[30px]">
              {isLogin ? "sudahlogin.com" : "belumlogin.com"}
            </p>
            {isLogin ? (
              <button className="w-[175px] h-[40px] bg-[#F1ECDE1A]/10 flex justify-center items-center rounded-[100px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 5V4C16 3.44772 15.5523 3 15 3H6C5.44771 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H15C15.5523 21 16 20.5523 16 20V19"
                    stroke="#F1ECDE"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 12H21"
                    stroke="#F1ECDE"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.5 8.5L21 12L17.5 15.5"
                    stroke="#F1ECDE"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p
                  className="text-[#F1ECDE99]/60 text-[14px] ml-[3px]"
                  onClick={() => handleLogout()}
                >
                  Logout
                </p>
              </button>
            ) : (
              <button className="w-[175px] h-[40px] bg-[#F1ECDE1A]/10 flex justify-center items-center rounded-[100px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 5V4C16 3.44772 15.5523 3 15 3H6C5.44771 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H15C15.5523 21 16 20.5523 16 20V19"
                    stroke="#F1ECDE"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 12H21"
                    stroke="#F1ECDE"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.5 8.5L21 12L17.5 15.5"
                    stroke="#F1ECDE"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p
                  className="text-[#F1ECDE99]/60 text-[14px] ml-[3px]"
                  onClick={() => handleLogin()}
                >
                  Login
                </p>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
