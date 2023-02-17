import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '6ae976ca2f3433c900811972ef517fed';


export const fetchTrendingMovies = async()=> {
    const resp = await axios.get(`trending/movie/day?api_key=${apiKey}`);
    return resp.data.results;
}

export const fetchMovie = async (id) => {
    const resp = await axios.get(`movie/${id}?api_key=${apiKey}&language=en-US`);
    console.log(resp)
    return resp.data;
}