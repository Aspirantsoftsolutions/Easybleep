import { Button, Modal, Input } from "antd";
import React, { useImperativeHandle, forwardRef, useState } from "react";
import "./TeamManagementModal.scss";

import teamaddicon from "../../assets/img/icons/addteam-icon.png";
import { Col, Row } from "antd";
import { Select } from 'antd';


const TeamManagementModal = forwardRef((props, ref) => {
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
      {/* <Button type="primary" onClick={showModal}>
        Add User
      </Button> */}

      <div className="addmore">
        <img onClick={showModal} src={teamaddicon} alt="" />
      </div>

      <Modal
        title="Team Management"
        className="teammodel"
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
            <Input placeholder="Team name" />
          </Col>

          <Col span={24} className="spcol">
            <Input placeholder="Team Description" />
          </Col>



          <Col span={8} className="spcol">
            Choose Color Code
          </Col>
          <Col span={16} className="spcol">
            <Input type="color" ></Input>
            {/* <Select>
              <Option value="">Select</Option>
              <Option value="118">Switchboard</Option>
            </Select> */}
          </Col>

          <Col span={8} className="spcol">
            Choose ringtone
          </Col>
          <Col span={16} className="spcol">
            <Select>
              <Option value="">Select</Option>
              <Option value="118">Switchboard</Option>
            </Select>
          </Col>

          <Col span={8} className="spcol">
            Choose device
            {/* <p><u>Select all</u> <u>Remove all</u></p> */}
          </Col>
          <Col span={16} className="spcol">
            <Select
              mode="multiple"
              placeholder="select"
              defaultValue={[
                "RRT",
                "CODE BLUE",
                "CODE RED",
                "CODE Blue Team"
              ]}
               
              optionLabelProp="label"
            >
              <Option value="RRT" label="RRT">
                <div className="demo-option-label-item">RRT</div>
              </Option>
              <Option value="CODE BLUE" label="CODE BLUE">
                <div className="demo-option-label-item">CODE BLUE</div>
              </Option>
              <Option value="CODE RED" label="CODE RED">
                <div className="demo-option-label-item">CODE RED</div>
              </Option>
              <Option value="CODE Blue Team" label="CODE Blue Team">
                <div className="demo-option-label-item">CODE Blue Team</div>
              </Option>
              <Option value="Red" label="Red">
                <div className="demo-option-label-item">CODE Red Team</div>
              </Option>
              <Option value="CODE White Team" label="CODE White Team">
                <div className="demo-option-label-item">
                  CODE White Team
                </div>
              </Option>
              <Option value="CODE Yellow Team" label="CODE Yellow Team">
                <div className="demo-option-label-item">
                  CODE Yellow Team
                </div>
              </Option>
            </Select>
          </Col>
        </Row>
      </Modal>
    </>
  );
});

export default TeamManagementModal;
