import { useQuery } from "@tanstack/react-query"
import { CACHE_GENRES_KEY } from "../../constants/cacheKeys"
import apiBase from "../services/api-client"
import { DataApi } from "./useData"
import genres from "../data/genres"
export interface Genre {
    id: number,
    name: string,
    image_background:string
}
const useRequestedGenres = () => {
    
        
return  useQuery({
    queryKey:CACHE_GENRES_KEY,
    queryFn:() =>
        apiBase
            .get<DataApi<Genre>>("/genres")
            .then(rep => rep.data),

    staleTime:24*60*2*1000, // 24h
    initialData: {count:genres.length ,results:genres}
})



 
}


export default useRequestedGenres