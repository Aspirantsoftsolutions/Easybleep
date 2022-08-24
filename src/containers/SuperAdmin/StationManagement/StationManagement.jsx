import { useState, useEffect } from "react";
import editicon from "../../../assets/img/icons/edit-icon.png";
import deleteicon from "../../../assets/img/icons/delete-icon.png";
import TableView from "../../../components/TableView/TableView";
import { useRef } from "react";
import StationManagementModal from "../../../components/SuperAdminModals/StationManagementModal";
import "./StationManagement.scss";

const StationManagement = () => {
  const child = useRef();
  useEffect(() => {}, []);

  const [header, setTableHeader] = useState([
    {
      title: "Country Name",
      dataIndex: "countryname",
      key: "countryname",
    },
    {
      title: "Customer name",
      dataIndex: "customername",
      key: "customername",
    },
    {
      title: "Station name",
      dataIndex: "stationname",
      key: "stationname",
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
            <img src={deleteicon} alt="delete" />
            <img
              src={editicon}
              alt="edit"
              onClick={() => {
                child.current.showModal();
              }}
            />
          </div>
        );
      },
    },
  ]);
  const [data, setTableData] = useState([
    {
      countryname: "Qatar",
      customername: "Hamad medical corporation",
      stationname: "Switchboard",
      description: "Switchboard",
      type: "Hybrid Model",
      status: "Active",
    },
    {
      countryname: "Qatar",
      customername: "Alahli private hospital",
      stationname: "Switchboard",
      description: "Main station",
      type: "Hybrid Model",
      status: "Active",
    },
  ]);

  return (
    <main>
      <div className="station-management-wrapper">     
        <StationManagementModal ref={child} />
        <TableView header={header} data={data} />
      </div>
    </main>
  );
};

export default StationManagement;
