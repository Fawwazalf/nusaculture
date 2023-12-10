"use client"
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = () => {
  const router = useRouter();
  const [userScore, setUserScore] = useState(null);

  useEffect(() => {
    if (router.query && router.query.score !== undefined) {
      console.log("useEffect sedang berjalan");
      const parsedScore = parseInt(router.query.score, 10);
      console.log("Parsed Score:", parsedScore);
      setUserScore(parsedScore);
    }
  }, [router.query]);

  return (
    <div className='bg-[#181818] w-full h-screen flex flex-col justify-center items-center'>
      <Navigation/>
      <p className='text-[48px] font-semibold text-[#D6CEBA]'>CONGRATULATIONS!</p>
      <Image src="/champ.svg" width={396} height={396} alt=''/>
      <p className='text-[#DCD7C9] text-[18px] font-semibold mt-[5px]'>Skor Anda</p>
      {userScore !== null ? <p className='text-[36px] font-semibold text-[#DCD7C9]'> <span className='text-[#9B6D48]'>{userScore}</span> / 100</p> : <p className='text-[36px] font-semibold text-[#DCD7C9]'>Score not available</p>}
      <div className='w-[525px] flex justify-between mt-[45px]'>
        <Link href="/quiz"><button className='bg-[#FFF9E9]/10 border-2 border-[#FFF9E9] text-white text-[18px] font-medium w-[230px] h-[50px] rounded-[100px]'>Mulai Ulang</button></Link>
        <Link href="/quiz"><button className='bg-[#FFF9E9]/10 border-2 border-[#FFF9E9] text-white text-[18px] font-medium w-[230px] h-[50px] rounded-[100px]'>Selanjutnya</button></Link>
      </div>
    </div>
  );
};

export default page;
