import React, {useEffect} from 'react';
import rightImage from "../../assets/images/Mask Group 9 (1).svg";
import ImageHolder from "../landingPage/image/ImageHolder";
import NumberTag from "../onboarding/NumberTag";
import HeaderText from "../landingPage/section/HeaderText";
import SectionText from "../landingPage/section/SectionText";
import NumberTemplate from "../common/NumberTemplate";
import {useSelector} from "react-redux";
import {getOneUserTestWithSubjects, getTests, getUserTests} from "../../APIHandler/APIController";
import {useParams} from "react-router";
import {Skeleton} from "antd";

const ExamboardTemplate = ({children, type, testSubjects,loading, examName, subjectIndex, subjectName, testQuestion, currentQuestionIndex }) => {

    const content = useSelector(state => state);

    return(
        <div className="examboard-wrapper ">
            <div className="side-menu">
                <ImageHolder image={rightImage} name="bg-image "/>
                <div className="nav-wrapper mb-50">
                    <div className="nav-header">
                        <HeaderText label="AfriSponsor" style=""/>
                    </div>
                    <div className="name-holder">
                        {`${!content.fetching ? content.user.user.first_name.substr(0,1) : ""}${!content.fetching ? content.user.user.last_name.substr(0,1): ""}`}
                    </div>
                </div>
                <div className="dash-wrapper">
                    {type==="start" ?  <React.Fragment>
                        <div className="mb-50">
                            <SectionText style="about-service-p thin" text={"Selected"}/>
                            <HeaderText label={`Subjects`} style={"t-header "}/>
                        </div>
                            {testSubjects ?
                                <Skeleton active loading={loading}>
                                    <React.Fragment>
                                        {testSubjects.map((subjects, i) =>(
                                            <NumberTag tag={i + 1} name={subjects.test_subject.subject.name} key={i}/>
                                        ))
                                        }
                                    </React.Fragment>
                                </Skeleton>
                                :
                                ""
                            }
                    </React.Fragment> :""
                    }
                    {type === "subject" ?
                        <React.Fragment>
                            <Skeleton active loading={loading}>
                            <div className="mb-50">
                                <SectionText style="about-service-p thin" text={`Live Test for ${examName}`}/>
                                <span className="about-service-p thin underline pointer small-text" >{"cancel"} </span>
                            </div>
                            </Skeleton>
                        </React.Fragment> : ""
                    }

                    {type === "question" ?
                        <React.Fragment>
                            <Skeleton active loading={loading}>
                            <div className="mb-50">
                                <SectionText style="about-service-p thin mb-29" text={`Live Test for ${examName}`}/>
                                <NumberTag tag={subjectIndex} name={subjectName} icon={true}/>
                                <div>
                                    <SectionText style="about-service-p thin font-16" text={"Question map"}/>
                                    <div className="n-wrapper">
                                        {testQuestion.map((question, index) => (
                                            <NumberTemplate className={currentQuestionIndex > index ? "read" :
                                                currentQuestionIndex === index ? "current" : ""}
                                                            number={index+1} key={index}/>
                                        ))}
                                    </div>
                                </div>
                                <span className="about-service-p thin underline pointer small-text" >{"cancel"} </span>
                            </div>
                            </Skeleton>
                        </React.Fragment> : ""
                    }
                </div>
            </div>
            <div className="main-menu">
                {children}
            </div>
        </div>
    )
}

export default ExamboardTemplate