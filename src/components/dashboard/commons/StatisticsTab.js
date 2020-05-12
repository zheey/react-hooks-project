import React from "react";
import SectionText from "../../landingPage/section/SectionText";
import NavTab from "./NavTab";
import HeaderText from "../../landingPage/section/HeaderText";
import ImageHolder from "../../landingPage/image/ImageHolder";

export default ({ label, image, tabClassName, imageClassName, stat }) => (
    <div className="statistics">
        <div className="flex-start-center mb-20">
            <NavTab className={`ash-bg br-18 box-small ${tabClassName}`}>
                <ImageHolder image={image} name={imageClassName}/>
            </NavTab>
            <HeaderText label={stat} style={"t-header"}/>
        </div>
        <SectionText style="" text={label} />
    </div>
)