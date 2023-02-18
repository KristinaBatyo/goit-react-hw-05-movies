import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '6ae976ca2f3433c900811972ef517fed';


export const fetchTrendingMovies = async()=> {
    const resp = await axios.get(`trending/movie/day?api_key=${apiKey}`);
    return resp.data.results;
}

export const fetchMovie = async (id) => {
    const resp = await axios.get(`movie/${id}?api_key=${apiKey}&language=en-US`);
    return resp.data;
}

export const fetchCast = async (id) => {
    const resp = await axios.get(`movie/${id}/credits?api_key=${apiKey}&language=en-US`);
    return resp.data;
}

export const fetchReviews = async (id) => {
    const resp = await axios.get(`movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`);
    return resp.data;
}