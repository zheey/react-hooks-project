import React from "react";
import DashboardLayout from "../DashboardLayout";
import StudentNameTab from "./StudentNameTab";
import SponsorhipGiftTab from "./SponsorhipGiftTab";
import ScholarshipAnalyticsTab from "./ScholarshipAnalyticsTab";
import UserSideMenu from "./UserSideMenu";
import {Switch, Route} from "react-router-dom";
import UserDashboard from "./UserDashboard";
import UserGiftPage from "./UserGiftPage";
import {useDispatch, useSelector} from "react-redux";

const UseDashboardLayout = () => {

    const path = window.location.pathname;
    const content = useSelector(state => state);

    return(
        <div>
            <DashboardLayout>
                <div className="dashboard-wrapper bg-pink">
                    <div className="main-dash">
                        <div className="flex-space">
                            {path === "/student" ? <StudentNameTab firstName={content.user.user.first_name}/> : ''}
                            {path === "/student/scholarships" ? <SponsorhipGiftTab/> : ''}
                            <ScholarshipAnalyticsTab/>
                        </div>
                        <Switch>
                            <Route exact path={'/student'} component={UserDashboard}/>
                            <Route exact path={'/student/scholarships'} component={UserGiftPage}/>
                        </Switch>
                    </div>
                    <UserSideMenu/>
                </div>
            </DashboardLayout>
        </div>
    )
};

export default UseDashboardLayout