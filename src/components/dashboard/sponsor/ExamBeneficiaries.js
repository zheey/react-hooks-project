import React, {useEffect, useReducer, useState} from "react";
import TableLayout from "../commons/TableLayout";
import {message, Skeleton} from "antd";

export default () => {

    const examBeneficiaries = [{sn: 2, name: "john boshco", examinationBody: "JAMB", year: "2019",
        date: "16th Jun, 97", score: "78%"}];
    const headerData = [{title: "Name", key: "name"},
        {title: "Exam body", key: "examinationBody"}, {title: "Year", key: "year"}, {title: "Date Awarded", key: "date"},
        {title: "Exam Score", key: "score"}];

    return(
        <div>
            <Skeleton loading={false}>
                <TableLayout header={"Beneficiaries"} tableData={examBeneficiaries} headerData={headerData}>

                </TableLayout>
            </Skeleton>
        </div>
    )
}