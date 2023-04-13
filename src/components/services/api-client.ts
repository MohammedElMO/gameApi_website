
import axios from "axios"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"dd60ab40082f4d2baf571aa157496b19"
    }
},)