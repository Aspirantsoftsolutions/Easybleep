import { useEffect, useState } from "react";
import tableheader from "../../data/tableheader";
import "./TableView.scss";
import tabledata from "../../data/tabledata";
import { Space, Table, Tag } from "antd";
import Icon, {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";


const TableView = (props) => {
  
  const [columns, setColumns] = useState(props.header);
  const [data, setData] = useState(props.data);
 
  useEffect(() => {
    //generateHeader();
  }, [props.data]);

 

  return (
    <>
      {props.data.length > 0 &&
        <Table columns={props.header} dataSource={props.data} />}
    </>
  );
};

export default TableView;
