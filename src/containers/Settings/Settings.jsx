import { Button, Checkbox, Table, Select } from "antd";
import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useState } from "react";
import "./Settings.scss";
import { UserOutlined, DownloadOutlined } from "@ant-design/icons";

const Settings = (props) => {
  const [header, setTableHeader] = useState(tableheader);
  const [data, setTableData] = useState(tabledata);
  const { Option } = Select;
  return (
    <>
      <main>
        <div className="settings-components-wrapper">
          <div className="reporttophead">
            <h3>Settings</h3>
          </div>
          <div className="tabcontent">
            <ul className="ullist">
              <li>
                {" "}
                <div>
                  <Checkbox></Checkbox> Emergency notification re-issue times
                </div>{" "}
              </li>
              <li>
                {" "}
                <div>
                  <Checkbox></Checkbox> Force automatic updates
                </div>{" "}
              </li>
              <li>
                {" "}
                <div>
                  <Checkbox></Checkbox> Allow Indoorlocations{" "}
                </div>
              </li>
              <li>
                {" "}
                <div>
                  <Checkbox></Checkbox> Allow camera access on device{" "}
                </div>
              </li>
              <li>
                {" "}
                <div>
                  <Checkbox></Checkbox> Allow users to edit their profile
                </div>{" "}
              </li>
              <li>
                {" "}
                <div>
                  <Checkbox></Checkbox> Allow Chat{" "}
                </div>
              </li>
              <li className="moblist">
                <div>
                  <Checkbox></Checkbox> Notification Sound
                </div>
                <div>
                  <Select
                    showSearch
                    placeholder="Choose"
                    optionFilterProp="children"
                    style={{ width: 180 }}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </div>
              </li>
              <li className="moblist">
                <div>
                  <Checkbox></Checkbox> Select Bleep App Functions
                </div>
                <div>
                  <Select
                    showSearch
                    placeholder="Not Selected"
                    optionFilterProp="children"
                    style={{ width: 180 }}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </div>
              </li>
            </ul>
            <div className="text-right">
              <button className="adduserbtn">Save Settings</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Settings;
