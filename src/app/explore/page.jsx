import CardCulture from "@/components/CardCulture"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"

const page = () => {
  return (
    <div className="bg-[#181818] h-screen">
        <Navigation/>
        <div className="flex mx-[117px] mt-[55px]">
            <div className="flex w-[70%] justify-between py-2 px-5 rounded-[50px] bg-white mr-[25px]">
               <input type="text" placeholder="Cari Kebudayaan" className="focus:outline-none w-[700px] mx-auto text-[18px] text-[#000000] font-medium"/>
               <button><img src="IconSearch.svg" alt="" /></button>
            </div>
            <select className="w-[30%] bg-white py-2 px-5 focus:outline-none rounded-[50px] text-[18px] text-[#000000] font-medium">
              <option disabled selected>Pilih Provinsi</option>
              <option value="Jawa Tengah">Jawa Tengah</option>
              <option value="Jawa Timur">Jawa Timur</option>
              <option value="Jawa Barat">Jawa Barat</option>
            </select> 
        </div>
        <div className="mx-[117px] flex justify-between my-[55px]">
          <CardCulture title="WAYANG KULIT" prov="Provinsi Jawa Timur" desc="Wayang kulit adalah bentuk tradisional dari kesenian wayang yang aslinya ditemukan dalam budaya Jawa dan Bali di Indonesia. Narasi wayang kulit seringkali berkaitan dengan tema utama kebaikan melawan kejahatan."/>
          <CardCulture title="WAYANG KULIT" prov="Provinsi Jawa Timur" desc="Wayang kulit adalah bentuk tradisional dari kesenian wayang yang aslinya ditemukan dalam budaya Jawa dan Bali di Indonesia. Narasi wayang kulit seringkali berkaitan dengan tema utama kebaikan melawan kejahatan."/>
          <CardCulture title="WAYANG KULIT" prov="Provinsi Jawa Timur" desc="Wayang kulit adalah bentuk tradisional dari kesenian wayang yang aslinya ditemukan dalam budaya Jawa dan Bali di Indonesia. Narasi wayang kulit seringkali berkaitan dengan tema utama kebaikan melawan kejahatan."/>
          <CardCulture title="WAYANG KULIT" prov="Provinsi Jawa Timur" desc="Wayang kulit adalah bentuk tradisional dari kesenian wayang yang aslinya ditemukan dalam budaya Jawa dan Bali di Indonesia. Narasi wayang kulit seringkali berkaitan dengan tema utama kebaikan melawan kejahatan."/>
        </div>
        <Footer/>
    </div>
  )
}

export default page