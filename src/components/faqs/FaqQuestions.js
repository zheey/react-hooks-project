import React, {useState} from 'react';
import HeaderText from "../landingPage/section/HeaderText";
import SectionText from "../landingPage/section/SectionText";

export default ({header,content, func, className = "", children}) => {

    const [isActive, setActive] = useState(false);

    return(
        <div className={`${className} faq-q`}>
            {!isActive &&  <div className="icon pointer" onClick={e => {setActive(true)}}>
                +
            </div>
            }
            {isActive &&  <div className="icon pointer" onClick={e => {setActive(false)}}>
                -
            </div>
            }

            <div className="basis">
                <HeaderText label={header} style="about-service-h"/>
                {isActive && children }
            </div>
        </div>
    )
}