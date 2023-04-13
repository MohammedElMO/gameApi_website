
import axios from "axios"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"f1e9a00da56b4d0881cbd2846e9af0ca"
    }
},)