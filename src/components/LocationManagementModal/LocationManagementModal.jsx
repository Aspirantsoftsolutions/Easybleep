import { Button, Modal, Input, Radio, Select } from "antd";
import React, { useImperativeHandle, forwardRef, useState } from "react";
import "./PushNotificationModal.scss";
import addlocationicon from "../../assets/img/icons/addlocation-icon.png";

import { Col, Row } from "antd";

const LocationManagementModal = forwardRef((props, ref) => {
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
      <div className="addmore" onClick={showModal}>
        <img src={addlocationicon} alt="" />
      </div>

      <Modal
        title="Add Location"
        className="locatonmodel"
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
          <Col span={10} className="spcol">
            Choose Station
          </Col>
          <Col span={14} className="spcol">
            <Select className="selelctbg">
              <Option value="">Select</Option>
              <Option value="118">Switchboard</Option>
            </Select>
          </Col>

          <Col span={24} className="spcol">
            <Input placeholder="Location Name" />
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Access Description" />
          </Col>

          <Col span={24} className="spcol">
            <Input placeholder="Floors" />
          </Col>
        </Row>
      </Modal>
    </>
  );
});

export default LocationManagementModal;
