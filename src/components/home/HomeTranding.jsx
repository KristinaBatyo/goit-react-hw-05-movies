import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "services/Api";
import { HomeList } from "./list/HomeList";

export const Tranding = () => {
    const [items, setItems] = useState([]);


    useEffect (() => {
        const fetchTranding = async () => {
            try {
                const data = await fetchTrendingMovies ();
                setItems(data)
            } catch {
                console.error();
            }
        }
        fetchTranding()
    },[]);
    return <HomeList items={items}/>
} 
