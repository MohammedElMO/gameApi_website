import platforms from "../data/platforms"
import { useQuery } from "@tanstack/react-query"
import type { Platform } from "./useRequestedGame"
import {create } from "../services/HttpClient"

export const useRequestedPlatforms = () =>
{
    return useQuery({
        queryKey:["platForms"],
        queryFn:create("/platforms/lists/parents").getAll<Platform>,    
        staleTime:48*60*2*1000, // 24h
        initialData: {count:platforms.length,results:platforms}
    })
}



export default useRequestedPlatforms;