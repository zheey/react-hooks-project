import React from 'react';

export default ({text, style}) => (
    <p className={`section-text primary-light ${style}`}>
        {text}
    </p>
)