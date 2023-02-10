import { footerBottomItem } from "@/data/helperInfo";
import React from "react";
import BottomItems from "./BottomItems";

const BottomSection = () => {
  return (
    <div className='w-full bg-footerBottom p-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 xl:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 place-items-center lg:grid-cols-5 w-full xl:items-start gap-y-5 xl:text-start text-center xl:gap-x-6'>
          {footerBottomItem.map((item) => (
            <BottomItems key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
