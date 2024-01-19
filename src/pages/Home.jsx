import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotos } from '../redux/photosSlice';
import PhotoList from '../components/PhotoList';
import { fetchRandomPhotos } from '../api';
import styled from 'styled-components';

const StyledButton = styled.button`
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
`;

// Styled components for Home
const StyledImageBackground = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 98vh;
`;

const StyledButtonContainer = styled.div`
    position: absolute;
    bottom: 12rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Home = () => {
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetchRandomPhotos(6, page);
                dispatch(setPhotos(response));
            } catch (error) {
                console.error('사진을 불러오는 중 오류 발생:', error);
            }
        };

        fetchPhotos();
    }, [dispatch, page]);

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <StyledImageBackground>
            <PhotoList photos={photos} />
            <StyledButtonContainer>
                {page > 1 && (
                    <StyledButton onClick={prevPage}>
                        Previous Page
                    </StyledButton>
                )}
                <StyledButton
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                >
                    Next Page
                </StyledButton>
            </StyledButtonContainer>
        </StyledImageBackground>
    );
};

export default Home;
