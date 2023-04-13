import { useState } from "react";
import List  from "@mui/joy/List";
import  ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { BsChevronDown } from "react-icons/bs";
import useRequestedPlatforms from "./hooks/useRequestedPlatforms";
import { Platform } from "./hooks/useRequestedPlatforms";

interface Props {
  onSelectPlatForm: (p: Platform) => void
}

const PlatFormSelector = ({onSelectPlatForm}:Props) => {
  const [isDrop, setisDrop] = useState(false)
  const [Platform, setPlatform] = useState("Platform")
  const { data:platforms ,errors}  = useRequestedPlatforms()
  if(errors) return null  
  return (
      <>
        <div tabIndex={1} onBlur={() =>setisDrop(false)} onClick={() => setisDrop(!isDrop)}
          className="flex justify-start p-4 ml-6 mt-7 hover:bg-slate-500 cursor-pointer w-fit  self-center font-pop rounded-md relative bg-gray-500 text-white">
          <span className="flex items-center gap-2 ">
            {Platform }
            <BsChevronDown />
          </span>

          {isDrop ?
          <div className="flex self-start  z-50 w-[150%] bg-slate-700 rounded-md absolute top-[100%] right-[-50%]  ">
            <ul className="list-none font-pop w-[75%] text-white ">
              {platforms.map(p =>
                <li onClick={() => {
                  onSelectPlatForm(p)
                  setPlatform(p.name)
                }}
                  className="filterListItem" key={p.id}>{p.name}</li>)}
              </ul>
          </div>
            :null
          }
      </div>
      </>

    );
};


export default PlatFormSelector;