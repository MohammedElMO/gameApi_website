import axios from "axios"
export interface DataApi<T> {
    count:number
    results:T[]
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"2e94ba038d0c424395bf80bb5ddac57c"
    }
},)