import React, {useEffect, useReducer, useState} from "react";
import DashboardScrollPanel from "../commons/DashboardScrollPanel";
import StatisticsTab from "../commons/StatisticsTab";
import graph from "../../../assets/images/Mask Group 36.svg";
import graph2 from "../../../assets/images/align.svg";
import graph3 from "../../../assets/images/align (1).svg";
import logo from "../../../assets/images/JAMB Opens Platforms to Attend to Students Complaints@2x.png";
import FeaturedExam from "../commons/FeaturedExam";
import {useDispatch, useSelector} from "react-redux";
import {getTests, getUserTests} from "../../../APIHandler/APIController";
import {message, Skeleton} from "antd";
import {testAnalyticsReducer, testNavigationReducer} from "../../../reduxController/reducers/inputReducer";
import {setUserTest} from "../../../reduxController/actions/userTestActions";
import {setTests} from "../../../reduxController/actions/testActions";
import {Empty} from "antd";
import {redirectToPage} from "../../globalServices/globalFunction";

const ITEM_PER_NAV = 4;

const UserDashboard = () => {

    useEffect(() => {
        getUserTests(onGetUserTest);
        getTests(onGetTest)
    }, []);

    const content = useSelector(state => state);
    const dispatch = useDispatch();
    const [userTestLoading, setUserTestStatus] = useState(true);
    const [testLoading, setTestStatus] = useState(true);

    const [testAnalytics, setTestAnalytics] = useReducer(testAnalyticsReducer, {
        completed: [],
        unCompleted: [],
        highestGrade: [],
        lowestGrade: []
    });

    const [testNavigation, setNavigation] = useReducer(testNavigationReducer, {
        currentItem: 0,
        lastItem: 4
    });

    const onGetUserTest = (status, data) =>{
        if(status){
            dispatch(setUserTest(data))
           setUserTestStatus(false);

            const completed = data.filter(test=>test.status === "completed");
            const unCompleted = data.filter(test => test.status !== "completed");
            const highestScore = data.sort((a, b) => (a.score - b.score));
            const lowestScore = data.sort((a, b) => (b.score - a.score));
            setTestAnalytics({unCompleted: unCompleted, highestGrade:highestScore[0], lowestGrade: lowestScore[0], completed: completed});
        }else {
            message.error("Unable to retrieve user tests")
            setUserTestStatus(false)
        }
    };

    const onGetTest = (status, data) =>{
        if(status){
            dispatch(setTests(data))
            setTestStatus(false)
        }else {
            message.error("Unable to retrieve tests")
            setTestStatus(false)
        }
    };

    const scrollTest = (navigation) => {
        if(navigation === "left"){
            if(testNavigation.currentItem !== 0){
                setNavigation({currentItem: (testNavigation.currentItem - ITEM_PER_NAV),
                    lastItem: (testNavigation.lastItem - ITEM_PER_NAV)})
            }else{
                setNavigation({currentItem: (0),
                    lastItem: (ITEM_PER_NAV)})
            }
        }else{
            if(content.test.test.length - testNavigation.lastItem > 0){
                setNavigation({currentItem: (testNavigation.currentItem + ITEM_PER_NAV),
                    lastItem: (testNavigation.lastItem + ITEM_PER_NAV)})
            }else{
                setNavigation({currentItem: (0),
                    lastItem: (ITEM_PER_NAV)})
            }
        }
    };

    return (
    <React.Fragment>
        <DashboardScrollPanel header="General Statistics">
            <Skeleton loading={userTestLoading}>
                <div className="flex-space-between">
                    <StatisticsTab image={graph} label="Completed Tests" stat={testAnalytics.completed.length} tabClassName="mr-15"/>
                    <StatisticsTab image={graph2} label="Uncompleted Tests" stat={testAnalytics.unCompleted.length} tabClassName="mr-15"/>
                    <StatisticsTab image={graph2} label="Highest Grade" stat={testAnalytics.highestGrade ? `${testAnalytics.highestGrade.score}%`: '0%'} tabClassName="mr-15"/>
                    <StatisticsTab image={graph3} label="Lowest Grade" stat={testAnalytics.lowestGrade ? `${testAnalytics.lowestGrade.score}%` : '0%'} tabClassName="mr-15"/>
                </div>
            </Skeleton>
        </DashboardScrollPanel>
        <DashboardScrollPanel header="Featured Exams" hasNavigation
                              navItems={!content.test.fetching ? content.test.test: []}
                              navigateLeft={e => scrollTest("left")} navigateRight={ e => scrollTest("right")}>
            <Skeleton loading={testLoading}>
                {(!content.test.fetching && content.test.test) ?
                    <div className="flex-space-between">
                        { content.test.test
                            .slice(testNavigation.currentItem, testNavigation.lastItem)
                            .map((test, i) => (
                            <FeaturedExam logo={test.test.exam_body.logo}
                                          name={test.test.label} label="Apply" key={i} onClick={e => redirectToPage(`/subjects/${test.testId}`)}/>
                        ))
                        }
                    </div>
                    :
                    null
                }
                {(!content.test.fetching && content.test.test.length < 1) ?
                    <div className="flex">
                        <Empty description="No exams yet"/>
                    </div>
                    :
                    null
                }
           </Skeleton>
        </DashboardScrollPanel>
    </React.Fragment>
    )
}

export default UserDashboard