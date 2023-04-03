import { GameResponse } from "./hooks/useRequestedGame";
import lion from "../assets/lion.webp"
import GameIcons from "./GameIcons";
interface GameT {
    game:GameResponse[]
}


 const GameCard = ({game}:GameT) => {
     return (
         <>
    {game.map((gamer) => 
        <article key={gamer.id} className="flex flex-col shadow-lg  items-start overflow-hidden bg-[#232223] hover:-translate-y-1.5 transition-all rounded-2xl max-w-sm font-pop cursor-pointer  ">
            <figure >
                <img className=" object-contain" src={gamer.background_image} alt="cyber gamer picture" />
            </figure>
            <div className="flex py-3 gap-2 text-white flex-col justify-start  px-4">
                <h3 className="text-3xl max-sm:text-2xl  ">{ gamer.name}</h3>
                <GameIcons platforms={gamer.parent_platforms.map(plat => plat.platform)}/>
                <div className="bg-slate-700 p-2 rounded">
                    {gamer.rating}
                </div>
            </div>
        </article>
            )}
        </>
    );
};

export default GameCard