import React from "react";
import HeaderText from "../../landingPage/section/HeaderText";
import Button from "../../button/Button";

export default ({onClick}) => (
    <div className="bg-pix mt-50 flex-start-center">
        <div className={"flex-column ml-10 post"}>
            <HeaderText label={"Education as a key to Eradicating Poverty"} style="" />
            <Button label={`Read`} style={`bg-blue2 white ash-bg`} func={onClick}/>
        </div>
    </div>
)