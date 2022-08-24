import { Button, Table, Input } from "antd";
import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useRef, useState } from "react";
import "./AccessManagement.scss";
import reseticon from "../../assets/img/icons/resetpassword-icon.png";
import editicon from "../../assets/img/icons/edit-icon.png";
import deleteicon from "../../assets/img/icons/delete-icon.png";
import csvicon from "../../assets/img/icons/csv-icon.png";

import { UserOutlined, FileFilled } from "@ant-design/icons";
import AccessManagementModal from "../../components/AccessManagementModal";

const AccessManagement = (props) => {
  const child = useRef();

  const data = [
    {
      id: 1,
      access: "Member",
      description: "Member",
      type: "Default",
    },
    {
      id: 2,
      access: "Supervisor",
      description: "Supervisor",
      type: "Default",
    },
    {
      id: 3,
      access: "Agent",
      description: "Agent",
      type: "Default",
    },
    {
      id: 4,
      access: "Manager",
      description: "Manager",
      type: "Default",
    },
  ];

  const header = [
    {
      title: "Access",
      dataIndex: "access",
      key: "access",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, item) => {
        return (
          <div className="actionicon">
             <img
              src={editicon}
              alt="edit"
              onClick={() => {
                child.current.showModal();
              }}
            />
            <img src={deleteicon} alt="delete" />           
            {/* <img src={reseticon} alt="reset" /> */}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <main>
        <div className="accessManagement-components-wrapper">
          <div className="pageheader">
            <h3>Access Management</h3>

            <div className="pageheaderlast">     
            <div class="searchblock"><Input placeholder="Keywords" class="ant-input" type="text" value=""></Input></div>       
              <AccessManagementModal ref={child} />
            </div>
          </div>
          <TableView header={header} data={data} />
        </div>
      </main>
    </>
  );
};

export default AccessManagement;
