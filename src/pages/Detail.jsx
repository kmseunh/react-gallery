import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPhotoById } from '../api';
import styled from 'styled-components';

const StyledDetailBackground = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledDetailContainer = styled.div`
    text-align: center;
`;

const StyledDetailImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 8px;
`;

const StyledImgExplan = styled.div`
    margin-top: 20px;
`;

const Detail = () => {
    const param = useParams();
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const photoData = await fetchPhotoById(param.id);
                setPhoto(photoData);
            } catch (error) {
                console.error('사진을 불러오는 중 오류 발생:', error);
            }
        };

        fetchPhoto(); // Call the fetchPhoto function
    }, [param.id]);

    return (
        <StyledDetailBackground>
            {photo && (
                <StyledDetailContainer>
                    <h1>
                        {photo.alt_description} ({photo.created_at.substr(0, 4)}
                        )
                    </h1>
                    <StyledDetailImage
                        src={photo.urls.small}
                        alt={photo.description || 'Photo'}
                    />
                    <StyledImgExplan>
                        <p>{photo.description || ''}</p>
                        <div className='img-stats'>
                            <small>Views: {photo.views}</small>
                            <small>Downloads: {photo.downloads}</small>
                            <small>Likes: {photo.likes}</small>
                        </div>
                    </StyledImgExplan>
                </StyledDetailContainer>
            )}
        </StyledDetailBackground>
    );
};

export default Detail;
