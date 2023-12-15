import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Carousel from "@/components/Carousel";
import CardFunfact from "@/components/CardFunfact";
import MapIndonesia from "@/components/MapIndonesia";

export default function Home() {
  return (
    <div className="bg-[#181818] ">
      <Navigation />
      <Carousel />
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
          <p className="relative z-20 text-[#D5CDB6] ">
            Let’s Explore With Us!
          </p>
        </div>

        <p className="mb-[40px] text-[#AEAEAE] w-[75%] text-center ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          voluptatibus aliquid esse magnam ullam illo laudantium!
          Teneturvoluptatum, nobis autem, magni aperiam minima omnis ducimus
          laboretempora quisquam expedita itaque?
        </p>
        <MapIndonesia />
      </div>
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
        <div className="flex flex-wrap justify-center gap-6 lg:justify-between w-[80%] md:w-[600px] lg:w-[900px] xl:w-[1050px]">
          <CardFunfact />
          <CardFunfact />
          <CardFunfact />
        </div>
      </div>

      <Footer />
    </div>
  );
}
