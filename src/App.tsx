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
import GamesHeading from "./components/gameUI/GamesHeading";

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortBy: string 
  searchgame: string | ""
  selectedFilter:string
}

const App = () => {
  const { darkmode:dark,setDarkmode  } = useColorToggler()    
const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)  
  return (
    <>
      <div className={"h-screen grid grid-areas-layout grid-rows-layout  "}>
        <section className=" grid-in-nav shadow-lg shadow-gray-500 ">
          <NavBar onSearchGame={(searchgame)=> setGameQuery({...GameQuery,searchgame  })} darkmode={dark} setDarkmode={setDarkmode}  />
        </section>
        <section className=" bg-[#433D48] bg-[rgba(0,0,0,.9)]  grid-in-main max-md:col-start-nav ">
          <div className="flex w-full pt-4 pl-5  justify-start">
            <GamesHeading gameQuery={GameQuery} />
            </div>
            <div className="flex">
              <PlatFormSelector  onSelectPlatForm={(platform) => setGameQuery({...GameQuery,platform })} />
              <DropSort OnSortGames={(sortBy) => setGameQuery({...GameQuery,sortBy})}  />
          </div>
          <GamesGrid gameQuery={GameQuery}/>
          </section>
        <section className=" bg-[#343333] bg-[rgba(0,0,0,.9)] grid-in-aside p-3 max-w-[200px] w-[200px] max-md:hidden"> 
          <GenresDropList selectedGenres={GameQuery.genre} onFilter={(genre) => setGameQuery({ ...GameQuery, genre })} />  
        </section>
      </div>
    </>
  );
};

export default App;