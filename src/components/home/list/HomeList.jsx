import { NavLink,  } from "react-router-dom"
import { HomeListStyled } from "./HomeList.styled"


export const HomeList = ({items}) => {
    const elements = items.map(({id, title}) => 
    <NavLink key={id} to={`/movies/${id}`} >
    <HomeListStyled>
        <h4>{title}</h4>
    </HomeListStyled>
    </NavLink>
    
    )
    return (
        <ul>{elements}</ul>
        
    )
    
}