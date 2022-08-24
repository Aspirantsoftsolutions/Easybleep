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
import schduleicon from "../../assets/img/icons/createschedul-icon.png";
import "./ScheduleManagementModal.scss";

const { Option } = Select;
const format = "HH:mm";
const ScheduleManagementModal = forwardRef((props, ref) => {
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
      <div className="schedule-manage-wrppers">
        <div className="addmore">
          <img src={schduleicon} alt="" onClick={showModal} />
        </div>

        <Modal
          className="sdhedulemodel"
          title="Create Schedule"
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
            <Col span={24} className="spcol">
              <Input placeholder="Schedule name" />
            </Col>

            <Col span={8} className="spcol">
              Type
            </Col>
            <Col span={16} className="spcol">
              <Select>
                <Option value="">Select</Option>
                <Option value="118">Switchboard</Option>
              </Select>
            </Col>

            <Col span={8} className="spcol">
              Time
            </Col>
            <Col span={8} className="spcol">
              <Select>
                <Option value="">Select</Option>
                <Option value="118">Switchboard</Option>
              </Select>
            </Col>
            <Col span={8} className="spcol">
              <Select>
                <Option value="">Select</Option>
                <Option value="118">Switchboard</Option>
              </Select>
            </Col>

            <Col span={8} className="spcol">
              Schedule starts from
            </Col>

            <Col span={16} className="spcol">
              <DatePicker />
            </Col>

            <Col span={8} className="spcol">
              Schedule due at
            </Col>

            <Col span={16} className="spcol">
            <DatePicker />
            </Col>

            <Col span={8} className="spcol">
              Recurrence
            </Col>
            <Col span={16} className="spcol">
              <Select>
                <Option value="">Select</Option>
                <Option value="118">Switchboard</Option>
              </Select>
            </Col>

            <Col span={8} className="spcol">
              User
            </Col>
            <Col span={16} className="spcol">
              <Select>
                <Option value="">Select</Option>
                <Option value="118">Switchboard</Option>
              </Select>
            </Col>
          </Row>

          {/* <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}


            autoComplete="off"
          >
            <Form.Item

              name="username"

            >
              <Input placeholder="Schedule name" />
            </Form.Item>

            <Form.Item
              label="Type"
              name="password"

            >
              <Select  >
                <Option value="">Select</Option>
                <Option value="Evening">Evening</Option>
                <Option value="Night">Night</Option>
                <Option value="Morning">Morning</Option>

              </Select>
            </Form.Item>

            <Form.Item
              label="Time"
              name="Time"

            >
              <TimePicker format={format} />
              <TimePicker format={format} />
            </Form.Item>

            <Form.Item
              label="Schedule starts from"
              name="Time"

            >
              <DatePicker></DatePicker>
            </Form.Item>


            <Form.Item
              label="Schedule ends at"
              name="Time"

            >
              <DatePicker></DatePicker>
            </Form.Item>

            <Form.Item
              label="Recurrence"
              name="Recurrence"

            >
              <Select >
                <Option value="">Select</Option>
                <Option value="day">Daily</Option>
                <Option value="week">Weekly</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Recurrence"
              name="Recurrence"

            >
              <Select >
                <Option value="">Select</Option>
                <Option value="51">info nmeet</Option>
              </Select>
            </Form.Item>

          </Form> */}
        </Modal>
      </div>
    </>
  );
});

export default ScheduleManagementModal;
