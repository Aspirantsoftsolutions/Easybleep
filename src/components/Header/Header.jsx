import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./header.scss";
import {
  AppstoreOutlined,
  EyeOutlined,
  MailOutlined,
  SettingOutlined,
  ApartmentOutlined,
  MailFilled,
  TeamOutlined,
  CheckCircleFilled,
  BellFilled,
  UserAddOutlined,
  DashboardOutlined,
  ScheduleOutlined,
  PlusOutlined,
  DesktopOutlined,
  SearchOutlined,
  UserOutlined,
  IdcardOutlined,
  ApiOutlined,
  SwitcherOutlined,
  NotificationOutlined,
  MessageOutlined,
  BellOutlined,
  PercentageOutlined,
  MenuOutlined,
  SettingFilled,
  UsergroupAddOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons";
import { Dropdown, Form, Menu, Space } from "antd";
import { Button, Modal } from "antd";
import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Link } from "react-router-dom";
import logo from '../../assets/img/bleepy.svg'
import profile from '../../assets/img/user.jpg'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [role, setUserRole] = useState(localStorage.getItem("Role"));
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  useEffect(() => {
    function handkeResize() {
      let width = window.innerWidth;

      if (width <= 1000) {
        setCollapsed(true)
      }
      else
        setCollapsed(false)
    }
    handkeResize();

    return () => window.addEventListener("resize", handkeResize)
  }, []);

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(
      <Link to="/" className="link">
        Dashboard
      </Link>,
      "Dashboard",
      <DashboardOutlined />
    ),
    getItem(
      <Link to="/pushnotification" className="link">
        Push Notification
      </Link>,
      "home",
      <BellFilled />
    ),
    getItem("Admin Panel", "sub1", <SettingFilled />, [
      getItem(
        <Link to="/access" className="link">
          Access Management
        </Link>,
        "access"
      ),
      getItem(
        <Link to="/location" className="link">
          Location Notification
        </Link>,
        "location"
      ),
      getItem(
        <Link to="/indoorlocation" className="link">
          Indoor location Management
        </Link>,
        "indoorlocation"
      ),
      getItem(
        <Link to="/bleeps" className="link">
          Bleeps Management
        </Link>,
        "bleeps"
      ),
      getItem(
        <Link to="/device" className="link">
          Device Management
        </Link>,
        "device"
      ),
      getItem(
        <Link to="/teams" className="link">
          Team Management
        </Link>,
        "teams"
      ),
      getItem(
        <Link to="/user" className="link">
          User Management
        </Link>,
        "user"
      ),
      getItem(
        <Link to="/settings" className="link">
          Settings
        </Link>,
        "settings"
      ),
    ]),
    getItem("Reporting Panel", "sub2", <UsergroupAddOutlined />, [
      getItem(
        <Link to="/registrationkeys" className="link">
          Registration key logs
        </Link>,
        "registration"
      ),
      getItem(
        <Link to="/emergenylogs" className="link">
          Emergency notification logs
        </Link>,
        "emergency"
      ),
      getItem(
        <Link to="/reports" className="link">
          Report
        </Link>,
        "report"
      ),
    ]),
    getItem(
      <Link to="/licence" className="link">
        Licence Management
      </Link>,
      "Licence",
      <IdcardOutlined />
    ),
  ]; // submenu keys of first level

  const managerItems = [
    getItem(
      <Link to="/managerdashboard" className="link">
        Dashboard
      </Link>,
      "managerdashboard",
      <DashboardOutlined />
    ),
    getItem(
      <Link to="/agents" className="link">
        Agents on duty
      </Link>,
      "agents",
      <UserAddOutlined />
    ),
    getItem(
      <Link to="/notificationmanagement" className="link">
        Emergency Notification Management
      </Link>,
      "notificationmanagement",
      <ScheduleOutlined />
    ),


    getItem(
      <Link to="/notificationlogs" className="link">
        Emergency Notification Logs
      </Link>,
      "notificationlogs",
      <DesktopOutlined />
    ),
  ]

  const supervisorItems = [
    getItem(
      <Link to="/managerdashboard" className="link">
        Dashboard
      </Link>,
      "managerdashboard",
      <DashboardOutlined />
    ),
    getItem(
      <Link to="/searchteam" className="link">
        Team Management
      </Link>,
      "searchteam",
      <TeamOutlined />
    ), getItem(
      <Link to="/teamschedule" className="link">
        Schedule Management
      </Link>,
      "teamschedule",
      <AppstoreOutlined />
    ),

    getItem(
      <Link to="/realtimecodes" className="link">
        Emergency Notification Management
      </Link>,
      "realtimecodes",
      <ScheduleOutlined />
    ),
    getItem(
      <Link to="/codelogs" className="link">
        Emergency Notification Logs
      </Link>,
      "codelogs",
      <DesktopOutlined />
    ),
  ];

  const agentItems = [
    getItem(
      <Link to="/managerdashboard" className="link">
        Dashboard
      </Link>,
      "managerdashboard",
      <DashboardOutlined />
    ),
    getItem(
      <Link to="/notificationmanagement" className="link">
        Emergency Notification Management
      </Link>,
      "notificationmanagement",
      <ScheduleOutlined />
    ), getItem(
      <Link to="/teamsactivity" className="link">
        Teams Activity
      </Link>,
      "teamsactivity",
      <TeamOutlined />
    ),

    getItem(
      <Link to="/codelogs" className="link">
        Emergency Notification Logs
      </Link>,
      "codelogs",
      <DesktopOutlined />
    ),
  ]

  const superAdminItems = [
    getItem(
      <Link to="/showcountry" className="link">
        Country Management
      </Link>,
      "showcountry",
      <DashboardOutlined />
    ),
    getItem(
      <Link to="/showcustomer" className="link">
        Customer Management
      </Link>,
      "showcustomer",
      <ScheduleOutlined />
    ), getItem(
      <Link to="/showstation" className="link">
        Station Management
      </Link>,
      "showstation",
      <TeamOutlined />
    ),

    getItem(
      <Link to="/showcustomernotification" className="link">
        Customer Notification
      </Link>,
      "showcustomernotification",
      <DesktopOutlined />
    ),
  ]

  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [managerOpenKeys, setManagerOpenKeys] = useState(["sub2"]);


  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //push check

  const headerMenu = <Menu
    items={[
      {
        label: (
          <a target="_blank" onClick={() => {
            navigate('/editprofile')
          }}>
            Edit Profile
          </a>
        ),
        key: '0',
      },
      {
        label: (
          <a target="_blank" onClick={() => {
            navigate('/changepwd')
          }}>
            Change Password
          </a>
        ),
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" onClick={() => {
            localStorage.clear();
            navigate('/login');
            window.location.reload()
          }} >
            Sign Out
          </a>
        ),
        key: '3',

      },
    ]}
  />

  return (
    <>
      <div className="header-components-wrapper">
        <header>
          <div className="topheader">
            <div className="navheaderblock">
              <div className="navmenu">
                <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <div className="logomain">
                  <img src={logo} alt="Logo" />
                </div>
              </div>
              <div className="navmenu-profile">
                <BellFilled className="notificon" />
                {/* <div className="profile"> <img src={profile} alt="Logo" /></div>
                <div className="profilename">Hello Admin </div> */}
                <Dropdown overlay={headerMenu}>
                  <a onClick={e => e.preventDefault()}>
                    <Space>
                      <div className="profile"> <img src={profile} alt="Logo" /></div>
                      <div className="profilename">Hello Admin </div>
                      <CheckCircleFilled />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </header>
        <div className="leftmenu-block">

          {
            role == "ADMIN" && <Menu
              mode="inline"
              className="leftmenu"
              openKeys={openKeys}
              defaultSelectedKeys={['Dashboard']}
              onOpenChange={onOpenChange}
              style={{
                // width: 256,
                color: "white",
              }}
              inlineCollapsed={collapsed}
              items={items}
            />
          }

          {
            role == "MANAGER" && <Menu
              mode="inline"
              className="leftmenu"
              openKeys={openKeys}
              defaultSelectedKeys={['managerdashboard']}
              onOpenChange={onOpenChange}
              style={{
                // width: 256,
                color: "white",
              }}
              inlineCollapsed={collapsed}
              items={managerItems}
            />
          }

          {
            role == "SUPERVISOR" && <Menu
              mode="inline"
              className="leftmenu"
              openKeys={openKeys}
              defaultSelectedKeys={['managerdashboard']}
              onOpenChange={onOpenChange}
              style={{
                // width: 256,
                color: "white",
              }}
              inlineCollapsed={collapsed}
              items={supervisorItems}
            />
          }
          {
            role == "AGENT" && <Menu
              mode="inline"
              className="leftmenu"
              openKeys={openKeys}
              defaultSelectedKeys={['managerdashboard']}
              onOpenChange={onOpenChange}
              style={{
                // width: 256,
                color: "white",
              }}
              inlineCollapsed={collapsed}
              items={agentItems}
            />
          }
          {
            role == "SUPERADMIN" && <Menu
              mode="inline"
              className="leftmenu"
              openKeys={openKeys}
              defaultSelectedKeys={['showcountry']}
              onOpenChange={onOpenChange}
              style={{
                // width: 256,
                color: "white",
              }}
              inlineCollapsed={collapsed}
              items={superAdminItems}
            />
          }
        </div>
      </div>
    </>
  );
};

export default Header;
