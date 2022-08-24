import { Button, Table, Input } from "antd";
import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useRef, useState } from "react";
import "./BleepsManagement.scss";
import { UserOutlined, FileFilled } from "@ant-design/icons";
import BleepsManagementModal from "../../components/BleepsManagementModal";
import reseticon from "../../assets/img/icons/resetpassword-icon.png";
import editicon from "../../assets/img/icons/edit-icon.png";
import deleteicon from "../../assets/img/icons/delete-icon.png";

const LocationManagement = (props) => {
  const child = useRef();

  const [header, setTableHeader] = useState([
    {
      title: "Bleep Id",
      dataIndex: "bleepId",
      key: "bleepId",
    },
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Activation Date",
      dataIndex: "activationDate",
      key: "activationDate",
    },
    {
      title: "Voice Allowance",
      dataIndex: "voiceAllowance",
      key: "voiceAllowance",
    },
    {
      title: "Data Allowance",
      dataIndex: "dataAllowance",
      key: "dataAllowance",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
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
  ]);
  const [data, setTableData] = useState([
    {
      id: 1,
      bleepId: "565656",
      serialNumber: "2323232323",
      activationDate: "01/06/22",
      voiceAllowance: "200",
      dataAllowance: "200",
      status: "Deactive",
    },
    {
      id: 2,
      bleepId: "565657",
      serialNumber: "2323232324",
      activationDate: "03/06/22",
      voiceAllowance: "280mins",
      dataAllowance: "2GB",
      status: "Deactive",
    },
    {
      id: 3,
      bleepId: "565656",
      serialNumber: "2323232325",
      activationDate: "01/06/22",
      voiceAllowance: "200",
      dataAllowance: "200",
      status: "Deactive",
    },
    {
      id: 4,
      bleepId: "565657",
      serialNumber: "2323232326",
      activationDate: "03/06/22",
      voiceAllowance: "280mins",
      dataAllowance: "2GB",
      status: "Deactive",
    },
    {
      id: 5,
      bleepId: "565656",
      serialNumber: "2323232327",
      activationDate: "01/06/22",
      voiceAllowance: "200",
      dataAllowance: "200",
      status: "Deactive",
    },
    {
      id: 6,
      bleepId: "565657",
      serialNumber: "2323232328",
      activationDate: "03/06/22",
      voiceAllowance: "280mins",
      dataAllowance: "2GB",
      status: "Deactive",
    },
    {
      id: 7,
      bleepId: "565656",
      serialNumber: "2323232329",
      activationDate: "01/06/22",
      voiceAllowance: "200",
      dataAllowance: "200",
      status: "Deactive",
    },
    {
      id: 8,
      bleepId: "565657",
      serialNumber: "23238232324",
      activationDate: "03/06/22",
      voiceAllowance: "280mins",
      dataAllowance: "2GB",
      status: "Deactive",
    },
    {
      id: 9,
      bleepId: "565658",
      serialNumber: "2313232323",
      activationDate: "01/06/22",
      voiceAllowance: "200",
      dataAllowance: "200",
      status: "Deactive",
    },
    {
      id: 10,
      bleepId: "765657",
      serialNumber: "2023232324",
      activationDate: "03/06/22",
      voiceAllowance: "280mins",
      dataAllowance: "2GB",
      status: "Deactive",
    },
    {
      id: 11,
      bleepId: "563358",
      serialNumber: "2313232329",
      activationDate: "01/06/22",
      voiceAllowance: "200",
      dataAllowance: "200",
      status: "Deactive",
    },
    {
      id: 12,
      bleepId: "711657",
      serialNumber: "2023232340",
      activationDate: "03/06/22",
      voiceAllowance: "280mins",
      dataAllowance: "2GB",
      status: "Deactive",
    },
    {
      id: 13,
      bleepId: "56367358",
      serialNumber: "20913232329",
      activationDate: "01/06/22",
      voiceAllowance: "200",
      dataAllowance: "200",
      status: "Deactive",
    },
    {
      id: 14,
      bleepId: "711657",
      serialNumber: "555023232340",
      activationDate: "03/06/22",
      voiceAllowance: "280mins",
      dataAllowance: "2GB",
      status: "Deactive",
    },
  ]);

  return (
    <>
      <main>
        <div className="BleepsManagement-components-wrapper">
          <div className="pageheader">
            <h3>Bleeps Management</h3>
            <div className="pageheaderlast">
            <div class="searchblock"><Input placeholder="Keywords" class="ant-input" type="text" value=""></Input></div>       
              <BleepsManagementModal ref={child} />
            </div>
          </div>
          <TableView header={header} data={data} />
        </div>
      </main>
    </>
  );
};

export default LocationManagement;
