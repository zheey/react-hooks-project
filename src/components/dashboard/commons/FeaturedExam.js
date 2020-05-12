import React from "react";
import ImageHolder from "../../landingPage/image/ImageHolder";
import HeaderText from "../../landingPage/section/HeaderText";
import Button from "../../button/Button";

export default ({ className,buttonClassName,label, logo, name, onClick }) => (
    <div className={`${className} f-exam`}>
        <ImageHolder image={logo} name="" />
        <div className={"flex-column ml-10"}>
            <HeaderText label={name} style="" />
            <Button label={`${label}`} style={` ${buttonClassName} ash-bg`} func={onClick}/>
        </div>
    </div>
)