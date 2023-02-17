import { useState, useEffect } from "react";
import { fetchCast } from "services/Api";
import { useParams } from "react-router-dom";
import { CastItem } from "components/cast/Cast";



export const CastPage = () => {
    const [cast, setCast] = useState();
    const {id} = useParams();
    const baseImgUrl = 'https://image.tmdb.org/t/p/w500';


    useEffect (() => {
        const fetchCastPage = async () => {
            try {
                const result = await fetchCast(id);
                setCast(result)
                console.log(fetchCast(id))
            } catch (responce) {
                console.log(responce);
            }
        }
        fetchCastPage();
    }, [id])
    return (
        <>
        {/* <h1>{cast?.cast[0].character}</h1>
        <p>efefe</p> */}
        <ul>
            {cast?.cast.map(({id, profile_path, name}) => (
                <li key={id}>
                    <img src={baseImgUrl + profile_path} alt={name} />
                </li>
            ))}
        </ul>
        </>
    )
    
}