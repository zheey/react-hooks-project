import React from "react";
import SectionText from "../../landingPage/section/SectionText";

export default ({ labeltext, label }) => (
    <div className="list-panel">
        <SectionText style="about-service-p thin" text={label}/>
        <SectionText style="about-service-p thin small-text primary" text={labeltext}/>
    </div>
)