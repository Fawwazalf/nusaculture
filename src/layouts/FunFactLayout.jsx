import CardFunfact from "@/components/CardFunfact";

const FunFactLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center  bg-[url('/bgFunFact.png')]">
      <div className="mb-[45px] font-semibold relative">
        <div className="absolute flex justify-center  items-center z-10 text-[36px] w-full   ">
          <p
            style={{
              WebkitTextStroke: "1px #FFFFFF ",
              opacity: 0.42,
              color: "transparent",
            }}
          >
            Fakta Menarik
          </p>
        </div>
        <p
          className="relative top-[12px] z-20 text-[#D5CDB6] text-[40px] "
          style={{ textShadow: "0 0 10px rgba(214, 206, 186, 0.5)" }}
        >
          Fakta Menarik
        </p>
      </div>
      <div className="flex justify-between w-[1050px]">
        <CardFunfact />
        <CardFunfact />
        <CardFunfact />
      </div>
    </div>
  );
};

export default FunFactLayout;
