import Image from "next/image";
import React from "react";
import logo from "../../public/assests/darklogo.png";
import { TiInfoLarge } from "react-icons/ti";
import { AiFillCaretRight } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import {  useRouter } from "next/router";

const schema = yup.object({
  email: yup
    .string()
    .email()
    .required("Enter your email or mobile phone number"),
  password: yup.string().required("Enter your password"),
});

const login = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    }).then(({ ok, error, url }) => {
      if (ok) {
        router.push(url);
      } else {
        console.log(error);
      }
    });
  };

  return (
    <div className='w-full bg-zinc-100 flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col w-full'>
        <Image src={logo} alt='' className='w-28 object-cover' priority />
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=''
          className='flex w-[370px] p-5 rounded-md shadow-sm flex-col border-[1px] border-gray-400 mt-3'>
          <h1 className='text-2xl font-semibold text-black'>Sign in</h1>

          <label htmlFor='email' className='text-xs font-bold mb-1.5 pt-3'>
            Mobile numbers or email
          </label>
          <input
            type='text'
            id='email'
            className='px-4 py-1 outline-1 outline-none border-[1px] border-zinc-400  rounded-md mb-3 focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'
            {...register("email")}
          />
          {errors.email ? (
            <p className='flex items-center text-rose-600 text-sm font-medium'>
              <TiInfoLarge className='text-base' />
              {errors.email?.message}
            </p>
          ) : null}

          <label htmlFor='password' className='text-xs font-bold mb-1.5 pt-3'>
            password
          </label>
          <input
            type='password'
            id='password'
            placeholder='At least 6 characters'
            className='px-4 py-1 outline-1 outline-none border-[1px] border-zinc-400  rounded-md mb-3 focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 placeholder:text-sm'
            {...register("password")}
          />
          {errors.password ? (
            <p className='flex items-center text-rose-600 text-sm font-medium mb-5'>
              <TiInfoLarge className='text-base' />
              {errors.password?.message}
            </p>
          ) : null}

          <button
            type='submit'
            className='px-4 py-1 border-[1px] hover:bg-gradient-to-b border-zinc-400  bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] font-sm font-normal rounded-md active:shadow-amazonInput'>
            Continue
          </button>
          <div className='flex flex-col  w-full pt-5'>
            <p className='text-xs font-normal '>
              By continuing, you agree to Amazon's
            </p>
            <span className='flex items-center text-xs pt-0.5'>
              <p className='cursor-pointer hover:underline hover:text-orange-600 text-sky-600 font-normal'>
                Conditions of Use
              </p>
              <h1 className='mx-2 text-black cursor-default'>and</h1>
              <p className=' text-sky-600 cursor-pointer hover:underline hover:text-orange-600'>
                Privacy Notice.
              </p>
            </span>
          </div>

          <div className='mt-5 flex item text-sm'>
            <span className='flex items-center text-sky-600 cursor-pointer hover:underline hover:text-orange-600 '>
              <AiFillCaretRight className='text-xs mr-1' />
              Need help?
            </span>
          </div>
        </form>

        <div className=' w-[350px] flex flex-col item'>
          <div className='flex py-8 items-center before:mt-0.5 before:flex-1 before:border-t before:border-zinc-300 after:mt-0.5 after:flex-1 after:border-t after:border-zinc-400'>
            <p className='mx-4 mb-0 text-center text-sm font-normal text-gray-600'>
              New to Amazon?
            </p>
          </div>

          <Link
            href='/auth/register'
            className='px-4 py-1.5 border-[1px] hover:bg-gradient-to-b border-zinc-400  bg-gradient-to-t from-zinc-200 to-zinc-100 text-sm font-normal rounded-md active:shadow-amazonInput  text-center'>
            Create your Amazon account
          </Link>
        </div>

        <div className='border-t-[1px] drop-shadow-md border-zinc-200 w-full flex flex-col gap-4 justify-center items-center py-10 pb-[120px] mt-7'>
          <div className='flex items-center gap-6'>
            <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
              Conditions of Use
            </p>
            <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
              Privacy Notice
            </p>
            <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
              Help
            </p>
          </div>
          <p className='text-xs text-gray-600'>
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
