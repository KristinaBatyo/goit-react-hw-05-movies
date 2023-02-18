import {Outlet} from "react-router-dom";
import { SearchMovies } from "components/movies/MoviesSearh";
import { MoviesList } from "components/movies/MoviesList";
import { fetchSearchMovies } from "services/Api";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";



export const MoviePage = () => {
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const moviesName = searchParams.get("moviesName");

    useEffect (() => {
        if (!moviesName) {
            return;
        }

        const fetchMovie = async () => {
            try {
                const result = await fetchSearchMovies(moviesName);
                setMovies(result)
    console.log(result);

            } catch ({error}) {
                console.log(error);
            }
        }
        fetchMovie()
    }, [moviesName])

    const handleChange = e => {
        setSearchParams({moviesName: e.currentTarget.value.toLowerCase()});
    console.log({moviesName: e.currentTarget.value});

    }

    const handleSubmit = e => {
        e.preventDefault();

        if (moviesName === '') {
            console.log('Enter the name of the picture!');
            return;
        }
        setSearchParams({movies});
    };


    return(
        <>
        <SearchMovies onSubmit={handleSubmit} value={moviesName} onChange={handleChange}/>
        <MoviesList movies={movies}/>
        <Outlet/>
    </>
    )
    
}