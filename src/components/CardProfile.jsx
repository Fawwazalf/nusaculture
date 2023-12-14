import React from "react";

const CardProfile = () => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="w-[118px] h-[118px] bg-[#F1ECDE] mt-[-59px] flex justify-center items-center rounded-full absolute">
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
      <div className="w-[350px] h-[258px] bg-[#20292C] rounded-[20px] flex flex-col items-center">
        <div className="flex w-[230px] mt-[92px] justify-center">
          <p className="text-white font-medium mr-[8px]">User07483272</p>
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
        <p className="text-white/60 text-[14px] mt-[16px] mb-[13px]">
          User07483272@gmail.com
        </p>
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
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M10 12H21"
              stroke="#F1ECDE"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M17.5 8.5L21 12L17.5 15.5"
              stroke="#F1ECDE"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <p className="text-[#F1ECDE99]/60 text-[14px] ml-[3px]">Sign Out</p>
        </button>
      </div>
    </div>
  );
};

export default CardProfile;
