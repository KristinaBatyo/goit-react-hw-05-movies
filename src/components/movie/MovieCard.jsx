import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { CardStyled, ImgStyled } from './MovieCard.Styled';

export const Card = ({url, tag, title, score, overview, genres}) => {
    const baseImgUrl = 'https://image.tmdb.org/t/p/w500';


return (
    <CardStyled>
        <ImgStyled src={baseImgUrl + url} alt={tag} />
        <>
        <h2>{title}</h2>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
        {genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
        ))}
        </ul>
        </>
            <h2>Additional information</h2>
            <ul>
                <li>
                <NavLink to="cast"> Cast </NavLink>
                </li>
                <li>
                <NavLink to="reviews"> Reviews </NavLink>
                </li>
            </ul>
            <Outlet/>
    </CardStyled>
)
}