import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoList = ({ photos }) => (
    <div>
        {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
        ))}
    </div>
);

export default PhotoList;
