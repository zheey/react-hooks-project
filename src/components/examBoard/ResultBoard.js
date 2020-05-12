import React, {useEffect, useState} from 'react';
import Navbar from "../landingPage/navBar/Navbar";
import Input from "../input/Input";
import Button from "../button/Button";
import ImageHolder from "../landingPage/image/ImageHolder";
import rightImage from "../../assets/images/Group 1550@2x.png";
import leftImage from "../../assets/images/Group 1428.svg";
import iconWave from "../../assets/images/kisspng-emoticon-emoji-wave-smiley-sticker-5ae0b08f833128.0984880815246747035374@2x.png";
import Footer from "../landingPage/footer/Footer";
import SectionText from "../landingPage/section/SectionText";
import HeaderText from "../landingPage/section/HeaderText";
import {useParams} from "react-router";
import {getOneUserTestWithSubjects} from "../../APIHandler/APIController";
import {message, Skeleton} from "antd";
import {useSelector} from "react-redux";
import {testSubjectReducer} from "../../reduxController/reducers/inputReducer";
import {redirectToPage} from "../globalServices/globalFunction";

export default ({ headerText, name }) => {

    const { id } = useParams();
    const [test, setTest] = useState({});
    const [testLoading, setLoading] = useState(true);
    const content = useSelector(state => state);

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
    return (

        <div className="">
            <div className="bg-pink min-height">
                <Navbar className="bg-pink"/>
                <div className="row-wrapper result">
                    <div className="col-wrapper relative basis-40">
                        <div className="side-panel">
                            <Skeleton active loading={testLoading}>
                            <ImageHolder name="img-right" image={rightImage}/>
                            <SectionText style="about-service-p thin font-22" text={test.isEligible ? 'Nice work,': 'Tough luck,'}/>
                            <HeaderText label={`${content.user.user.first_name} !`} style={"t-header bold"}/>
                            <SectionText style="about-service-p thin font-19 mb-30" text={test.isEligible ? 'You passed': 'You failed'}/>
                            <SectionText style="about-service-p thin font-16 " text={'Score'}/>
                            <HeaderText label={`${test.score}%`} style={"t-header bold default-m"}/>
                                { test.isEligible ? <Button label="Claim your Sponsorship" style="z-action-btn"/> : ""}
                            </Skeleton>
                        </div>
                        <ImageHolder name="img-left" image={leftImage}/>
                    </div>
                    <div className="col-wrapper basis-60 text-panel-wrapper">
                        <div className="text-panel">
                            <Skeleton active loading={testLoading}>
                                <HeaderText label={test.isEligible ? `Congrats ${content.user.user.first_name}`: `Sorry ${content.user.user.first_name}` } style={"t-header mb-20"}/>
                                <SectionText
                                    text={'We are happy for you, find your sponsorship prize in your Gifts/Sponsors tab, ' +
                                    'Also do good to send a shout-out to your sponsor to show appreciation ' +
                                    'You may also apply for other sponsorships as neccessary'}
                                    style={"about-service-p thin small-tag"}/>
                                {test.isEligible ?
                                    <Button label="Send a shoutout to your Sponsor" style="z-action-btn button-pink">
                                        <ImageHolder image={iconWave} name="icon-image"/>
                                    </Button>
                                    :
                                    <Button label="See other exams" style="z-action-btn button-pink" func={e => redirectToPage("/exams")}/>
                                }
                            </Skeleton>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}