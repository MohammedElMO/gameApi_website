
import axios from "axios"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"3a72735c287a4b61bc2287c801c50a34"
    }
},)