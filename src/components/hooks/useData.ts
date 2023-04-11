import { useEffect, useState } from "react"
import apiBase from "../services/api-client"
import { CanceledError, AxiosError } from "axios"

interface DataApi<T> {
    count:number
    results:T[]
}
const useRequestedData = <T>(endPoint:string) => {
    const [data, setData] = useState<T[]>([])
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiBase
            .get<DataApi<T>>(endPoint, { signal: controller.signal })
            .then(rep => {
                setData(rep.data.results)
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
        data,
        errors,
        isLoading
       }         
}
export default useRequestedData

