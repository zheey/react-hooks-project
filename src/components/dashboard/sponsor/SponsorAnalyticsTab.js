import React from "react";
import SectionText from "../../landingPage/section/SectionText";
import HeaderText from "../../landingPage/section/HeaderText";
import Button from "../../button/Button";
import DashboardTab from "../commons/DashboardTab";
import {redirectToPage} from "../../globalServices/globalFunction";
import {useSelector} from "react-redux";

const path = window.location.pathname;

export default ({ noButton=false, className="",giftIcon, header }) => {
    const content = useSelector(state => state);
    return(
        <DashboardTab image={giftIcon} className={`bg-blue-black ${className}`} imageClass="">
            <React.Fragment>
                <div className="flex-start-center">
                    <div>
                        <SectionText style="about-service-p thin font-16 text-center" text={header}/>
                        <HeaderText label={content.userTest.userTest ? content.userTest.userTest.length : 0} style={"t-header bold text-center"}/>
                    </div>
                </div>
                {noButton ?
                    ""
                    :
                    path === "/sponsor/scholarship" ?
                    <Button label="Sponsor more Exams" style="bg-blue-black2" func={e => {redirectToPage("/exams")}}/>
                    :
                    <Button label="See All Beneficiaries" style="bg-blue-black2" func={e => {redirectToPage("/student/scholarships")}}/>
                }
            </React.Fragment>
        </DashboardTab>
    )
}