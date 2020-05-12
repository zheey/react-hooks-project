import React from "react";
import Navbar from "../landingPage/navBar/Navbar";

export default ({ children }) => (
    <React.Fragment>
        <Navbar className="bg-pink"/>
        <React.Fragment>
            {children}
        </React.Fragment>
    </React.Fragment>
)