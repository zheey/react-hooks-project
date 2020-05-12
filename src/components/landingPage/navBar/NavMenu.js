import React from 'react';
import {Down} from "../../common/icons/icons";
import NumberTemplate from "../../common/NumberTemplate";
import DropDown from "../../dashboard/commons/DropDown";

export default ({ label, isActive, onClick, hasChildren, hasCounter, scholarshipTotal=0, className="", DropDownComponent }) => {

    return(
    <div className={`nav-wrapper ${className}`}>
        <div className="relative more-drp flex">
        <p className={isActive ? `header flex-start-center active pointer` : "header flex-start-center pointer"}
           onClick={e => {onClick()}}>
            {label}
            {hasChildren ? <Down className="primary-light"/> : ''}
        </p>
            {hasCounter ? <NumberTemplate number={scholarshipTotal} className={"counter-tag"}/> : ''}
            {hasChildren ?
                <DropDown>
                    {DropDownComponent}
                </DropDown>
                :
                ''
            }
        </div>
        {isActive && <div className="active-bar"/>}

    </div>
)
}