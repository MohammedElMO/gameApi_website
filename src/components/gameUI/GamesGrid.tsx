import type { GameQuery } from "../../App";
import  useRequestedGames  from "../hooks/useRequestedGame";
import type{ GameResponse } from "../hooks/useRequestedGame";
import GameIcons from "./GameIcons";
import GameBadge from "./GameBadge";
import CropImage from "../services/image-url";
import Emoji from "./Emoji";






interface Props {
    gameQuery: GameQuery
}

const GamesGrid = ({ gameQuery }: Props) => {
    
    const {data}= useRequestedGames(gameQuery)




    return (

                <div className=" grid  lg:grid-cols-3  xl:grid-cols-3 max-semi-md:grig-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 p-5 grid-rows-2 gap-5">
                    {data?.results.map(gamer =>(

                        <article 
                        key={gamer.id}
                        className="flex flex-col shadow-lg  items-start overflow-hidden bg-[#232223] hover:-translate-y-1.5 transition-all rounded-2xl font-pop cursor-pointer max-h-fit h-max ">
                    <figure >
                        <img className=" object-contain" src={CropImage(gamer.background_image)} alt="cyber gamer picture" />
                    </figure>
                    <div className="w-full flex p-4 gap-2  font-semibold text-white flex-col px-4">
                        <div className="flex flex-row-reverse py-3 items-end justify-between">
                            <GameBadge metacritic={gamer.metacritic} />
                            <GameIcons platforms={gamer.parent_platforms.map(plat => plat.platform)} />
                        </div>
                        <h3 className="text-2xl max-sm:text-2xl max-md:text-3xl ">
                            {gamer.name}
                            <Emoji rating={gamer.rating_top}/>
                        </h3>
                        <div className="bg-slate-700 p-2 rounded">
                            {gamer.rating}
                        </div>
                    </div>
                    </article>
                    ))}
                </div>
            
            )
}


export default GamesGrid;
