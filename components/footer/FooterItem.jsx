import React from "react";

const FooterItem = ({middleItem}) => {
  return (
    <div className="">
      <h2 className='font-bold text-whiteText text-lg mb-3'>{middleItem.title}</h2>
      <ul className='flex flex-col gap-2'>
        {middleItem.sections.map((data) =>(
            <li className='text-lightText text-sm footerClass' key={data.item}>{data.item}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterItem;
