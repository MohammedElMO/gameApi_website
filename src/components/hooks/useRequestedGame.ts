import { GameQuery } from './../../App';
import useRequestedData from "./useData"

export interface PlatForm   {
    id: number
    name: string
    slug:string
}

export interface GameResponse {
    id: number
    name: string
    released: string
    rating: number
    rating_top: number
    playtime: Date
    updated: string
    background_image: string
    metacritic:number
    parent_platforms: { platform : PlatForm }[]
}
export const useRequestedGames = (GameQuery:GameQuery) => useRequestedData<GameResponse>("/games", {
 params: {
        genres: GameQuery.genre?.id,
        platforms: GameQuery.platform?.id,
        ordering: GameQuery.sortBy,
        search:GameQuery.searchgame
    }    
},
[GameQuery]) 