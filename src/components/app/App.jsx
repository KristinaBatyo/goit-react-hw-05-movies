import { Routes, Route, } from "react-router-dom";
import { HomePage } from "pages/home/HomePage";
import { MoviePage } from "pages/movies/MoviesSearchPage";
import { MovieDetailsPage } from "pages/details/MovieDetailsPage";
import { CastPage } from "pages/cast/CastPage";
import { ReviewsPage } from "pages/reviews/ReviewsPage";
import { SharedLayout } from "components/layout/SharedLayout";
import React from 'react';
import { ToastContainer} from 'react-toastify' ;   
import 'react-toastify/dist/ReactToastify.css';



  export const App = () => {
    return (
    <>
    < ToastContainer /> 
    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage/>}/>
      <Route path="movies" element={<MoviePage/>}/>
        <Route path="movies/:id" element={<MovieDetailsPage />} >
          <Route path="cast" element={<CastPage/>} />
          <Route path="reviews" element={<ReviewsPage/>} />
        </Route>
        </Route>
    </Routes>
    </>
    );
  };
