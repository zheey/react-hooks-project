import React from "react";
import {Tag} from "../../common/icons/icons";

export default ({ label, hasTag, onClick }) => {

    return(
        <div className="dropdown pointer flex-start" onClick={e => { onClick() }}>
            {hasTag ? <Tag className="primary-light"/> : ""}
            <p> {label} </p>
        </div>
    )
}