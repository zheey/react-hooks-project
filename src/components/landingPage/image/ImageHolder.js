import React from 'react';
import './image.scss';

export default ({image, name}) => (
    <div className={`img-wrapper ${name}`}>
        <img src={image}/>
    </div>
)