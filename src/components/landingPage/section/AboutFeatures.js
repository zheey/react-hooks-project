import React from 'react';
import ImageHolder from "../image/ImageHolder";
import logo from "../../../assets/images/Group 1424.svg"
import HeaderText from "./HeaderText";
import SectionText from "./SectionText";

export default ({label, text}) => (
    <div className="width-40 height-300">
        <ImageHolder image={logo} name="about-logo" />
        <HeaderText label={label} style="about-service-h" />
        <SectionText style="about-service-p" text={text}/>
    </div>
)