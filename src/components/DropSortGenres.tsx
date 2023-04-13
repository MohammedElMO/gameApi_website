import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";


interface Props {
  OnSortGames:(sortBy : string) => void
}

const DropSort = ({OnSortGames}:Props) => {
  const [isDrop, setisDrop] = useState(true)
  const [selectedOption, setSelectedOption] = useState<string>("Relevance")
  const sortBy = [
    {value:"",label:"Relevance"},
    {value:"-added",label:"Date Added"},
    {value:"name",label:"Name"},
    {value:"-released",label:"Release date"},
    {value:"-metacretic",label:"Popularity"},
    {value:"-rating",label:"Average rating"},
     ]
  return (
      <>
        <div tabIndex={1} onBlur={() =>setisDrop(false)} onClick={() => setisDrop(!isDrop)}
          className="flex justify-start p-4 ml-6 mt-7 hover:bg-slate-500 cursor-pointer w-fit  self-center font-pop rounded-md relative bg-gray-500 text-white">
          <span className="flex items-center gap-2 ">
          sort by:  {selectedOption}
        <BsChevronDown />
          </span>

          {isDrop ?
          <div className="flex self-start  z-50 w-[150%] bg-slate-700 rounded-md absolute top-[100%] right-[-50%]  ">
            <ul className="list-none font-pop w-[75%] text-white ">
              {sortBy.map((option, oId) =>
                <li onClick={() => {
                  setSelectedOption(option.label)
                  OnSortGames(option.value)
                }} value={option.value} className="filterListItem" key={oId} >{option.label}</li>
                )}   
            </ul>
          </div>
            :null
          }
      </div>
      </>

    );
};


export default DropSort;