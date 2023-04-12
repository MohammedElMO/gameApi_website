import { Genre } from './useRequestedGenres';
import { Platform} from './useRequestedPlatforms';
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
    playtime: Date
    updated: string
    background_image: string
    metacritic:number
    parent_platforms: { platform : PlatForm }[]
}
export const useRequestedGames = (SelectedGenre: Genre | null, SelectedPlatForm: Platform | null) => useRequestedData<GameResponse>("/games", {
 params: {
        genres: SelectedGenre?.id,
        platforms:SelectedPlatForm?.id
    }    
},
[SelectedGenre?.id,SelectedPlatForm?.id]) 