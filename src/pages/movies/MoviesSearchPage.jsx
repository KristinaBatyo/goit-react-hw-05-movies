import {Outlet} from "react-router-dom";
import SearchMovies  from "components/movies/MoviesSearch";
import MoviesList from "components/movielist/MoviesList";
import { fetchSearchMovies } from "services/Api";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';



export const MoviePage = () => {
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const moviesName = searchParams.get("moviesName");
    const [error, setError] = useState(null)

    useEffect (() => {
        if (!moviesName) {
            return;
        }

        const fetchMovie = async () => {
            try {
                const result = await fetchSearchMovies(moviesName);
                setMovies(result)
            } catch (error) {
                setError(toast('Something went wrong!'))
            }
        }
        fetchMovie()
    }, [error, moviesName])

    const handleSubmit = e => {
        if (e === movies) {
            return 
        } 
        setSearchParams({moviesName: e});
    };

    return(
        <>
        <SearchMovies onSubmit={handleSubmit} />
        {movies && <MoviesList movies={movies}/>}
        <Outlet/>
    </>
    )
    
}