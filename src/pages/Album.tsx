import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useGlobalContext } from 'contexts';
import { generateConfig } from 'utils';
import { AlbumSongsResponse, Song as SongModel } from 'models';
import { Song } from 'components';
import { SearchContainer } from './styles';

export const Album = () => {
    const { token } = useGlobalContext();
    const { id } = useParams();
    const [songs, setSongs] = useState<SongModel[]>([]);

    useEffect(() => {
        if (id && token) {
            fetch(
                `${process.env.REACT_APP_SPOTIFY_ALBUM_TRACKS_URL}/${id}/tracks?limit=50` ||
                    '',
                generateConfig('GET', token)
            )
                .then((data) => data.json())
                .then((data: AlbumSongsResponse) => setSongs(data.items));
        }
    }, [id, token]);

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
                {songs.map((item) => (
                    <Song key={item.id} song={item} />
                ))}
            </Box>
        </SearchContainer>
    );
};
