import { useEffect, useState } from "react"
import apiBase from "../services/api-client"
import { CanceledError, AxiosError } from "axios"

export interface Genre {
    id: number,
    name: string,
}
interface GenresApi {
    count:number
    results:Genre[]
}

const useRequestedGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiBase
            .get<GenresApi>("/genres", { signal: controller.signal })
            .then(rep => {
                setGenres(rep.data.results)
            })
            .catch((err:AxiosError) => {
                if(err instanceof CanceledError)return
                setErrors(err.message)
                
            }).finally(() =>
                setIsLoading(false)
                )
            return () => controller.abort()
        }, [])
    return {
        genres,
        errors,
        isLoading
       }         
}
export default useRequestedGenres

