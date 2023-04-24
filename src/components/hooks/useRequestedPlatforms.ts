import {DataApi} from "../services/api-client"
import platforms from "../data/platforms"
import { useQuery } from "@tanstack/react-query"
import apiBase from "../services/api-client"
export interface Platform {
    id: number
    name: string,
}

export const useRequestedPlatforms = () =>
{
    return useQuery({

        queryKey:["platForms"],
        queryFn:() =>  apiBase.get<DataApi<Platform>>("/platforms/lists/parents")
                    .then(resp => resp.data)
        ,
        staleTime:48*60*2*1000, // 24h
        initialData: {count:platforms.length,results:platforms}
    })
}



export default useRequestedPlatforms;