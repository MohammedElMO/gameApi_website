import type { GameQuery } from './../../App';
import { useQuery } from '@tanstack/react-query';
import baseApi, { DataApi } from '../services/api-client'
import {create} from "../services/HttpClient"

export interface Platform   {
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
    parent_platforms: { platform : Platform }[]
}
const useRequestedGames = (GameQuery:GameQuery) => {

   return  useQuery<DataApi<GameResponse>,Error>({
        queryKey:["games",GameQuery],
        queryFn: () => create("/games").getAll({ 
            params:{
            genres: GameQuery.genre?.id,
            parent_platforms: GameQuery.platform?.id,
            ordering: GameQuery.sortBy,
            search:GameQuery.searchgame
        
    }})

    })


}



export default useRequestedGames
     