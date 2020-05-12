import React, {useEffect, useReducer, useState} from "react";
import DashboardScrollPanel from "../commons/DashboardScrollPanel";
import StatisticsTab from "../commons/StatisticsTab";
import graph from "../../../assets/images/Mask Group 36 (1).svg";
import graph2 from "../../../assets/images/align.svg";
import graph3 from "../../../assets/images/waving-hand (1).svg";
import {Skeleton} from "antd";
import BlogPanel from "../commons/BlogPanel";

const SponsorDashboard = () => {

    useEffect(() => {

    }, []);

    const [loading, setUserTestStatus] = useState(false);

    return (
        <React.Fragment>
            <DashboardScrollPanel header="General Statistics">
                <Skeleton loading={loading}>
                    <div className="flex-space-between">
                        <StatisticsTab image={graph2} label="Sponsored Exam Bodies" stat={0} tabClassName="mr-15"/>
                        <StatisticsTab image={graph} label="Total Sponsored Units" stat={0} tabClassName="mr-15"/>
                        <StatisticsTab image={graph2} label="Sponsorship Units won" stat={0} tabClassName="mr-15"/>
                        <StatisticsTab image={graph3} label="Shoutouts" stat={0} tabClassName="mr-15"/>
                    </div>
                </Skeleton>
            </DashboardScrollPanel>
            <BlogPanel/>
        </React.Fragment>
    )
}

export default SponsorDashboard