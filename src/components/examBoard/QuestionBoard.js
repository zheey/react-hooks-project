import React, {useEffect, useReducer, useState} from 'react';
import ExamboardTemplate from "./ExamBoardTemplate";
import HeaderText from "../landingPage/section/HeaderText";
import Button from "../button/Button";
import Back from "./Back";
import RadioPanel from "../common/RadioPanel";
import SectionText from "../landingPage/section/SectionText";
import Timer from "../common/Timer";
import {useParams} from "react-router";
import {
    getOneUserTestSubjects,
    getQuestionsForSubject, saveAnswerForSubject, updateOneUserTestSubject
} from "../../APIHandler/APIController";
import {Empty, message, Skeleton} from "antd";
import {userAnswerReducer} from "../../reduxController/reducers/inputReducer";


const QuestionBoard = () => {
    const { id, index } = useParams();
    const [testSubject, setTestSubject] = useState({});
    const [testQuestion, setTestQuestion] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testLoading, setLoading] = useState(true);
    const [finishLoading, setFinish] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [userAnswer, setUserAnswer] = useReducer(userAnswerReducer, {
        content: []
    });

    useEffect(() => {
        getOneUserTestSubjects({userTestSubjectId: id}, onGetTestSubject)
    }, []);

    const onGetTestSubject = (status, data) =>{
        if(status){
            setTestSubject(data);
            getQuestionsForSubject({testSubjectId: data.test_subject.id, limit: data.test_subject.questionSize}, onGetQuestions)
        }else{
            message.error("Unable to retrieve test", 3)
            setLoading(false);
        }
    };

    const onGetQuestions = (status, data) =>{
        if(status){
            setTestQuestion(data);
            setLoading(false);
        }else{
            message.error("Unable to questions", 3)
            setLoading(false);
        }
    };

    const  onChange = e => {
        setCurrentAnswer(e.target.value)
    };

    const goToNextQuestion = (id) => {
        console.log(userAnswer.content)
        setCurrentAnswer("")
        const score = testQuestion[currentIndex].options[currentAnswer].isAnswer ? 1 : 0;
        setUserAnswer([{questionId: id, answer: testQuestion[currentIndex].options[currentAnswer], score}]);
        setCurrentIndex(currentIndex + 1)
    };

    const saveUserAnswer = (id) => {
        const score = testQuestion[currentIndex].options[currentAnswer].isAnswer ? 1 : 0;
        setUserAnswer([{questionId: id, answer: testQuestion[currentIndex].options[currentAnswer], score}]);
        setFinish(true)
        saveAnswerForSubject({userTestSubjectId: testSubject.id, content: userAnswer.content}, onSaveTestAnswer)
    };

    const onSaveTestAnswer = (status) => {
        if(status){
            let score = 0;

            userAnswer.content.map(answer => (
                score = score + answer.score
            ));

            updateOneUserTestSubject({userTestSubjectId: testSubject.id, status: true, score}, onUpdateSubject)
        }else {
            message.error("Unable to proceed", 3)
        }
    };

    const onUpdateSubject = (status) => {
        if(status){
            setFinish(false)
            message.success("You have successfully completed the subject", () => {
                window.location.href = `/assessment/subject/${testSubject.user_test.id}`
            });
        }else {
            message.error("Unable to proceed", 3)
        }
    };


    return(
        <React.Fragment>
            <ExamboardTemplate type="question" loading={testLoading} subjectIndex={index}
                               examName={testSubject.user_test ? testSubject.user_test.test.label : ""}
                               subjectName={testSubject.test_subject ? testSubject.test_subject.subject.name : ""}
                               testQuestion={testQuestion} currentQuestionIndex={currentIndex}>
                <Skeleton active loading={testLoading}>
                    {testQuestion.length < 1 ?
                        <div className="flex height-300">
                            <Empty description="No questions available"/>
                        </div>
                        :
                        <div className="faq-body">
                            <div className="col-big flex-column basis-20">
                                <Timer/>
                            </div>
                            <div className="col-big flex-column basis-80">
                                <div className="flex-space medium mb-65">
                                    <HeaderText label={`Question ${currentIndex + 1}`} style={"t-header font-regular font-16"}/>
                                    <Back name={"Previous Question"}/>
                                </div>
                                <div className="faq-q mb-15">
                                    <p className="section-text primary-light about-service-p mb-50" dangerouslySetInnerHTML={{ __html: testQuestion[currentIndex].content }}>
                                    </p>
                                </div>
                                <RadioPanel radioObj={testQuestion[currentIndex].options} value={currentAnswer} func={onChange} className="answer"/>
                                { ((currentIndex + 1) !== testQuestion.length) ?
                                    <div className="flex-start z-mt-50 width-100">
                                        <Button label="Next Question" style="z-action-btn width-100"
                                                func={e => goToNextQuestion(testQuestion[currentIndex].id)}
                                                loading={false}
                                        disabled={currentAnswer.length <  1}/>
                                    </div>
                                    :
                                    <div className="flex-start z-mt-50 width-100">
                                        <Button label="Submit and show Result" style="z-action-btn width-100"
                                                func={e => saveUserAnswer(testQuestion[currentIndex].id, currentAnswer)}
                                                loading={finishLoading}
                                                disabled={currentAnswer.length <  1}
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </Skeleton>
            </ExamboardTemplate>
        </React.Fragment>
    )
}

export default QuestionBoard