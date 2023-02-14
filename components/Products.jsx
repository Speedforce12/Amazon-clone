import Image from "next/image";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import { FaStar } from "react-icons/fa";
import prime from "../public/assests/hasPrime.png";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartReducer";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Products = ({ product }) => {
  const dispatch = useDispatch();
  const [ratings] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className='h-auto p-5 flex-flex-col  z-20 bg-white border hover:shadow-lg cursor-pointer mb-5'>
      <div className='flex flex-col p-3 relative'>
        <Link
          className='flex items-center justify-center'
          href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt=''
            className='w-40 h-48 object-contain'
            width={100}
            height={100}
            priority
          />
        </Link>
        <div className='flex flex-col pt-3'>
          <h3 className='font-bold text-lg text-gray-700'>
            {product.title.substring(0, 25)}...
          </h3>
          <p className='text-xs text-gray-600 my-1.5'>
            {product.description.substring(0, 90)}...
          </p>
          <span className=' text-gray-800 font-semibold mt-1 flex items-center  text-xl'>
            <NumericFormat
              value={product.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <div className='flex ml-auto items-center'>
              {Array(ratings)
                .fill()
                .map((_, i) => (
                  <FaStar className='text-orange-500 ml-auto h-5' key={i} />
                ))}
              <p className='text-xs ml-1 font-medium'>{product.rating.count}</p>
            </div>
          </span>
          <div className='flex items-center'>
            {hasPrime && (
              <>
                <Image
                  src={prime}
                  width='50'
                  height={50}
                  className='object-contain h-10'
                  alt=''
                />

                <span className='ml-2 italic text-sm'>Prime FREE Delivery</span>
              </>
            )}
          </div>
          <button
            className='px-4 py-1.5 bg-gradient-to-t hover:bg-gradient-to-b from-yellow-400 border-[1px] hover:border-orange-600 border-orange-300 to-yellow-300 rounded-md mt-2 font-semibold'
            onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
        <div className='absolute right-0 text-gray-500 text-sm italic -top-4'>
          {product.category}
        </div>
      </div>
    </div>
  );
};

export default Products;
