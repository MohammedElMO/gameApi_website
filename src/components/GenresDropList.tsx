import {useRequestedGenres} from "./hooks/useRequestedGenres";
import CropImage from "./services/image-url";


const GenresDropList = () => {
    const  { data,errors }= useRequestedGenres()
    return (

        <ul className="font-pop">
            {data.map(genre =>
                <li className="flex gap-2 my-3 text-[#ffffffd5] items-center cursor-pointer group "
                key={genre.id} >
                    <img className=" origin-center object-contains max-w-sm w-10 rounded-md group-hover:scale-125"
                        src={CropImage(genre.image_background)}
                        alt="game genre icon" />
                    {genre.name}
                </li>
                )}
        </ul>
    );
};
export default GenresDropList

