import React from 'react';

export default ({number, className=""}) =>(
    <div className={`square-wrapper ${className}`}>
        {number}
    </div>
)