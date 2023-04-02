import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiBase from "../components/services/api-client"

interface GameResponse {
    id: number
    name: string
    released: string
    rating: number
    playtime: Date
    updated:string
}
interface GameResponseApi{
    count: number;
    results:GameResponse[]
}

const GamesGrid = () => {
    const [games, setGames] = useState<GameResponse[]>([])
    const [errors, setErrors] = useState("")
    useEffect(() => {
        const controller = new AbortController()
        apiBase
            .get<GameResponseApi>("/games", { signal: controller.signal })
            .then(rep => {
                setGames(rep.data.results)
            })
            .catch(err => {
                setErrors(err.message   )
        })
                


        return ()=> controller.abort()
    },[])

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