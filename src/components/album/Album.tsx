import { FC } from 'react';
import { Container } from './styles';
import { Album as AlbumModel } from 'models';
import { useNavigate } from 'react-router-dom';

interface AlbumProps {
    album: AlbumModel;
}

export const Album: FC<AlbumProps> = ({ album }) => {
    const navigate = useNavigate();
    const image = album.images.length
        ? album.images[1].url
        : 'https://via.placeholder.com/300';

    return (
        <Container image={image} onClick={() => navigate(`/album/${album.id}`)}>
            <div className='image' />
            <h3 className='title'>{album.name}</h3>
        </Container>
    );
};
