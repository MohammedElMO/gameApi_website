import {Genre, useRequestedGenres} from "./hooks/useRequestedGenres";
import CropImage from "./services/image-url";
import CircularProgress from '@mui/joy/CircularProgress';

interface Props {
    onFilter: (genreName: Genre) => void
    selectedGenres: Genre | null
}

const GenresDropList = ({onFilter,selectedGenres}:Props) => {
    const { data, errors ,isLoading} = useRequestedGenres()
    if(errors) return null
    if(isLoading) return <CircularProgress />
    return (

        <ul className="font-pop">
            {data.map(genre =>
                <li className="flex gap-2 my-3 text-[#ffffffd5] items-center cursor-pointer group "
                key={genre.id} >
                    <img className=" origin-center object-contains max-w-sm w-10 rounded-md group-hover:scale-125"
                        src={CropImage(genre.image_background)}
                        alt="game genre icon" />
                    <a className={selectedGenres?.id === genre.id ? " hover:underline underline font-bold" :"hover:underline"} onClick={() => onFilter(genre)}>
                    {genre.name}
                    </a>
                </li>
                )}
        </ul>
    );
};
export default GenresDropList

