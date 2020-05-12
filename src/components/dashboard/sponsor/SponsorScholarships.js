import React, {useEffect, useReducer, useState} from "react";
import TableLayout from "../commons/TableLayout";
import {message, Skeleton} from "antd";

export default () => {

    const examScholarship = [{sn: 2, examinationBody: "JAMB", year: "2019",
        date: "16th Jun, 97", unitFunded: "78", unitAwarded: "78"}];
    const headerData = [
        {title: "Exam body", key: "examinationBody"}, {title: "Year", key: "year"}, {title: "Date Funded", key: "date"},
        {title: "Units Funded", key: "unitFunded"},{title: "Units Awarded", key: "unitAwarded"}];

    return(
        <div>
            <Skeleton loading={false}>
                <TableLayout header={"Exams Sponsored"} tableData={examScholarship} headerData={headerData}>

                </TableLayout>
            </Skeleton>
        </div>
    )
}