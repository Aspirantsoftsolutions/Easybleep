import { Button, Modal, Input, Select, Col } from "antd";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./PushNotificationModal.scss";
import pushnotification from "../../assets/img/icons/addnotification-icon.png";

import TextArea from "antd/lib/input/TextArea";

const { Option } = Select;

const PushNotificationModal = forwardRef((props, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    showModal
  }))

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
      <div className="addmore" onClick={showModal}>
        <img src={pushnotification} alt="" />
      </div>

      <Modal
        title="Add Notification"
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
        <TextArea placeholder="Message"></TextArea>
        <br />
        <br />
        <Col span={8} className="spcol">
          Select Users
        </Col>
        <Select
          style={{ width: '100%' }}
          mode="multiple"
          placeholder="Select Users"
          defaultValue={[
            "Mustak",
            "Ahmed",
            "Naveen",
            "Ahmed Ali"
          ]}
          // onChange={handleChange}
          optionLabelProp="label"
        >
          <Option value="Mustak" label="Mustak">
            <div className="demo-option-label-item">Mustak</div>
          </Option>
          <Option value="Ahmed" label="Ahmed ">
            <div className="demo-option-label-item">Ahmed</div>
          </Option>
          <Option value="Ahmed Ali" label="Ahmed Ali ">
            <div className="demo-option-label-item">Ahmed Ali</div>
          </Option>
          <Option value="Naveen" label="Naveen">
            <div className="demo-option-label-item">Naveen</div>
          </Option>

        </Select>
      </Modal>
    </>
  );
});

export default PushNotificationModal;
