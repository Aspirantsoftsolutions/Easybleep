import TableView from "../../components/TableView/TableView";
import tableheader from "../../data/tableheader";
import tabledata from "../../data/tabledata";
import { useState } from "react";

import { Tabs, DatePicker, Button, Table } from "antd";
import "./LicenceManagement.scss";
import { UserOutlined, DownloadOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const LicenceManagement = (props) => {
  const [header, setTableHeader] = useState(tableheader);
  const [data, setTableData] = useState(tabledata);

  const onChange = () => {};

  return (
    <>
      <main>
        <div className="licencemangent-wrapper">
          <div className="licencetophead">
            <h3>Licence Management</h3>
        
          </div>

          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Subscription" key="1">
              <div className="tabcontent">
                <div className="subsblock">
                  <div className="subsleft" >
                    <h3>Alahli private hospital</h3>
                    <p>Next term: 30/06/2023</p>
                    <p>
                      Subscription Cost: <span>57QR</span>
                    </p>
                    <p>
                      Changed after 30/06/2023 <span>57QR</span>
                    </p>
                    <p className="totalamd">
                      Total <span>114QR</span>
                    </p>
                    <button className="antbtn">Change Current Plan</button>
                    <div className="fsubs">
                      <p>
                        <b>Any questions, issue or suggestions?</b>
                      </p>
                      <p>Please contact Customer care: 18887 95623 45479</p>
                    </div>
                  </div>

                  <div className="subsright">
                    <div className="substable">
                      <div className="sprow">
                        <div className="spcol">Total number of licence:</div>
                        <div className="spcol dfcol">2</div>
                      </div>

                      <div className="sprow">
                        <div className="spcol">Number of users:</div>
                        <div className="spcol dfcol">20</div>
                      </div>

                      <div className="sprow">
                        <div className="spcol">Number of Devices:</div>
                        <div className="spcol dfcol">20</div>
                      </div>

                      <div className="sprow">
                        <div className="spcol">Licence type:</div>
                        <div className="spcol dfcol">Premium</div>
                      </div>

                      <div className="sprow">
                        <div className="spcol">Licence expiry date:</div>
                        <div className="spcol dfcol">30/06/2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Invoice" key="2">
              <div className="tabcontent">Coming Soon</div>
            </TabPane>
            <TabPane tab="Contact Info" key="3">
              <div className="tabcontent">Coming Soon</div>
            </TabPane>
            <TabPane tab="Payment Info" key="4">
              <div className="tabcontent">Coming Soon</div>
            </TabPane>
          </Tabs>
        </div>
      </main>
    </>
  );
};

export default LicenceManagement;
