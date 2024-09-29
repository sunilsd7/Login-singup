import React,{useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { useLocation } from 'react-router-dom'

import Login from './Component/Layout/Login';
import Signup from './Component/Layout/Signup';


import Home from './Component/Layout/home';
import User from './Component/user/user';
import ForgetPassword from './Component/Layout/ForgetPassword';
import Moderator from './Component/Moderator/Moderator';
import UserManagement from './Component/Moderator/UserManagement';
import RecordManagement from './Component/Moderator/recordManagement';
import ModeratorChat from './Component/Moderator/ModeratorChat';
import Appoinment from './Component/user/Appointment';
import VaccinationDetails from './Component/user/VaccinationDetails';
import UserChat from './Component/user/UserChat';
import ResetPassword from './Component/Layout/Resetpassword';
import USerPasswordReset from './Component/user/UserPasswordChange';






function App() {
  const location=useLocation();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (token || username) {
      const currentPath = location.pathname;
      console.log(currentPath)
      const protectedPath=['/','/signup','/login']
      if(protectedPath.includes(currentPath)){
        console.log("token removed if includes!")
        localStorage.clear();

      }
    }
  }, [location]);
  return (
    <>
    <div><Toaster  position="top-center"
  reverseOrder={false}/></div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} />
      <Route path='/moderatorDashboard' element={<Moderator />} />
      <Route path='/usermanagement' element={<UserManagement />} />
      <Route path='/vaccinationRecord' element={<RecordManagement />} />
   

      <Route path='/appointment' element={<Appoinment/>} />
      <Route path='/vaccinationdetails' element={<VaccinationDetails />} />
      <Route path='/resetPassword' element={<ResetPassword />} />
      <Route path='/userpasswordreset' element={<USerPasswordReset/>} />




      
      <Route path='/ModeratorChat' element={<ModeratorChat />} />
      <Route path='/UserChat' element={<UserChat />} />




      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forgetPassword' element={<ForgetPassword />} />
    </Routes>
    </>
  );
}

export default App;
