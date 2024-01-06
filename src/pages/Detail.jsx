import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const param = useParams();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        const Access_Key = 'WGLIaeuwXsRAO2p4Cqj5jP43s4G6tkacH_5kf8AQF24';

        const fetchPhoto = async () => {
            try {
                const res = await axios.get(
                    `https://api.unsplash.com/photos/${param.id}`,
                    {
                        params: {
                            client_id: Access_Key,
                        },
                    }
                );
                const {
                    user,
                    alt_description,
                    description,
                    urls,
                    views,
                    downloads,
                    likes,
                    created_at,
                } = res.data;

                const year = new Date(created_at).getFullYear();

                const photoData = {
                    user,
                    alt_description,
                    description,
                    urls,
                    views,
                    downloads,
                    likes,
                    year,
                };
                setPhoto(photoData);
            } catch (error) {
                console.error('사진을 불러오는 중 오류 발생:', error);
            }
        };
        fetchPhoto();
    }, [param.id]);

    return (
        <div className='detail-background'>
            {photo && (
                <div>
                    <h1>
                        {photo.alt_description} ({photo.year})
                    </h1>
                    <img
                        src={photo.urls.small}
                        alt={photo.description || 'Photo'}
                        style={{ width: '37.5rem' }}
                    />
                    <div className='img-explan'>
                        <p>{photo.description || ''}</p>
                        <div className='img-stats'>
                            <small>Views: {photo.views}</small>
                            <small>Downloads: {photo.downloads}</small>
                            <small>Likes: {photo.likes}</small>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;
