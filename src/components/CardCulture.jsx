import Image from "next/image";

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
        <Image
          src={img}
          alt=""
          width={272}
          height={250}
          className="w-full h-full object-cover rounded-t-[20px]"
        />
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
          <div className="mb-[8px] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
              <path d="M9.08335 4.24999C9.08335 3.71376 8.97774 3.18278 8.77253 2.68737C8.56732 2.19195 8.26655 1.74181 7.88737 1.36264C7.5082 0.983464 7.05806 0.682688 6.56264 0.477482C6.06723 0.272275 5.53625 0.166656 5.00002 0.166656C4.46379 0.166656 3.93281 0.272275 3.4374 0.477482C2.94198 0.682688 2.49184 0.983464 2.11267 1.36264C1.7335 1.74181 1.43272 2.19195 1.22751 2.68737C1.02231 3.18278 0.916687 3.71376 0.916687 4.24999C0.916687 5.05907 1.15527 5.81157 1.56127 6.44624H1.5566L5.00002 11.8333L8.44344 6.44624H8.43935C8.85986 5.79091 9.08338 5.02863 9.08335 4.24999ZM5.00002 5.99999C4.53589 5.99999 4.09077 5.81562 3.76258 5.48743C3.43439 5.15924 3.25002 4.71412 3.25002 4.24999C3.25002 3.78586 3.43439 3.34074 3.76258 3.01255C4.09077 2.68436 4.53589 2.49999 5.00002 2.49999C5.46415 2.49999 5.90927 2.68436 6.23746 3.01255C6.56565 3.34074 6.75002 3.78586 6.75002 4.24999C6.75002 4.71412 6.56565 5.15924 6.23746 5.48743C5.90927 5.81562 5.46415 5.99999 5.00002 5.99999Z" fill="#2C3639"/>
            </svg>
            <p className="text-[12px] italic ml-[5px]">{prov}</p>
          </div>
          <p className="text-[10px]">{desc}</p>
        </div>
        <div className="flex justify-end mt-[15px]">
          <button className="w-[115px] h-[30px] text-[12px] flex items-center justify-center bg-[#AEAEAE]/[0.3] rounded-[50px] py-[9px] border-solid border-2 border-black">
            Selengkapnya
            <Image
              src="IconArrow.svg"
              alt=""
              className="ml-[2px]"
              width={11.4}
              height={10}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCulture;
