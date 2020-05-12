import React from "react";
import DashboardLayout from "../DashboardLayout";
import SponsorNameTag from "./SponsorNameTag";
import {Route, Switch} from "react-router";
import SponsorDashboard from "./SponsorDashboard";
import {useSelector} from "react-redux";
import SponsorAnalyticsTab from "./SponsorAnalyticsTab";
import SponsorSideMenu from "./SponsorSideMenu";
import giftIcon from "../../../assets/images/Group 1690@2x.png";
import giftIcon2 from "../../../assets/images/Mask Group 48.svg";
import giftIcon3 from "../../../assets/images/Screenshot 2019-11-23 at 08.08.53.png";
import ExamBeneficiaries from "./ExamBeneficiaries";
import SponsorScholarships from "./SponsorScholarships";

const SponsorDashboardLayout = () => {
    const path = window.location.pathname;
    const content = useSelector(state => state);

    return(
        <div>
            <DashboardLayout>
                <div className="dashboard-wrapper bg-pink">
                    <div className="main-dash">
                        {path === "/sponsor/beneficiaries" ?
                            <div className="flex-start-center">
                                <SponsorAnalyticsTab
                                    noButton
                                    className={"bg-transparent tab-padding no-ml"}
                                    giftIcon={giftIcon2}
                                    header={'All Beneficiaries'}
                                />
                            </div>
                            :
                            <div className="flex-space">
                                {path === "/sponsor" ? <SponsorNameTag firstName={content.user.user.first_name}/> : ''}
                                {path === "/sponsor/scholarship" ? <SponsorAnalyticsTab
                                    noButton
                                    className={"bg-transparent tab-padding no-ml"}
                                    giftIcon={giftIcon3} header={"Exam Sponsored"}
                                />
                                :
                                    ''
                                }
                                <SponsorAnalyticsTab giftIcon={giftIcon} header={'Beneficiaries'} className={"no-mr"}/>
                            </div>
                        }
                        <Switch>
                            <Route exact path={'/sponsor'} component={SponsorDashboard}/>
                            <Route exact path={'/sponsor/scholarship'} component={SponsorScholarships}/>
                            <Route exact path={'/sponsor/beneficiaries'} component={ExamBeneficiaries}/>
                        </Switch>
                    </div>
                    <SponsorSideMenu/>
                </div>
            </DashboardLayout>
        </div>
    )
};
export default SponsorDashboardLayout