
import axios from "axios"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"b4f83ba6c76341ac98c1b6511536e4a2"
    }
},)