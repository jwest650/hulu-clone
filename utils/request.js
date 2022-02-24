const API_KEY = process.env.API_KEYS;
//api.themoviedb.org/3/movie/550?api_key=2445d7b42fb878bb53b16036338e7012
//discover/movie?api_key=${API_KEY}&with_genres=27
export default {
    fetchTrending: {
        title: "trending",
        url: `trending/all/day?api_key=${API_KEY}`,
    },
    topRated: {
        title: "top rated",
        url: `movie/top_rated?api_key=${API_KEY}`,
    },
    action: {
        title: "action",
        url: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    comedy: {
        title: "comedy",
        url: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    horror: {
        title: "horror",
        url: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    romance: {
        title: "romance",
        url: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    mystery: {
        title: "mystery",
        url: `discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    scifi: {
        title: "scifi",
        url: `discover/movie?api_key=${API_KEY}&with_genres=876`,
    },
    western: {
        title: "western",
        url: `discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    animation: {
        title: "animation",
        url: `discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    tvMovie: {
        title: "tv movie",
        url: `discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
};
