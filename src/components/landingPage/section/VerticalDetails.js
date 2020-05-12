import React from 'react';
import HeaderText from "./HeaderText";
import SectionText from "./SectionText";

export default ({sn, label, text, show}) => (
    <div className="z-relative">
        <div className="vertical">
            <div className="vertical-sn">
                {sn}
            </div>
            <div className="s-text">
                <HeaderText label={label} style="" />
                <SectionText style="about-service-p" text={text}/>
            </div>
        </div>
        {show && <div className="dashed"/>}
    </div>
)