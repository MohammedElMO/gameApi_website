import { useQuery } from "@tanstack/react-query"
import { CACHE_GENRES_KEY }  from "../../constants/cacheKeys"
import genres from "../data/genres"
import { create } from "../services/HttpClient"

import { DataApi } from "../services/api-client"
export interface Genre {
    id: number,
    name: string,
    image_background:string
}
const getGenres = create('/genres').getAll

const useRequestedGenres = () => 
    
        
  useQuery<DataApi<Genre>,Error>({
    
    queryKey:CACHE_GENRES_KEY,
    queryFn: create("/genres").getAll<Genre>,
    staleTime:24*60*2*1000, // 24h
    initialData: {count:genres.length , next:null ,results:genres}
})



 


export default useRequestedGenres