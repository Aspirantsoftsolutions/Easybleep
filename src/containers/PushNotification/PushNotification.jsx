import { Button, Table, Input } from "antd";
import TableView from "../../components/TableView/TableView";
import { useRef, useState } from "react";
import "./PushNotification.scss";
import { UserOutlined, FileFilled } from "@ant-design/icons";
import pushnotificationheader from "../../data/pushnotificationheader";
import pushnotificationdata from "../../data/pushnotificationdata";
import PushNotificationModal from "../../components/PushNotificationModal";
import reseticon from "../../assets/img/icons/resetpassword-icon.png";
import editicon from "../../assets/img/icons/edit-icon.png";
import deleteicon from "../../assets/img/icons/delete-icon.png";

const PushNotification = (props) => {
  const child = useRef();
  const [header, setTableHeader] = useState([
    {
      title: "Notification Id",
      dataIndex: "notificationId",
      key: "notificationId",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
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
      notificationId: 100,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 101,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 102,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 103,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 104,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 105,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 106,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 107,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 108,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 109,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 110,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 111,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 112,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 113,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 114,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 115,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 116,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 117,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 118,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 119,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 120,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 121,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 122,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
    {
      notificationId: 123,
      content: "Test",
      date: "04/06/2022",
      time: "10:10",
    },
  ]);

  return (
    <>
      <main>
        <div className="pushnotification-components-wrapper">
          <div className="pageheader">
            <h3>Push Notification</h3>           
            <div className="pageheaderlast">
            <div class="searchblock"><Input placeholder="Keywords" class="ant-input" type="text" value=""></Input></div>     
              <PushNotificationModal ref={child} />
            </div>
          </div>

          <TableView header={header} data={data} />
        </div>
      </main>
    </>
  );
};

export default PushNotification;
