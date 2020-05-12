import React from 'react';
import ImageHolder from "../landingPage/image/ImageHolder";
import HeaderText from "../landingPage/section/HeaderText";
import {Checkbox} from "antd";

const CheckboxPanel = ({func,radioObj,defaultValue, subjects, subjectSize, removeIndex }) =>{
    return(

        <Checkbox.Group onChange={func} className="exam-wrapper pointer radio-wrapper" defaultValue={defaultValue}>
            {radioObj.map(radioData => (
                <div className="exam-p lower">
                    <Checkbox value={radioData.id} checked={radioData.isCompulsory} disabled={radioData.isCompulsory ||
                    ((subjects.length === subjectSize) && !subjects.includes(radioData.id))}>
                        <HeaderText label={radioData.subject.name} style="text-center" />
                    </Checkbox>
                </div>
                )
                )
            }
        </Checkbox.Group>

    )
}

export default CheckboxPanel