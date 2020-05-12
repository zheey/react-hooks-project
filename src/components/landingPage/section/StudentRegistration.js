import React from 'react';
import HeaderText from "./HeaderText";
import Button from "../../button/Button";

export default ({panel}) => (
    <div className={`panel ${panel}`}>
        <div>
            <HeaderText label="Let us help you reach your Academic dreams" style="" />
            <Button label="Sign Up" style="z-action-btn"/>
        </div>
    </div>
)