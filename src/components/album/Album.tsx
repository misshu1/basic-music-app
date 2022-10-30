import { FC } from 'react';
import { Container } from './styles';
import { Album as AlbumModel } from 'models';

interface AlbumProps {
    album: AlbumModel;
}

export const Album: FC<AlbumProps> = ({ album }) => {
    const image = album.images.length
        ? album.images[1].url
        : 'https://via.placeholder.com/300';

    return (
        <Container image={image}>
            <div className='image' />
            <h3 className='title'>{album.name}</h3>
        </Container>
    );
};
