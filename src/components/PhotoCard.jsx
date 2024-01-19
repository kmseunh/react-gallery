import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledPhotoCard = styled.div`
    margin: 10px;
    text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const StyledImageContainer = styled.div`
    width: 250px; /* Set a fixed width for the images */
    height: 250px; /* Set a fixed height for the images */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    overflow: hidden; /* Ensure rounded corners are applied */
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const PhotoCard = ({ photo }) => (
    <StyledPhotoCard>
        <StyledLink to={`/photo/${photo.id}`} state={{ from: photo.id }}>
            <StyledImageContainer>
                <StyledImage
                    src={photo.urls.small}
                    alt={photo.alt_description || 'Photo'}
                />
            </StyledImageContainer>
        </StyledLink>
    </StyledPhotoCard>
);

export default PhotoCard;
