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
  Radio,
} from "antd";
import React, {
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
} from "react";
import showstation from "../../../assets/img/icons/indoor-location.png";
import "./StationManagementModal.scss";

const { Option } = Select;
const format = "HH:mm";
const StationManagementModal = forwardRef((props, ref) => {
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
      <div className="station-manage-wrppers">


      <div className="spheader">
          <h3>Station Management</h3>
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
            <img src={showstation} alt="" onClick={showModal} />
          </div>
          </div>
        </div>


        

        <Modal
          className="stationmodel"
          title="Add new station"
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
              Activate
            </Button>,
            <Button key="link" type="primary" onClick={handleOk}>
              Cancel
            </Button>,
          ]}
        >
          <Row className="userforms">
           

            <Col span={8} className="spcol">
              Choose Country
            </Col>
            <Col span={16} className="spcol">
              <Select>
                <Option value="">Select</Option>
                <Option value="118">Switchboard</Option>
              </Select>
            </Col>

            <Col span={8} className="spcol">
              Choose Customer
            </Col>
         
            <Col span={16} className="spcol">
              <Select>
                <Option value="">Select</Option>
                <Option value="118">Switchboard</Option>
              </Select>
            </Col>
          

            <Col span={12} className="spcol">
             <Radio></Radio>Master model
            </Col>

            <Col span={12} className="spcol">
             <Radio></Radio> Hybrid model
            </Col>

           

           

            <Col span={24} className="spcol">
              <Input placeholder="Station name"></Input>
            </Col>

            <Col span={24} className="spcol">
              <Input placeholder="Add description (optional)"></Input>
            </Col>
            
          </Row>
        </Modal>
      </div>
    </>
  );
});

export default StationManagementModal;
