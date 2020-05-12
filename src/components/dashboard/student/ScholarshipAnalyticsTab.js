import React from "react";
import giftIcon from "../../../assets/images/Group 1687.svg";
import SectionText from "../../landingPage/section/SectionText";
import HeaderText from "../../landingPage/section/HeaderText";
import Button from "../../button/Button";
import DashboardTab from "../commons/DashboardTab";
import {redirectToPage} from "../../globalServices/globalFunction";
import {useSelector} from "react-redux";

const path = window.location.pathname;

export default () => {
    const content = useSelector(state => state);
console.log(content)
    return(
        <DashboardTab image={giftIcon} className="dash-blue no-mr" imageClass="">
            <React.Fragment>
                <div className="flex">
                    <div>
                        <SectionText style="about-service-p thin font-18 text-center" text={'Sponsorships'}/>
                        <HeaderText label={content.userTest.userTest ? content.userTest.userTest.length : 0} style={"t-header bold text-center"}/>
                    </div>
                    <div className="ml-20">
                        <SectionText style="about-service-p thin font-18 text-center" text={'Gifts'}/>
                        <HeaderText label={content.userTest.userTest ? content.userTest.userTest.filter(test => test.isEligible).length : 0} style={"t-header bold text-center"}/>
                    </div>
                </div>
                {path === "/student/scholarships" ?
                    <Button label="More Scholarships" style="button-naked" func={e => {redirectToPage("/exams")}}/>
                    :
                    <Button label="Your Gifts" style="button-naked" func={e => {redirectToPage("/student/scholarships")}}/>
                }
            </React.Fragment>
        </DashboardTab>
    )
}