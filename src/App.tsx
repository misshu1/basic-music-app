import { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import { NotificationsProvider, useGlobalContext } from 'contexts';
import { Header } from 'components';
import { RoutesApp } from 'routes';
import { GlobalStyle } from 'styles';
import { authParameters } from 'utils';
import { TokenResponse } from 'models';

export function App() {
    const { saveToken } = useGlobalContext();

    useEffect(() => {
        const savedToken = localStorage.getItem('token') ?? '';

        if (savedToken) {
            return saveToken(savedToken);
        }

        if (!savedToken) {
            fetch(process.env.REACT_APP_SPOTIFY_TOKEN_URL || '', authParameters)
                .then((data) => data.json())
                .then((data: TokenResponse) => {
                    saveToken(data.access_token);
                })
                .catch((error) => console.log(error));
        }
    }, [saveToken]);

    return (
        <>
            <SnackbarProvider
                dense
                domRoot={document.getElementById('modal') as HTMLElement}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
            >
                <NotificationsProvider>
                    <GlobalStyle />
                    <Header />
                    <RoutesApp />
                </NotificationsProvider>
            </SnackbarProvider>
        </>
    );
}
