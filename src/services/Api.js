import axios from "axios";

export const fetchApi = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=6ae976ca2f3433c900811972ef517fed`);
    return response;
}