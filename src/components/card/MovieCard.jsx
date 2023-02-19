import { Outlet } from 'react-router-dom';
import {
  CardStyled,
  ImgStyled,
  ListStyled,
  TitleStyled,
  TextStyled,
  NavLinkStyled,
} from './MovieCard.Styled';
import PropTypes from 'prop-types';

const Card = ({ url, tag, title, score, overview, genres, from }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <CardStyled>
      <ImgStyled src={baseImgUrl + url} alt={tag} />
      <>
        <TitleStyled>{title}</TitleStyled>
        <TitleStyled>User Score {Math.round(score * 10)}%</TitleStyled>
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
          <NavLinkStyled to="cast" state={from}>
            {' '}
            Cast{' '}
          </NavLinkStyled>
        </ListStyled>
        <ListStyled>
          <NavLinkStyled to="reviews" state={from}>
            {' '}
            Reviews{' '}
          </NavLinkStyled>
        </ListStyled>
      </ul>
      <Outlet />
    </CardStyled>
  );
};

export default Card;

Card.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
