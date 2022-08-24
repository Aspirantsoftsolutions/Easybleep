import { Select, Table, DatePicker, Button, Modal } from "antd";
import { useState } from "react";
import "./TeamsActivity.scss";
const { Option } = Select;
const { RangePicker } = DatePicker;

const TeamsActivity = () => {
  const columns = [
    // {
    //   title: "SlNo",
    //   dataIndex: "SlNo",
    //   key: "SlNo",
    // },
    {
      title: "UserName",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Activity",
      dataIndex: "activity",
      key: "activity",
    },
    {
      title: "Sign In",
      dataIndex: "signindate",
      key: "signindate",
    },
    {
      title: "Sign Out",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      render: (_, item) => {
        return (
          <div>
            <Button onClick={showModal} className="addmore">More</Button>
          </div>
        )
      }
    }
  ];

  const data = [
    {
      key: 1,
      // SlNo: 1,
      user: "Test",
      email: "test@gmail.com",
      activity: 10,
      signindate: "2022.07.20 10:00 AM",
      date: "2022.07.20 8:00 PM",
    },
  ];


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

  return (
    <>
      <main>
        <div className="useractivity-components-wrapper">
          <h3>User Activity</h3>
          <div className="userheadbk">
            <Select defaultValue="Select Location">
              <Option value="AHH">AHH</Option>
              <Option value="HMK">HMK</Option>
              <Option value="AH">AH</Option>
            </Select>
            <Select
              defaultValue="Select team"

            ></Select>
            <RangePicker />
          </div>

          {data.length > 0 && <Table columns={columns} dataSource={data} />}
        </div>
      </main>

      <Modal title="User Activity" className="usermodel" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        footer={null}
      // footer={[
      //   <Button key="submit" type="primary" onClick={handleOk}>
      //     Activate
      //   </Button>,
      //   <Button key="link" type="defult" onClick={handleOk}>
      //     Cancel
      //   </Button>,
      // ]}
      >

        <table>
          <thead>
            <tr>
              <th>
                User Name
              </th>
              <th>
                Sign In
              </th>
              <th>
                Sign Out
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Edwin </td>
              <td>
                2022.07.20 10:00 AM
              </td>
              <td>
                2022.07.20 8:00 AM
              </td>
            </tr>
          </tbody>
        </table>

      </Modal>
    </>
  );
};

export default TeamsActivity;
