import { GameQuery } from "../../App";
import { darkMode } from "../thems/them";

interface Props {
    gameQuery: GameQuery
    dark:boolean
}

const GamesHeading = ({ gameQuery, dark }:Props) => {
    return (
        <>
        <h1 className={`text-5xl font-bold font-pop  text-start dark: ${dark ? "text-[rgba(0,0,0,0.9)]": "text-white" } `}>
            {gameQuery.platform?.name  || " "} {gameQuery.genre?.name || " "} Games        
        </h1>
        </>
    );
};

export default GamesHeading;