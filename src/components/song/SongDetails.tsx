import { FC } from 'react';
import { millisToMinutesAndSeconds } from 'utils/index';
import { SongDetails as SongDetailsModel } from 'models';
import { Container } from './styles';

interface SongProps {
    track: SongDetailsModel;
}

export const SongDetails: FC<SongProps> = ({ track }) => {
    return (
        <Container>
            <div>{millisToMinutesAndSeconds(track.duration_ms)}</div>
            <div>
                <div className='artist'>
                    {track.artists?.map((artist) => artist.name).join(', ')}
                </div>
                <div className='title'>{track.name}</div>
            </div>
        </Container>
    );
};
