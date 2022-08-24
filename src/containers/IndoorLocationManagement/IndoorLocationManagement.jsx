import { Button, Table, Input } from "antd";
import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useRef, useState } from "react";
import "./IndoorLocationManagement.scss";
import { UserOutlined, FileFilled } from "@ant-design/icons";
import reseticon from "../../assets/img/icons/resetpassword-icon.png";
import editicon from "../../assets/img/icons/edit-icon.png";
import deleteicon from "../../assets/img/icons/delete-icon.png";
import IndoorLocationManagementModal from "../../components/IndoorLocationManagementModal";

const IndoorLocationManagement = (props) => {
  const child = useRef();

  const [header, setTableHeader] = useState([
    {
      title: "Station",
      dataIndex: "station",
      key: "station",
    },
    {
      title: "Location Name",
      dataIndex: "locationName",
      key: "locationName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Floors",
      dataIndex: "floors",
      key: "floors",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Section",
      dataIndex: "section",
      key: "section",
    },
    {
      title: "Abbreviation",
      dataIndex: "abbreviation",
      key: "abbreviation",
    },
    {
      title: "Room",
      dataIndex: "room",
      key: "room",
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
      station: "Switchboardd",
      location: "AH",
      description: "Apollo Hospital",
      floors: 6,
      section: "BlockA",
      abbreviation: "",
      room: "202",
    },
  ]);

  return (
    <>
      <main>
        <div className="IndoorLocationManagement-components-wrapper">
          <div className="pageheader">
            <h3>Indoor Location Management</h3>

            <div className="pageheaderlast">
            <div class="searchblock"><Input placeholder="Keywords" class="ant-input" type="text" value=""></Input></div>       
              <IndoorLocationManagementModal ref={child} />
            </div>
          </div>

          <TableView header={header} data={data} />
        </div>
      </main>
    </>
  );
};

export default IndoorLocationManagement;
