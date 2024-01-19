import axios from 'axios';

const Access_Key = 'WGLIaeuwXsRAO2p4Cqj5jP43s4G6tkacH_5kf8AQF24';

export const fetchPhotoById = async (id) => {
    try {
        const response = await axios.get(
            `https://api.unsplash.com/photos/${id}`,
            {
                params: {
                    client_id: Access_Key,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('사진을 불러오는 중 오류 발생:', error);
        throw error;
    }
};

export const fetchRandomPhotos = async (count, page) => {
    try {
        const response = await axios.get(
            'https://api.unsplash.com/photos/random',
            {
                params: {
                    client_id: Access_Key,
                    count: count,
                    page: page,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('사진을 불러오는 중 오류 발생:', error);
        throw error;
    }
};
