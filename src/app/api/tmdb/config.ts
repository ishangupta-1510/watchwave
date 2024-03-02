
const host = "https://api.themoviedb.org/3"
//const apiKey = process.env.TMDB_KEY
const apiKey = "a6342e75ad119ea53758461165f01b71"
const imageHost = "https://image.tmdb.org/t/p"

export const getTVTrending = async () => {
    const response = await fetch(`${host}/trending/tv/week?api_key=${apiKey}`);
    const trending = await response.json();
    console.log(trending);
    return trending
};

export const getMovieTrending = async () => {
    const response = await fetch(`${host}/trending/movie/week?api_key=${apiKey}`);
    const trending = await response.json();
    return trending
};