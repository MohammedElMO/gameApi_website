import { AxiosRequestConfig } from "axios"
import apiBase, { DataApi } from "./api-client"



 class HttpServices {



    constructor(public endPoint:string){}

     getAll = <T>(config?:AxiosRequestConfig) => {
                   return apiBase
                        .get<DataApi<T>>(this.endPoint,config)
                        .then(rep => rep.data)
        
    }
}


export const create = (endPoint:string) => new HttpServices(endPoint)