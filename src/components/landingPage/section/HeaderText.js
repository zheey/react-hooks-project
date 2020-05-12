import React from 'react';

export default ({label, style}) => (
    <p className={`header primary ${style}`}>
        {label}
    </p>
)