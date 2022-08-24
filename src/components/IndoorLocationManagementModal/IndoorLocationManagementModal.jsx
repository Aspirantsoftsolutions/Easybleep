import { Button, Modal, Input, Select, Col, Row } from "antd";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./IndoorLocationManagementModal.scss";
import indoorlocation from "../../assets/img/icons/indoor-location.png";

const IndoorLocationManagementModal = forwardRef((props, ref) => {
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
        <img src={indoorlocation} alt="" />
      </div>
      <Modal
        title="Indoor Location Manager"
        className="indoormodel"
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
          <Col span={8} className="spcol">
            Choose station
          </Col>
          <Col span={16} className="spcol">
            <Select>
              <Option value="">Select</Option>
              <Option value="118">Switchboard</Option>

            </Select>
          </Col>

          <Col span={8} className="spcol">
            Choose Location
          </Col>
          <Col span={16} className="spcol">
            <Select>
              <Option value="">Select</Option>
              <Option value="">HGH</Option>
            </Select>
          </Col>

          <Col span={8} className="spcol">
            Choose Floor
          </Col>
          <Col span={16} className="spcol">
            <Select>
              <Option value="">Select</Option>
              <Option value="1">1</Option>
              <Option value="1">2</Option>
            </Select>
          </Col>

          <Col span={24} className="spcol">
            <Input placeholder="Section" />
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Abbrivation" />
          </Col>
          <Col span={24} className="spcol">
            <Input placeholder="Room" />
          </Col>
        </Row>
      </Modal>
    </>
  );
});

export default IndoorLocationManagementModal;
