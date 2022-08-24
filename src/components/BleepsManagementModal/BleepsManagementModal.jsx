import { Button, Modal, Input, Select, DatePicker } from "antd";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./BleepsManagementModal.scss";
import beelpsadd from "../../assets/img/icons/adduser-icon.png";
import { Col, Row } from "antd";

const BleepsManagementModal = forwardRef((props, ref) => {
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

  const { Option } = Select;

  return (
    <>
      <div className="addmore">
        <img onClick={showModal} src={beelpsadd} alt="" />
      </div>

      <Modal
        title="Bleeps Management"
        className="bleepmodel"
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
            <Input placeholder="Beep ID" />
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Serial Name" />
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Data allowance" />
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Voice allowance" />
          </Col>
          <Col span={12} className="spcol">
          Select activation date
          </Col>
          <Col span={12} className="spcol">
          <DatePicker />
          </Col>
        </Row>

      </Modal>
    </>
  );
});

export default BleepsManagementModal;
