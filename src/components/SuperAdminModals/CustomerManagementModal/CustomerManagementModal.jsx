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

import showcustomer from "../../../assets/img/icons/addteam-icon.png";
import "./CustomerManagementModal.scss";

const { Option } = Select;
const format = "HH:mm";
const CustomerManagementModal = forwardRef((props, ref) => {
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
      <div className="customer-manage-wrppers">
        <div className="spheader">
          <h3>Customer Management</h3>
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
              <img src={showcustomer} alt="" onClick={showModal} />
            </div>
          </div>
        </div>

        <Modal
          className="CustomerManagementModal"
          title="Add new customer"
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
            <Col span={12} className="spcol">
              Choose country
            </Col>

            <Col span={12} className="spcol">
              <Select>
                <Option value="">Select</Option>
                <Option value="118">Switchboard</Option>
              </Select>
            </Col>

            <Col span={24} className="spcol">
              <Input placeholder="Customer name"></Input>
            </Col>

            <Col span={24} className="spcol">
              <Input placeholder="23158965"></Input>
            </Col>

            <Col span={24} className="spcol">
              <Input placeholder="Email"></Input>
            </Col>

            <Col span={24} className="spcol">
              <Input placeholder="Mobile"></Input>
            </Col>

            <Col span={24} className="spcol">
              <Input placeholder="Number of Licence"></Input>
            </Col>

            <Col span={24} className="spcol">
              <Input placeholder="Number of Users"></Input>
            </Col>

            <Col span={24} className="spcol">
              <Input placeholder="Number of Devices"></Input>
            </Col>

            <Col span={10} className="spcol">
              Licence type
            </Col>

            <Col span={14} className="spcol">
              <Select>
                <Option value="">Select</Option>
                <Option value="118">Switchboard</Option>
              </Select>
            </Col>

            <Col span={10} className="spcol">
              Date of expire
            </Col>

            <Col span={14} className="spcol">
              <DatePicker />
            </Col>
          </Row>
        </Modal>
      </div>
    </>
  );
});

export default CustomerManagementModal;
