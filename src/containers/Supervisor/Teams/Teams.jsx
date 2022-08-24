import { Button, Table, Tag, Select, Input, Row, Col } from "antd";
import { useState } from "react";
import "./Teams.scss";

const { Option } = Select;
const { Search } = Input;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const Teams = () => {
  const [size, setSize] = useState("middle");

  const data = [
    {
      key: "1",
      employee: "https://easybleep.com/assets/images/1614282366.jpeg",
      value: "info nmeet",
      tag: "user",
      sunday: "RRT",
      sundayvalue: "6:30 - 13:30",
      monday: "Vacation",
      tuesday: "RRT",
      tuesdayvalue: "6:30 - 13:30",
      wednesday: "RRT",
      wednesdayvalue: "6:30 - 13:30",
      thursday: "Vacation",

      friday: "RRT",
      fridayvalue: "6:30 - 13:30",
      saturday: "RRT",
      saturdayvluae: "6:30 - 13:30",
    },
  ];

  const columns = [
    {
      className: "employeblock",
      title: "Employee",
      
      dataIndex: "employee",
      key: "employee",      
      render: (_, item) => {
        return (
          <>          
            <div style={{display:"flex", alignItems:"center",}}>
              <img  src={item.employee}
                style={{
                  width: 40,
                  marginRight:10,
                }}
              ></img>
              <div className="employeitem">
                <span>{item.value}</span>
                <Tag style={{color:"red", border:"none", background:"none",padding:"0"}}>{item.tag}</Tag>
              </div>
            </div>
          </>
        );
      },
    },
    {      
      title: "2022-07-31 Sunday",
      dataIndex: "sunday",
      key: "sunday",  
      className:"bggreen",      
      render: (_, item) => {
        return (
          <>
          <div>
          {item.sunday}
            <br />
            {item.sundayvalue}
          </div>
            
          </>
        );
      },
    },
    {
      title: "2022-08-01 Monday",
      dataIndex: "monday",
      key: "monday",
      className:"bggrey",      
      render: (_, item) => {
        return <>{item.monday}</>;
      },
    },
    {
      className:"bggreen",      
      title: "2022-08-02 tuesday",
      dataIndex: "tuesday",
      key: "tuesday",
      render: (_, item) => {
        return (
          <>
            {item.tuesday}
            <br />
            {item.tuesdayvalue}
          </>
        );
      },
    },
    {
      title: "2022-08-03 Wednesday",
      dataIndex: "wednesday",
      key: "wednesday",
      className:"bggreen",      
      render: (_, item) => {
        return (
          <>
            {item.wednesday}
            <br />
            {item.wednesdayvalue}
          </>
        );
      },
    },
    {
      title: "2022-08-04 Thursday",
      dataIndex: "thursday",
      key: "thursday",
      className:"bggreen",  
      className:"bggrey",          
      render: (_, item) => {
        return (
          <>
            {item.thursday}
            <br />
          </>
        );
      },
    },
    {
      title: "2022-08-05 Friday",
      dataIndex: "friday",
      key: "friday",
      className:"bggreen",   
      render: (_, item) => {
        return (
          <>
            {item.friday}
            <br />
            {item.fridayvalue}
          </>
        );
      },
    },
    {
      title: "2022-08-06 Saturday",
      dataIndex: "saturday",
      key: "saturday",
      className:"bggreen",      
      render: (_, item) => {
        return (
          <>
            {item.saturday}
            <br />
            {item.saturdayvluae}
          </>
        );
      },
    },
  ];

  return (
    <>
      <main>
        <div className="teammange-wrapper">
          <h3>Teams</h3>
          <div className="tmhead">
            <Row>
              <Col xs={24} md={24} xl={12}>
                <Select
                  mode="multiple"
                  placeholder="select"
                  defaultValue={[
                    "RRT",
                    "CODE BLUE",
                    "CODE RED",
                    "CODE Blue Team",
                    "CODE White Team",
                    "CODE Yellow Team",
                  ]}
                  onChange={handleChange}
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

              <Col xs={6} md={24} xl={12}>
                <Search placeholder="Search Employee" className="searchright" />
              </Col>
            </Row>
          </div>
        </div>

        {data.length > 0 && <Table className="tbls" columns={columns} dataSource={data} />}
      </main>
    </>
  );
};

export default Teams;
