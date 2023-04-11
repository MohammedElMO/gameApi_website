import useRequestedGenres from "./hooks/useRequestedGenres";

type Props = {
    
};
const GenresDropList = (props: Props) => {
    const { genres ,errors,isLoading}  = useRequestedGenres()
    return (
        <ul>
            {genres.map(genre =>
                <li key={genre.id}>{ genre.name}</li>
                )}
        </ul>
    );
};
export default GenresDropList