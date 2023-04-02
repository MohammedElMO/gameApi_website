import { useState } from "react"

export default function useColorToggler()  {
    const [darkmode, setDarkmode] = useState<boolean>(false) 
    return {
        darkmode,
        setDarkmode
    }
} 
