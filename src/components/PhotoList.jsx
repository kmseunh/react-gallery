import styled from 'styled-components';
import PhotoCard from './PhotoCard';

const StyledImageGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const PhotoList = ({ photos }) => (
    <StyledImageGallery>
        {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
        ))}
    </StyledImageGallery>
);

export default PhotoList;
