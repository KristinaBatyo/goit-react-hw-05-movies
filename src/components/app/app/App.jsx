import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "pages/Home";
import { Movie } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from "pages/Cast";
import { Reviews } from "pages/Reviews";
import React from 'react';


  export const App = () => {
    return (
      <div>
        <nav>
          <NavLink to="/" end> Home </NavLink>
          <NavLink to="/movies">Movie</NavLink>

        </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movie/>}/>
      <Route path="/movies/:movieId" element={<MovieDetails />} >
      <Route path="cast" element={<Cast/>} />
      <Route path="reviews" element={<Reviews/>} />
      </Route>
    </Routes>
    </div>
    );
  };
