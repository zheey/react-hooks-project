import React, {useEffect, useReducer, useState} from "react";
import TableLayout from "../commons/TableLayout";
import {getUserTests} from "../../../APIHandler/APIController";
import {message, Skeleton} from "antd";
import moment from "moment";
import {setUserTest} from "../../../reduxController/actions/userTestActions";
import {useDispatch} from "react-redux";

export default () => {
    useEffect(() => {
        getUserTests(onGetUserTest);
    }, []);

    const [test, setTest] = useState(null);
    const dispatch = useDispatch();

    const onGetUserTest = (status, data) =>{
        if(status){
            dispatch(setUserTest(data))
            let newTestData = []
            data.map((test, i) =>(
                newTestData.push({sn: i+1,
                    examinationBody: test.test.exam_body.name,
                    test: test.test.label,
                    score: `${test.score}%`,
                    date: moment(test.createdAt).format("ll"),
                status: test.isEligible ? "passed" : "failed"})
            ));
            setTest(newTestData);
        }else {
            message.error("Unable to retrieve user tests")
        }
    };
    const headerData = [{title: "Examination Body", key: "examinationBody"},
        {title: "Test", key: "test"}, {title: "Date", key: "date"}, {title: "Score", key: "score"},
        {title: "Status", key: "status"}, {title: "Action", key: "action"}];

    // {sn: 2, examinationBody: "JAMB", year: "2019", date: "16th Jun, 97", score: "78%", registrationPin: "Copy Pin",sponsorShoutout: ""}

    return(
        <div>
            <Skeleton loading={!test}>
            <TableLayout header={"My Sponsorships"} tableData={test} headerData={headerData}>

            </TableLayout>
            </Skeleton>
        </div>
    )
}