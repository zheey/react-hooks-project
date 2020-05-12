import React from 'react';
import SectionText from "../landingPage/section/SectionText";
import HeaderText from "../landingPage/section/HeaderText";
import {redirectToPage} from "../globalServices/globalFunction";

export default ({type, name, text, span, link}) => (
    <div className="side-panel">
        <div>
            <SectionText style="about-service-p thin" text={"Hello"}/>
            <HeaderText label={`${name} !`} style={type === "exam" ? "t-header mb-100" : "mb-65 t-header"}/>
        </div>
            <div>
                <SectionText style={type === "exam" ? "about-service-p thin" : "about-service-p thin mb-45"} text={text}/>
                <span className="about-service-p thin underline pointer" onClick={e => {redirectToPage(link)}}>{span} </span>
            </div>

    </div>
)