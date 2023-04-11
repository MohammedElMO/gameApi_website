import { useEffect, useState } from "react"
import apiBase from "../services/api-client"
import { CanceledError, AxiosError } from "axios"

export interface PlatForm   {
    id: number
    name: string
    slug:string
}
export interface GameResponse {
    id: number
    name: string
    released: string
    rating: number
    playtime: Date
    updated: string
    background_image: string
    metacritic:number
    parent_platforms: { platform : PlatForm }[]
}
interface GameResponseApi{
    count: number;
    results:GameResponse[]
}

const useRequestedGames = () => {
    const [games, setGames] = useState<GameResponse[]>([])
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const controller = new AbortController()
        apiBase
            .get<GameResponseApi>("/games", { signal: controller.signal })
            .then(rep => {
                setGames(rep.data.results)
                setIsLoading(false)
            })
            .catch((err:AxiosError) => {
                if(err instanceof CanceledError)return
                setErrors(err.message)
                setIsLoading(false)
            })
            return () => controller.abort()
        }, [])
    return {
        games,
        errors,
        isLoading
       }         
}
export default useRequestedGames