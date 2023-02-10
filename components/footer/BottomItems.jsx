import React from "react";

const BottomItems = ({title, des}) => {
  return (
    <div className=''>
      <h2 className='font-medium text-whiteText text-xs'>{title}</h2>
      <ul className='flex flex-col xl:gap-2'>
        <li className='text-lightText text-sm footerClass xl:mb-3  font-light'>{des}</li>
      </ul>
    </div>
  );
};

export default BottomItems;
