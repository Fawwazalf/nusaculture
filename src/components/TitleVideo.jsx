"use client";
import { getIsIndo } from "@/utils/data";
import { motion } from "framer-motion";

const TitleVideo = () => {
  const lang = getIsIndo();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p
        className="absolute top-[2px] left-[4px] z-10"
        style={{
          WebkitTextStroke: "1px #FFFFFF ",
          opacity: 0.42,
          color: "transparent",
        }}
      >
        {lang ? "Kebudayaan Indonesia" : "Indonesian Culture"}
      </p>
      <p
        className=" z-20 text-[#D5CDB6]"
        style={{ textShadow: "0 0 10px rgba(214, 206, 186, 0.5)" }}
      >
        {lang ? "Kebudayaan Indonesia" : "Indonesian Culture"}
      </p>
    </motion.div>
  );
};

export default TitleVideo;
