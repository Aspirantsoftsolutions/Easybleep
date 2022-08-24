import { Button, Table, Input } from "antd";
import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useRef, useState } from "react";
import TeamManagementModal from "../../components/TeamManagementModal";
import "./TeamManagement.scss";
import { UserOutlined, FileFilled } from "@ant-design/icons";
import reseticon from "../../assets/img/icons/resetpassword-icon.png";
import editicon from "../../assets/img/icons/edit-icon.png";
import deleteicon from "../../assets/img/icons/delete-icon.png";

const TeamManagement = (props) => {


  const child = useRef()

  const [header, setTableHeader] = useState([
    {
      title: "Team name",
      dataIndex: "teamname",
      key: "teamname"
    },

    {
      title: "Station",
      dataIndex: "station",
      key: "station"
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Team ringtone",
      dataIndex: "teamringtone",
      key: "teamringtone"
    },
    {
      title: "No. of people",
      dataIndex: "people",
      key: "people"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => {
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
        )
      }
    }

  ]);
  const [data, setTableData] = useState([
    {
      teamname: "Code yellow team",
      station: "Switchboardd",
      location: "HGH",
      description: "yello",
      teamringtone: "Siren noise",
      people: 0,
      status: "Active",
    }
  ]);

  return (
    <>
      {/* <h3>Team Management</h3>
            <TeamManagementModal />
            <TableView header={header} data={data} /> */}


      <main>
        <div className="TeamManagement-components-wrapper">
          <div className="pageheader">
            <h3>Team Management</h3>

            <div className="pageheaderlast">
            <div class="searchblock"><Input placeholder="Keywords" class="ant-input" type="text" value=""></Input></div> 
              <TeamManagementModal ref={child} />

            </div>
          </div>
          <TableView header={header} data={data} />
        </div>
      </main>

    </>
  )
}

export default TeamManagement;