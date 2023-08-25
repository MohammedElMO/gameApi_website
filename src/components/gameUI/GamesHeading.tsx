import { GameQuery } from "../../App";
import useRequestedGenres from "../hooks/useRequestedGenres";
import useRequestedPlatforms from "../hooks/useRequestedPlatforms";

interface Props {
    gameQuery: GameQuery
    dark:boolean
}

const GamesHeading = ({ gameQuery, dark }:Props) => {

        const { data} = useRequestedGenres()
        const { data:p} = useRequestedPlatforms()

        const gameName = data.results.find(g => g.id === gameQuery.genreId)
        const platformName = p.results.find(p => p.id === gameQuery.platformId)

    return (
        <>
        <h1 className={`text-5xl font-bold font-pop  text-start dark: ${dark ? "text-[rgba(0,0,0,0.9)]": "text-white" } `}>
            {platformName?.name  || " "} {gameName?.name || " "} Games        
        </h1>
        </>
    );
};

export default GamesHeading;