import { FC } from 'react';
import { Song as SongModel } from 'models';
import { millisToMinutesAndSeconds } from 'utils';
import { Container } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

interface SongProps {
    song: SongModel;
}

export const Song: FC<SongProps> = ({ song }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <Container onClick={() => navigate(`${pathname}/${song.id}`)}>
            <div>{millisToMinutesAndSeconds(song.duration_ms)}</div>
            <div>
                <div className='artist'>
                    {song.artists.map((artist) => artist.name).join(', ')}
                </div>
                <div className='title'>{song.name}</div>
            </div>
        </Container>
    );
};
