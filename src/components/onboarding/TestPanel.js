import React from 'react';
import OnboardingPanel from '../onboarding/OnboardingPanel';
import {redirectToPage} from "../globalServices/globalFunction";
import ImageHolder from "../landingPage/image/ImageHolder";
import logo from "../../assets/images/Group 1485@2x.png";
import SectionText from "../landingPage/section/SectionText";
import HeaderText from "../landingPage/section/HeaderText";
import SearchInput from "../search/SearchInput";
import ExamPanel from "./ExamPanel";
import CheckboxPanel from "./CheckboxPanel";
import Button from "../button/Button";


const exams = [{name: "Jamb 2019 A"}, {name: "Jamb 2019 B"}, {name: "Jamb 2019 C"}, {name: "Jamb 2019 D"}]
const TestPanel = () =>{


    const setTest = () => {
        redirectToPage("/subjects")
    }

    return(
        <React.Fragment>
            <OnboardingPanel header={"Select Test"} placeholder={"Search Test"} name={"Bimpe"} text={"Apply for your first Sponsorship"}
                             span={"or take Practice Test"} testObj={exams} type="exam" link={"/practice-exams"} testFunc={setTest}>

                <HeaderText label={"Select Test"} style="" />
                <SearchInput placeholder={"Search Test"} height="input" />
                <div className="exam-wrapper pointer">
                    {exams.map(exam => (
                        <ExamPanel name={exam.name} func={setTest}/>
                    )) }
                </div>

            </OnboardingPanel>
        </React.Fragment>
    )
}

export default TestPanel