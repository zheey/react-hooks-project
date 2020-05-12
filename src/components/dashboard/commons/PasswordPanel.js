import React from "react";
import Input from "../../input/Input";
import Button from "../../button/Button";

export default () =>(
    <div className="mt-50 pm">
        <Input height="z-h-54" label={"Old Password"} type={"password"} name={"old_password"}
               msg={"Field cannot be empty"}/>
        <Input height="z-h-54" label={"New Password"} type={"password"} name={"password"}
               msg={"Field cannot be empty"}/>
        <Button label="Save changes" style="z-action-btn mt-30" />
    </div>
)