import { Button, Table, Select } from "antd";
import { useRef, useState } from "react";
import ScheduleManagementModal from "../../../components/ScheduleManagementModal";
import "./ScheduleManagement.scss";
import editicon from "../../../assets/img/icons/edit-icon.png";
import deleteicon from "../../../assets/img/icons/delete-icon.png"; 

const { Option } = Select;
const ScheduleManagement = () => {

  const child = useRef();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    {
      title: "Schedule Name",
      dataIndex: "schedule_name",
      key: "schedule_name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Timing",
      dataIndex: "timing",
      key: "timing",
    },
    {
      title: "Schedule start date",
      dataIndex: "startdate",
      key: "startdate",
    },
    {
      title: "Schedule end date",
      dataIndex: "enddate",
      key: "enddate",
    },
    {
      title: "Recurrence",
      dataIndex: "recurrence",
      key: "recurrence",
    },
    {
      title: "Exclusions",
      dataIndex: "exclusions",
      key: "exclusions",
    },

    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: () => {
        return (
          <div className="actionicon">
            <img src={deleteicon} alt="delete" />
            <img
              src={editicon}
              alt="edit"
              onClick={() => {
                child.current.showModal();
              }}
            />
            {/* <img src={reseticon} alt="reset" /> */}
          </div>
        );
      },
    },
  ];

  const data = [
    {
      schedule_name: "Morning ",
      type: "Morning ",
      time: "6:30 - 13:30",
      startdate: "2021.02.14",
      enddate: "2021.02.28",
      recurrence: "week",
      exclusions: "monday,thursday",
    },
  ];
  return (
    <>
      <main>
        <div className="schedule-wrapper">
          <div className="headershedule">
            <Select
             className="selectshed"
              placeholder="select"
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
                <div className="demo-option-label-item">CODE White Team</div>
              </Option>
              <Option value="CODE Yellow Team" label="CODE Yellow Team">
                <div className="demo-option-label-item">CODE Yellow Team</div>
              </Option>
            </Select>

            <ScheduleManagementModal ref={child} />
          </div>

          {data.length > 0 && <Table columns={columns} dataSource={data} />}
        </div>
      </main>
    </>
  );
};

export default ScheduleManagement;
