import { useEffect, useState } from "react"
import apiBase from "../services/api-client"
import { CanceledError,AxiosError } from "axios"
export interface GameResponse {
    id: number
    name: string
    released: string
    rating: number
    playtime: Date
    updated: string
    background_image:string
}
interface GameResponseApi{
    count: number;
    results:GameResponse[]
}

const useRequestedGames = () => {
    const [games, setGames] = useState<GameResponse[]>([])
    const [errors, setErrors] = useState("")
    useEffect(() => {
        const controller = new AbortController()
        apiBase
            .get<GameResponseApi>("/games", { signal: controller.signal })
            .then(rep => {
                setGames(rep.data.results)
            })
            .catch((err:AxiosError) => {
                if(err instanceof CanceledError)return
                setErrors(err.message)
            })
            return () => controller.abort()
        }, [])
    return {
        games,
        errors,
       }         
}
export default useRequestedGames