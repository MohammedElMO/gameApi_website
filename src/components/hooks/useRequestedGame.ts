import { useInfiniteQuery } from '@tanstack/react-query';
import { create } from "../services/HttpClient";
import { DataApi } from '../services/api-client';
import type { GameQuery } from './../../App';

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

   return  useInfiniteQuery<DataApi<GameResponse>,Error>({
        queryKey:["games",GameQuery],
        queryFn: ({pageParam = 1}) => create("/games").getAll({ 
            params:{
            genres: GameQuery.genre?.id,
            parent_platforms: GameQuery.platform?.id,
            ordering: GameQuery.sortBy,
            search:GameQuery.searchgame,
            page:pageParam
    }}),
    getNextPageParam:(lastPage,allPages) => {return lastPage?.next ? allPages.length++ : lastPage}

    

    })


}



export default useRequestedGames
     