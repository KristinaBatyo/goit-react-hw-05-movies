import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CardStyled = styled.div`
padding: 0.5rem;
display: flex;
flex-direction: column;
}`;

export const ImgStyled = styled.img`
border: 2px solid orange;
border-radius: 8px;
width: 300px;
}`;

export const ListStyled = styled.li`
list-style-type: none;
color: #D2B48C;
margin: 5px;
}`;

export const NavLinkStyled = styled(NavLink)`
text-decoration: none; 
list-style-type: none;
color: #D2B48C;
margin: 5px;
}`;

export const TextStyled = styled.p`
list-style-type: none;
color: #D2B48C;
margin: 5px;
}`;

export const TitleStyled = styled.h2`
color: #A0522D;
margin: 5px;
}`;
