import { AiOutlineSearch } from "react-icons/ai"

export const Searchgame = () => {
    return (
        <div className='flex p-3 w-full relative  '>
            <AiOutlineSearch  className="absolute left-6 bottom-[40%] z-50  text-white scale-150"/>
            <input type="text"
                placeholder='Search games...'
                className='relative w-full p-2 px-10 bg-slate-800 placeholder:text-slate-500  focus:border-sky-400 focus:border-x-2   bg-transparent text-white rounded-3xl outline-none ' />
        </div>
    );
};