import { useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "antd";
import "./CustomerManagement.scss";
import editicon from "../../../assets/img/icons/edit-icon.png";
import deleteicon from "../../../assets/img/icons/delete-icon.png";
import TableView from "../../../components/TableView/TableView";
import CustomerManagementModal from "../../../components/SuperAdminModals/CustomerManagementModal";
import CurrentPlanModal from "../../../components/SuperAdminModals/CurrentPlanModal";
import ConfirmationModal from "../../../components/SuperAdminModals/ConfirmationModal";

const CustomerManagement = () => {
    useEffect(() => { }, []);
    const child = useRef();
    const customerPlanRef = useRef();
    const confirmationRef = useRef();

    useEffect(() => { }, []);

    const [header, setTableHeader] = useState([
        {
            title: "Country name",
            dataIndex: "countryname",
            key: "countryname",
        },
        {
            title: "Customer name",
            dataIndex: "customername",
            key: "customername",
        },
        {
            title: "Customer ID",
            dataIndex: "customerid",
            key: "customerid",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Contact details",
            dataIndex: "contactdetails",
            key: "contactdetails",
        },
        {
            title: "Licence expiry date",
            dataIndex: "expirydate",
            key: "expirydate",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_, item) => {
                return (
                    <div className="actionicon">
                        {/* <img src={deleteicon} alt="delete" /> */}
                        <img
                            src={editicon}
                            alt="edit"
                            onClick={() => {
                                child.current.showModal();
                            }}
                        />

                    </div>
                );
            },
        },
    ]);
    const [data, setTableData] = useState([
        {
            countryname: "UK",
            customername: "Phani2",
            customerid: "44801794",
            email: "aspirant2@mailinator.com",
            contactdetails: "+33333333",
            expirydate: "30/11/2020",
            status: "Inactive"
        },
        {
            countryname: "UK",
            customername: "Tharun",
            customerid: "87507933",
            email: "kavalim18@gmail.com",
            contactdetails: "+9849459733",
            expirydate: "26/04/2021",
            status: "Inactive"
        },
    ]);
    return (
        <main>
            <div className="customerManagement-wrapper">
                <CustomerManagementModal ref={child} />
                <CurrentPlanModal ref={customerPlanRef} />
                <ConfirmationModal ref={confirmationRef} />
                <TableView header={header} data={data} />


                <div className="bottomblock">
                    <div className="bgwhite">
                        <Row>
                            <Col xs={24} md={12} xl={12} className="cmleft">
                                <h4>Hamad medical corporation</h4>
                                <p>Next term: 31/12/2023</p>

                                <ul class="list-justify">
                                    <li>
                                        Subscription Cost:
                                        <span class="data_licence_sub_cost">57 QR</span>
                                    </li>
                                    <li class="cont">
                                        Changed after 31/12/2023<span class="clr">+57 QR</span>
                                    </li>
                                </ul>
                                <hr />
                                <ul class="list-justify">
                                    <li>
                                        <b>Total</b>
                                        <span>
                                            <b class="data_total_cost">114 ق.ر QR</b>
                                        </span>
                                    </li>
                                </ul>
                                <hr />

                                <Button type="primary" className="btn" onClick={() => {
                                    customerPlanRef.current.showModal();
                                }}>
                                    Change the current Plan
                                </Button>

                                <Button type="primary" onClick={() => {
                                    confirmationRef.current.showModal();
                                }}>Terminate</Button>

                                <p>Any questions, issue or suggestions?</p>
                                <p className="cont">
                                    Please contact Customer care: 18887 95623 45479
                                </p>
                            </Col>
                            <Col xs={24} md={12} xl={12}>
                                <div class="brtb">
                                    <ul>
                                        <li>
                                            <h3 class="fontsize1 ">Total number of licence:</h3>
                                            <span>1</span>
                                        </li>

                                        <li>
                                            <h3 class="fontsize1">Number of users:</h3>
                                            <span>3000</span>
                                        </li>

                                        <li>
                                            <h3 class="fontsize1">Number of Devices:</h3>
                                            <span>300</span>
                                        </li>
                                        <li>
                                            <h3 class="fontsize1">Licence type:</h3>
                                            <span>300</span>
                                        </li>
                                        <li>
                                            <h3 class="fontsize1">Licence expiry date:</h3>
                                            <span>31/12/2023</span>
                                        </li>
                                    </ul>
                                </div>
                                <ul>
                                    <li>
                                        <b>
                                            {" "}
                                            User Name : <span class="data_username">
                                                hmc_admin{" "}
                                            </span>{" "}
                                        </b>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default CustomerManagement;
