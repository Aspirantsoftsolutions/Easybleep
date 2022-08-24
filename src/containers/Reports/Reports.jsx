import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useState } from "react";
import { Tabs, DatePicker, Input } from "antd";
import "./Reports.scss";
import { UserOutlined, DownloadOutlined } from "@ant-design/icons";
import downloadicon from "../../assets/img/icons/downloaddoc-icon.png";
import editicon from "../../assets/img/icons/edit-icon.png";
import deleteicon from "../../assets/img/icons/delete-icon.png";


const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

const Reports = (props) => {


  const onChange = () => { };


  const [header, setTableHeader] = useState([
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time of Activation",
      dataIndex: "activation",
      key: "activation",
    },
    {
      title: "Type of Activation",
      dataIndex: "TypeOfActivation",
      key: "TypeOfActivation",
    },
    {
      title: "Facility",
      dataIndex: "facility",
      key: "facility",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Name Of the Staff",
      dataIndex: "staff",
      key: "staff",
    }, {
      title: "Phone Number",
      dataIndex: "number",
      key: "number",
    },
  ]);
  const [data, setTableData] = useState([
    {
      date: "11/08/2022",
      activation: "01:00 AM",
      TypeOfActivation: "Code Red",
      facility: "HGH",
      unit: "5 South 1 room 583 bed 1",
      staff: "Sona031053",
      number: "9909229292"
    },
    {
      date: "12/08/2022",
      activation: "02:00 AM",
      TypeOfActivation: "Code Blue",
      facility: "HGH",
      unit: "5S1RM 583 B1",
      staff: "Sona031053",
      number: "9909229292"
    },

  ]);

  return (
    <>
      <main>
        <div className="reports-components-wrapper">
          <div className="reporttophead">
            <h3>Reports</h3>

            <div className="caleblcok">
              <div className="searchblock">
                <Input placeholder="Keywords" ></Input>

              </div>
              {/* <label className="lbblock">From</label>
              <DatePicker onChange={onChange} />
              <label className="lbblock">To</label>
              <DatePicker onChange={onChange} /> */}
              <div style={{
                paddingLeft: 10
              }}>
                <RangePicker> </RangePicker>
              </div>
            </div>
          </div>

          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Administrative Report" key="1">
              <div className="tabcontent">
                <ul className="ullist">
                  <li>Active devices-Registration keys <img src={downloadicon} alt="" /></li>
                  <li>Active users- bleep#- Registration keys <img src={downloadicon} alt="" /></li>
                  <li>Teams- Location <img src={downloadicon} alt="" /></li>
                  <li>Bleep Stations <img src={downloadicon} alt="" /></li>
                  <li>Support Tickets <img src={downloadicon} alt="" /></li>
                  <li>Bleep Station agents performance <img src={downloadicon} alt="" /></li>
                  <li>Bleep stations request <img src={downloadicon} alt="" /></li>
                  <li>System login <img src={downloadicon} alt="" /></li>
                </ul>
              </div>
            </TabPane>
            <TabPane tab="Operational Report" key="2">
              <div className="tabcontent">
                <TableView header={header} data={data} />
                {/* <ul className="ullist">
                <li>Voice Call <img src={downloadicon} alt="" /></li>
                <li>Chat <img src={downloadicon} alt="" /></li>
                <li>Emergency notifications assigned <img src={downloadicon} alt="" /></li>
                <li>Average respose time <img src={downloadicon} alt="" /></li>
                <li>Average attend time <img src={downloadicon} alt="" /></li>
               
             </ul> */}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </main>
    </>
  );
};

export default Reports;
