import { useSession } from "next-auth/react";
import React from "react";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";

const Footer = () => {
    const { status } = useSession();

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      {status === "unauthenticated" && <TopSection />}
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default Footer;
