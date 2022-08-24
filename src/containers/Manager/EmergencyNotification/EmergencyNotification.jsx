import { Tabs, DatePicker, Input, Select, Button, Card } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useRef } from "react";
import EmergenyNotificationModal from "../../../components/EmergenyNotificationModal";
import "./EmergencyNotification.scss";

import { CloseOutlined } from '@ant-design/icons';
import { Collapse } from "antd";
import React from "react";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const EmergencyNotification = () => {
  const child = useRef();

  const genExtra = () => (
  <Button className="closebtn">Cancel Code</Button>
  );

  const { TabPane } = Tabs;

  const onChange = () => { };
  const { Option } = Select;
  return (
    <>
      <main>
        <div className="emergency-wrapper">
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Emergency Notifications" key="1">
              <div className="tabcontent">
                <div className="tbleft">
                  <h3>Send Emergency Notifications</h3>

                  <div className="tbboxflex">
                    <div className="tbbox">
                      <h4>Emergency Notifications</h4>
                      <Select
                        showSearch
                        placeholder="Select Location"
                        optionFilterProp="children"
                      >
                        <Option value="">Select location</Option>
                        <Option value="8">AHH</Option>
                        <Option value="9">HMK</Option>
                        <Option value="10">AH</Option>
                      </Select>
                      <Input placeholder="Select Indoor Location"></Input>
                      <Select
                        showSearch
                        placeholder="Select Team"
                        optionFilterProp="children"
                      >
                        <Option value="">Select team</Option>
                      </Select>
                      <TextArea rows={8}></TextArea>
                      <Input placeholder="Name of the staff who reported by emergency"></Input>
                      <Button type="primary" className="codebtn">
                        Send Code
                      </Button>
                    </div>
                    <EmergenyNotificationModal
                      ref={child}
                    ></EmergenyNotificationModal>
                    {/* <div className="tbbox" onClick={() => child.current.showModal()}> */}
                    <div className="tbbox">
                      {/* <div className="corebox">
                        <p className="codeblk">
                          <span className="codeno">1669821</span>
                          <span>Code red team</span>
                        </p>
                        <p className="codeavathar">
                          <img
                            src="https://easybleep.com/assets/images/default.png"
                            class="img-circle"
                            width={40}
                            alt="Avatar"
                          />
                          <span className="notifigreen"></span>
                        </p>
                        <div className="opendiv">
                          <img src="https://easybleep.com/templates/commonlib/img/details.png" alt="" />
                        </div>
                      </div> */}

                     

                      <Collapse
                        defaultActiveKey={["1"]}

                        expandIconPosition="end"
                      >
                        <Panel
                          header="1669821 - 
                          Code red team"
                          key="1"
                        extra={genExtra()}
                        >
                          <table class="userforms">
                            <thead>
                              <th>Full Name</th>
                              <th>Status</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Khalid anwer
                                  <div class="ownernum">Doctor ED</div>
                                </td>
                                <td>
                                  <span class="spanwaiting">Waiting</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Khalid anwer
                                  <div class="ownernum">Doctor ED</div>
                                </td>
                                <td>
                                  <span class="spanwaiting">Waiting</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Panel>
                        <Panel
                          header="1669821 - 
                          Code red team"
                          key="2"
                        extra={genExtra()}
                        >
                          <table class="userforms">
                            <thead>
                              <th>Full Name</th>
                              <th>Status</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Khalid anwer
                                  <div class="ownernum">Doctor ED</div>
                                </td>
                                <td>
                                  <span class="spanwaiting">Waiting</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Khalid anwer
                                  <div class="ownernum">Doctor ED</div>
                                </td>
                                <td>
                                  <span class="spanwaiting">Waiting</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Panel>
                        <Panel
                          header="1669821 - 
                          Code red team"
                          key="3"
                        extra={genExtra()}
                        >
                          <table class="userforms">
                            <thead>
                              <th>Full Name</th>
                              <th>Status</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Khalid anwer
                                  <div class="ownernum">Doctor ED</div>
                                </td>
                                <td>
                                  <span class="spanwaiting">Waiting</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Khalid anwer
                                  <div class="ownernum">Doctor ED</div>
                                </td>
                                <td>
                                  <span class="spanwaiting">Waiting</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Panel>
                      </Collapse>

                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </main>
    </>
  );
};

export default EmergencyNotification;
