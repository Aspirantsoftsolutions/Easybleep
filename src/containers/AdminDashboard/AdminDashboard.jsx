import { Col, DatePicker, Row } from "antd";
import "./AdminDashboard.scss";

import React from "react";
import ongoing from "../../assets/img/dashboard/not-ongoing.png";
import accepted from "../../assets/img/dashboard/not-accepted.png";
import rejected from "../../assets/img/dashboard/not-rejected.png";
import Cancelled from "../../assets/img/dashboard/not-cancelled.png";
import totalusers from "../../assets/img/dashboard/totalusers.png";
import totalmanagers from "../../assets/img/dashboard/totalmanagers.png";
import totalsupervisors from "../../assets/img/dashboard/totalsupervisors.png";
import totalagent from "../../assets/img/dashboard/totalagents.png";
import totalmembers from "../../assets/img/dashboard/totalmembers.png";
import activeusers from "../../assets/img/dashboard/activeusers.png";
import inactiveusers from "../../assets/img/dashboard/inactiveusers.png";
import generated from "../../assets/img/dashboard/not-generated.png";
import RadarChart from "../../components/Charts";
import Barchart from "../../components/Charts/Barchart";
import moment from "moment"


const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const AdminDashboard = () => {
  return (
    <>
      <main>
        <div className="admin-components-wrapper">
          <div className="dasboardheader dflex">
            <div className="dsleft">
              <h3>Switchboard at glance</h3>
            </div>

            <div className="pageheaderlast">

              <label className="lbblock">Location</label>
              <select>
                <option value="">Select</option>
                <option value="8">AHH</option>
                <option value="9">HMK</option>
                <option value="10">AH</option>
              </select>
            </div>
            <div className="dsright">
              {/* <button type="defult">19-Aug-2022</button> */}
              <RangePicker
                defaultValue={[moment('2022/10/08', dateFormat), moment('2022/10/08', dateFormat)]}
                format={dateFormat}
              />
            </div>
          </div>

          <div className="dasboard-content">
            <Row gutter={24}>
              <Col className="gutter-row" xs={24} md={12} xl={12}>
                <Row gutter={24}>
                  <Col xs={12} md={12} xl={12}>
                    <RadarChart id="parentchart"></RadarChart>
                  </Col>
                  <Col xs={12} md={12} xl={12}>
                    <RadarChart id="childchart"></RadarChart>
                  </Col>
                  {/* <Col span={12}>
                                        <Barchart id="barchart"></Barchart>
                                    </Col> */}
                </Row>

                <Row gutter={12} className="weekdayrow">
                  <Col className="gutter-row" span={3}>
                    <span className="sunclr"></span>
                    <div>Sun</div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <span className="monclr"></span> <div>Mon</div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <span className="turclr"></span> <div>Tue</div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <span className="wedclr"></span>
                    <div>Wed</div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <span className="thuclr"></span> <div>Thu</div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <span className="friclr"></span>
                    <div>Fri</div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <span className="satclr"></span>
                    <div>Sat</div>
                  </Col>
                </Row>
              </Col>

              <Col className="gutter-row" xs={24} md={12} xl={12}>
                <Col xs={24} md={24} xl={24}>
                  <Barchart id="barchart" className="barchartblk"></Barchart>
                </Col>
              </Col>
            </Row>

            <Row>
              <Col xs={24} md={12} xl={12}>
                <Row>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead orange">Emergency Notification Ongoing</div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={ongoing} alt="" />
                        </div>
                        <div className="dcount orange-text">28</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead darkgreen">
                        Emergency Notification Accepted
                      </div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={accepted} alt="" />
                        </div>
                        <div className="dcount darkgreen-text">28</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12} xl={12}>
                <Row>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead darkred">Emergency Notification Rejected</div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={rejected} alt="" />
                        </div>
                        <div className="dcount darkred-text">04</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead merun">Emergency Notification Cancelled</div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={Cancelled} alt="" />
                        </div>
                        <div className="dcount merun-text">03</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col xs={24} md={12} xl={12}>
                <Row>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead yellowgreen">Total Users</div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={totalusers} alt="" />
                        </div>
                        <div className="dcount yellowgreen-text">1250</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead blue">Total Manages</div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={totalmanagers} alt="" />
                        </div>
                        <div className="dcount blue-text">28</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12} xl={12}>
                <Row>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead orangedark">Total Supervisor</div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={totalsupervisors} alt="" />
                        </div>
                        <div className="dcount orangedark-text">18</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead purple">Total Agents</div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={totalagent} alt="" />
                        </div>
                        <div className="dcount purple-text">16</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col xs={24} md={12} xl={12}>
                <Row>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead darkblue">Total Members</div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={totalmembers} alt="" />
                        </div>
                        <div className="dcount darkblue-text">520</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead bluelight">Active Users</div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={activeusers} alt="" />
                        </div>
                        <div className="dcount bluelight-text">420</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12} xl={12}>
                <Row>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead skypbluedark">Inactive Users</div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={inactiveusers} alt="" />
                        </div>
                        <div className="dcount skypbluedark-text">100</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12} xl={12}>
                    <div className="dashlabel">
                      <div className="dhead greenblue">
                        Notification Generated
                      </div>
                      <div className="dlebcontent">
                        <div className="dicon">
                          <img src={generated} alt="" />
                        </div>
                        <div className="dcount greenblue-text">35</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
