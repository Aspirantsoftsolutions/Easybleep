import { Button, Select, Table, Tag } from "antd";
import { useState } from "react";
import "./NotificationLogs.scss";

import { LeftOutlined } from "@ant-design/icons";

const NotificationLogs = () => {
  const [isDetailShow, setDetailShow] = useState(false);
  const data = [
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
      status: "Completed",
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
      status: "Not Completed",
      sender: "Ahmed Ali",
      date: "2021.02.09",
      time: "01:21 PM",
      team: "Code white team",
      location: "AH",
      logins: 0,
      accepted: 0,
      rejected: 0,
    },
  ];

  const columns = [
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
        if (item.status == "No response" || item.status == "Rejected")
          return <Tag>{item.status}</Tag>;
        else if (item.status == "Completed")
          return (
            <Tag
              style={{
                background: "#5cb85c",
                color: "#fff",
                borderRadius: "100px",
                border: "none",
              }}
            >
              {" "}
              {item.status}
            </Tag>
          );
        else if (item.status == "Not Completed")
          return (
            <Tag
              style={{
                background: "#f0ad4e",
                color: "#fff",
                borderRadius: "100px",
                border: "none",
              }}
            >
              {item.status}
            </Tag>
          );
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
  ];

  const gotoDetails = () => {
    setDetailShow(true);
  };

  return (
    <>
      {data.length > 0 && !isDetailShow && (
        <main>
          <div className="notificationlog-components-wrapper">
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
              <select>
                <option value="">Select</option>
                <option value="8">AHH</option>
                <option value="9">HMK</option>
                <option value="10">AH</option>
              </select>
            </div>
            <div className="notificationtable-components-wrapper">
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </main>
      )}

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
                <LeftOutlined /> Go Back
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
                  No user has rejected
                </div>

                <div className="colblck">
                  <div className="nothead">Attented</div>
                  No user has rejected
                </div>

                <div className="colblck">
                  <div className="nothead">Active Users</div>
                  No user has rejected
                </div>
              </div>

              <div className="frow">
                <div className="colblck">
                  <div className="nothead">Message Content</div>
                  No user has rejected
                </div>

                <div className="colblck">
                  <div className="nothead">Not Attended</div>
                  No user has rejected
                </div>

                <div className="colblck">
                  <div className="nothead">Rejected</div>
                  No user has rejected
                </div>

                <div className="colblck">
                  <div className="nothead">Compltetion Statistics</div>
                  No user has rejected
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

export default NotificationLogs;
