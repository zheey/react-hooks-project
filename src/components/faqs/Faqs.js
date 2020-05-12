import React from 'react';
import Navbar from "../landingPage/navBar/Navbar";
import HeaderText from "../landingPage/section/HeaderText";
import SearchInput from "../search/SearchInput";
import SidebarMenu from "../sidebar/SidebarMenu";
import FaqTabs from "./FaqTabs";
export default ({label}) => {

    return(
        <div>
            <div className="faqs" >
                <Navbar/>
                <div className="head">
                    <HeaderText label="Frequently Asked Questions" style="" />
                    <SearchInput placeholder="Search Questions" height="input" />
                </div>
            </div>
            <div className="faq-body">
                <div className="col-small">
                    <SidebarMenu func="" isActive={true} label={"General"} />
                    <SidebarMenu func="" isActive={false} label={"Candidates"} />
                    <SidebarMenu func="" isActive={false} label={"Sponsor"} />

                </div>
                <div className="col-big">
                    <FaqTabs header={"General"} style=""/>
                    <FaqTabs header={"Candidates"} style="mt-100"/>
                    <FaqTabs header={"Sponsor"} style="mt-100"/>
                </div>
            </div>
        </div>
    )
}