"use client";
import { useState } from "react";
import Image from "next/image";
import CardCulture from "@/components/CardCulture";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { getAllCultures, getIsIndo, getIsLogin } from "@/utils/data";
import CardProfile from "@/components/CardProfile";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Page = () => {
  const lang = getIsIndo();
  const isLogin = getIsLogin();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const provParam = searchParams.get("prov") ?? "";
  const initialProv = decodeURIComponent(provParam);

  const cultures = getAllCultures();
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(initialProv);

  const filteredResults = cultures.filter(
    (item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      (selectedOption === "" ||
        selectedOption === "Semua Provinsi" ||
        item.prov === selectedOption)
  );

  return (
    <div className="bg-[#181818] w-full min-h-screen flex flex-col">
      <Navigation />
      <div className="flex mx-[117px] pt-[120px]">
        <div className="flex w-[70%] justify-between py-2 px-5 rounded-[50px] bg-white mr-[25px]">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={lang ? "Cari Kebudayaan" : "Search Culture"}
            className="focus:outline-none w-[700px] mx-auto text-[18px] text-[#000000] font-medium"
          />

          <Image src="IconSearch.svg" alt="" width={23.32} height={23.32} />
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="w-[30%] relative"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white py-2 px-5 rounded-[50px] text-[18px] font-medium text-opacity-60 text-[#6f6e6e] flex justify-between items-center"
          >
            {lang ? "Pilih Provinsi" : "Select Province"}
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20" fill="#6f6e6e">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            className="flex flex-col bg-white absolute z-20 h-[300px] overflow-y-scroll mt-[10px] w-full"
          >
            <motion.li
              variants={itemVariants}
              className={` list-none  pl-[10px] py-[10px] text-[#181818]  cursor-pointer hover:bg-[#DCD7C9] w-full ${
                selectedOption === "" && "bg-[#DCD7C9]"
              }`}
              onClick={() => setSelectedOption("")}
            >
              {lang ? "Semua Provinsi" : "All Province"}
            </motion.li>
            {cultures.map((item) => (
              <motion.li
                key={item.id}
                variants={itemVariants}
                className={` list-none  pl-[10px] py-[10px] text-[#181818]  cursor-pointer hover:bg-[#DCD7C9] w-full ${
                  selectedOption === item.prov && "bg-[#DCD7C9]"
                }`}
                onClick={() => setSelectedOption(item.prov)}
              >
                {item.prov}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
      <div className="flex-1 mx-[117px] flex gap-9 my-[55px] flex-wrap justify-center xl:justify-start">
        {filteredResults.map((item) => (
          <div key={item.id}>
            <CardCulture
              id={item.id}
              title={item.title}
              prov={item.prov}
              desc={lang ? item.desc1ind : item.desc1eng}
              img={item.img}
              like={item.isFavorite}
            />
          </div>
        ))}
        {filteredResults.length === 0 && (
          <div>
            <p className="font-semibold text-[#D12B2B] text-[24px] mt-[-30px]">
              Page Not Found :(
            </p>
            <p className="font-light text-white/70 mt-[15px]">
              We couldn’t find the page you were looking for
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
