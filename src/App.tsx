import GamesGrid from "./components/gameUI/GamesGrid";
import NavBar from "./components/NavBar";
import useColorToggler from "./components/hooks/useColorToggler";
import { darkMode } from "./components/thems/them";
import "./index.css"
import GenresDropList from "./components/GenresDropList";
import { useState } from "react";
import { Genre } from "./components/hooks/useRequestedGenres";
import PlatFormSelector from "./components/PlatFormSelector";
import {Platform} from "./components/hooks/useRequestedPlatforms"
import DropSort from "./components/DropSortGenres";

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortBy:string 
}

const App = () => {
  const { darkmode:dark,setDarkmode  } = useColorToggler()    
const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)  
  return (
    <>
      <div className={"h-screen grid grid-areas-layout grid-rows-layout bg-[#999]  "}>
        <section className=" grid-in-nav ">
          <NavBar darkmode={dark} setDarkmode={setDarkmode} />
        </section>
        <section className=" bg-[#999] grid-in-main max-md:col-start-nav ">
          <div className="flex">
            <PlatFormSelector onSelectPlatForm={(platform) => setGameQuery({...GameQuery,platform })} />
            <DropSort OnSortGames={(sortBy) => setGameQuery({...GameQuery,sortBy})}  />
          </div>
          <GamesGrid gameQuery={GameQuery}/>
          </section>
        <section className="bg-[#343333] grid-in-aside p-3 max-w-[200px] w-[200px] max-md:hidden"> 
          <GenresDropList selectedGenres={GameQuery.genre} onFilter={(genre) => setGameQuery({ ...GameQuery, genre })} />  
        </section>
      </div>
    </>
  );
};

export default App;