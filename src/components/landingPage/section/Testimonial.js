import React from 'react';
import HeaderText from "./HeaderText";
import ImageHolder from "../image/ImageHolder";
import image from "../../../assets/images/Group 1512@2x.png";
import imagebg from "../../../assets/images/Group 1428@2x.png";
import SectionText from "./SectionText";

export default ({panel}) => (
    <div className={`panel testimonial`}>
        <div className="row-wrapper width-100">
            <div className="col-wrapper flex basis-60">
                <ImageHolder image={image} name="t-image" />
                <ImageHolder image={imagebg} name="t-image-ab"/>
            </div>
            <div className="col-wrapper flex t-text">

                <SectionText style="about-service-p thin" text={"Meet"}/>
                <HeaderText label="Bimpe" style="t-header" />
                <SectionText style="about-service-p t-parag" text={"I completed my secondary school education some two years ago but " +
                "I couldn't apply for the university due to inavailability" +
                " of funds, not until I came across AfriEdu"}/>
                <SectionText style="about-service-p more" text={"Read more stories"}/>

            </div>
        </div>
    </div>
)