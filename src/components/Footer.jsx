const Footer = () => {
  return (
    <div className='bg-[#2C3639] flex flex-col text-white justify-between h-[200px]'>
        <div className="flex items-center w-full h-[150px] justify-between px-[150px]">
            <p className="text-4xl text-center">Nusa Culture</p>
            <div className="">
                <div className="flex mb-[17px]">
                    <img src="IconEmail.svg" />
                    <p className="text-[12px] ml-[7px]">pawpawculture@gmail.com</p>
                </div>
                <div className="flex">
                    <img src="IconDomain.svg" />
                    <p className="text-[12px] ml-[7px]">www.nusaculture.com</p>
                </div> 
            </div>
        </div>
        <div className="w-full text-center h-[50px]">
            <div className="h-[1px] w-full bg-white"></div>
            <p className="mt-[5px] text-[12px]">Made With Love By PawPaw!♡</p>
        </div>
    </div>
  )
}

export default Footer