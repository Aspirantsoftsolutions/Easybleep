import { Button, Table, Input, Tag } from "antd";
import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useState } from "react";
import { Tabs, DatePicker } from "antd";
import "./EmergenyNotificationLogs.scss";
import { UserOutlined, FileFilled, LeftOutlined } from "@ant-design/icons";

const EmergenyNotificationLogs = (props) => {
  const [header, setTableHeader] = useState([
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, item) => {
        return <Tag>{item.status}</Tag>;
      },
    },
    {
      title: "Sender",
      dataIndex: "sender",
      key: "sender",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "No of Logins",
      dataIndex: "logins",
      key: "logins",
    },
    {
      title: "No of Accepted",
      dataIndex: "accepted",
      key: "accepted",
    },
    {
      title: "No of Rejected",
      dataIndex: "rejected",
      key: "rejected",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: () => {
        return <Button onClick={() => gotoDetails()}>more</Button>;
      },
    },
  ]);
  const [data, setTableData] = useState([
    {
      key: "1",
      code: "68222",
      status: "No response",
      sender: "Ahmed Ali",
      date: "2021.02.09",
      time: "01:21 PM",
      team: "Code white team",
      location: "AH",
      logins: 0,
      accepted: 0,
      rejected: 0,
    },
    {
      key: "2",
      code: "68222",
      status: "No response",
      sender: "Ahmed Ali",
      date: "2021.02.09",
      time: "01:21 PM",
      team: "Code white team",
      location: "AH",
      logins: 0,
      accepted: 0,
      rejected: 0,
    },
    {
      key: "3",
      code: "68222",
      status: "No response",
      sender: "Ahmed Ali",
      date: "2021.02.09",
      time: "01:21 PM",
      team: "Code white team",
      location: "AH",
      logins: 0,
      accepted: 0,
      rejected: 0,
    },
    {
      key: "4",
      code: "68222",
      status: "No response",
      sender: "Ahmed Ali",
      date: "2021.02.09",
      time: "01:21 PM",
      team: "Code white team",
      location: "AH",
      logins: 0,
      accepted: 0,
      rejected: 0,
    },
    {
      key: "5",
      code: "68222",
      status: "No response",
      sender: "Ahmed Ali",
      date: "2021.02.09",
      time: "01:21 PM",
      team: "Code white team",
      location: "AH",
      logins: 0,
      accepted: 0,
      rejected: 0,
    },
  ]);
  const onChange = () => { };

  const [isDetailShow, setDetailShow] = useState(false);
  const gotoDetails = () => {
    setDetailShow(true);
  };
  return (
    <>
      {data.length > 0 && !isDetailShow &&
        <main>
          <div className="EmergenyNotificationLogs-components-wrapper">
            <div className="pageheader">
              <h3>Emergeny Notification Logs</h3>

              <div className="pageheaderlast">
                <label className="lbblock">Status</label>
                <select>
                  <option value="">Select</option>

                  <option value="0">In Progess</option>
                  <option value="1">Ongoing</option>
                  <option value="2">Completed</option>
                  <option value="3">Cancelled</option>
                </select>
                <label className="lbblock">Location</label>
                <select >
                  <option value="">Select</option>
                  <option value="8">AHH</option>
                  <option value="9">HMK</option>
                  <option value="10">AH</option>
                </select>
              </div>
            </div>


            <TableView header={header} data={data} />
          </div>
        </main>
      }

      {isDetailShow && (
        <main>
          <div className="notificationlog-components-wrapper">
            <div className="notfiheader">
              <span
                id="back"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setDetailShow(false);
                }}
              >
                <LeftOutlined />  Go Back
              </span>
            </div>

            <div className="tboxblock">
              <div className="frow">
                <div className="colblck">
                  <div className="nothead">Status</div>
                  <h3>65658</h3>
                  <div className="Statusblock">Status</div>

                  <ul className="notul">
                    <li>
                      <b>Sender</b> : Ahamad Ali
                    </li>
                    <li>
                      <b>Issue Date</b> : 09.02.2022
                    </li>
                    <li>
                      <b>Issue Time</b> : 13:25:06
                    </li>
                    <li>
                      <b>Location</b> : AH
                    </li>
                    <li>
                      <b>Team</b> : Code with team
                    </li>
                    <li>
                      <b>Staff Who Reported</b> : 0
                    </li>

                  </ul>
                </div>

                <div className="colblck">
                  <div className="nothead">Accepted</div>
                  No Data Available
                </div>

                <div className="colblck">
                  <div className="nothead">Attended</div>
                  No Data Available
                </div>

                <div className="colblck">
                  <div className="nothead">Active User</div>
                  No Data Available
                </div>
              </div>

              <div className="frow">

              <div className="colblck">
                  <div className="nothead">Message Content</div>


                  No Data Available
                </div>
                
                <div className="colblck">
                  <div className="nothead">Not Attended</div>


                  No Data Available
                </div>

                <div className="colblck">
                  <div className="nothead">Rejected </div>
                  No Data Available
                </div>

                <div className="colblck">
                  <div className="nothead">Completion Statistics</div>
                  No Data Available
                </div>
              </div>
            </div>
          </div>

          {/* <span> code:68771</span>
          <span>
            Status:
            <span className="data_status_new">
              <span className="label label-default">No Response</span>
            </span>
          </span> */}
        </main>
      )}
    </>
  );
};

export default EmergenyNotificationLogs;
