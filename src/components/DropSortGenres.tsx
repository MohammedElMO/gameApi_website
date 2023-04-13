import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";


const GenresDropSort = () => {
  const [isDrop, setisDrop] = useState(true)
    
  return (
      <>
        <div tabIndex={1} onBlur={() =>setisDrop(false)} onClick={() => setisDrop(!isDrop)}
          className="flex justify-start p-4 ml-6 mt-7 hover:bg-slate-500 cursor-pointer w-fit  self-center font-pop rounded-md relative bg-gray-500 text-white">
          <span className="flex items-center gap-2 ">
            By Relevant
        <BsChevronDown />
          </span>

          {isDrop ?
          <div className="flex self-start  z-50 w-[150%] bg-slate-700 rounded-md absolute top-[100%] right-[-50%]  ">
            <ul className="list-none font-pop w-[75%] text-white ">
                <li  className="filterListItem" >Relevance</li>
                <li  className="filterListItem" >Relevance</li>
                <li  className="filterListItem" >Relevance</li>
                <li  className="filterListItem" >Relevance</li>
              </ul>
          </div>
            :null
          }
      </div>
      </>

    );
};


export default GenresDropSort;