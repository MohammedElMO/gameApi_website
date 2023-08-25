import apiClient from "./api-client";
import placeholderImage from "../../assets/no-image.jpg"


const CropImage = (url: string) => {
    if(!url) return placeholderImage
    const media ="media/"
    const cropIndex = url.indexOf(media) + media.length
   return url.slice(0,cropIndex) + "crop/600/400/" + url.slice(cropIndex)
}
export default CropImage