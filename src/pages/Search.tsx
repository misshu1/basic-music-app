import { ChangeEvent, useState, useEffect, useCallback } from 'react';
import { Box, TextField } from '@mui/material';
import { useDebounce } from 'hooks';
import { generateConfig } from 'utils';
import { useGlobalContext, useNotificationsContext } from 'contexts';
import { Album as AlbumModel, AlbumsResponse, ErrorResponse } from 'models';
import { Album } from 'components';
import { SearchContainer } from './styles';

export function Search() {
    const [searchKey, setSearchKey] = useState('');
    const [albums, setAlbums] = useState<AlbumModel[]>([]);
    const { token } = useGlobalContext();
    const { showError } = useNotificationsContext();
    const debouncedSearchKey = useDebounce(searchKey, 500);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchKey(event.target.value);
    };

    const handleSearch = useCallback(
        async (query: string) => {
            try {
                const artistId = await fetch(
                    `${process.env.REACT_APP_SPOTIFY_SEARCH_URL}${query}&type=artist` ||
                        '',
                    generateConfig('GET', token)
                )
                    .then((data) => data.json())
                    .then((data) => data.artists.items[0].id);

                await fetch(
                    `${process.env.REACT_APP_SPOTIFY_ARTISTS_URL}/${artistId}/albums?include_groups=album&limit=50`,
                    generateConfig('GET', token)
                )
                    .then((data) => data.json())
                    .then((data: AlbumsResponse) => setAlbums(data.items));
            } catch (error) {
                if (error instanceof Error) {
                    showError('Error', error.message, 500);
                }

                if (error instanceof ErrorResponse) {
                    showError('Error', error.status_message, error.status_code);
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [token]
    );

    useEffect(() => {
        if (!debouncedSearchKey) {
            setAlbums([]);
        } else {
            handleSearch(debouncedSearchKey);
        }
    }, [debouncedSearchKey, handleSearch]);

    return (
        <SearchContainer>
            <Box sx={{ p: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TextField
                    id='search'
                    label='Search artist'
                    variant='outlined'
                    onChange={handleChange}
                    value={searchKey}
                />
            </Box>

            <Box
                sx={{
                    py: 2,
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(16rem, 18rem))',
                    gridTemplateRows: ' repeat(auto-fit, minmax(16rem, 18rem))',
                    gridAutoRows: 'minmax(16rem, 18rem)',
                    justifyContent: 'center',
                    overflow: 'auto',
                    flex: 1
                }}
            >
                {albums.map((item) => (
                    <Album key={item.id} album={item} />
                ))}
            </Box>
        </SearchContainer>
    );
}
