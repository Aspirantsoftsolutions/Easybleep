import { Button, Modal, Input, DatePicker } from "antd";
import React, { useImperativeHandle, forwardRef, useState } from "react";
import "./UserManagementModal.scss";
import adduser from "../../assets/img/icons/adduser-icon.png";
import { Col, Row } from "antd";
import { Select } from 'antd';

const { Option } = Select

const UserManagementModal = forwardRef((props, ref) => {
const [isModalVisible, setIsModalVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    showModal,
  }));

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
      {/* <Button type="primary" onClick={showModal}>
                Add User
            </Button> */}

      <div className="addmore">
        <img onClick={showModal} src={adduser} alt="" />
      </div>

      <Modal
        title="User Management"
        className="usermanmodel"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Genarate Regstration Key
          </Button>,
          //   <Button key="link" type="defult" onClick={handleOk}>
          //     Cancel
          //   </Button>,
        ]}
      >
        <Row className="userforms">
          <Col span={10} className="spcol">
            <Input placeholder="First Name"></Input>
          </Col>
          <Col span={10} className="spcol">
            <Input placeholder="Last Name"></Input>
          </Col>
          <Col span={4} className="spcol">
            <div className="uploadprofile">
            <img src="https://easybleep.com/assets/images/default.png" alt="" />
            </div>
           
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Designation"></Input>
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Email"></Input>
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Mobile"></Input>
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Staff"></Input>
          </Col>

          <Col span={24} className="spcol">
            <Input placeholder="Username"></Input>
          </Col>

          <Col span={8} className="spcol">
            Bleepy
          </Col>
          <Col span={16} className="spcol">
            <Input placeholder=""></Input>
          </Col>


          <Col span={8} className="spcol">
            User role
          </Col>
          <Col span={16} className="spcol">
            <Select  >
              <Option value="">Select</Option>
              <Option value="118">Manager</Option>
              <Option value="119">Agent</Option>
              <Option value="120">Supervisor</Option>
              <Option value="121">Member</Option>
            </Select>
          </Col>

          <Col span={8} className="spcol">
            Station
          </Col>
          <Col span={16} className="spcol">
            <Select >
              <Option value="0">Select</Option>
              <Option value="20">Switchboardd</Option>
            </Select>
          </Col>


          <Col span={8} className="spcol">
            Location
          </Col>
          <Col span={16} className="spcol">
            <Select  >
              <Option value="">Select</Option>
            </Select>
          </Col>


          <Col span={8} className="spcol">
            Assinged Team
          </Col>
          <Col span={16} className="spcol">
            <Input placeholder=""></Input>
          </Col>

          <Col span={8} className="spcol">
            Account Expairy Date
          </Col>
          <Col span={16} className="spcol">
            <DatePicker/>
          </Col>



        </Row>
      </Modal>
    </>
  );
});

export default UserManagementModal;
