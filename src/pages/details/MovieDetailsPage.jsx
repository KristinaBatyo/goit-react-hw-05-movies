import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovie } from 'services/Api';
import { useRef } from 'react';
import Card from 'components/card/MovieCard';

export const MovieDetailsPage = () => {
  const [movies, setMovies] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location)
  const from = useRef(location.state?.from ?? '/movies');

  // console.log(from)

  useEffect(() => {
    const fetchMov = async () => {
      try {
        const result = await fetchMovie(id);
        setMovies(result);
      } catch ({ responce }) {
        console.log(responce.data.message);
      }
    };
    fetchMov();
  }, [id]);
  return (
    <>
      <button onClick={() => navigate(from.current)}>Go back</button>
      {movies && (
        <Card
          url={movies?.poster_path}
          tag={movies?.title}
          title={movies?.title}
          score={movies?.vote_average}
          overview={movies?.overview}
          genres={movies?.genres}
          from={from}
        />
      )}
      <Outlet />
    </>
  );
};
