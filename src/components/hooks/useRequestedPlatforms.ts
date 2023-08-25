import { useQuery } from "@tanstack/react-query"
import platforms from "../data/platforms"
import { create } from "../services/HttpClient"
import type { GameResponse, Platform } from "./useRequestedGame"
import { DataApi } from "../services/api-client"
export const useRequestedPlatforms = () =>
    

    useQuery<DataApi<Platform>,Error>({
        queryKey:["platForms"],
        queryFn:create("/platforms/lists/parents").getAll<Platform>,    
        staleTime:48*60*2*1000, // 24h
        initialData: {count:platforms.length,next:null,results:platforms}
    })



export default useRequestedPlatforms;