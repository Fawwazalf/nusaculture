import MapIndonesia from "@/components/MapIndonesia";

const MapLayout = () => {
  return (
    <div className=" h-screen  flex flex-col justify-center items-center">
      <div className="mb-[10px] text-[50px] font-semibold relative">
        <p
          className="absolute top-[2px] left-[4px] z-10 w-max text-[50px] "
          style={{
            WebkitTextStroke: "1px #FFFFFF ",
            opacity: 0.42,
            color: "transparent",
          }}
        >
          Let’s Explore With Us!
        </p>
        <p className="relative z-20 text-[#D5CDB6] ">Let’s Explore With Us!</p>
      </div>

      <p className="mb-[3px] text-[#AEAEAE] w-[1000px] text-center mx-[100px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus aliquid esse magnam ullam illo laudantium!
        Teneturvoluptatum, nobis autem, magni aperiam minima omnis ducimus
        laboretempora quisquam expedita itaque?
      </p>
      <MapIndonesia />
    </div>
  );
};

export default MapLayout;
