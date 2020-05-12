import React, {useState} from "react";
import DetailsPageLayout from "../commons/DetailsPageLayout";
import HeaderText from "../../landingPage/section/HeaderText";
import NavMenu from "../../landingPage/navBar/NavMenu";
import ProfilePanel from "./ProfilePanel";
import PasswordPanel from "../commons/PasswordPanel";
import {useSelector} from "react-redux";

const StudentProfile = () =>{

    const [tabNumber, setTab] = useState(0);

    return(
        <DetailsPageLayout text={"Your profile"}>
            <HeaderText label={`Profile`} style={"t-header mb-50"}/>
            <div className="nav sub-nav">
                <div className="menu">
                    <NavMenu label="Account" isActive={tabNumber === 0} onClick={e=>{setTab(0)}}/>
                    <NavMenu label="Security" isActive={tabNumber === 1} style="" onClick={e=>{setTab(1)}}/>
                </div>
            </div>
            <div className="mt-50">
                {tabNumber === 0 ?  <ProfilePanel/> : ""}
                {tabNumber === 1 ?  <PasswordPanel/> : ""}
            </div>
        </DetailsPageLayout>
    )
};

export default StudentProfile