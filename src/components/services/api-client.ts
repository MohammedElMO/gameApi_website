
import axios from "axios"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"eb21c38575b64b9295fe70c9e81d01b2"
    }
},)