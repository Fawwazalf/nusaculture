"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Carousel = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [
    "https://source.unsplash.com/random/1",
    "https://source.unsplash.com/random/2",
    "https://source.unsplash.com/random/3",
    "https://source.unsplash.com/random/4",
    "https://source.unsplash.com/random/5",
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: {
      gridRow: 1,
      gridColumn: 3,
      scale: 1,
      x: 0,
      zIndex: 5,
    },
    left1: {
      gridRow: 1,
      gridColumn: 2,
      scale: 0.7,
      marginRight: "33%",
      zIndex: 3,
    },
    left: {
      gridRow: 1,
      gridColumn: 1,
      scale: 0.5,
      marginRight: "57%",
      zIndex: 2,
    },
    right: {
      gridRow: 1,
      gridColumn: 5,
      scale: 0.5,
      marginLeft: "57%",
      zIndex: 1,
    },
    right1: {
      gridRow: 1,
      gridColumn: 4,
      scale: 0.7,
      marginLeft: "33%",
      zIndex: 4,
    },
  };
  return (
    <div
      className=" h-screen relative"
      style={{
        backgroundImage: "url(./home.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-[#1D1D1D]/[0.81]  w-full h-full"></div>
      <div className="flex items-center justify-between absolute bottom-0 top-0 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          onClick={handleBack}
          className="hover:cursor-pointer ml-[3%]"
        >
          <path
            d="M5 12L16.25 22.8L18 21L8.75 12L18 3.00001L16.25 1.20001L5 12Z"
            fill="white"
            fill-opacity="0.72"
          />
        </svg>

        <div className="flex justify-around items-center">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={image}
              className="rounded-[12px]"
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 1 }}
              style={{
                width: "254px",
                height: "442px",
                objectFit: "cover",
                position: "absolute",
              }}
            />
          ))}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          onClick={handleNext}
          className="hover:cursor-pointer mr-[3%]"
        >
          <path
            d="M18.4 11L8.04999 20.9L6.43999 19.25L14.95 11L6.43999 2.75001L8.04999 1.10001L18.4 11Z"
            fill="white"
            fill-opacity="0.72"
          />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
