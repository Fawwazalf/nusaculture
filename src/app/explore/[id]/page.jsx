"use client"
import Navigation from '@/components/Navigation'
import data from "@/utils/data.json";

import { useParams } from 'next/navigation'
const page = () => {
  const params = useParams()
 
  const id = params.id
  console.log(id)
  const desc = data[id].desc
  console.log(desc);
  return (
    <div className='bg-[#181818] w-full h-screen'>
        <Navigation/>
        <div className='pt-[130px] flex'>
          <div className='w-[480px] h-[425px]'>
            <img src="" alt="" />
          </div>
          <div></div>
          <div>
            <p className='text-white'>{desc}</p>
          </div>
        </div>
        <div></div>
    </div>
  )
}

export default page