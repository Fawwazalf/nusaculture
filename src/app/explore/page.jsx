"use client";
import CardCulture from "@/components/CardCulture";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import data from "@/utils/data.json";
import Image from "next/image";

const page = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const filteredResults = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedOption === "" || item.prov === selectedOption)
    );

    setFilteredData(filteredResults);
    console.log(filteredData);
  }, [searchValue, selectedOption]);

  return (
    <div className="bg-[#181818] w-full h-full">
      <Navigation />
      <div className="flex mx-[117px] pt-[120px]">
        <div className="flex w-[70%] justify-between py-2 px-5 rounded-[50px] bg-white mr-[25px]">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Cari Kebudayaan"
            className="focus:outline-none w-[700px] mx-auto text-[18px] text-[#000000] font-medium"
          />
          <button>
            <Image src="IconSearch.svg" alt="" width={23.32} height={23.32} />
          </button>
        </div>
        <select
          className="w-[30%] bg-white py-2 px-5 focus:outline-none rounded-[50px] text-[18px] font-medium text-opacity-60 text-[#6f6e6e]"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option disabled selected>
            Pilih Provinsi
          </option>
          {data.map((item) => (
            <option key={item.id} value={item.prov} className="text-black">
              {item.prov}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-[117px] flex gap-9 my-[55px] flex-wrap justify-center xl:justify-start">
        {filteredData.map((item) => (
          <div key={item.id}>
            <CardCulture
              title={item.title}
              prov={item.prov}
              desc={item.desc}
              img={item.img}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
