import { useState } from "react";
import { useEffect } from "react";
import editicon from "../../../assets/img/icons/edit-icon.png";
import deleteicon from "../../../assets/img/icons/delete-icon.png";
import TableView from "../../../components/TableView/TableView";
import AddCountryModal from "../../../components/SuperAdminModals/AddCountryModal";
import { useRef } from "react";
import "./CountryManagement.scss"

const CountryManagement = () => {
  const child = useRef();
  useEffect(() => {}, []);

  const [header, setTableHeader] = useState([
    {
      title: "Country Name",
      dataIndex: "countryname",
      key: "countryname",
    },
    {
      title: "Latitude",
      dataIndex: "latitude",
      key: "latitude",
    },
    {
      title: "Longitude",
      dataIndex: "longitude",
      key: "longitude",
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
      latitude: "12 S",
      longitude: "15 W",
    },
    {
      countryname: "UK",
      latitude: "12 N",
      longitude: "21 E",
    },
  ]);

  return (
    <main>
      <div className="addcounty-wrapper">
        <AddCountryModal ref={child} />
        <TableView header={header} data={data} />
      </div>
    </main>
  );
};

export default CountryManagement;
