import { Button, Modal, Input, Radio, Select } from "antd";
import React, { useState } from "react";
import "./EmergenyNotificationModal.scss";
import accessicon from "../../assets/img/icons/access-management-icon.png";
import { Col, Row } from "antd";
const { Option } = Select;

const EmergenyNotificationModal = React.forwardRef((props, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  React.useImperativeHandle(ref, () => ({
    showModal,
  }));

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Add User
      </Button> */}

      {/* <div className="addmore">
        <img onClick={showModal} src={accessicon} alt="" />
      </div> */}

      <Modal
        title="Code red team -In Progress"
        className="accmodel"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="link" type="defult" className="emercancel" onClick={handleOk}>
            Cancel Code
          </Button>,
        ]}
      >

        <table className="userforms">
          <thead>
            <th>User</th>
            <th>Full Name</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://easybleep.com/assets/images/default.png"
                  class="img-circle"
                  width="40"
                  alt="Avatar"
                />
              </td>
              <td>Khalid anwer 
                <div className="ownernum">
                Doctor ED
                </div>
                </td>
              <td>
                <span className="spanwaiting">
                Waiting
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </>
  );
});

export default EmergenyNotificationModal;
