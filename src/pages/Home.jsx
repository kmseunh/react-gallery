import { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoList from '../components/PhotoList';

const Home = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const Access_Key = 'WGLIaeuwXsRAO2p4Cqj5jP43s4G6tkacH_5kf8AQF24';

        const fetchPhotos = async () => {
            try {
                const response = await axios.get(
                    'https://api.unsplash.com/photos/random',
                    {
                        params: {
                            client_id: Access_Key,
                            count: 6,
                            page: page,
                        },
                    }
                );
                setPhotos(response.data);
            } catch (error) {
                console.error('사진을 불러오는 중 오류 발생:', error);
            }
        };

        fetchPhotos();
    }, [page]);

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className='image-background'>
            <PhotoList photos={photos} />
            {page > 1 && (
                <button onClick={() => prevPage()}>Previous Page</button>
            )}
            <button onClick={() => setPage((prevPage) => prevPage + 1)}>
                Next Page
            </button>
        </div>
    );
};

export default Home;
