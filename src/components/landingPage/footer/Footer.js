import React from 'react';
import ImageHolder from "../image/ImageHolder";
import rightImage from "../../../assets/images/Mask Group 21.svg";
import leftImage from "../../../assets/images/Mask Group 20.svg";
import "./footer.scss"
import HeaderText from "../section/HeaderText";
import SectionText from "../section/SectionText";

export default ({type, header}) => (
    <footer className={`footer`}>
        <ImageHolder image={leftImage} name="bg-image z-right-img"/>
        <ImageHolder image={rightImage} name="bg-image z-left-img"/>
        <div>
            <HeaderText label="AfriSponsor" style="t-header" />
        </div>
        <div>
            <HeaderText label="Customer Service" style="t-header" />
            <SectionText style="about-service-p" text={"support@afrisponsor.ng"}/>
            <SectionText style="about-service-p" text={"hello@afrisponsor.ng"}/>
        </div>
        <div>
            <HeaderText label="Legal & Faqs" style="t-header" />
            <SectionText style="about-service-p" text={"Terms & Conditions"}/>
            <SectionText style="about-service-p" text={"Privacy"}/>
        </div>
        <div>
            <HeaderText label="Connect" style="t-header" />
        </div>
    </footer>
)