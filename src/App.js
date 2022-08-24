import logo from './logo.svg';
import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PushNotification from './containers/PushNotification';
import AccessManagement from './containers/AccessManagement/AccessManagement';
import LocationManagement from './containers/LocationManagement';
import IndoorLocationManagement from './containers/IndoorLocationManagement';
import BleepsManagement from './containers/BleepsManagement';
import UserManagement from './containers/UserManagement';
import TeamManagement from './containers/TeamManagement';
import Settings from './containers/Settings';
import DeviceManagement from './containers/DeviceManagement';
import RegistrationKeyLogs from './containers/RegistrationKeyLogs';
import EmergenyNotificationLogs from './containers/EmergenyNotificationLogs/EmergenyNotificationLogs';
import LicenceManagement from './containers/LicenceManagement';
import Reports from './containers/Reports/Reports';
import ManagerDashboard from './containers/Manager/ManagerDashboard';
import EmergencyNotification from './containers/Manager/EmergencyNotification';
import NotificationLogs from './containers/Manager/NotificationLogs/NotificationLogs';
import SupervisorDashboard from './containers/Supervisor/SupervisorDashboard';
import ScheduleManagement from './containers/Supervisor/ScheduleManagement/ScheduleManagement';
import Agents from './containers/Manager/Agents';
import Teams from './containers/Supervisor/Teams';
import TeamsActivity from './containers/Agent/TeamsActivity'
import Changepassword from './components/ChangePassword/Changepassword';
import EditProfile from './components/EditProfile/EditProfile';
import AdminDashboard from './containers/AdminDashboard/AdminDashboard';
import CustomerManagement from './containers/SuperAdmin/CustomerManagement';
import CountryManagement from './containers/SuperAdmin/CountryManagement';
import CustomerNotification from './containers/SuperAdmin/CustomerNotification';
import StationManagement from './containers/SuperAdmin/StationManagement';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const naviage = useNavigate();
  useEffect(() => {

    getToken();
  }, []);

  const getToken = (value) => {

    if (localStorage.getItem("isLogin") != "" && localStorage.getItem("isLogin") != undefined &&
      localStorage.getItem("isLogin") == "TRUE") {
      setIsAuth(true);
    }
    else {
      setIsAuth(false);
    }
  }

  if (!isAuth) {
    return <Login getToken={getToken} />
  }
  else
    return (
      <div className="App">
        {isAuth && <Header />}
        <Routes>
          {
            !isAuth && <Route exact path='/login' element={<Login getToken={getToken} />} />
          }
          <Route exact path='/' element={<AdminDashboard />} />
          <Route exact path='/pushnotification' element={<PushNotification />} />
          <Route exact path='/editprofile' element={<EditProfile />} />
          <Route exact path='/changepwd' element={<Changepassword />} />
          <Route exact path='/access' element={<AccessManagement />} />
          <Route exact path='/location' element={<LocationManagement />} />
          <Route exact path='/indoorlocation' element={<IndoorLocationManagement />} />
          <Route exact path='/bleeps' element={<BleepsManagement />} />
          <Route exact path='/device' element={<DeviceManagement />} />
          <Route exact path='/teams' element={<TeamManagement />} />
          <Route exact path='/user' element={<UserManagement />} />
          <Route exact path='/settings' element={<Settings />} />
          <Route exact path='/registrationkeys' element={<RegistrationKeyLogs />} />
          <Route exact path='/emergenylogs' element={<EmergenyNotificationLogs />} />
          <Route exact path='/reports' element={<Reports />} />
          <Route exact path='/licence' element={<LicenceManagement />} />
          {/* Manager Routes */}
          <Route exact path='/managerdashboard' element={<ManagerDashboard />} />
          <Route exact path='/agents' element={<Agents />} />
          <Route exact path='/notificationmanagement' element={<EmergencyNotification />} />

          <Route exact path='/notificationlogs' element={<NotificationLogs />} />
          {/* Manager Routes */}

          {/* SUPERVISOR Routes */}
          <Route exact path='/supervisordashboard' element={<SupervisorDashboard />} />
          <Route exact path='/searchteam' element={<Teams />} />
          <Route exact path='/teamschedule' element={<ScheduleManagement />} />
          <Route exact path='/realtimecodes' element={<EmergencyNotification />} />

          <Route exact path='/codelogs' element={<NotificationLogs />} />
          {/* SUPERVISOR Routes */}

          {/* AGENTS ROUTES*/}
          <Route exact path='/teamsactivity' element={<TeamsActivity />} />
          {/* AGENTS ROUTES*/}

          {/* SUPER ADMIN*/}
          <Route exact path='/showcountry' element={<CountryManagement />} />
          <Route exact path='/showcustomer' element={<CustomerManagement />} />
          <Route exact path='/showstation' element={<StationManagement />} />
          <Route exact path='/showcustomernotification' element={<CustomerNotification />} />
          {/* SUPER ADMIN*/}
        </Routes>
        {isAuth && <Footer />}
      </div>
    );
}

export default App;
