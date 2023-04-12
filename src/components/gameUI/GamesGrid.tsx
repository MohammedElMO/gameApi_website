import GameCard from "./GameCard";
import { useRequestedGames } from "../hooks/useRequestedGame";
import { Genre } from "../hooks/useRequestedGenres";
import { Platform } from "../hooks/useRequestedPlatforms";
interface Props  {
    SelectedGenre:Genre | null
    SelectedPlatForm:Platform | null
}

const GamesGrid = ({SelectedGenre,SelectedPlatForm}:Props) => {
    const { data, isLoading } = useRequestedGames(SelectedGenre,SelectedPlatForm)




    return (
        <>
            <div className="
            lg:grid-cols-3
            max-semi-md:grig-cols-1
            max-sm:grid-cols-1
            max-md:grid-cols-2
            grid-cols-3
            grid 
            p-5
            grid-rows-2
            gap-4">
                <GameCard game={data} isLoading={isLoading} />

            </div>

        </>
    );
};


export default GamesGrid;
