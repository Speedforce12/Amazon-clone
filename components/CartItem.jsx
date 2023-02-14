import Image from "next/image";
import prime from "../public/assests/hasPrime.png";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "@/redux/cartReducer";
import { HiOutlineTrash } from "react-icons/hi";
import Link from "next/link";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex w-full p-5 h-auto border-b-[1px]'>
      <Link href={`products/${item.id}`} className='flex mr-5'>
        <Image
          src={item.image}
          width={100}
          height={100}
          className='object-contain mr-5'
        />
      </Link>

      <div className='w-full flex flex-col '>
        <div className='flex  w-full'>
          <Link
            href={`products/${item.id}`}
            className='font-medium text-lg text-black'>
            {item.title}
          </Link>

          <span className='font-bold text-black ml-auto'>${item.price}</span>
        </div>

        <div className='flex flex-col'>
          <p className='text-green-800 text-xs font-normal mt-2'>In Stock</p>

          <Image
            src={prime}
            width='50'
            height={50}
            className='object-contain h-5'
            alt=''
          />
        </div>

        <div className='flex items-center mt-4'>
          <div className='flex items-center justify-center gap-3  bg-gray-100 px-4 py-2 rounded-md shadow-md'>
            Qty
            {item?.quantity === 1 ? (
              <button
                className='rounded-md h-6 w-6 bg-gray-200 hover:bg-gray-400 flex items-center justify-center cursor-pointer'
                onClick={() => dispatch(removeItem(item.id))}>
                <HiOutlineTrash />
              </button>
            ) : (
              <button
                className='rounded-md h-6 w-6 bg-gray-200 hover:bg-gray-400 flex items-center justify-center cursor-pointer'
                onClick={() => dispatch(decrement(item.id))}>
                <FiMinus />
              </button>
            )}
            <p className='font-semibold text-gray-700 text-normal'>
              {item?.quantity ? item?.quantity : 0}
            </p>
            <button
              className='rounded-md h-6 w-6 bg-gray-200 hover:bg-gray-400 flex items-center justify-center cursor-pointer'
              onClick={() => dispatch(increment(item.id))}>
              <MdAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
