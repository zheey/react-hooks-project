import React, {useEffect, useState} from 'react';
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
import {message, Skeleton} from "antd";
import {getOneUserTestWithSubjects, getTestForExam, getTests} from "../../APIHandler/APIController";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

const ExamTest = () =>{

    const { id } = useParams();
    const [examTest, setExamTest] = useState([]);
    const [testLoading, setLoading] = useState(true);
    const content = useSelector(state => state);

    useEffect(() => {
        getTestForExam({examBodyId: id}, onGetTest)
    }, []);

    const onGetTest = (status, data) =>{
        if(status){
            setExamTest(data);
            setLoading(false);

        }else {
            message.error("Unable to retrieve exams")
            setLoading(false);
        }
    };

    return(
        <React.Fragment>
            <OnboardingPanel name={content.user.user.first_name} text={"Apply for your first Sponsorship"}
                             span={"or take Practice Test"} type="exam" link={"/practice-exams"}>
                <Skeleton loading={testLoading} active>
                    <HeaderText label={"Select Test"} style="" />
                    <SearchInput placeholder={"Search test"} height="input" />
                    <div className="exam-wrapper pointer">
                        {examTest.map((exam, i )=> (
                            <ExamPanel name={exam.label}  logo={exam.logo} func={e=>redirectToPage(`/subjects/${exam.id}`)} key={i}/>
                        )) }

                    </div>
                </Skeleton>
            </OnboardingPanel>
        </React.Fragment>
    )
}

export default ExamTest