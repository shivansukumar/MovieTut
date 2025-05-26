const API_KEY = "56b7156279755450ad528c9affb23c55";
const BASE_URL = "https://api.themoviedb.org/3"
// https://www.themoviedb.org/settings/api

export const getPupularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

    const data = await response.json();
    return data.results;
};

export const serachMovies = async (query) => {
    const resoponse = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}`);
}