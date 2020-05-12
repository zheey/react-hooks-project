import React from "react";
import ImageHolder from "../../landingPage/image/ImageHolder";

export default ({ image, className, children, imageClass, textClassName }) => (
    <div className={`basis-50`}>
        <div className={`dash-tab ${className}`}>
            <div className={`tab-text-wrapper ${textClassName}`}>
                { children }
            </div>
            {image ?
                <ImageHolder image={image} name={imageClass}/>
                :
                ""
            }
        </div>
    </div>
)