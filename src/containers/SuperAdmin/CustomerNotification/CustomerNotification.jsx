import { useEffect, useState } from "react"
import editicon from "../../../assets/img/icons/edit-icon.png";
import deleteicon from "../../../assets/img/icons/delete-icon.png";
import TableView from "../../../components/TableView/TableView";
import CustomerNotificationModal from "../../../components/SuperAdminModals/CustomerNotificationModal";
import { useRef } from "react";
import "./CustomerNotification.scss"

const CustomerNotification = () => {


    const child = useRef();
    useEffect(() => { }, []);

    const [header, setTableHeader] = useState([
        {
            title: "Notification ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Sent to",
            dataIndex: "sentto",
            key: "sentto",
        },
        {
            title: "Content",
            dataIndex: "content",
            key: "content",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Time",
            dataIndex: "time",
            key: "time",
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
            id: "14",
            sentto: "Aspirantt,Tharun,test info,Alahli private hospital",
            content: "Welcome to bleepy",
            date: "09/12/2020",
            time: "01:37",

        },
        {
            id: "14",
            sentto: "Aspirantt,Tharun,test info,Alahli private hospital",
            content: "Welcome to bleepy",
            date: "09/12/2020",
            time: "01:37",
        },
    ]);


    return (
        <main>
            <div className="showcustomer-notification-wrapper">
            <CustomerNotificationModal ref={child} />
            <TableView header={header} data={data} />
            </div>
        </main>
     
    )
}

export default CustomerNotification;