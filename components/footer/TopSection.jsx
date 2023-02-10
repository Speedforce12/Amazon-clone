import Link from 'next/link';
import React from 'react'

const TopSection = () => {
  return (
    <div className=' flex items-center justify-center w-full flex-col'>
      <div className='border-b-[1px] border-t-[1px] border-gray-200  h-36 flex items-center justify-center flex-col space-y-2'>
        <span className='text-xs text-black tracking-wide font-normal'>
          See personalized recommendations
        </span>
        <button className='font-bold text-sm w-full ring-1 ring-yellow-500  bg-gradient-to-t from-yellow-400 to-yellow-200 px-4 py-1 rounded-md'>
          Sign in
        </button>
        <span className='text-xs text-black font-semibold flex items-center'>New customer? <Link href="#" className='text-xs text-blue-600 ml-1 font-normal'>start here.</Link></span>
      </div>
    </div>
  );
}

export default TopSection