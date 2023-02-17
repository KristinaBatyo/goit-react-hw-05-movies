import { useState, useEffect } from "react";
import { fetchMovie } from "services/Api";
import { MovieItem } from "./moviecard/MovieCard";

export const MovieItemCard = () => {
    const [item, setItem] = useState([]);


    useEffect (() => {
        const fetchTranding = async () => {
            try {
                const data = await fetchMovie ();
                setItem(data)
            } catch {
                console.error();
            }
        }
        fetchTranding()
    },[]);
    return <MovieItem items={item}/>
} 


