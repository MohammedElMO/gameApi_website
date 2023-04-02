
import axios from "axios"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"b58c25bfa8674ef682c660aa0f99f984"
    }
},)