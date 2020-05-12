import React from 'react';
import HeaderText from "../landingPage/section/HeaderText";
import FaqQuestions from "./FaqQuestions";
import SectionText from "../landingPage/section/SectionText";

export default ({header,style, func}) => {

    return(
        <div className={`width ${style}`}>
            <HeaderText label={header} style="about-service-h" />
            <FaqQuestions func="" header="What is Afri Edu?">
                <SectionText style="about-service-p" text={"Afri Edu is a platform that enables candidates have access to examination\n" +
                "            sponsorship as well as other gifts from organizations after participating in qualifying tests"}/>
            </FaqQuestions>
            <FaqQuestions func="" header="What is Afri Edu?">
                <SectionText style="about-service-p" text={"Afri Edu is a platform that enables candidates have access to examination\n" +
                "            sponsorship as well as other gifts from organizations after participating in qualifying tests"}/>
            </FaqQuestions>
            <FaqQuestions func="" header="What is Afri Edu?">
                <SectionText style="about-service-p" text={"Afri Edu is a platform that enables candidates have access to examination\n" +
                "            sponsorship as well as other gifts from organizations after participating in qualifying tests"}/>
            </FaqQuestions>
            <FaqQuestions func="" header="What is Afri Edu?">
                <SectionText style="about-service-p" text={"Afri Edu is a platform that enables candidates have access to examination\n" +
                "            sponsorship as well as other gifts from organizations after participating in qualifying tests"}/>
            </FaqQuestions>
            <FaqQuestions func="" header="What is Afri Edu?">
                <SectionText style="about-service-p" text={"Afri Edu is a platform that enables candidates have access to examination\n" +
                "            sponsorship as well as other gifts from organizations after participating in qualifying tests"}/>
            </FaqQuestions>
        </div>
    )
}