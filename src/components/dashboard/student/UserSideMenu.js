import React from "react";
import Button from "../../button/Button";
import NavTab from "../commons/NavTab";
import {CaretRight} from "../../common/icons/icons";
import HeaderText from "../../landingPage/section/HeaderText";
import DashboardTab from "../commons/DashboardTab";
import overlay from "../../../assets/images/Mask Group 2.svg";
import SectionText from "../../landingPage/section/SectionText";
import FaqQuestions from "../../faqs/FaqQuestions";
import FeaturedExam from "../commons/FeaturedExam";
import blog from "../../../assets/images/Group 1690@2x.png";

export default () => (
    <div className="side-dash">
        <Button label="Invite a Friend" style="invite-btn">
            <NavTab className="white-circle ml-10">
                <CaretRight className="primary"/>
            </NavTab>
        </Button>
        <div>
            <HeaderText label={"Activities"} style="small-header" />
            <DashboardTab className="dash-small bg-blue relative" image={overlay} imageClass="small-image" textClassName="justify-center">
                <HeaderText label={`30`} style={"t-header bold text-center mb-15"}/>
                <SectionText style="about-service-p thin font-18 text-center" text={'Test Attempts'}/>
            </DashboardTab>
            <div>
                <FaqQuestions func="" header="Sponsorship Tests" className="activity">
                </FaqQuestions>
                <FaqQuestions func="" header="Practice Tests" className="activity">
                </FaqQuestions>
            </div>
            <div className="mt-50">
                <FeaturedExam logo={blog} name="Study Tips" label="Blog" className="flex-reverse blog bg-gray" buttonClassName="bg-blue2 white"/>
            </div>
        </div>
    </div>
)