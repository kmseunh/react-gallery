import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoList from '../components/PhotoList';

const Home = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const Access_Key = 'WGLIaeuwXsRAO2p4Cqj5jP43s4G6tkacH_5kf8AQF24';

        const fetchPhotos = async () => {
            try {
                const response = await axios.get(
                    'https://api.unsplash.com/photos/random',
                    {
                        params: {
                            client_id: Access_Key,
                            count: 30,
                        },
                    }
                );
                setPhotos(response.data);
            } catch (error) {
                console.error('사진을 불러오는 중 오류 발생:', error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div>
            <PhotoList photos={photos} />
        </div>
    );
};

export default Home;
