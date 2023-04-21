import { useEffect, useState } from "react"
import apiBase from "../services/api-client"
import { CanceledError, AxiosError, AxiosRequestConfig } from "axios"

export interface DataApi<T> {
    count:number
    results:T[]
}
const useRequestedData = <T>(endPoint: string, axiosConfig?:AxiosRequestConfig,Devdep?:any[]) => {
    const [data, setData] = useState<T[]>([])
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const controller = new AbortController()
        // setIsLoading(true)
        apiBase
            .get<DataApi<T>>(endPoint, { signal: controller.signal,...axiosConfig})
            .then(rep => {
                setData(rep.data.results)
                // setIsLoading(false)
            })
            .catch((err:AxiosError) => {
                if(err instanceof CanceledError)return
                setErrors(err.message)
                // setIsLoading(false)
                
            }).finally(() => setIsLoading(false))
            return () => controller.abort()
        }, Devdep ? [Devdep] : [])
    return {
        data,
        errors,
        isLoading
       }         
}
export default useRequestedData

