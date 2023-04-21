import { useQuery } from "@tanstack/react-query"
import { CACHE_GENRES_KEY } from "../../constants/cacheKeys"
import apiBase from "../services/api-client"

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
            .get<Genre[]>("/genres")
            .then(rep => rep.data)

})



 
}


export default useRequestedGenres