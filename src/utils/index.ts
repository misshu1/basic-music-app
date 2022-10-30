export const buildUrl = (path: string, query: string = '') =>
    `https://api.themoviedb.org/3/${path}?api_key=${process.env.REACT_APP_TMDB_API}&${query}`;

export const generateConfig = (
    method: string,
    token: string,
    body?: RequestInit
) => {
    const config: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    return config;
};

export const authParameters = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&client_secret=${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`,
};
