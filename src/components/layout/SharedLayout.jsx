import { Outlet, NavLink } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <div>
        <div>
        <nav>
            <NavLink to="/" end> Home </NavLink>
            <NavLink to="/movies">Movie</NavLink>
        </nav>
        </div>
        <Outlet />
        </div>
    );
  };