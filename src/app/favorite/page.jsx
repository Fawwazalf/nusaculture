"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="shadow-sm bg-red-400 w-[30%] "
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white py-2 px-5 rounded-[50px] text-[18px] font-medium text-opacity-60 text-[#6f6e6e] flex justify-between items-center"
      >
        Pilih Provinsi
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
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
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="flex flex-col bg-white"
      >
        <motion.li
          variants={itemVariants}
          className="block list-none p-[10px] text-black cursor-pointer hover:bg-slate-600 "
        >
          Item 1{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="block list-none p-[10px] text-black cursor-pointer hover:bg-slate-600 "
        >
          Item 2{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="block list-none p-[10px] text-black cursor-pointer hover:bg-slate-600 "
        >
          Item 3{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="block list-none p-[10px] text-black cursor-pointer hover:bg-slate-600 "
        >
          Item 4{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="block list-none p-[10px] text-black cursor-pointer hover:bg-slate-600 "
        >
          Item 5{" "}
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Page;
