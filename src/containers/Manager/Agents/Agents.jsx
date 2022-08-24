import { DatePicker, Table } from "antd";
import "./Agents.scss"
const Agents = () => {
  const data = [
    {
     
      key: "1",
      user: "https://easybleep.com/assets/images/default.png",
      fullname: "Noof Salem",
      completed: "0",
      cacelled: "0",
      role: "Station agent",
    },
    {
      
      key: "2",
      user: "https://easybleep.com/assets/images/1613631044.jpeg",
      fullname: "Naveen A",
      completed: "0",
      cacelled: "0",
      role: "Station agent",
    },
    {
      key: "2",
      user: "https://easybleep.com/assets/images/default.png",
      fullname: "Carl lie",
      completed: "0",
      cacelled: "0",
      role: "Station agent",
    },
  ];

  const columns = [
    { className:"agenticon",
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (_, item) => {
        return (
          <img            
            src={item.user}
            alt="user"
            style={{
              height: 60,
              width: 60,
              border: 1,
            }}
          >  
          </img>          
        );
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Completed Request",
      dataIndex: "completed",
      key: "completed",
    },
    {
      title: "Cacelled Request",
      dataIndex: "cacelled",
      key: "cacelled",
    },
  ];

  return (
    <>
      <main>
        <div className="agentduty-wrapper">
            <div className="agentduheader">
            <h3>Agents on duty</h3>
        <DatePicker />
            </div>
       
        {data.length > 0 && <Table columns={columns} dataSource={data} />}
        </div>
      </main>
    </>
  );
};

export default Agents;
