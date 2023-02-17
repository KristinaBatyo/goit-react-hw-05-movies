import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovie } from "services/Api";
import { Card } from "components/movie/MovieCard";


export const MovieDetailsPage = () => {
    const [movies, setMovies] = useState();
    const {id} = useParams();

    console.log(id)

    useEffect(() => {
        const fetchMov = async() => {
            try{
                const result = await fetchMovie(id);
                setMovies(result)
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
        // <div>
        //     <h2>{movies?.title}</h2>
        //     <img src={baseImgUrl + movies?.poster_path} alt="tgte" />
            
        // {/* <Outlet /> */}
        // </div>
        
    );
    
}