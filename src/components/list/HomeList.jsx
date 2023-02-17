
import { HomeListStyled, NavStyle } from "./HomeList.styled"
import PropTypes from "prop-types";

export const HomeList = ({items}) => {
    const elements = items.map(({id, title}) => 
    <NavStyle key={id} to={`/movies/${id}`} >
    <HomeListStyled>
        <h4>{title}</h4>
    </HomeListStyled>
    </NavStyle>
    
    )
    return (
        <ul>{elements}</ul>
        
    )
    
}

HomeList.propTypes = {
    items: PropTypes.array.isRequired,
}