import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Row,
  Col,
  TimePicker,
} from "antd";
import React, {
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
} from "react";
import countyicon from "../../../assets/img/icons/addlocation-icon.png";
import "./AddCountryModal.scss";

const { Option } = Select;
const format = "HH:mm";
const AddCountryModal = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    showModal,
  }));

  useEffect(() => {}, [props.isModalVisible]);

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
      <div className="AddCountryModal-manage-wrppers">
        <div className="spheader">
          <h3>Country Management</h3>
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
              <img src={countyicon} alt="" onClick={showModal} />
            </div>
          </div>
        </div>

        <Modal
          className="AddCountryModal"
          title="Add new country"
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
              <Input placeholder="Country name" />
            </Col>
            <Col span={24} className="spcol">
              <Input placeholder="Latitude" />
            </Col>
            <Col span={24} className="spcol">
              <Input placeholder="Longitude" />
            </Col>
           
          </Row>
        </Modal>
      </div>
    </>
  );
});

export default AddCountryModal;
