const API_KEY = "90ff720d2f245b9a6347d95a74c79442";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}


export const searchMovies = async () => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
        )}`
    );
    const data = await response.json();
    return data.results;
}