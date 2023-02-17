import { Outlet } from "react-router-dom";
import { StyledLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <div>
        <div>
        <nav>
            <StyledLink to="/" end> Home </StyledLink>
            <StyledLink to="/movies">Movie</StyledLink>
        </nav>
        </div>
        <Outlet />
        </div>
    );
};