import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import {  useSelector } from "react-redux";
import emptyCart from "../public/assests/emptyCart.png";
import { motion } from "framer-motion";
import CartItem from "@/components/CartItem";

export default function cart() {
  const status = useSession();
  const { cart } = useSelector((state) => state.cart);

  // get grand total price of all items
  const getTotal = () => {
    return cart
      .reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      )
      .toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className='flex items-center justify-center my-20'>
        <motion.div
          initial={{ opacity: 0, x: "100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
          className='shadow-md p-5  border'>
          <h2 className='font-bold text-xl mb-2 tracking-wide flex flex-col gap-2 text-black'>
            Your Amazon Cart is empty.
          </h2>
          <span className='text-sm font-medium text-gray-600 flex flex-col'>
            Your Shopping Cart lives to serve. Give it purpose — fill it with
            groceries, clothing, household supplies, electronics, and more.
            <p className='flex items-center'>
              Continue shopping on the{" "}
              <Link href='/' className='text-sky-500  mr-1'>
                Amazon.com homepage,
              </Link>
              learn about today's deals, or visit your Wish List.
            </p>
          </span>
          <Image src={emptyCart} alt='' className='object-contain my-2' />
        </motion.div>
      </div>
    );
  }

  return (
    <div className='px-3 max-w-[1500px]  mx-auto h-auto  my-10'>
      <div className='w-full p-5 xl:flex gap-10 grid grid-cols-1'>
        <div className='w-full  shadow-md p-3 border rounded-sm'>
          <div className='flex w-full border-b-[1px] border-zinc-300 '>
            <h2 className='font-medium text-2xl tracking-normal mb-2'>
              Shopping Cart
            </h2>

            <span className='ml-auto font-medium text-sm text-gray-500 mb-2'>
              Price
            </span>
          </div>
          {cart.map((item, i) => (
            <CartItem key={i} item={item} />
          ))}
        </div>
        <div className='xl:ml-auto bg-white shadow-sm  xl:w-96 w-full p-5 border h-28'>
          <div className='flex flex-col w-full'>
            <h3 className='flex items-center w-full justify-center font-medium text-base gap-3'>
              Subtotal({cart.length} items):
              <p className='font-bold text-lg ml-2'>
                <NumericFormat
                  value={getTotal()}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
            </h3>
            <button className='px-4 py-1.5 bg-gradient-to-t hover:bg-gradient-to-b from-yellow-400 border-[1px] hover:border-orange-600 border-orange-300 to-yellow-300 rounded-md mt-2 font-semibold'>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
