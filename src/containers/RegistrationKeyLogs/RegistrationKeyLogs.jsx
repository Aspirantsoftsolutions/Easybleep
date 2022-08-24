import { Button, Table, Input, Tabs } from "antd";
import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useRef, useState } from "react";
import "./RegistrationKeyLogs.scss";
import { UserOutlined, FileOutlined } from "@ant-design/icons";
import reseticon from "../../assets/img/icons/resetpassword-icon.png";
import editicon from "../../assets/img/icons/edit-icon.png";
import deleteicon from "../../assets/img/icons/delete-icon.png";
import deactivate from "../../assets/img/icons/Off-Icon.png";
const { TabPane } = Tabs;

const RegistrationKeyLogs = (props) => {

  //const child = useRef();

  const [header, setTableHeader] = useState([
    {
      title: "Registration key",
      dataIndex: "registrationkey",
      key: "registrationkey"
    },
    {
      title: "Activation date",
      dataIndex: "activationdate",
      key: "activationdate"
    },
    {
      title: "Assign to",
      dataIndex: "assignto",
      key: "assignto"
    },
    {
      title: "Device serial",
      dataIndex: "deviceserial",
      key: "deviceserial"
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "Device status",
      dataIndex: "devicestatus",
      key: "devicestatus",
      render: (_, item) => {
        return (
          <>
            <img src={item.devicestatus}></img>
          </>
        )
      }
    },
    // {
    //   title: "OS",
    //   dataIndex: "OS",
    //   key: "OS",
    //   render: (_, item) => {
    //     return (
    //       <>
    //         <img src={item.OS}></img>
    //       </>
    //     )
    //   }
    // },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      className: "actionblock",
      render: () => {
        return (<div className="actionicon">
          {/* <img
            src={editicon}
            alt="edit"
            onClick={() => {
              // child.current.showModal();
            }}
          />
          <img src={deleteicon} alt="delete" /> */}

          <img src={deactivate} alt="De-Activate" title="De-Activate"  height={25}/>
          {/* <img src={reseticon} alt="reset" /> */}
        </div>
        )
      }
    },


  ]);
  const [data, setTableData] = useState([
    {
      registrationkey: "BX9NNVMANFJLQKK4",
      activationdate: "01/28/21",
      assignto: "/Samsung",
      deviceserial: "4651d2a0-54f2-4990-83bc-7b00e37e633d",
      type: "Shared",
      devicestatus: "https://easybleep.com/templates/commonlib/img/device_status_on.png",
      OS: "https://easybleep.com/templates/commonlib/img/android-icon.png"
    }
  ]);

  return (
    <>
      <main>
        <div className="RegistrationKeyLogs-components-wrapper">
          <div className="pageheader">
            <h3>Registration Key logs</h3>
            <div className="searchblock">
              <Input
                className=""
                placeholder="Search by name,mail,type"
              ></Input>
            </div>

          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="User Logs" key="1">
              <TableView header={header} data={data} />
            </TabPane>
            <TabPane tab="Device Logs" key="2">

              <TableView header={header} data={data} />


            </TabPane>
          </Tabs>

        </div>
      </main>
    </>
  );
};

export default RegistrationKeyLogs;
