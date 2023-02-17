import { Link,  } from "react-router-dom"


export const MovieItem = ({item}) => {
    const elements = item.map(({id, title}) => 
    <Link key={id} to={`${id}`} >
    <li>
        <h2>{title}</h2>
    </li>
    </Link>
    
    )
    return (
        <ul>{elements}</ul>
        
    )
    
}