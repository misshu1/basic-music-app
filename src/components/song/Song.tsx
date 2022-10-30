import { FC } from 'react';
import { Song as SongModel } from 'models';
import { millisToMinutesAndSeconds } from 'utils';
import { Container } from './styles';

interface SongProps {
    song: SongModel;
}

export const Song: FC<SongProps> = ({ song }) => {
    return (
        <Container>
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
