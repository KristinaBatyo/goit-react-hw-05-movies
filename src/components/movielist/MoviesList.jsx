import { useLocation } from 'react-router-dom';
import { ListItemSteled, NavLinkStyle } from './MoviesList.styled';
import PropTypes from "prop-types";

export const MoviesList = ({movies}) => {
    const location = useLocation();
        console.log(movies)
    return (
        <ul>
        {movies?.map(movie => (
            <ListItemSteled key={movie.id}>
                <NavLinkStyle to={`${movie.id}`} state={{ from: location }} >
                {movie.title}
                </NavLinkStyle>
            </ListItemSteled>
        ))}
        </ul>
    )
}


MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
};

