import apiClient from "./api-client";



const CropImage = (url:string) => {
    const media ="media/"
    const cropIndex = url.indexOf(media) + media.length
   return url.slice(0,cropIndex) + "crop/600/400/" + url.slice(cropIndex)
}
export default CropImage