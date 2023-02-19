import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/layout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { HomePage } from "pages/home/HomePage";
// import { MoviePage } from "pages/movies/MoviesSearchPage";
// import { MovieDetailsPage } from "pages/details/MovieDetailsPage";
// import { CastPage } from "pages/cast/CastPage";
// import { ReviewsPage } from "pages/reviews/ReviewsPage";

const HomePage = lazy(() =>
  import('pages/home/HomePage').then(module => ({ default: module.HomePage }))
);
const MoviePage = lazy(() =>
  import('pages/movies/MoviesSearchPage').then(module => ({
    default: module.MoviePage,
  }))
);
const MovieDetailsPage = lazy(() =>
  import('pages/details/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);
const CastPage = lazy(() =>
  import('pages/cast/CastPage').then(module => ({ default: module.CastPage }))
);
const ReviewsPage = lazy(() =>
  import('pages/reviews/ReviewsPage').then(module => ({
    default: module.ReviewsPage,
  }))
);

export const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
