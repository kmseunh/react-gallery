import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const param = useParams();
    console.log(param);

    return (
        <div>
            <h2>Photo Detail Page</h2>
            <p>Photo ID: {param.id}</p>
        </div>
    );
};

export default Detail;
