import Banner from "@/components/Banner";
import Head from "next/head";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";
import Products from "@/components/Products";
import axios from "axios";

export default function Home({ products }) {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Amazon</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-[1660px] mx-auto'>
        <Banner />
        <div className='grid grid-cols-1 md:grid-cols-2 -mt-14 xl:-mt-28 lg:grid-cols-3 xl:grid-cols-4   gap-5 mx-auto  px-6'>
          {products?.map((product) => (
            <Products product={product} key={ product.id} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios("https://fakestoreapi.com/products");
  const products = await res.data;
  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}
