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
        <Button label="Beneficiaries (21)" style="invite-btn"/>
        <div>
            <HeaderText label={"Activities"} style="small-header" />

            <div className="mt-50">
                <FeaturedExam logo={blog} name="latest" label="Blog" className="flex-reverse blog bg-gray" buttonClassName="bg-blue2 white"/>
            </div>
        </div>
    </div>
)