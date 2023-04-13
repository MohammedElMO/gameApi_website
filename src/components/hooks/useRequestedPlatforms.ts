import useRequestedData from "./useData"
import platforms from "../data/platforms"
export interface Platform {
    id: number
    name: string,
}

export const useRequestedPlatforms = () => ({data:platforms , errors:null,isLoading:false}) 


export default useRequestedPlatforms;