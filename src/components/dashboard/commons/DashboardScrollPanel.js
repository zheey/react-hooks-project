import React from "react";
import HeaderText from "../../landingPage/section/HeaderText";
import NavTab from "./NavTab";
import {ArrowLeft, ArrowRight} from "../../common/icons/icons";

export default ({ header, children, hasNavigation, navItems, navigateLeft, navigateRight }) => (
    <div className="dash-section">
        <div className="flex-space-between">
            <HeaderText label={header} style="" />
            {hasNavigation && navItems.length > 4 ?
                <div className="flex-space-between">
                    <NavTab className="white-bg shadow" onclick={navigateLeft}>
                        <ArrowLeft className="primary"/>
                    </NavTab>
                    <NavTab className="purple ml-15" onclick={navigateRight}>
                        <ArrowRight />
                    </NavTab>
                </div>
                :
                ""
            }
        </div>
        {children}
    </div>
)