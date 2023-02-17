import { Link,  } from "react-router-dom"
import { HomeListStyled } from "./HomeList.styled"


export const HomeList = ({items}) => {
    console.log(items)
    const elements = items.map(({id, title}) => 
    <Link key={id} to={`/movie/${id}`} >
    <HomeListStyled>
        <h2>{title}</h2>
    </HomeListStyled>
    </Link>
    
    )
    return (
        <ul>{elements}</ul>
        
    )
    
}