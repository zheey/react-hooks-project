import React from 'react';
import OnboardingPanel from '../onboarding/OnboardingPanel';
import {redirectToPage} from "../globalServices/globalFunction";
import HeaderText from "../landingPage/section/HeaderText";
import SearchInput from "../search/SearchInput";
import ExamPanel from "./ExamPanel";
import logo from "../../assets/images/Group 1485@2x.png";


const exams = [{name: "Jamb", isActive: true}, {name: "PostUtme", isActive: false}, {name: "Toefl", isActive:false}, {name: "CCNA", isActive:false},
    {name: "WAEC", isActive:false}, {name: "Neco", isActive:false}]
const PracticeTest = () =>{

    const setExam = () => {
        redirectToPage("/practice-tests")
    }

    return(
        <React.Fragment>
            <OnboardingPanel header={"Select Exam"} placeholder={"Search Exam"} name={"Bimpe"} text={"Sponsorship tests Instead?"}
                             span={"Take Sponsorship Test"} examObj={exams} type="test" link={"/exams"} examfunc={setExam}>

                <HeaderText label={"Select Exam"} style="" />
                <SearchInput placeholder={"Search Exam"} height="input" />
                <div className="exam-wrapper pointer">
                    {exams.map(exam => (
                        <ExamPanel name={exam.name}  logo={logo} func={setExam}/>
                    )) }

                </div>
            </OnboardingPanel>
        </React.Fragment>
    )
}

export default PracticeTest