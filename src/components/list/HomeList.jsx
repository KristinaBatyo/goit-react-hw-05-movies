
import { HomeListStyled, NavStyle } from "./HomeList.styled"
import PropTypes from "prop-types";

const HomeList = ({items}) => {
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
export default HomeList;

HomeList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
        ).isRequired,
    
}

