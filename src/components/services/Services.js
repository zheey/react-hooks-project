import React from 'react';
import './services.scss'

export default ({label}) =>(
    <div className="row-wrapper">
        <div className="service-icon">
        </div>
        <div className="z-label">
            <p>
                <span className=""> {label.split(" ")[0]} </span>
                {label.split(" ")[1]}
            </p>
        </div>
    </div>
)