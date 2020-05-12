import React, {useState} from 'react';
import './Navbar.scss'
import NavMenu from "./NavMenu";
import {useSelector} from "react-redux";
import NavTab from "../../dashboard/commons/NavTab";
import {Bell} from "../../common/icons/icons";
import ImageHolder from "../image/ImageHolder";
import avatar from "../../../assets/images/Group 1512@2x.png";
import Navlink from "../../dashboard/commons/Navlink";

export default ({className = ''}) => {


    const navigate =(path) => {
        window.location.href = `/${path}`;
    };

    const content = useSelector(state => state);
    const TestDropdown = (
        <React.Fragment>
            <Navlink label={"Scholarship Test"} hasTag onClick={e => navigate("exams")}/>
            <Navlink label={"Practice Test"} hasTag onClick={e => navigate("practice-exams")}/>
        </React.Fragment>
    );
    const ProfileDropdown = (
            <React.Fragment>
                <Navlink label={"Profile"} onClick={e => navigate("user-profile")}/>
                <Navlink label={"Invite a Friend"} onClick={e => navigate("user-profile")}/>
                <Navlink label={"Log Out"} onClick={e => navigate("")}/>
            </React.Fragment>
        );

    return(
        <div className={`nav ${className}`}>
            <div className="nav-header">
                <p className={`header primary pointer`} onClick={e => navigate("")}>
                    AfriSponsor
                </p>
            </div>
            { !content.user.isAuthenticated ? <div className="menu">
                <div className="flex-start-center width-inherit">
                    <NavMenu label="Home" isActive={window.location.pathname === "/"} onClick={e => navigate("")}/>
                    <NavMenu label="Sponsor" isActive={window.location.pathname === "/sponsorship"} style=""
                             onClick={e => navigate("sponsorship")}/>
                    <NavMenu label="FAQs" isActive={window.location.pathname === "/faqs"} style=""
                             onClick={e => navigate("faqs")}/>
                </div>
            </div>
                :
                ""
            }
            {content.user.isAuthenticated && content.user.user.role === "student" ?
                <div className="menu">
                    <div className="flex-start-center width-inherit basis-60">
                        <NavMenu label="Dashboard" isActive={window.location.pathname === "/student"}
                                 onClick={e => navigate("student")}/>
                        <NavMenu label="Tests" isActive={false} style="" hasChildren DropDownComponent={TestDropdown}
                                 onClick={e => navigate("exams")}/>
                        <NavMenu label="Gifts & Sponsorships" isActive={window.location.pathname === "/student/scholarships"} style=""
                                 onClick={e => navigate("student/scholarships")} hasCounter scholarshipTotal={9}/>
                    </div>
                    <div className="flex-start-center width-inherit flex-end basis-40">
                        <NavTab className={"purple"}>
                            <Bell/>
                        </NavTab>
                        <div className="flex-start">
                            <NavMenu className={"mg"}
                                     label={content.user.user.first_name + " " + content.user.user.last_name }
                                     isActive={false} style=""
                                     onClick={e => navigate("user-profile")} hasChildren DropDownComponent={ProfileDropdown}/>
                            <ImageHolder image={avatar} name="avatar small-avatar"/>
                        </div>
                    </div>
                </div>
                :
                ""
            }
            {content.user.isAuthenticated && content.user.user.role === "sponsor" ?
                <div className="menu">
                    <div className="flex-start-center width-inherit basis-60">
                        <NavMenu label="Dashboard" isActive={window.location.pathname === "/sponsor"}
                                 onClick={e => navigate("sponsor")}/>
                        <NavMenu label="Exams Sponsored" isActive={window.location.pathname === "/sponsor/scholarship"} style=""
                                 onClick={e => navigate("sponsor/scholarship")}/>
                        <NavMenu label="Beneficiaries" isActive={window.location.pathname === "/sponsor/beneficiaries"} style=""
                                 onClick={e => navigate("sponsor/beneficiaries")} hasCounter scholarshipTotal={9}/>
                    </div>
                    <div className="flex-start-center width-inherit flex-end basis-40">
                        <NavTab className={"purple"}>
                            <Bell/>
                        </NavTab>
                        <div className="flex-start">
                            <NavMenu className={"mg"}
                                     label={content.user.user.first_name + " " + content.user.user.last_name }
                                     isActive={false} style=""
                                     onClick={e => navigate("user-profile")} hasChildren DropDownComponent={ProfileDropdown}/>
                            <ImageHolder image={avatar} name="avatar small-avatar"/>
                        </div>
                    </div>
                </div>
                :
                ""
            }
        </div>
    )
}