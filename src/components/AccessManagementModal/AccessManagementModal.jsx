import { Button, Modal, Input, Radio, Select } from "antd";
import React, { useState } from "react";
import "./AccessManagementModal.scss";
import accessicon from "../../assets/img/icons/access-management-icon.png";
import { Col, Row } from "antd";

const { Option } = Select;

const AccessManagementModal = React.forwardRef((props, ref) => {
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

  React.useImperativeHandle(ref, () => ({
    showModal,
  }));

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Add User
      </Button> */}

      <div className="addmore">
        <img onClick={showModal} src={accessicon} alt="" />
      </div>

      <Modal
        title="Add new access"
        className="accmodel"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Add
          </Button>,
          <Button key="link" type="defult" onClick={handleOk}>
            Cancel
          </Button>,
        ]}
      >


        <Row className="userforms">
          <Col span={24} className="spcol">
            <Input placeholder="Access Name" />
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Access Description" />
          </Col>

          <Col span={24} className="spcol">
            <Radio>Created</Radio>
          </Col>
          <Col span={8} className="spcol">
            Use Role
          </Col>
          <Col span={16} className="spcol">
            <Select>
              <Option value="">Select</Option>
              <Option value="118">Station Manager</Option>
              <Option value="119">Agent</Option>
              <Option value="120">Supervisor</Option>
              <Option value="121">Member</Option>
            </Select>
          </Col>
          <Col span={8} className="spcol">
            Pages User can access
          </Col>

          <Col span={16} className="spcol">
            <Input label="Username" placeholder="Access Description" />
          </Col>
        </Row>
      </Modal>
    </>
  );
});

export default AccessManagementModal;
