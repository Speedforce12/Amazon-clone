import { addToCart } from "@/redux/cartReducer";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function detail({ product }) {
  const dispatch = useDispatch()
  const [ratings] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );

  return (
    <div className='max-w-7xl px-3 flex items-center h-screen mx-auto'>
      <div className='w-full flex'>
        <div className='mr-10'>
          <Image
            src={product?.image}
            alt=''
            priority
            width={350}
            height={300}
            className='object-contain'
          />
        </div>
        <div className='gap-5'>
          <div className='border-b-[1px] flex flex-col'>
            <h2 className='text-black font-medium text-3xl'>
              {product?.title}
            </h2>
            <p className='text-green-800 text-sm hover:underline hover:text-orange-500  cursor-pointer'>
              Visit the fakeapi Store
            </p>
            <div className='flex items-center'>
              {Array(ratings)
                .fill()
                .map((_, i) => (
                  <FaStar className='text-orange-500  h-5' key={i} />
                ))}

              <p className='text-sm text-green-800 hover:text-orange-500 hover:underline cursor-pointer ml-6'>
                {product.rating.count} ratings
              </p>
            </div>
          </div>
          <div className='flex items-center gap-3 mt-4'>
            <span className='text-red-400 font-normal text-2xl'>-6%</span>
            <p className='font-semibold text-2xl text-black'>
              ${product.price}
            </p>
            <span className='flex items-center text-gray-500'>
              List Price <p className='px-2  line-through'>$499.85</p>
            </span>
          </div>
          <div className='flex text-base text-teal-800 flex-col group cursor-pointer'>
            <span className='flex items-center group-hover:underline group-hover:text-orange-500 '>
              Pay
              <p className='font-semibold text-red-600 cursor-pointer hover:underline'>
                $35.25/month for 12 months
              </p>
              , interest-free upon
            </span>
            <p className='block group-hover:underline group-hover:text-orange-500 '>
              approval for the Amazon Prime Rewards Visa Card
            </p>
          </div>
          <div className='flex flex-col w-96 my-3'>
            <h2 className='font-semibold text-lg text-black'>
              About this Item
            </h2>
            <h3 className='text-sm font-normal '>{product.description}</h3>
          </div>

          <div className="w-full">
            <button
              className='px-4 py-1.5 bg-gradient-to-t hover:bg-gradient-to-b from-yellow-400 border-[1px] hover:border-orange-600 border-orange-300 to-yellow-300 rounded-md mt-2 font-semibold'
              onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  console.log(id);

  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const product = await res.data;

  console.log(product);
  

  return {
    props: {
      product,
    },
  };
}
