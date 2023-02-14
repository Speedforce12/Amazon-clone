import Image from "next/image";
import logo from "../../public/assests/amazonlogo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { allItems } from "@/data/helperInfo";
import BottomHeader from "./BottomHeader";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const { cart } = useSelector((state) => state.cart)
  
   const getTotalQuantity = () => {
     return cart.reduce(
       (accumulator, item) => accumulator + item.quantity,
       0
     );
   };
  return (
    <div className='flex flex-col'>
      {/* main nav */}
      <div className='w-full flex items-center py-3 px-4  bg-amazon_blue gap-4 text-white'>
        {/* logo */}
        <div className='flex items-center gap-2 mr-4'>
          <Link href="/" className='hoverEffect'>
            <Image src={logo} alt='' className='w-24 mt-2 object-cover ' />
          </Link>
          <span className='hoverEffect hidden xl:flex'>
            <HiOutlineLocationMarker className='text-2xl text-white -mt-1 mr-1' />
            <span className='flex flex-col text-gray-400 font-medium text-xs py-1'>
              Deliver to O'vonee
              <h3 className='text-white font-bold text-base leading-tight'>
                Brooklyn 11205
              </h3>
            </span>
          </span>
        </div>
        {/* search */}
        <div className='flex-grow h-10 rounded-tr-lg items-center xl:flex hidden'>
          <div
            className='flex items-center text-slate-900  bg-gray-300 rounded-tl-md rounded-bl-md p-2 cursor-pointer font-normal relative'
            onClick={() => setShowAll(!showAll)}>
            All
            <MdArrowDropDown className='text-lg' />
          </div>

          {showAll ? (
            <div className='w-56 h-80 border-[1px] absolute z-20 bg-gray-100 rounded-md overflow-auto top-16 shadow-md p-1'>
              <ul>
                {allItems.map((item) => (
                  <li
                    key={item._id}
                    className='text-amazon_blue tracking-normal cursor-pointer hover:bg-sky-600 hover:text-white font-medium text-base duration-100'>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <input
            type='text'
            placeholder='Search Amazon'
            className='w-full h-ful p-2 focus:outline-none  placeholder:font-medium placeholder:text-gray-600 placeholder:text-md'
          />
          <div className='bg-amazon_yellow p-2 flex items-center cursor-pointer rounded-tr-md rounded-br-md hover:bg-yellow-600 h-10 px-4'>
            <BsSearch className='text-xl text-amazon_blue' />
          </div>
        </div>
        {/* right side */}

        <div className='hoverEffect hidden xl:flex'>
          <span className='flex flex-col text-sm'>
            Hello, O'vonee
            <p className='text-base capitalize font-bold flex items-center'>
              Accounts & Lists <MdArrowDropDown className='text-lg' />
            </p>
          </span>
        </div>

        <div className='hoverEffect hidden xl:flex'>
          <span className='flex flex-col text-sm'>
            Returns
            <p className='text-base capitalize font-bold flex items-center'>
              & Orders
            </p>
          </span>
        </div>

        <Link href='/cart' className='hoverEffect h-10 py-6  relative  ml-auto'>
          <FiShoppingCart className='text-3xl mr-2' />
          <p className='text-base capitalize font-bold flex items-center'>
            Cart
          </p>
          <div className='absolute  rounded-full text-orange-500 font-bold text-sm -top-0 right-[56px]'>
            {getTotalQuantity() || 0}
          </div>
        </Link>
      </div>

      {/* bottom nav */}
      <BottomHeader />
    </div>
  );
};

export default Header;
