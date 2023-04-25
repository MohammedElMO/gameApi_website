import { useQuery } from "@tanstack/react-query"
import { CACHE_GENRES_KEY } from "../../constants/cacheKeys"
import genres from "../data/genres"
import { create } from "../services/HttpClient"
export interface Genre {
    id: number,
    name: string,
    image_background:string
}
const useRequestedGenres = () => {
    
        
return  useQuery({
    queryKey:CACHE_GENRES_KEY,
    queryFn:create("/genres").getAll<Genre>,
    staleTime:24*60*2*1000, // 24h
    initialData: {count:genres.length ,results:genres}
})



 
}


export default useRequestedGenres