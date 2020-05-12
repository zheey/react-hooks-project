import React from "react";
import SectionText from "../../landingPage/section/SectionText";
import HeaderText from "../../landingPage/section/HeaderText";
import Button from "../../button/Button";
import NavTab from "../commons/NavTab";
import {ArrowRight} from "../../common/icons/icons";
import DashboardTab from "../commons/DashboardTab";
import {redirectToPage} from "../../globalServices/globalFunction";

export default ({ firstName }) => (
    <DashboardTab className="bg-blue-light2 no-ml" textClassName="basis-100 flex-row s-tab">
        <React.Fragment>
            <div>
            <SectionText style="about-service-p thin font-22" text={'Hello,'}/>
            <HeaderText label={firstName} style={"t-header bold"}/>
            </div>
            <Button label="Sponsor an Exam" style="bg-blue-light" func={e => {redirectToPage("/exams")}}>
                <NavTab className="ml-15 bg-blue-light">
                    <ArrowRight className=""/>
                </NavTab>
            </Button>
        </React.Fragment>
    </DashboardTab>
)