import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovie } from "services/Api";
import { Card } from "components/movie/MovieCard";


export const MovieDetailsPage = () => {
    const [movies, setMovies] = useState();
    const {id} = useParams();

    useEffect(() => {
        const fetchMov = async() => {
            try{
                const result = await fetchMovie(id);
                setMovies(result)
                console.log(fetchMovie(id))

            } catch ({responce})
            {console.log(responce)}
        }
        fetchMov()
    }, [id])
    return (
        <>
        {MovieDetailsPage && (
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