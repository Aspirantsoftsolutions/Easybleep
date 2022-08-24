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
import "./ConfirmationModal.scss";

const { Option } = Select;
const format = "HH:mm";
const ConfirmationModal = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    showModal,
  }));

  useEffect(() => { }, [props.isModalVisible]);

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
          title="Confirmation"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Row className="userforms">
            <Col span={24} className="spcol">
              <h4>Confirm Customer has to be terminate?
              </h4>
              <Button type="primary">Ok</Button>
            </Col>


          </Row>
        </Modal>
      </div>
    </>
  );
});

export default ConfirmationModal;
