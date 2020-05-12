import React from "react";

export default ({ children, className, onclick = {} }) => (
    <div className={`navTab ${className}`} onClick={ e => onclick(e) }>
        {children}
    </div>
)