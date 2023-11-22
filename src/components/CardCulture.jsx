const CardCulture = ({img, title, prov, desc}) => {
  return (
    <div className="h-[470px] w-[270px] rounded-[20px] bg-[#DCD7C9]">
      <div className="h-[250px]">
        <img src={img} alt="" />
      </div>
      <div className="h-[220px] px-5 pt-5">
        <p className="text-[18px] font-semibold">{title}</p>
        <p className="text-[12px] italic mb-[8px]">{prov}</p>
        <p className="text-[10px]">{desc}</p>
        <div className="flex justify-end mt-[15px]">
          <button className="w-[110px] h-[25px] text-[10px] flex items-center justify-center bg-[#AEAEAE] rounded-[50px] py-[6px] border-solid border-2 border-black">
            Selengkapnya 
            <img src="IconArrow.svg" alt="" className="ml-[2px]"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardCulture