import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiBase from "../components/services/api-client"
import useRequestedGames from "../components/hooks/useRequestedGame"


const GamesGrid = () => {
    const  { games , errors} = useRequestedGames()


     

    return (
        <>
            <div className="grid">
                {games.map(game =>
                    <article className="" key={game.id}>
                        {game.name}
                    </article>
                )}    
            </div>
            
        </>
    );
};


export default GamesGrid;
