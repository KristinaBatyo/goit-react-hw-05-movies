import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '6ae976ca2f3433c900811972ef517fed';


export const fetchTrendingMovies = async()=> {
    const resp = await axios.get(`trending/movie/day?api_key=${apiKey}`);
    return resp.data.results;
}

export const fetchMovie = async()=> {
    const resp = await axios.get(`/search/search-movies?api_key=${apiKey}`);
    return resp.data.results;
}