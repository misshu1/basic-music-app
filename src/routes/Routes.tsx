import { Route, Routes } from 'react-router-dom';
import { Search, Album } from 'pages';
import { RoutePaths } from 'routes';

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path={RoutePaths.root} element={<Search />} />
            <Route path={RoutePaths.album} element={<Album />} />
        </Routes>
    );
};
