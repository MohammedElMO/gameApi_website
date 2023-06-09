import { useState } from "react";
import DropSort from "./components/DropSortGenres";
import GenresDropList from "./components/GenresDropList";
import NavBar from "./components/NavBar";
import PlatFormSelector from "./components/PlatFormSelector";
import GamesGrid from "./components/gameUI/GamesGrid";
import GamesHeading from "./components/gameUI/GamesHeading";
import { Platform } from "./components/hooks/useRequestedGame";
import { darkMode } from "./components/thems/them";
import "./index.css";

export interface GameQuery {
  genreId?: number
  platformId?:number
  sortBy: string 
  searchgame: string | ""
  selectedFilter:string
}

const App = () => {
  const [darkmode, setDarkmode] = useState<boolean>(false) 
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) 
 
  return (
      <div className={"h-screen grid grid-areas-layout grid-rows-layout  "}>
        <section className=" grid-in-nav shadow-lg shadow-gray-500 ">
          <NavBar onSearchGame={(searchgame)=> setGameQuery({...GameQuery,searchgame  })} darkmode={darkmode} setDarkmode={setDarkmode}  />
        </section>
        <section className={darkMode("bg-[rgba(0,0,0,.9)]  grid-in-main max-md:col-start-nav ",darkmode,"bg-white")}>
          <div className="flex w-full pt-4 pl-5  justify-start">
            <GamesHeading dark={darkmode} gameQuery={GameQuery} />
            </div>
            <div className="flex">
              <PlatFormSelector  onSelectPlatForm={(platform) => setGameQuery({...GameQuery,platformId:platform.id })} />
              <DropSort OnSortGames={(sortBy) => setGameQuery({...GameQuery,sortBy})}  />
          </div>
          <GamesGrid gameQuery={GameQuery}/>
          </section>
        <section
        className={`
        dark: ${darkmode ?  "bg-white":"bg-[rgba(0,0,0,0.9)]"} 
          grid-in-aside p-3 max-w-[200px] w-[200px] max-md:hidden`}> 
          
          
          
        <GenresDropList dark={darkmode} selectedGenres={GameQuery.genreId} onFilter={(genre) => setGameQuery({ ...GameQuery , genreId:genre })} />  
        </section>
      </div>
  );
};

export default App;