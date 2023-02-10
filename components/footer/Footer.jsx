import React from "react";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";

const Footer = () => {
  return (
    <div
      className='flex flex-col items-center justify-center w-full'>
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default Footer;
