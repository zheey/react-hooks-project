import React from "react";
import Navbar from "../../landingPage/navBar/Navbar";
import ImageHolder from "../../landingPage/image/ImageHolder";
import image from "../../../assets/images/Group 1428.svg";
import SidePanel from "../../onboarding/SidePanel";
import {useSelector} from "react-redux";

export default ({ children, text }) => {

    const content = useSelector(state => state);

    return (

        <div className="bg-pink min-height">
            <Navbar className="bg-transparent"/>
            <div className="d-wrapper  pt-panel details-panel">
                <div className="col-left">
                    <ImageHolder image={image} name="bg"/>
                    <SidePanel name={content.user.user.first_name} text={text} type={"details"}/>
                </div>
                <div className="col-right">
                    <div className="bg-white bg-panel">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}