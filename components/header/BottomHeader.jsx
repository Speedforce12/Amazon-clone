import { sideNav } from "@/data/helperInfo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import avatarPic from "../../public/assests/avatar.png";
import SideNav from "./SideNav";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const BottomHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className='flex items-center bg-amazon_light text-white  px-4 relative'>
      <div
        className='hoverEffectBottom gap-1'
        onClick={() => setShowSidebar(true)}>
        <GiHamburgerMenu className='text-2xl' />
        <p className='font-bold capitalize'>All</p>
      </div>

      <div className='h-full hidden xl:flex'>
        <ul className='flex items-center py-0.5'>
          <li className='hoverEffectBottom'>Clinic</li>
          <li className='hoverEffectBottom'>Buy Again</li>
          <li className='hoverEffectBottom'>Amazon Basics</li>
          <li className='hoverEffectBottom'>Today's Deals</li>
          <li className='hoverEffectBottom'>Coupons</li>
          <li className='hoverEffectBottom'>Health & Household</li>
          <li className='hoverEffectBottom'>Pet Supplies</li>
          <li className='hoverEffectBottom'>Find a Gift</li>
          <li className='hoverEffectBottom'>Beauty & Personal Care</li>
          <li className='hoverEffectBottom'>Amazon Home</li>
        </ul>
      </div>

      {showSidebar ? (
        <div className='w-full h-screen text-black fixed top-0 left-0 bg-black bg-opacity-60 z-50'>
          <motion.div className='w-full h-full relative' initial={{ opacity:0, x: "-100vh"}} animate={{opacity:1, x:0}} transition={{duration:0.4}} exit={{opacity:0}} >
            <div className='xl:w-[350px] w-[270px] bg-white h-full border border-black'>
              <Link
                href='#'
                className='bg-amazon_light text-white py-4 h-14 xl:w-[350px] w-[270px] sticky flex items-center px-6 gap-4'>
                <Image
                  src={avatarPic}
                  alt=''
                  className='w-10 h-10 object-cover rounded-full'
                />
                <h2 className='font-bold capitalize text-xl'>Hello, O'vonee</h2>
              </Link>
              <div
                className='overflow-y-auto overflow-x-hidden h-full
              '>
                {sideNav.sideItems.map((sideItem) => (
                  <SideNav sideItem={sideItem} />
                ))}
              </div>
            </div>
            <div
              className='absolute top-3 rounded-lg xl:left-[370px]  left-[280px] h-10 w-10 flex items-center justify-center cursor-pointer'
              onClick={() => setShowSidebar(false)}>
              <MdClose className='text-3xl  text-white' />
            </div>
          </motion.div>
        </div>
      ) : null}
    </div>
  );
};

export default BottomHeader;
