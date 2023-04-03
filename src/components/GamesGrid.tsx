import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiBase from "../components/services/api-client"
import useRequestedGames from "../components/hooks/useRequestedGame"
import GameCard from "./GameCard";


const GamesGrid = () => {
    const  { games , errors} = useRequestedGames()


     

    return (
        <>
            <div className="
            lg:grid-cols-3
            max-semi-md:grig-cols-1
            max-sm:grid-cols-1
            max-md:grid-cols-2
            grid  grid-cols-3
            p-5
            grid-rows-2
            gap-4">
                <GameCard game={games} />
               
            </div>
            
        </>
    );
};


export default GamesGrid;
