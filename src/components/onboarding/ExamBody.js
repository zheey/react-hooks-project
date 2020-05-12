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
import {getOneUserTestWithSubjects, getTests} from "../../APIHandler/APIController";
import {useSelector} from "react-redux";

const ExamBody = () =>{

    const [examBodies, setExamBodies] = useState([]);
    const [testLoading, setLoading] = useState(true);
    const content = useSelector(state => state);

    useEffect(() => {
        getTests(onGetTest)
    }, []);

    const onGetTest = (status, data) =>{
        if(status){
            let exams = []
            data.map(exam => (
                exams.push({name: exam.test.exam_body.name, id: exam.test.exam_body.id, logo: exam.test.exam_body.logo})
            ));
            let uniqueExams = [];

            const map = new Map();
            for (const item of exams) {
                if(!map.has(item.id)){
                    map.set(item.id, true);    // set any value to Map
                    uniqueExams.push({
                        id: item.id,
                        name: item.name,
                        logo: item.logo
                    });
                }
            }
            setExamBodies(uniqueExams);
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
                    <HeaderText label={"Select Exam"} style="" />
                    <SearchInput placeholder={"Search Exam"} height="input" />
                    <div className="exam-wrapper pointer">
                        {examBodies.map((exam, i )=> (
                            <ExamPanel name={exam.name}  logo={exam.logo} func={e=>redirectToPage(`/exam-test/${exam.id}`)} key={i}/>
                        )) }

                    </div>
                </Skeleton>
            </OnboardingPanel>
        </React.Fragment>
    )
}

export default ExamBody