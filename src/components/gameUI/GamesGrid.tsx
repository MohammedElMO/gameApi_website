import GameCard from "./GameCard";
import { useRequestedGames } from "../hooks/useRequestedGame";
import { Genre } from "../hooks/useRequestedGenres";
import { Platform } from "../hooks/useRequestedPlatforms";
import { GameQuery } from "../../App";
interface Props {
    gameQuery: GameQuery
}

const GamesGrid = ({ gameQuery }: Props) => {
    const { data, isLoading } = useRequestedGames(gameQuery)




    return (
        <>
            <div className="
                    grid 
                    lg:grid-cols-3
                    xl:grid-cols-3
                    max-semi-md:grig-cols-1
                    max-sm:grid-cols-1
                    max-md:grid-cols-2
                    grid-cols-3
                    p-5
                    grid-rows-2
                    gap-5"
            >
                <GameCard game={data} isLoading={isLoading} />
            </div>

        </>
    );
};


export default GamesGrid;
