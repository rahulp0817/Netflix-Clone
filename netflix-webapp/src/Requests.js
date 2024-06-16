const Api_key = api key;

// const request = await axios.get(`${requests.fetchTopRated}&api_key=${apiKey}`);
const requests = {
    fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchDramaMovies: `/discover/movie?api_key=${Api_key}&with_genres=18`,
    fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
    fetchHindiMovies: `/discover/movie?api_key=${Api_key}&with_original_language=hi`,
    fetchHindiWebSeries: `/discover/tv?api_key=${Api_key}&with_original_language=hi`,
    fetchNewsTV: `/discover/tv?api_key=${Api_key}&with_genres=10764`,
    fetchAnime: `/discover/tv?api_key=${Api_key}&with_genres=16`,

};

// export const searchMovie = "https://api.themoviedb.org/3/search/movie?query=funny%20movie&include_adult=false&language=en-US&page=1"; 
export default requests;

//https://api.themoviedb.org/3/discover/movie?api_key=2b6497ae0720429617f05f93bbfc6193&with_genres=99   (for check)
// searchMovies: (query) => `/search/movie?api_key=${Api_key}&query=${query}`, // search
