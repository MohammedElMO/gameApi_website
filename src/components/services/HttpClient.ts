import apiBase from "./api-client"



class HttpClient {
constructor(public endPoint :string){}
    getAll() {
        
    }
    Delete() {
        
    }
    create() {
        
    }
    Remove() {
        
    }

}

export const  createInstance = (endPoint: string) => { return new HttpClient(endPoint) }

