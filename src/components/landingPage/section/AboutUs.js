import React from 'react';
import HeaderText from "./HeaderText";
import SectionText from "./SectionText";
import ImageHolder from "../image/ImageHolder";
import logo from '../../../assets/images/Group 1511@2x.png'
import AboutFeatures from "./AboutFeatures";

export default () => (
    <section className="section">
        <HeaderText label="Get practice tests & qualify for Exam Sponsorships" style="" />

        <div className="row-wrapper">
            <div className="col-wrapper about">
                <SectionText style="" text="Lorem Ipsum" />
                <ImageHolder image={logo} name="" />

            </div>
            <div className="col-wrapper wrap">
                <AboutFeatures label="Sign Up" text="Lorem Ipsum" />
                <AboutFeatures label="Apply for Exam Sponsorship" text="Lorem Ipsum" />
                <AboutFeatures label="Take Pratice Test" text="Lorem Ipsum" />
                <AboutFeatures label="Sponsorship Granted" text="Lorem Ipsum" />
            </div>
        </div>
    </section>
)