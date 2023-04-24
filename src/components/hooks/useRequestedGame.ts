import type { GameQuery } from './../../App';
import { useQuery } from '@tanstack/react-query';
import baseApi, { DataApi } from '../services/api-client'

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
const useRequestedGames = (GameQuery:GameQuery) => {

   return  useQuery<DataApi<GameResponse>,Error>({
        queryKey:["games",GameQuery],
        queryFn: () => baseApi.get<DataApi<GameResponse>>("/games",{
                params:{
                    genres: GameQuery.genre?.id,
                    parent_platforms: GameQuery.platform?.id,
                    ordering: GameQuery.sortBy,
                    search:GameQuery.searchgame
                
            }}).then(resp => resp.data),

    })


}



export default useRequestedGames
     