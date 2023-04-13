import Like from "../../assets/like.png"
import meh from "../../assets/meh.png"
import target from "../../assets/target.png"
import question from "../../assets/question.png"
import Image from "mui-image"
import { ImageListProps } from "@mui/material"
interface Props{
    rating:number
 }

const  Emoji = ({rating} : Props) => {
    if (rating < 3) return (
        <div className="max-w-3">{ question}</div>
    )
    
    const Emojies:{ [key:number]:any} = {
      3:{src:meh,alt:"Meh"},
      4:{src:Like,alt:"like emojie"},
      5:{src:target,alt:"bulleye"}
  }
    return (
        <Image
            width={30}
            alt={Emojies[rating].alt}
            src={Emojies[rating].src}
            className="ml-3 mt-3"
        />
  )
}

export default Emoji;