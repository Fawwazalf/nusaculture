import { motion, useCycle } from "framer-motion";
import Image from "next/image";

const CardCulture = ({ img, title, prov, desc }) => {
  const [isLike, toggleLike] = useCycle(false, true);

  const variants = {
    liked: {
      opacity: [0.5, 1, 0],
      scale: [0, 10],
      y: [0, 0, -400],
      transition: {
        duration: 1,
      },
    },
    initial: { scale: 10, opacity: 0, y: 0 },
  };

  return (
    <div className="relative overflow-clip">
      <motion.svg
        className="absolute my-auto mx-auto top-0 left-0 right-0 bottom-0  "
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        variants={variants}
        initial="initial"
        animate={isLike ? "liked" : "initial"}
      >
        <path
          d="M9.50004 16.9021L8.35212 15.8571C4.27504 12.16 1.58337 9.71375 1.58337 6.72917C1.58337 4.28292 3.49921 2.375 5.93754 2.375C7.31504 2.375 8.63712 3.01625 9.50004 4.02167C10.363 3.01625 11.685 2.375 13.0625 2.375C15.5009 2.375 17.4167 4.28292 17.4167 6.72917C17.4167 9.71375 14.725 12.16 10.648 15.8571L9.50004 16.9021Z"
          fill="#D12B2B"
        />
      </motion.svg>

      <div
        className="h-[470px] w-[270px] rounded-[20px] bg-[#DCD7C9]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="h-[250px]">
          <Image
            src={img}
            alt={title}
            width={272}
            height={250}
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          />
        </div>
        <div className="h-[220px] px-5 py-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[18px] font-semibold">{title}</p>
              <motion.svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleLike}
              >
                <path
                  d="M9.50004 16.9021L8.35212 15.8571C4.27504 12.16 1.58337 9.71375 1.58337 6.72917C1.58337 4.28292 3.49921 2.375 5.93754 2.375C7.31504 2.375 8.63712 3.01625 9.50004 4.02167C10.363 3.01625 11.685 2.375 13.0625 2.375C15.5009 2.375 17.4167 4.28292 17.4167 6.72917C17.4167 9.71375 14.725 12.16 10.648 15.8571L9.50004 16.9021Z"
                  fill={isLike ? "#D12B2B" : "none"}
                  stroke={isLike ? "none" : "black"}
                  strokeWidth={2}
                />
              </motion.svg>
            </div>
            <p className="text-[12px] italic mb-[8px]">{prov}</p>
            <p className="text-[10px]">{desc}</p>
          </div>
          <div className="flex justify-end mt-[15px]">
            <button className="w-[115px] h-[30px] text-[12px] flex items-center justify-center bg-[#AEAEAE]/[0.3] rounded-[50px] py-[9px] border-solid border-2 border-black">
              Selengkapnya
              <Image
                src="IconArrow.svg"
                alt=""
                className="ml-[2px] w-auto"
                width={11.4}
                height={9}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCulture;
