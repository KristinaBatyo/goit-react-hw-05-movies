
import { Outlet } from 'react-router-dom';
import { CardStyled, ImgStyled, ListStyled, TitleStyled, TextStyled, NavLinkStyled } from './MovieCard.Styled';

export const Card = ({url, tag, title, score, overview, genres}) => {
    const baseImgUrl = 'https://image.tmdb.org/t/p/w500';


return (
    <CardStyled>
        <ImgStyled src={baseImgUrl + url} alt={tag} />
        <>
        <TitleStyled>{title}</TitleStyled>
        <TitleStyled>User Score {Math.round( score * 10)}%</TitleStyled>
        <TitleStyled>Overview</TitleStyled>
        <TextStyled>{overview}</TextStyled>
        <TitleStyled>Genres</TitleStyled>
        <ul>
        {genres?.map(({ id, name }) => (
            <ListStyled key={id}>{name}</ListStyled>
        ))}
        </ul>
        </>
            <TitleStyled>Additional information</TitleStyled>
            <ul>
                <ListStyled>
                <NavLinkStyled to="cast"> Cast </NavLinkStyled>
                </ListStyled>
                <ListStyled>
                <NavLinkStyled to="reviews"> Reviews </NavLinkStyled>
                </ListStyled>
            </ul>
            <Outlet/>
    </CardStyled>
)
}