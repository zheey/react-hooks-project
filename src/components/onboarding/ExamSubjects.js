import React, {useEffect, useReducer, useState} from 'react';
import OnboardingPanel from '../onboarding/OnboardingPanel';
import {redirectToPage} from "../globalServices/globalFunction";
import ImageHolder from "../landingPage/image/ImageHolder";
import logo from "../../assets/images/Group 1485@2x.png";
import SectionText from "../landingPage/section/SectionText";
import HeaderText from "../landingPage/section/HeaderText";
import SearchInput from "../search/SearchInput";
import CheckboxPanel from "./CheckboxPanel";
import Button from "../button/Button";
import { useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {
    getOneTest,
    getTestSubjects,
    registerTestAndSubjects
} from "../../APIHandler/APIController";
import {testAnalyticsReducer, testSubjectReducer} from "../../reduxController/reducers/inputReducer";
import {Empty, message, Skeleton} from "antd";

const ExamSubject = ({ params }) =>{

    const content = useSelector(state => state);
    const dispatch = useDispatch();

    const [subjects, setSubjects] = useState({});
    const [applyLoading, setApply] = useState(false);
    const { id } = useParams();

    const [testSubject, setTestSubjects] = useReducer(testSubjectReducer, {
        loading: true,
        test: {},
        subjects: [],
        compulsorySubjects: []
    });

    useEffect(() => {
        getOneTest({testId: id}, onGetTest)
    }, [])

    const onGetTest = (status, data)=> {
        if(status){
            setTestSubjects({test: data})
            getTestSubjects({examBodyId: data.examBodyId}, onGetTestSubjects)
        }else{
            message.error("Unable to retrieve test", 3)
        }
    };

    const onGetTestSubjects = (status, data)=> {
        if(status){
            let compulsorySubjects = []
            data.filter(testData => testData.isCompulsory).map((subject, i)=>(
                compulsorySubjects.push(subject.id)
            ));
            setTestSubjects({subjects: data, compulsorySubjects: compulsorySubjects, loading: false})
        }else{
            message.error("Unable to retrieve test subjects", 3)
        }
    };

    const  onChange = checkedValues => {
        setSubjects(checkedValues)
    };

    const enroll = () => {
        setApply(true)
        registerTestAndSubjects({subjects: subjects, testId: id}, onRegisterUser)

    };

    const onRegisterUser = (status, data) => {
        if(status){
            setApply(false)
            message.success("User successfully applied for scholarship", 3, () => {
                redirectToPage(`/assessment/${data.id}`)
            })
        }else{
            setApply(false)
            message.error("Unable to apply for scholarship")
        }
    };

    let subheader = "";
    if(testSubject.compulsorySubjects.length > 0){
        subheader = `You may select ${(Number(testSubject.test.subject_quantity) - testSubject.compulsorySubjects.length )} more subjects here in addition to the compulsory ones.`
    }else {
        subheader = `You may select ${testSubject.test.subject_size } subjects here.`
    }

    return(
        <React.Fragment>
            <OnboardingPanel header={"Choose Your Subjects"} placeholder={"Search Subjects"} name={content.user.user.first_name} text={"Apply for your first Sponsorship"}
                             span={"or take Practice Test"} type="exam" link={"/practice-exams"} subjectObj={testSubject.subjects} radioFunc={onChange} submit={enroll}>

                <Skeleton loading={testSubject.loading} active>
                    {testSubject.subjects.length < 1 ?
                        <div className="flex">
                            <Empty description="No subject available"/>
                        </div>
                        :
                        <React.Fragment>
                            <div className="nametag mb-30">
                                <ImageHolder image={testSubject.test.exam_body.logo} name=""/>
                                <SectionText style="about-service-p thin" text={testSubject.test.label}/>
                            </div>

                            <HeaderText label={"Choose Your Subjects"} style=""/>

                            <div className="nametag">
                                <SectionText style="about-service-p thin small-tag"
                                             text={subheader}/>
                            </div>

                            <SearchInput placeholder={"Search Subjects"} height="input"/>

                            <CheckboxPanel radioObj={testSubject.subjects} func={onChange}
                                           defaultValue={testSubject.compulsorySubjects}
                                           subjectSize={Number(testSubject.test.subject_quantity)}
                                           subjects={subjects}/>

                            <Button label="Apply" style="z-action-btn z-mt-50" func={enroll} loading={applyLoading}
                                    disabled={Number(testSubject.test.subject_quantity) !== subjects.length}/>
                        </React.Fragment>
                    }
                </Skeleton>
            </OnboardingPanel>
        </React.Fragment>
    )
}

export default ExamSubject