const API_KEY = 'df7ac8100f0dbc1e726f955647170d0a';
const API_BASE = 'https://api.themoviedb.org/3';

/* originais da netflix 
    recomendados(Trending)
    em alta(top rated)
    ação
    comedia
    terror
    romance
    documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [

            {
                id: 1,
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                id: 2,
                slug: 'action',
                title: 'ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                id: 3,
                slug: 'comedy',
                title: 'comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                id: 4,
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                id: 5,
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                id: 6,
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                default:
                    info = null;
                    break;
            }
        }

        return info;
    }


}