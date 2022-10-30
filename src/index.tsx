import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { GlobalProvider } from 'contexts';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <StyledEngineProvider>
            <BrowserRouter>
                <GlobalProvider>
                    <App />
                </GlobalProvider>
            </BrowserRouter>
        </StyledEngineProvider>
    </React.StrictMode>
);
