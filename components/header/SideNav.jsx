import { AiOutlineRight } from "react-icons/ai";

const SideNav = ({ sideItem }) => {
  return (
    <div className='border-b border-[1px] border-gray-300 w-full  p-6 text-black'>
      <h1 className='text-black font-semibold capitalize text-xl'>
        {sideItem.title}
      </h1>

      <ul className='space-y-3 mt-3 w-full'>
        {sideItem.sections.map((section) => (
          <li className='w-full cursor-pointer hover:bg-gray-300 p-2 flex items-center group'>
            {section.item}
            <AiOutlineRight className='text-gray-300 text-lg ml-auto group-hover:text-black' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
