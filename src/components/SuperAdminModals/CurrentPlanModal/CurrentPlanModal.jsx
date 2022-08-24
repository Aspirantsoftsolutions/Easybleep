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
import "./CurrentPlanModal.scss";

const { Option } = Select;
const format = "HH:mm";
const CurrentPlanModal = forwardRef((props, ref) => {
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
    

        <Modal
          className="AddCountryModal"
          title="Customer Plan"
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
              <Input placeholder="Number Of Licence" />
            </Col>
            <Col span={24} className="spcol">
              <Input placeholder="Number of Users" />
            </Col>
            <Col span={24} className="spcol">
              <Input placeholder="Number of Devices" />
            </Col>
            <Col span={8} className="spcol">
              Licence Type
            </Col>

            <Col span={16} className="spcol">
            <Select>
                <Option value="">Select</Option>
                <Option value="118">Switchboard</Option>
              </Select>
            </Col>

            <Col span={8} className="spcol">
              Date of Expiry
            </Col>

            <Col span={16} className="spcol">
            <DatePicker />
            </Col>
           
          </Row>
        </Modal>
      </div>
    </>
  );
});

export default CurrentPlanModal;
