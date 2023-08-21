import React from 'react';
import { Link } from 'react-router-dom';

const PhotoCard = ({ photo }) => (
    <Link to={`/photo/${photo.id}`} state={{ from: photo.id }}>
        <img src={photo.urls.small} alt={photo.alt_description || 'Photo'} />
    </Link>
);

export default PhotoCard;
