import React from 'react';
import SectionText from "../landingPage/section/SectionText";
import {Icon} from "antd";

export default ({tag, icon, name}) => (
    <div className="num-wrapper">
        <div className="num-tag">
            {tag}
        </div>
        <SectionText style="about-service-p thin space" text={name}/>
        {icon ? <Icon type="down"/> : ""}
    </div>
)