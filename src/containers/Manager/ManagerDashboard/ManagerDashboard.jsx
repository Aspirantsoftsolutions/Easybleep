import "./ManagerDashboard.scss";
import { Col, Row, DatePicker } from "antd";
import React from "react";
import ongoing from "../../../assets/img/dashboard/not-ongoing.png";
import accepted from "../../../assets/img/dashboard/not-accepted.png";
import rejected from "../../../assets/img/dashboard/not-rejected.png";
import Cancelled from "../../../assets/img/dashboard/not-cancelled.png";
import totalusers from "../../../assets/img/dashboard/totalusers.png";
import totalmanagers from "../../../assets/img/dashboard/totalmanagers.png";
import totalsupervisors from "../../../assets/img/dashboard/totalsupervisors.png";
import totalagent from "../../../assets/img/dashboard/totalagents.png";
import totalmembers from "../../../assets/img/dashboard/totalmembers.png";
import activeusers from "../../../assets/img/dashboard/activeusers.png";
import inactiveusers from "../../../assets/img/dashboard/inactiveusers.png";
import generated from "../../../assets/img/dashboard/not-generated.png";
import RadarChart from "../../../components/Charts";
import Linechart from "../../../components/Charts/Linechart";
import moment from "moment";

import cancel from "../../../assets/img/dashboard/cancel.png";
import edit from "../../../assets/img/dashboard/edit.png";
import setting from "../../../assets/img/dashboard/setting.png";
import tick from "../../../assets/img/dashboard/tick.png";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

const ManagerDashboard = () => {
  return (
    <>
      <main>
        <div className="dashboard-components-wrapper">
          <div className="dasboardheader dflex">
            <div className="dsleft">
              <h3>Switchboard at glance</h3>
            </div>

            <div className="dsright">
              {/* <button type="defult">19-Aug-2022</button> */}
              <RangePicker
                defaultValue={[
                  moment("2022/10/08", dateFormat),
                  moment("2022/10/08", dateFormat),
                ]}
                format={dateFormat}
              />
            </div>
          </div>

          <div className="dasboard-content">
            <Row gutter={24} className="bgwhite">
              <Col className="gutter-row" span={24}>
                <Row gutter={24}>
                  <Col xs={24} md={12} xl={12}>
                    <RadarChart id="parentchart"></RadarChart>
                  </Col>
                  <Col xs={24} md={12} xl={12}>
                    <RadarChart id="childchart"></RadarChart>
                  </Col>
                </Row>
              </Col>

              <Col className="gutter-row" span={24}>
                <Row gutter={12} className="weekdayrow bgwhite">
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
            </Row>

            <Row gutter={24} className="bgwhite">
              <Col span={24}>
                <Row gutter={24}>
                  <Col span={24}>
                    <Linechart id="linchart"></Linechart>
                  </Col>
                </Row>
              </Col>
            </Row>

            <div className="">
              <Row gutter={24} className="btotabe">
                <Col xs={24} md={12} xl={6}>
                  <div className="dashlabel">
                    <div className="dhead darkred">New request</div>
                    <div className="dlebcontent">
                      <div className="dicon">
                        <img src={activeusers} alt="" />
                      </div>
                      <div className="dcount orange-text">1</div>
                    </div>
                  </div>

                  {/* <div className="manbttomone">
                    <div>
                      <img
                        src="../"
                        class="res"
                        title="New request"
                      />
                      <img src={edit} alt="" />
                    </div>
                    <div className="manright">
                      <span>1</span>
                      <span class="title">New request</span>
                    </div>
                  </div> */}
                </Col>
                <Col xs={24} md={12} xl={6}>
                  <div className="dashlabel">
                    <div className="dhead merun">Under processing</div>
                    <div className="dlebcontent">
                      <div className="dicon">
                        <img src={accepted} alt="" />
                      </div>
                      <div className="dcount merun-text">0</div>
                    </div>
                  </div>

                  {/* <div className="manbttomone manyellow">
                    <div>
                   
                    <img src={tick} alt="" />
                    </div>
                    <div className="manright">
                      <span>0</span>
                      <span class="title">Under processing</span>
                    </div>
                  </div> */}
                </Col>
                <Col xs={24} md={12} xl={6}>
                  <div className="dashlabel">
                    <div className="dhead darkgreen">Cancelled</div>
                    <div className="dlebcontent">
                      <div className="dicon">
                        <img src={Cancelled} alt="" />
                      </div>
                      <div className="dcount darkgreen-text">0</div>
                    </div>
                  </div>

                  {/* <div className="manbttomone manpur">
                    <div>
                      <img
                        src="https://easybleep.com/templates/commonlib/img/cancelled.png"
                        class="res"
                        title="New request"
                      />
                       <img src={cancel} alt="" />
                    
                    </div>
                    <div className="manright">
                      <span> 0 </span>
                      <span class="title">Cancelled</span>
                    </div>
                  </div> */}
                </Col>
                <Col xs={24} md={12} xl={6}>
                  <div className="dashlabel">
                    <div className="dhead orange">Completed</div>
                    <div className="dlebcontent">
                      <div className="dicon">
                        <img src={ongoing} alt="" />
                      </div>
                      <div className="dcount orange-text">0</div>
                    </div>
                  </div>

                  {/* <div className="manbttomone mangreen">
                    <div>
                      <img
                        src="https://easybleep.com/templates/commonlib/img/complete.png"
                        class="res"
                        title="New request"
                      />
                      <img src={setting} alt="" />
                    </div>
                    <div className="manright">
                      <span>0</span>
                      <span class="title">Completed</span>
                    </div>
                  </div> */}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ManagerDashboard;
