import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useGlobalContext } from 'contexts';
import { generateConfig } from 'utils';
import { SongDetails as SongDetailsModel } from 'models';
import { SongDetails } from 'components';
import { SearchContainer } from './styles';

export const Song = () => {
    const { token } = useGlobalContext();
    const { songId } = useParams();
    const [track, setTrack] = useState<SongDetailsModel>(
        {} as SongDetailsModel
    );

    useEffect(() => {
        if (songId && token) {
            fetch(
                `${process.env.REACT_APP_SPOTIFY_TRACKS_URL}/${songId}` || '',
                generateConfig('GET', token)
            )
                .then((data) => data.json())
                .then((data: SongDetailsModel) => {
                    setTrack(data);
                });
        }
    }, [songId, token]);

    return (
        <SearchContainer>
            <Box
                sx={{
                    py: 2,
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(16rem, 18rem))',
                    gridTemplateRows: ' repeat(auto-fit, minmax(5rem, 6rem))',
                    gridAutoRows: 'minmax(5rem, 6rem)',
                    justifyContent: 'center',
                    overflow: 'auto',
                    flex: 1
                }}
            >
                <SongDetails track={track} />
            </Box>
        </SearchContainer>
    );
};
