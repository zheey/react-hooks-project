import React, {useEffect, useState} from 'react';
import ExamboardTemplate from "./ExamBoardTemplate";
import Back from "./Back";
import HeaderText from "../landingPage/section/HeaderText";
import SectionText from "../landingPage/section/SectionText";
import Button from "../button/Button";
import ImageHolder from "../landingPage/image/ImageHolder";
import image from "../../assets/images/JAMB Opens Platforms to Attend to Students Complaints@2x.png";
import SidebarMenu from "../sidebar/SidebarMenu";
import {useParams} from "react-router";
import {getOneUserTestWithSubjects, updateOneUserTest} from "../../APIHandler/APIController";
import {message, Skeleton} from "antd";

const AssessmentBoard = () => {

    const { id } = useParams();
    const [test, setTest] = useState({});
    const [testLoading, setLoading] = useState(true);
    const [startLoading, setStartLoading] = useState(false);
    const [cancelLoading, setCancel] = useState(false);
    const [nav, setNav] = useState("about");

    useEffect(() => {
         getOneUserTestWithSubjects({userTestId: id}, onGetTest)
    }, []);

    const onGetTest = (status, data) =>{
        if(status){
            setTest(data);
            setLoading(false);
        }else{
            message.error("Unable to retrieve test", 3)
            setLoading(false);
        }
    };

    const updateTest = (status) =>{
        if(status === "started") {
            setStartLoading(true)
            updateOneUserTest({userTestId: id, status: status}, onStartTest)
        }else{
            setCancel(true)
            updateOneUserTest({userTestId: id, status: status}, onCancelTest)
        }
    };

    const onStartTest = (status) =>{
        if(status){
            setStartLoading(false)
            window.location.href = `/assessment/question/${test.subjects[0].id}/1`
        }else {
            setStartLoading(false)
            message.error("unable to start test", 3)
        }
    };

    const onCancelTest = (status) =>{
        if(status){
            setCancel(false)
            message.success("Test cancelled",3, ()=> {
                window.location.href = "/student"
            })
        }else {
            setCancel(false)
            message.error("unable to cancel test", 3)
        }
    };

    return(
        <React.Fragment>
            <ExamboardTemplate type="start" testSubjects={test.subjects} loading={testLoading}>
                <Skeleton active loading={testLoading}>
                <div className="faq-body">
                    <div className="col-small">
                        <div className="logo-wrapper">
                            <ImageHolder image={image} name="logo" />
                        </div>
                        <SidebarMenu func={e => setNav("about")} isActive={nav === "about"} label={"About test"} />
                        <SidebarMenu func={e => setNav("instruction")} isActive={nav === "instruction"} label={"Instructions"} />
                        <SidebarMenu func={e => setNav("practice")} isActive={nav === "practice"} label={"Practice"} />

                    </div>
                    <div className="col-big flex-column">
                        <Back/>
                        <HeaderText label={test.test ? test.test.label : ""} style={"t-header mb-50"}/>
                        {nav === "about" ? <HeaderText label={`About `} style={"t-header mb-50 font-regular font-22"}/> : ""}
                        {nav === "instruction" ? <HeaderText label={`Instruction `} style={"t-header mb-50 font-regular font-22"}/> : ""}
                        {nav === "practice" ? <HeaderText label={`Practice`} style={"t-header mb-50 font-regular font-22"}/> : ""}

                        {nav === "about" ?
                            <React.Fragment>
                                <div className="faq-q">
                                    <SectionText style="about-service-p"
                                                 text={"Afri Edu is a platform that enables candidates have access to examination\n" +
                                                 "            sponsorship as well as other gifts from organizations after participating in qualifying tests"}/>
                                </div>
                            </React.Fragment>
                            :
                            ""
                        }
                        {nav === "instruction" ?
                            <React.Fragment>
                                <div className="faq-q">
                                    <SectionText style="about-service-p"
                                                 text={"Afri Edu is a platform that enables candidates have access to examination\n" +
                                                 "            sponsorship as well as other gifts from organizations after participating in qualifying tests"}/>
                                </div>
                            </React.Fragment>
                            :
                            ""
                        }
                        {nav === "practice" ?
                            <React.Fragment>
                                <div className="faq-q">
                                    <SectionText style="about-service-p"
                                                 text={"Afri Edu is a platform that enables candidates have access to examination\n" +
                                                 "            sponsorship as well as other gifts from organizations after participating in qualifying tests"}/>
                                </div>
                            </React.Fragment>
                            :
                            ""
                        }
                        {nav === "practice" ?
                            <div className="flex-start z-mt-50">
                                <Button label="Practice Test" style="z-action-btn" func={""} loading={false}/>
                            </div>
                            :
                            <div className="flex-start z-mt-50">
                                <Button label="Begin Test Now" style="z-action-btn" func={e => updateTest("started")} loading={startLoading}/>
                                <Button label="Cancel Test" style="button-white  ml-20" func={e => updateTest("cancelled")} loading={cancelLoading}/>
                            </div>
                        }
                    </div>
                </div>
                </Skeleton>
            </ExamboardTemplate>
        </React.Fragment>
    )
}

export default AssessmentBoard