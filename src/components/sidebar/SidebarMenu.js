import React from 'react';

export default ({label, isActive, func}) => {

    return(
        <div className="nav-wrapper" onClick={e => {func()}}>
            <p className={isActive ? `header active pointer` : "header pointer"}>
                {label}
            </p>
        </div>
    )
}