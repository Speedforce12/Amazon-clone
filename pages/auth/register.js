import Image from "next/image";
import logo from "../../public/assests/darklogo.png";
import { TiInfoLarge } from "react-icons/ti";
import { AiFillCaretRight } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { createUser, userApi } from "@/lib/userHelpers";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import PulseLoader from "react-spinners/PulseLoader";
import { toast } from "react-hot-toast";

const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

const schema = yup.object({
  name: yup.string().required("Enter your name"),
  email: yup
    .string()
    .email()
    .required("Enter your email or mobile phone number"),
  password: yup
    .string()
    .matches(
      PASSWORD_REGEX,
      "Must Contain 6 Characters, One UpperCase Letter, OneLowercase Letter, One Number and One Special Case Character"
    )
    .required("Minimum 6 characters required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

const register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await userApi.post("/auth/signup", data).catch((err) => { 
      if (err.response?.status === 422) {
         toast.error("Email already registered")
       }
    })
    console.log(res);
    
  };

  return (
    <div className='w-full bg-zinc-100 flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col w-full'>
        <Image src={logo} alt='' className='w-28 object-cover' priority />

        {errors.apiError && (
          <div className='alert alert-danger mt-3 mb-0'>
            {errors.apiError?.message}
          </div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=''
          className='flex w-[370px] p-5 rounded-md shadow-md flex-col border-[1px] border-gray-400 mt-3'>
          <h1 className='text-2xl font-semibold text-black'>Create account</h1>
          <label htmlFor='name' className='text-xs font-bold mb-1.5 pt-3'>
            Your name
          </label>
          <input
            type='text'
            id='name'
            placeholder='First and last name'
            className='px-4 py-1 outline-1 outline-none border-[1px] border-zinc-400  rounded-md mb-3 focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 placeholder:text-sm'
            {...register("name")}
          />
          {errors.name ? (
            <p className='flex items-center text-rose-600 text-sm font-medium'>
              <TiInfoLarge className='text-base' />
              {errors.name?.message}
            </p>
          ) : null}
          <label htmlFor='email' className='text-xs font-bold mb-1.5 pt-3'>
            Mobile numbers or email
          </label>
          <input
            type='email'
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
            autoComplete='off'
            {...register("password")}
          />
          {errors.password ? (
            <p className='flex items-center text-rose-600 text-sm font-medium'>
              <TiInfoLarge className='text-base' />
              {errors.password?.message}
            </p>
          ) : (
            <span className='flex items-center'>
              <TiInfoLarge className='text-base text-sky-400' />
              <p className='text-xs font-normal '>
                Passwords must be at least 6 characters.
              </p>
            </span>
          )}
          <label
            htmlFor='confirmPassword'
            className='text-xs font-bold mb-1.5 pt-3'>
            Re-enter password
          </label>
          <input
            type='password'
            id='confirmPassword'
            autoComplete='off'
            className='px-4 py-1 outline-1 outline-none border-[1px] border-zinc-400  rounded-md mb-3 focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 placeholder:text-sm'
            {...register("confirmPassword")}
          />
          {errors.confirmPassword ? (
            <p className='flex items-center text-rose-600 text-sm font-medium mb-4'>
              <TiInfoLarge className='text-base' />
              {errors.confirmPassword?.message}
            </p>
          ) : null}
          {isSubmitting ? (
            <button
              disabled={isSubmitting}
              className='px-4 flex items-center gap-2 justify-center text-center  border-[1px] hover:bg-gradient-to-b border-zinc-400  font-sm font-bold rounded-md active:shadow-amazonInput disabled:cursor-not-allowed'>
              <Loader />
              {/* <PulseLoader color='#febd69' size={15}  /> */}
              Creating User...
            </button>
          ) : (
            <button className='px-4 py-1 border-[1px] hover:bg-gradient-to-b border-zinc-400  bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] font-sm font-normal rounded-md active:shadow-amazonInput'>
              Continue
            </button>
          )}

          <div className='flex flex-col  w-full pt-5'>
            <p className='text-xs font-normal '>
              By creating an account, you agree to Amazon's
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
          <div className='my-8 border-[1px] border-zinc-200  shadow-lg' />
          <div className='flex flex-col  w-full'>
            <p className='text-xs font-normal flex items-center'>
              Already have an account?
              <Link
                href='/auth/login'
                className='flex items-center pl-2 text-sky-500 cursor-pointer hover:underline hover:text-orange-600'>
                Sign in <AiFillCaretRight className='text-xs' />
              </Link>
            </p>
            <p className='text-xs font-normal flex items-center'>
              Buying for work?
              <span className='flex items-center pl-2 text-sky-500 cursor-pointer hover:underline hover:text-orange-600'>
                Create a free business account
                <AiFillCaretRight className='text-xs' />
              </span>
            </p>
          </div>
        </form>

        <div className='border-t-[1px] drop-shadow-md border-zinc-200 w-full flex flex-col gap-4 justify-center items-center py-10 mt-7'>
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

export default register;
