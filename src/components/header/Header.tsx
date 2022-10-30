import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { RoutePaths } from 'routes';
import { green } from 'theme';

export const Header = () => {
    return (
        <AppBar
            position='static'
            sx={{ background: green[6], maxWidth: '80rem', mx: 'auto' }}
        >
            <Toolbar sx={{ height: 64 }}>
                <Button
                    component={Link}
                    to={RoutePaths.root}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Home
                </Button>
            </Toolbar>
        </AppBar>
    );
};
