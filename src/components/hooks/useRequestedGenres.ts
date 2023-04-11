import useRequestedData from "./useData"


export interface Genre {
    id: number,
    name: string,
    image_background:string
}

export const useRequestedGenres = () => useRequestedData<Genre>("/genres") 