import React from "react";
import womanIcon from "../../../assets/images/woman.svg";
import SectionText from "../../landingPage/section/SectionText";
import HeaderText from "../../landingPage/section/HeaderText";
import Button from "../../button/Button";
import NavTab from "../commons/NavTab";
import {ArrowRight} from "../../common/icons/icons";
import DashboardTab from "../commons/DashboardTab";
import {redirectToPage} from "../../globalServices/globalFunction";

export default ({ firstName, }) => (
    <DashboardTab image={womanIcon} className="dash-pink relative no-ml" imageClass="tab-image-absolute">
        <React.Fragment>
            <SectionText style="about-service-p thin font-22" text={'Hello,'}/>
            <HeaderText label={firstName} style={"t-header bold"}/>
            <Button label="Sponsorships for you" style="button-light" func={e => {redirectToPage("/exams")}}>
                <NavTab className="ml-15">
                    <ArrowRight className=""/>
                </NavTab>
            </Button>
        </React.Fragment>
    </DashboardTab>
)