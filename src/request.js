const API_KEY = "be6a13f9a66dbd424ca62ac47f1edde1";

const requests = {
    fetchTrending: `/trending/all/week?language=en-US&api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?language=en-US&api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?language=en-US&api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?language=en-US&api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?language=en-US&api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?language=en-US&api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?language=en-US&api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?language=en-US&api_key=${API_KEY}&with_genres=99`,
};

export default requests;