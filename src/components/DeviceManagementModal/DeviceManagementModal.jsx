import { Button, Modal, Input, Radio, Select, DatePicker } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import "./DeviceManagementModal.scss";
import deviceadd from "../../assets/img/icons/adddevice-icon.png";
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
        <img onClick={showModal} src={deviceadd} alt="" />
      </div>

      <Modal
        title="Add Device"
        className="devicemodel"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Activate
          </Button>,
          <Button key="link" type="defult" onClick={handleOk}>
            Cancel
          </Button>,
        ]}
      >
        <Row className="userforms">
          <Col span={8} className="spcol">
            Choose Station
          </Col>
          <Col span={16} className="spcol">
            <Select>
              <Option value="">Select</Option>
              <Option value="118">Switchboard</Option>
            </Select>
          </Col>

          <Col span={8} className="spcol">
            Primary Location
          </Col>
          <Col span={16} className="spcol">
            <Select>
              <Option value="">Select</Option>
              <Option value="118">Switchboard</Option>
            </Select>
          </Col>


          <Col span={24} className="spcol">
          <Input placeholder="Device name" />
          </Col>

          <Col span={24} className="spcol">
          <Input placeholder="Insert device serial number" />
          </Col>

          <Col span={24} className="spcol">
          <Input placeholder="Enter device model" />
          </Col>
       

          <Col span={8} className="spcol">
            OS type
          </Col>
          <Col span={16} className="spcol">
            <Select>
              <Option value="">Select</Option>
              <Option value="118">Switchboard</Option>
            </Select>
          </Col>


          <Col span={8} className="spcol">
           Bleep#
          </Col>
          <Col span={16} className="spcol">
            <Select>
              <Option value="">Select</Option>
              <Option value="118">Switchboard</Option>
            </Select>
          </Col>



          <Col span={8} className="spcol">
            Select active device
          </Col>
          <Col span={16} className="spcol">
          <DatePicker />
          </Col>

        </Row>

       
      </Modal>
    </>
  );
});

export default BleepsManagementModal;
