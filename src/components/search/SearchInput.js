import React from 'react';

export default ({height, placeholder}) => (
    <div className="search">
        <input className={`z-input font ${height}`} placeholder={placeholder}/>
    </div>
)