import React from 'react';
import Navbar from "../landingPage/navBar/Navbar";
import ImageHolder from "../landingPage/image/ImageHolder";
import image from '../../assets/images/Group 1428.svg'
import SidePanel from "./SidePanel";

const OnboardingPanel = ({text, span, name, children, type, link}) =>{
    return(
        <div className="bg-pink min-height">
            <Navbar/>
            <div className="d-wrapper  pt-panel">
                <div className="col-left">
                    <ImageHolder image={image} name="bg" />
                    <SidePanel name={name} text={text} span={span} type={type} link={link}/>
                </div>
                <div className="col-right">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default OnboardingPanel