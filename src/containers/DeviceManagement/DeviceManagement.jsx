import { Button, Row, Col, Table, Input, Modal } from "antd";
import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import device from "../../data/device";
import { useState } from "react";
import DeviceManagementModal from "../../components/DeviceManagementModal";
import "./DeviceManagement.scss";
import { UserOutlined, FileFilled } from "@ant-design/icons";
import editicon from "../../assets/img/icons/edit-icon.png";
import deleteicon from "../../assets/img/icons/delete-icon.png";
import resetpassword from "../../assets/img/icons/password-reset.png";
import deactivate from "../../assets/img/icons/Off-Icon.png";

const DeviceManagement = (props) => {
  const columns = [

    {
      title: "Location",
      dataIndex: "primaryLocation",
      key: "primaryLocation",
    },
    {
      title: "Device Name",
      dataIndex: "deviceName",
      key: "deviceName",
    },
    {
      className: "agenticon",
      title: "Bleep Id",
      dataIndex: "bleepId",
      key: "bleepId",
    },
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Activation Date",
      dataIndex: "activationDate",
      key: "activationDate",
    },
    {
      title: "Device Model",
      dataIndex: "deviceModel",
      key: "deviceModel",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    // {
    //   title: "Registration Key",
    //   dataIndex: "registrationKey",
    //   key: "registrationKey",
    // },
    {
      title: "Action",
      render: (_, item) => {
        return (
          <div className="actionicon">
            <img src={editicon} alt="edit" onClick={() => {
              //  showModal()
              //setSelectedItem(item);
              //child.current.showModal()
            }} />
            <img src={deleteicon} alt="delete" />

            <img src={deactivate} alt="De-Activate"  title="De-Activate" />
          </div>
        );
      },
    },
  ];

  const [devicedata, setDeviceData] = useState(device);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [item, setSelectedItem] = useState({});

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
        <div className="devicemanage-components-wrapper">
          <div className="pageheader">
            <h3>Device Manangement</h3>
            <div className="pageheaderlast">
              <div class="searchblock">
                <Input
                  placeholder="Keywords"
                  class="ant-input"
                  type="text"
                  value=""
                ></Input>
              </div>
              <DeviceManagementModal />
            </div>
          </div>

          <Table columns={columns} dataSource={device} />
          {/* <div className="divrow">
            {devicedata.map((item, index) => {
              return (
                <div
                  span={7}
                  className="dmanagebox"
                  onClick={() => {
                    showModal();
                    setSelectedItem(item);
                  }}
                >
                  <div className="devicename">
                    {item.deviceName}{" "}
                    <img
                      src="https://easybleep.com/templates/commonlib/img/device_status_on.png"
                      alt=""
                    />
                  </div>
                  <div className="deviclocation">
                    <b>Location</b>: {item.primaryLocation}
                  </div>
                  <div className="deviceusername">
                    <b>Username</b>: {item.userName}
                  </div>
                  <div className="androidicon">
                    <img
                      src="https://easybleep.com/templates/commonlib/img/android-icon.png"
                      alt=""
                    />
                    <div className="battery">
                      <img
                        src="https://easybleep.com/templates/commonlib/img/battery-full.png"
                        alt=""
                      />{" "}
                      25%
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}

          <Modal
            className="devicemodelblock"
            title="Active device"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button
                key="back"
                type="defult"
                className="submitbtn"
                onClick={handleCancel}
              >
                De-activate
              </Button>,
              <Button key="submit" type="primary" onClick={handleOk}>
                Delete
              </Button>,
            ]}
          >
            <Row className="userforms">
              <Col span={10} className="spcol drk">
                Device name:
              </Col>
              <Col span={12} className="spcol">
                <span class="fontsize data_devicename">{item.deviceName}</span>
              </Col>

              <Col span={10} className="spcol drk">
                Serial number:
              </Col>
              <Col span={12} className="spcol">
                <span class="fontsize data_serialnumber">
                  {item.serialNumber}
                </span>
              </Col>

              <Col span={10} className="spcol drk">
                Current location:
              </Col>
              <Col span={12} className="spcol">
                <span class="fontsize data_location">
                  {item.primaryLocation}
                </span>
              </Col>

              <Col span={10} className="spcol drk">
                Activation date:
              </Col>
              <Col span={12} className="spcol">
                <span class="fontsize data_deviceactivation_date">
                  {item.activationDate}
                </span>
              </Col>

              <Col span={10} className="spcol drk">
                Registration key:
              </Col>
              <Col span={12} className="spcol">
                {" "}
                <span class="fontsize data_registrationkey">
                  {item.registrationKey}
                </span>
              </Col>

              <Col span={10} className="spcol drk">
                Bleep#
              </Col>
              <Col span={12} className="spcol">
                <span class="fontsize data_bleepy">{item.bleepId}</span>
              </Col>

              <Col span={10} className="spcol drk">
                Team
              </Col>
              <Col span={12} className="spcol">
                <span class="fontsize data_bleepy">{item.team}</span>
              </Col>
            </Row>
          </Modal>
        </div>
      </main >
    </>
  );
};

export default DeviceManagement;
