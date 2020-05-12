import React, {useEffect, useState} from 'react';
import HeaderText from "./HeaderText";
import SectionText from "./SectionText";
import ImageHolder from "../image/ImageHolder";
import logo from '../../../assets/images/Group 1513.png'
import VerticalDetails from "./VerticalDetails";
import rightImage from "../../../assets/images/Mask Group 14.svg";
import StudentRegistration from "./StudentRegistration";
import Partners from "./Partners";
import Testimonial from "./Testimonial";
import {useDispatch, useSelector} from "react-redux";
import {getTests} from "../../../APIHandler/APIController";
import {setTests} from "../../../reduxController/actions/testActions";
import {message, Skeleton} from "antd";
import test from "../../../reduxController/reducers/testReducer";
import {redirectToPage} from "../../globalServices/globalFunction";

export default () => {

    const content = useSelector(state => state);
    const dispatch = useDispatch();
    const [testLoading, setTestStatus] = useState(true);


    useEffect(() => {
        getTests(onGetTest)
    }, []);

    const onGetTest = (status, data) =>{
        if(status){
            let test = [];
            data.map(testData => (
                test.push({logo: testData.test.exam_body.logo, label: testData.test.label, id: testData.test.id})
            ));
            dispatch(setTests(test))
            setTestStatus(false)
        }else {
            message.error("Unable to retrieve tests")
            setTestStatus(false)
        }
    };

    const clickOnExam = (id) => {
        if(content.user.isAuthenticated){
            redirectToPage(`/subjects/${id}`)
        }else {
            redirectToPage(`/login?redirect=ex&id=${id}`)
        }
    };

    return (
    <section className="section bg-pink">
        <div className="row-wrapper">
            <div className="col-wrapper student">
                <div className=" s-width">
                    <HeaderText label="Take practice tests via whatsapp" style="" />
                    <SectionText style="about-service-p" text={"You can also take your practices tests via whatsapp"}/>
                    <div>
                        <VerticalDetails label="Add Afri-Edu as a phone contact" sn="01" text="Lorem Ipsum" show={true}/>
                        <VerticalDetails label="Text Menu" sn="02" text="Lorem Ipsum" show={true}/>
                        <VerticalDetails label="Follow the options and get started" sn="03" text="Lorem Ipsum" show={false}/>
                    </div>
                </div>
            </div>
            <div className="col-wrapper student">
                <ImageHolder image={logo} name="" />
                <ImageHolder image={rightImage} name="bg-image z-right-img"/>
            </div>
        </div>
        <StudentRegistration panel="" />
            <Partners type="exam" header="Featured Exam Scholarships"
                      onClick={clickOnExam} loading={testLoading}
                      content={(!content.test.fetching && content.test.test) ? content.test.test : []}
            />

        <Testimonial />
        <Partners type="partners" header="Our Partners"/>
    </section>
)
}