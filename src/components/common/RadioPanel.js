import React from 'react';
import HeaderText from "../landingPage/section/HeaderText";
import { Radio} from "antd";
import {CheckCircle} from "./icons/icons";

const RadioPanel = ({func,radioObj, className="",value }) =>{
    return(

        <Radio.Group onChange={e=>func(e)} className={`exam-wrapper pointer radio-wrapper ${className}`} value={value}>
            {radioObj.map((radioData, index) => (
                    <div className="exam-p lower relative" key={index}>
                        <Radio value={index} disabled={radioData.status ? radioData.status === true : false}>
                            <HeaderText label={radioData.content || (radioData.test_subject ? radioData.test_subject.subject.name : "")} style="text-center" />
                        </Radio>
                        {radioData.status && radioData.status === true ? <CheckCircle className={"bg-green checked"}/> : ""}
                    </div>
                )
            )
            }
        </Radio.Group>

    )
}

export default RadioPanel