import {Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovie } from "services/Api";

export const MovieDetailsPage = () => {
    const [movies, setMovies] = useState();
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        const fetchMov = async() => {
            try{
                const result = await fetchMovie(id);
                setMovies(result)
            } catch {console.error()}
        }
        fetchMov()
    }, [id])
    return (
        <div>
            <h2>{movies?.id}</h2>
            
        <Outlet />
        </div>
        
    );
    
}