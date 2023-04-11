import useRequestedGames, { GameResponse } from "./hooks/useRequestedGame";
import GameIcons from "./GameIcons";
import GameBadge from "./GameBadge";
import CropImage from "./services/image-url";
import Skeleton from '@mui/material/Skeleton';
interface GameT {
    game:GameResponse[]
}


const GameCard = ({ game }: GameT) => {
    const { isLoading } = useRequestedGames()
     return (
         <>
             {game.map((gamer) =>
        <article key={gamer.id} className="flex flex-col shadow-lg  items-start overflow-hidden bg-[#232223] hover:-translate-y-1.5 transition-all rounded-2xl max-w-md font-pop cursor-pointer  ">
         {isLoading &&
                <>
           <Skeleton />
           <Skeleton animation="wave" />
        <Skeleton animation="wave" />
                </>}    
                     <figure >
                <img className=" object-contain" src={CropImage(gamer.background_image)} alt="cyber gamer picture" />
            </figure>
            <div className="w-full flex p-4 gap-2  font-semibold text-white flex-col px-4">
                <h3 className="text-2xl max-sm:text-2xl max-md:text-3xl ">{gamer.name}</h3>
               <div className="flex flex-row-reverse py-3 items-end justify-between">
                   <GameBadge metacritic={gamer.metacritic} />
                    <GameIcons platforms={gamer.parent_platforms.map(plat => plat.platform)}/>
               </div>  <div className="bg-slate-700 p-2 rounded">
                    {gamer.rating}
                </div>
            </div>
        </article>
            )}
        </>
    );
};

export default GameCard