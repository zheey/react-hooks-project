import React from "react";
import DashboardTab from "../commons/DashboardTab";
import giftIcon from "../../../assets/images/Screenshot 2019-11-06 at 01.09.41.png";
import HeaderText from "../../landingPage/section/HeaderText";

export default () => (
    <DashboardTab image={giftIcon} className="no-ml dash-white" imageClass="img" textClassName="tab-header">
        <HeaderText label={`Sponsorship Gifts`} style={"t-header text-center primary"}/>
    </DashboardTab>
)