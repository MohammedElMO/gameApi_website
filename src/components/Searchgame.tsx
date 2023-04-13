import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai"
interface Props {
onSearchGame:(gameTitle:string) => void
}

export const Searchgame = ({ onSearchGame }: Props) => {
    const game = useRef<HTMLInputElement>(null)
    return (
        <form className="w-full" onSubmit={(e) => {
            e.preventDefault()
            if (game.current)
                onSearchGame(game.current.value)
            
            game.current!.value = ""
        }}>
        <div className='flex p-3 w-[150%] relative  '>
            <AiOutlineSearch  className="absolute left-6 bottom-[40%] z-50  text-white scale-150"/>
                <input
                ref={game}
                type="text"
                placeholder='Search games...'
                className='relative w-full p-2 px-10 bg-slate-800 placeholder:text-slate-500  focus:border-sky-800 focus:border-x-2   bg-transparent text-white rounded-3xl outline-none ' />
        </div>
        </form>
    );
};