import { Routes, Route, } from "react-router-dom";
import { HomePage } from "pages/home/HomePage";
import { MoviePage } from "pages/movies/MoviesPage";
import { MovieDetailsPage } from "pages/details/MovieDetailsPage";
import { Cast } from "pages/cast/CastPage";
import { Reviews } from "pages/reviews/ReviewsPage";
import { SharedLayout } from "components/layout/SharedLayout";
import React from 'react';


  export const App = () => {
    return (

    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage/>}/>
      <Route path="movies" element={<MoviePage/>}/>
        <Route path="movies/:id" element={<MovieDetailsPage />} />
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
    </Routes>
    );
  };
