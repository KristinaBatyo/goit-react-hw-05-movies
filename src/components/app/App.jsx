import { Routes, Route} from "react-router-dom";
import { Home } from "pages/Home";
import { Movie } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from "pages/Cast";
import { Reviews } from "pages/Reviews";
import { SharedLayout } from "components/layout/SharedLayout";
import React from 'react';


  export const App = () => {
    return (
    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home/>}/>
      <Route path="/movies" element={<Movie/>}/>
      <Route path="/movies/:movieId" element={<MovieDetails />} >
        <Route path="cast" element={<Cast/>} />
        <Route path="reviews" element={<Reviews/>} />
      </Route>
      </Route>
    </Routes>
    );
  };
