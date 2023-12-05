import { motion } from "framer-motion";

const CardCulture = ({ img, title, prov, desc }) => {
  return (
    <div
      className="h-[470px] w-[270px] rounded-[20px] bg-[#DCD7C9]"
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="h-[250px]">
        <img src={img} alt="" />
      </div>
      <div className="h-[220px] px-5 py-5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-[18px] font-semibold">{title}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M9.57915 14.6854L9.49998 14.7646L9.4129 14.6854C5.65248 11.2733 3.16665 9.01708 3.16665 6.72917C3.16665 5.14583 4.35415 3.95833 5.93748 3.95833C7.15665 3.95833 8.34415 4.75 8.76373 5.82667H10.2362C10.6558 4.75 11.8433 3.95833 13.0625 3.95833C14.6458 3.95833 15.8333 5.14583 15.8333 6.72917C15.8333 9.01708 13.3475 11.2733 9.57915 14.6854ZM13.0625 2.375C11.685 2.375 10.3629 3.01625 9.49998 4.02167C8.63706 3.01625 7.31498 2.375 5.93748 2.375C3.49915 2.375 1.58331 4.28292 1.58331 6.72917C1.58331 9.71375 4.27498 12.16 8.35206 15.8571L9.49998 16.9021L10.6479 15.8571C14.725 12.16 17.4166 9.71375 17.4166 6.72917C17.4166 4.28292 15.5008 2.375 13.0625 2.375Z"
                fill="black"
              />
            </svg>
          </div>
          <p className="text-[12px] italic mb-[8px]">{prov}</p>
          <p className="text-[10px]">{desc}</p>
        </div>
        <div className="flex justify-end mt-[15px]">
          <button className="w-[115px] h-[30px] text-[12px] flex items-center justify-center bg-[#AEAEAE]/[0.3] rounded-[50px] py-[9px] border-solid border-2 border-black">
            Selengkapnya
            <img src="IconArrow.svg" alt="" className="ml-[2px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCulture;
