import { Route, Routes } from 'react-router-dom';
import { Search } from 'pages';
import { RoutePaths } from 'routes';

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path={RoutePaths.root} element={<Search />} />
        </Routes>
    );
};
