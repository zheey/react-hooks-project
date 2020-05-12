import React, {useEffect, useState} from 'react';
import ExamboardTemplate from "./ExamBoardTemplate";
import HeaderText from "../landingPage/section/HeaderText";
import Button from "../button/Button";
import Back from "./Back";
import RadioPanel from "../common/RadioPanel";
import {useParams} from "react-router";
import {getOneUserTestWithSubjects, updateOneUserTest} from "../../APIHandler/APIController";
import {message, Skeleton} from "antd";

const SubjectSelection = () => {

    const { id } = useParams();
    const [test, setTest] = useState({});
    const [testLoading, setLoading] = useState(true);
    const [completeLoading, setCompleteLoading] = useState(false);
    const [completedSubject, setCompletedSubject] = useState(0);
    const [selectedSubject, setSelectedSubject] = useState("");

    useEffect(() => {
        getOneUserTestWithSubjects({userTestId: id}, onGetTest)
    }, []);

    const onGetTest = (status, data) =>{
        if(status){
            const completed = data.subjects.filter(subject => subject.status === true);
            setCompletedSubject(completed.length)
            setTest(data);
            setLoading(false);
        }else{
            message.error("Unable to retrieve test", 3)
            setLoading(false);
        }
    };

    const  onChange = e => {
        setSelectedSubject(e.target.value)
    };

    const startNextSubject = () =>{
        window.location.href = `/assessment/question/${test.subjects[selectedSubject].id}/${completedSubject + 1}`
    };

    const completeTest = () => {
        setCompleteLoading(true)
        let subjectScore = 0;
        test.subjects.map(subject => (
            subjectScore = subjectScore +( (subject.score / subject.test_subject.questionSize) * 100)
        ));

        const  totalScore = (subjectScore.toFixed(0)/Number(test.test.subject_quantity)).toFixed(0);
        updateOneUserTest({userTestId: id, status: "completed", score: totalScore, isEligible: totalScore >= Number(test.test.cutoff)}, onSubmitTest)
    };

    const onSubmitTest = (status) => {
        if(status){
            setCompleteLoading(false)
            window.location.href = `/result/${id}`
        }else{
            setCompleteLoading(false)
            message.error("Unable to complete test")
        }
    }

    return(
        <React.Fragment>
            <ExamboardTemplate type="subject" examName={test.test ? test.test.label : ""} loading={testLoading}>
                <Skeleton active loading={testLoading}>
                    <div className="faq-body">
                        <div className="col-big flex-column basis-100">
                            <Back/>
                            <HeaderText label={`Select Next Subject`} style={"t-header mb-50"}/>
                            <RadioPanel radioObj={test ? test.subjects : []} func={onChange} value={selectedSubject}/>
                            <div className="flex-start z-mt-50">
                                {test.subjects && completedSubject === test.subjects.length ?
                                    <Button label="Complete Test" style="z-action-btn" func={completeTest}
                                            loading={completeLoading}/>
                                    :
                                    <Button label="Continue Test" style="z-action-btn" func={startNextSubject}
                                            loading={false} disabled={selectedSubject.length < 1}/>
                                }
                            </div>
                        </div>
                    </div>
                </Skeleton>
            </ExamboardTemplate>
        </React.Fragment>
    )
}

export default SubjectSelection