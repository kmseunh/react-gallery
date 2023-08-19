import React from 'react';
import { Link } from 'react-router-dom';

const PhotoCard = ({ photo }) => (
    <div>
        <Link to={`/photo/${photo.id}`}>
            <img
                src={photo.urls.small}
                alt={photo.alt_description || 'Photo'}
            />
        </Link>
    </div>
);

export default PhotoCard;
