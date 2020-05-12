import React from 'react';
import ImageHolder from "../image/ImageHolder";
import SectionText from "./SectionText";


export default ({logo, type, label, onClick}) => (
    <div className="panel-img pointer" onClick={e => onClick()}>
        <div className="logo">
            <ImageHolder image={logo} name="" />
        </div>
        {type !== "partners" && <SectionText style="about-service-p" text={label}/>}
    </div>
)