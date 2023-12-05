import { Readex_Pro } from "next/font/google";

const readex_Pro = Readex_Pro({ subsets: ["latin"], weight: "600" });

const FunFact = () => {
  return (
    <div>
      <p className={`text-[#D5CDB6] text-[40px] ${readex_Pro.className}`}>
        Fakta Menarik
      </p>
      <div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
