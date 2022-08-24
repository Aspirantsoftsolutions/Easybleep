import { Button, Table, Input, Modal } from "antd";
import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useState, useRef } from "react";
import "./UserManagement.scss";
import { UserOutlined, FileFilled } from "@ant-design/icons";
import UserManagementModal from "../../components/UserManagementModal";
import reseticon from "../../assets/img/icons/resetpassword-icon.png";
import editicon from "../../assets/img/icons/edit-icon.png";
import deleteicon from "../../assets/img/icons/delete-icon.png";

const UserManagement = (props) => {

  const child = useRef()

  const [header, setTableHeader] = useState([
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    }, {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, item) => {
        return (
          <>
            {item.isLogin ?
              <span className="Green"><img src={item.status} style={{ width: 40 }}></img> <span></span> </span>
              :
              <span className="Grey"> <img src={item.status} style={{ width: 40 }}></img>  <span></span></span>}
          </>
        )
      }
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    // {
    //   title: "Type",
    //   dataIndex: "type",
    //   key: "type",
    // },
    // {
    //   title: "Registration key",
    //   dataIndex: "registrationkey",
    //   key: "registrationkey",
    // },
    {
      className: "lastaction",
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
            <img src={reseticon} alt="reset" onClick={showModal} />
          </div>
        )
      }
    },
  ]);
  const [data, setTableData] = useState([
    {
      fullname: " Ahmed Ali Station manager",
      email: "bleepymanager01@gmail.com",
      username: "bleepymanager01",
      status: "https://easybleep.com/assets/images/default.png",
      role: "Manager",
      isLogin: true,
      registrationkey: ""
    },
    {
      fullname: " Ahmed Ali Station manager",
      email: "bleepymanager01@gmail.com",
      username: "bleepymanager01",
      status: "https://easybleep.com/assets/images/default.png",
      role: "Manager",
      isLogin: true,
      registrationkey: ""
    },
    {
      fullname: " Test Station manager",
      email: "bleepymanager01@gmail.com",
      username: "bleepymanager01",
      status: "https://easybleep.com/assets/images/default.png",
      role: "Manager",
      isLogin: false,
      registrationkey: ""
    },
    {
      fullname: " Ali Station manager",
      email: "bleepymanager01@gmail.com",
      username: "bleepymanager01",
      status: "https://easybleep.com/assets/images/default.png",
      role: "Manager",

      registrationkey: ""
    },
    {
      fullname: " Ahmed Station manager",
      email: "bleepymanager01@gmail.com",
      username: "bleepymanager01",
      status: "https://easybleep.com/assets/images/default.png",
      role: "Manager",
      isLogin: false,
      registrationkey: ""
    },
    {
      fullname: "Test user Station manager",
      email: "bleepymanager01@gmail.com",
      username: "bleepymanager01",
      status: "https://easybleep.com/assets/images/default.png",
      role: "Manager",
      isLogin: false,
      registrationkey: ""
    },
    {
      fullname: "Test Station manager",
      email: "bleepymanager01@gmail.com",
      username: "bleepymanager01",
      status: "https://easybleep.com/assets/images/default.png",
      role: "Manager",
      isLogin: true,
      registrationkey: ""
    },
  ]);


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <main>
        <div className="UserManagement-components-wrapper">
          <div className="pageheader">
            <h3>User Management</h3>
            <div className="pageheaderlast">
              <div class="searchblock"><Input placeholder="Keywords" class="ant-input" type="text" value=""></Input></div>
              <UserManagementModal ref={child} />
            </div>
          </div>

          <TableView header={header} data={data} />

          <Modal
            title="Change Password"
            className="pushmodel"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="submit" type="primary" onClick={handleOk}>
                Submit
              </Button>,
              <Button
                className="default "
                key="link"
                type="default"
                onClick={handleOk}
              >
                Cancel
              </Button>,
            ]}
          >

            <Input></Input>

          </Modal>
        </div>
      </main>
    </>
  );
};

export default UserManagement;
