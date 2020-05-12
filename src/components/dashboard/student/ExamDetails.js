import React from 'react';
import Back from "../../examBoard/Back";
import HeaderText from "../../landingPage/section/HeaderText";
import List from "../commons/List";
import DetailsPageLayout from "../commons/DetailsPageLayout";

const ExamDetails = () =>{

    return(
        <DetailsPageLayout>
            <Back/>
            <HeaderText label={`Exam Details`} style={"t-header mb-50"}/>
            <div className="width-80 margin-auto">
                <List label="Examination Body" labeltext="JAMB"/>
                <List label="Examination Year" labeltext="2019"/>
                <List label="Score" labeltext="70%"/>
                <List label="Date" labeltext="20th June, 97"/>
                <List label="Status" labeltext="Complete"/>
            </div>
        </DetailsPageLayout>
    )
}

export default ExamDetails