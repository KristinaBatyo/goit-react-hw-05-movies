import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovie } from "services/Api";
import  Card  from "components/card/MovieCard";



export const MovieDetailsPage = () => {
    const [movies, setMovies] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMov = async() => {
            try{
                const result = await fetchMovie(id);
                setMovies(result)
            } catch ({responce})
            {console.log(responce.data.message)}
        }
        fetchMov()
    }, [id])
    return (
        <>
            <button onClick={()=> navigate(-1)}>Go back</button>
        {movies && (
                    <Card
                    url={movies?.poster_path}
                    tag={movies?.title}
                    title={movies?.title}
                    score={movies?.vote_average}
                    overview={movies?.overview}
                    genres={movies?.genres}
                />
        )}
        </>
    );
    
}