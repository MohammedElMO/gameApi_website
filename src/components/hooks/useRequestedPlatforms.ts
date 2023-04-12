import useRequestedData from "./useData"

export interface Platform {
    id: number
    name: string,
}

export const useRequestedPlatforms = () => useRequestedData<Platform>("/platforms/lists/parents") 


export default useRequestedPlatforms;