import type {Genre} from "./hooks/useRequestedGenres";
import useRequestedGenres from "./hooks/useRequestedGenres";
import CropImage from "./services/image-url";
import CircularProgress from '@mui/joy/CircularProgress/CircularProgress';

interface Props {
    onFilter: (genreName: number) => void
    selectedGenres?: number
    dark:boolean
}

const GenresDropList = ({onFilter,selectedGenres,dark}:Props) => {
    const genresQuery = useRequestedGenres()

        if (genresQuery.isLoading) return <CircularProgress />
    return (
        <>
            <h1 className={`text-3xl font-bold font-pop text-start dark: ${dark ? "text-[rgba(0,0,0,0.9)]": "text-white" }`}>Genres</h1>
        <ul className="font-pop">
            {genresQuery.data?.results?.map((genre) =>
                <li className={`flex gap-2 my-4  text-[#ffffffd5] items-center  cursor-pointer group  dark: ${dark ? "text-[rgba(0,0,0,0.9)]": "text-white"} `}
                key={genre.id} >
                    <img className=" origin-center object-cover max-w-sm w-10 rounded group-hover:scale-125"
                        src={CropImage(genre.image_background)}
                        alt="game genre icon" />
                    <a
                     className={selectedGenres === genre.id 
                        ? "hover:underline underline font-bold" 
                        :"hover:underline"} 

                    onClick={() => onFilter(genre.id)}>
                    {genre.name}
                    </a>
                </li>
                )}
        </ul>
</>
    );
};
export default GenresDropList

