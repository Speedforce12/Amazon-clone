import React from "react";
import { middleList } from "@/data/helperInfo";
import FooterItem from "./FooterItem";
import Image from "next/image";
import logo from "../../public/assests/amazonlogo.png";
import {TfiWorld} from "react-icons/tfi"


const MiddleSection = () => {
  return (
    <div className=' bg-amazon_light p-6 w-full'>
      <div className=' border-b-[1px] border-gray-200 w-full py-10'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 place-items-center w-full xl:items-start xl:space-x-10 space-y-10 xl:space-y-0 xl:text-start text-center'>
            {middleList.middleItems.map((item) => (
              <FooterItem key={item.title} middleItem={item} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex items-center w-full justify-center'>
        <div className='flex items-center w-full justify-center py-8'>
          <div className='flex xl:flex-row items-center gap-10 justify-center flex-col'>
            <Image src={logo} alt='' className='object-cover w-24 mt-3' />
            <button className=' px-4 py-2 text-lightText flex items-center ring-1 ring-lightText rounded-md'>
              <TfiWorld className='text-sm text-lightText mr-2' />
              English
            </button>

            <button className=' px-4 py-2 text-lightText flex items-center ring-1 ring-lightText rounded-md'>
              <img src="/assests/usa.png" alt="" className="w-6 h-6 mr-2" />
              United States
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
