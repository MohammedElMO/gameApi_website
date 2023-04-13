import { GameQuery } from "../../App";

interface Props {
   gameQuery:GameQuery
}

 const GamesHeading = ({gameQuery}:Props) => {
    return (
        <>
        <h1 className="text-5xl font-bold font-pop text-white text-start">
        {gameQuery.platform?.name  || " "} {gameQuery.genre?.name || " "} Games        
        </h1>
        </>
    );
};

export default GamesHeading;