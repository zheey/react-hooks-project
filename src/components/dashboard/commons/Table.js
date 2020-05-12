import React from "react";
import {Table, Icon} from "antd";
import Button from "../../button/Button";

const Column = Table.Column;

export default ({ tableData, headerData }) => (
    <Table bordered={false}  dataSource={tableData} className="table-white pointer mt-50"
           pagination={false}
           rowClassName={(record, index) => {
               if(index%2 === 0) {
                   return "z-stripped"
               }
           }}
           scroll={window.innerWidth >720 ? { x: '20%',  }: { x: '220%',  }}
    >
        <Column
            title={"#"}
            dataIndex={"sn"}
            key={"sn"}
            render={(text, record, index) => {
                return <div  className="">
                    <p className="z-table-num z-no-mb">{text}</p>
                </div>
            }} />
        { headerData.map((headerCol, i) => {
            return(
                <Column
                title={headerCol.title}
                dataIndex={headerCol.key}
                key={headerCol.key}
                render={(text, record, index) => {
                    return (headerCol.key === "registrationPin" ?
                        <Button style="button-light-blue" label={"Copy Pin"}/> :
                        <div  className="">
                        <p className="z-table-num z-no-mb">{text}</p>
                    </div>)
                }} />
            )})
        }}
    </Table>
)