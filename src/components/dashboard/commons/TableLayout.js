import React from "react";
import HeaderText from "../../landingPage/section/HeaderText";
import SearchInput from "../../search/SearchInput";
import {CaretDown} from "../../common/icons/icons";
import Table from "./Table";

export default ({ header, tableData, headerData }) => {

    return (
        <div className="dash-section table-wrapper">
            <div className="flex-space-between">
                <HeaderText label={header} style="no-mb"/>
                <div>
                    <SearchInput placeholder="Search using keywords" height="input"/>
                </div>
                <div className="flex-space-between">
                    <HeaderText label={"Most Relevant"} style="no-mb font-16"/>
                    <CaretDown className="primary"/>
                </div>
            </div>
            <Table tableData={tableData || []} headerData={headerData}/>
        </div>
    )
}