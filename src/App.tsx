import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

function App() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token') ?? '';

        if (!token && hash !== undefined) {
            const accessToken = hash
                .substring(1)
                .split('&')
                .find((elem) => elem.startsWith('access_token'));
            if (accessToken) {
                token = accessToken.split('=')[1];
            }

            window.location.hash = '';
            window.localStorage.setItem('token', token);
        }

        setToken(token);
    }, []);

    const logout = () => {
        setToken('');
        window.localStorage.removeItem('token');
    };

    return (
        <div>
            {!token ? (
                <Button
                    href={`${process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&response_type=${process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE}`}
                >
                    Login
                </Button>
            ) : (
                <Button onClick={logout}>Logout</Button>
            )}
        </div>
    );
}

export default App;
