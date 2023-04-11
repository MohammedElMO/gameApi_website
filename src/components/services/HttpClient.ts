import apiBase from "./api-client"

const url ="https://api.rawg.io/api/games/{game_pk}"
import apiClient from "./api-client"
import axios from "axios"
class HttpClient {

constructor(public endPoint :string){}
    getAll<T>() {
       const screenShotsRequest = apiClient.get<T[]>(this.endPoint)
        return {screenShotsRequest }
    }
  

}

export const  createInstance = (endPoint: string) => { return new HttpClient(endPoint) }

