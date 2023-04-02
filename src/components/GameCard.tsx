import { GameResponse } from "./hooks/useRequestedGame";
import lion from "../assets/lion.webp"
interface GameT {
    game:GameResponse[]
}


 const GameCard = ({game}:GameT) => {
     return (
         <>
    {game.map(game => 
        <article key={game.id} className="flex flex-col items-start overflow-hidden bg-[#232223] rounded-2xl max-w-sm font-pop  ">
            <figure >
                <img className=" object-contain" src={game.background_image} alt="cyber game picture" />
            </figure>
            <div className="flex py-3 gap-2 text-white flex-col justify-start  px-4">
                <h3 className="text-3xl max-sm:text-2xl  ">{ game.name}</h3>
                <span>{game.released}</span>
                <div className="bg-slate-700 p-2 rounded">
                    {game.rating}
                </div>
            </div>
        </article>
            )}
        </>
    );
};

export default GameCard