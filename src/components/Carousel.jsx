"use client";

import { useRef, useState } from "react";
import { motion, spring, useMotionValue, useTransform } from "framer-motion";
import { useMouse } from "@uidotdev/usehooks";

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
      console.log(positionIndexes);
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
      opacity: 1,
      scale: 1,
      x: 0,
      zIndex: 5,
    },
    left1: {
      opacity: 1,
      scale: 0.9,
      marginRight: "38%",
      zIndex: 3,
    },
    left: {
      opacity: 1,
      scale: 0.8,
      marginRight: "73%",
      zIndex: 3,
    },
    right: {
      opacity: 1,
      scale: 0.8,
      marginLeft: "73%",
      zIndex: 1,
    },
    right1: {
      opacity: 1,
      scale: 0.9,
      marginLeft: "38%",
      zIndex: 4,
    },
  };
  const useImageMotionValues = (
    xValue,
    yValue,
    maxRotationX1,
    maxRotationX2,
    maxRotationY1,
    maxRotationY2
  ) => {
    const x = useMotionValue(xValue);
    const y = useMotionValue(yValue);
    const rotateX = useTransform(y, [0, 400], [maxRotationY1, maxRotationY2]);
    const rotateY = useTransform(x, [0, 400], [maxRotationX1, maxRotationX2]);

    return { x, y, rotateX, rotateY };
  };

  const handleMouse = (event, { x, y }) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };
  const handleMouseLeave = ({ x, y }) => {
    x.set(0);
    y.set(200);
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
        <div
          className="hover:bg-white/[0.3] ml-[3%] w-[50px] h-[50px] flex justify-center  items-center transition rounded-full hover:cursor-pointer z-[6]"
          onClick={handleBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M5 12L16.25 22.8L18 21L8.75 12L18 3.00001L16.25 1.20001L5 12Z"
              fill="white"
              fill-opacity="0.72"
            />
          </svg>
        </div>

        <div className="flex justify-around items-center">
          {images.map((image, index) => {
            let xValue;
            let yValue;
            let maxRotationX1;
            let maxRotationX2;
            let maxRotationY1;
            let maxRotationY2;

            if (positions[positionIndexes[index]] === "right") {
              xValue = 0;
              yValue = 200;
              maxRotationX1 = -10;
              maxRotationX2 = 10;
              maxRotationY1 = 0;
              maxRotationY2 = 0;
            } else if (positions[positionIndexes[index]] === "left") {
              xValue = 0;
              yValue = 200;
              maxRotationX1 = 10;
              maxRotationX2 = -10;
              maxRotationY1 = 0;
              maxRotationY2 = 0;
            } else if (positions[positionIndexes[index]] === "right1") {
              xValue = 0;
              yValue = 200;
              maxRotationX1 = -10;
              maxRotationX2 = 10;
              maxRotationY1 = 0;
              maxRotationY2 = 0;
            } else if (positions[positionIndexes[index]] === "left1") {
              xValue = 0;
              yValue = 200;
              maxRotationX1 = 10;
              maxRotationX2 = -10;
              maxRotationY1 = 0;
              maxRotationY2 = 0;
            } else if (positions[positionIndexes[index]] === "center") {
              xValue = 0;
              yValue = 200;
              maxRotationX1 = 0;
              maxRotationX2 = -10;
              maxRotationY1 = 0;
              maxRotationY2 = 0;
            }

            const { x, y, rotateX, rotateY } = useImageMotionValues(
              xValue,
              yValue,
              maxRotationX1,
              maxRotationX2,
              maxRotationY1,
              maxRotationY2
            );
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                style={{
                  position: "absolute",
                  perspective: 400,
                }}
                onMouseMove={(event) => handleMouse(event, { x, y })}
                onMouseLeave={() => handleMouseLeave({ x, y })}
                transition={{ duration: 1 }}
              >
                <motion.img
                  key={index}
                  src={image}
                  alt={image}
                  style={{
                    transition: "all 0.5s",
                    rotateX,
                    rotateY,

                    width: "300px",
                    height: "470px",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <div
          className="hover:bg-white/[0.3] mr-[3%] w-[50px] h-[50px] flex justify-center  items-center transition rounded-full hover:cursor-pointer z-[6]"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M18.4 11L8.04999 20.9L6.43999 19.25L14.95 11L6.43999 2.75001L8.04999 1.10001L18.4 11Z"
              fill="white"
              fill-opacity="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
