import {
  Button,
  DatePicker,
  Form,
  Input,
  TextArea,
  Modal,
  Select,
  Row,
  Col,
  TimePicker,
  Checkbox
} from "antd";
import React, {
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
} from "react";
import pushnotification from "../../../assets/img/icons/addnotification-icon.png";
import "./CustomerNotificationModal.scss";

const { Option } = Select;
const format = "HH:mm";
const CustomerNotificationModal = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    showModal,
  }));

  useEffect(() => { }, [props.isModalVisible]);

  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(
    props.isModalVisible ? true : false
  );

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
      <div className="Customer-NotificationModal-wrapper">
        <div className="spheader">
          <h3>Push Notification</h3>
          <div className="pageheaderlast">
            <div class="searchblock">
              <Input
                placeholder="Keywords"
                class="ant-input"
                type="text"
                value=""
              ></Input>
            </div>
            <div className="addmore">
              <img src={pushnotification} alt="" onClick={showModal} />
            </div>
          </div>
        </div>

        <Modal
          className="CustomerNotificationModal"
          title="Add Notification"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              className="spbtn"
              onClick={handleOk}
            >
              Add
            </Button>,
            <Button key="link" type="primary" onClick={handleOk}>
              Cancel
            </Button>,
          ]}
        >
          <Row className="userforms">
            <Col span={24} className="spcol">
              <TextArea className="textarea" />
            </Col>
          </Row>
          <Row className="userforms">
            <Col span={24} className="spcol">
              <b>Send to</b>
              <Checkbox >All</Checkbox>
              <Select style={{ width: 300 }}>
                <Option value="11">Alahli private hospital</Option>
                <Option value="13">Hamad medical corporation</Option>
              </Select>
            </Col>
          </Row>
        </Modal>
      </div>
    </>
  );
});

export default CustomerNotificationModal;
