import React, {useEffect, useState} from 'react';
import HeaderText from "./HeaderText";
import ImagePanel from "./ImagePanel";
import logo from "../../../assets/images/jamb.png"
import {getTests, getUserTests} from "../../../APIHandler/APIController";
import {setTests} from "../../../reduxController/actions/testActions";
import {Empty, message, Skeleton} from "antd";
import {useDispatch, useSelector} from "react-redux";

export default ({ type, header, loading, content, onClick }) => {

    return(
        <div className={`section p-panel`}>
            <HeaderText label={header} style=""/>
            <Skeleton active loading={loading}>
               <div className="flex">
                   {content && content.length > 0 ?
                       content.map((test, i) => (
                       <ImagePanel logo={test.logo} type={type} label={test.label} key={i} onClick={e => onClick(test.id)}/>
                       ))
                       :
                       <div className="flex">
                           <Empty description="No data yet"/>
                       </div>
                   }
               </div>
            </Skeleton>
        </div>
    )
}