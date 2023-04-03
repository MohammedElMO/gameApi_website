import { useEffect, useState } from "react";
interface ScreenShot {
    image: string
    hidden:boolean
}

type Props = {
    metacritic:number
};
const GameBadge = ({ metacritic }: Props) => {
       
    
    
    const badgeColor = (rate: number) => {
        let badgeStyle = ""
        
            rate >= 85 ? badgeStyle += "text-green-400" :
                (rate <= 85 && rate >= 65) ? badgeStyle += "text-yellow-400" : 
                rate >= 40 && rate <= 50  ? badgeStyle += "text-red-800" :        
                rate <= 30  ? badgeStyle += "text-red-300" : "text-black"        
        return badgeStyle
} 

    return (
             <div className={"bg-slate-700 w-fit p-2 rounded-md  " + badgeColor(metacritic)}>
            
            {metacritic}
            </div>
    );
};

export default GameBadge