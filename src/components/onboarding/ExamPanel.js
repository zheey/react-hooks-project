import React from 'react';
import ImageHolder from "../landingPage/image/ImageHolder";
import HeaderText from "../landingPage/section/HeaderText";

const ExamPanel = ({name, logo, func}) =>{
    return(
        <div className={logo ? "exam-p " : "exam-p lower"} onClick={e => {func()}}>
            <HeaderText label={name} style="" />
            {logo && <ImageHolder image={logo} name="" /> }
        </div>
    )
}

export default ExamPanel