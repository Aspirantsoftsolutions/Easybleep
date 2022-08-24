import { Button, Table, Input } from "antd";
import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useRef, useState } from "react";
import "./LocationManagement.scss";
import { UserOutlined, FileFilled } from "@ant-design/icons";
import LocationManagementModal from "../../components/LocationManagementModal";
import reseticon from "../../assets/img/icons/resetpassword-icon.png"
import editicon from "../../assets/img/icons/edit-icon.png"
import deleteicon from "../../assets/img/icons/delete-icon.png"

const LocationManagement = (props) => {
const child = useRef();
const [header, setTableHeader] = useState([

    {
      title: 'Station',
      dataIndex: 'station',
      key: 'station',
    },
    {
      title: 'Location Name',
      dataIndex: 'locationName',
      key: 'locationName',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Floors',
      dataIndex: 'floors',
      key: 'floors',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, item) => {
        return (
          <div className="actionicon">
             <img src={editicon} alt="edit" onClick={() => {
              child.current.showModal()
            }} />
            <img src={deleteicon} alt="delete" />
           
            {/* <img src={reseticon} alt="reset" /> */}
          </div>
        )
      }
    }
  ]);
  const [data, setTableData] = useState([
    {
      "id": 1,
      "station": "Switchboardd",
      "locationName": "AH",
      "description": "Apollo Hospital",
      "floors": 6,
      "status": "Active"
    },
    {
      "id": 2,
      "station": "Switchboardd",
      "locationName": "HMK",
      "description": "Wakra",
      "floors": 1,
      "status": "Active"
    },
    {
      "id": 3,
      "station": "Switchboardd",
      "locationName": "AHH",
      "description": "Alahli heart hospital",
      "floors": 2,
      "status": "Active"
    }
  ]);

  return (
    <>
      <main>
        <div className="LocationManagement-components-wrapper">
          <div className="pageheader">
            <h3>Location Management</h3>

            <div className="pageheaderlast">

            <div class="searchblock"><Input placeholder="Keywords" class="ant-input" type="text" value=""></Input></div>       
            <LocationManagementModal />
              
            </div>
          </div>
          <TableView header={header} data={data} />
        </div>
      </main>
    </>
  );
};

export default LocationManagement;
