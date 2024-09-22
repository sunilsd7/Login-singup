import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './assets/Component/Layout/Login';
import Signup from './assets/Component/Layout/Signup';
import Home from './assets/Component/Layout/home';
import User from './assets/Component/user/user';
import ForgetPassword from './assets/Component/Layout/ForgetPassword';
import Moderator from './assets/Component/Moderator/Moderator';
import UserManagement from './assets/Component/Moderator/UserManagement';
import RecordManagement from './assets/Component/Moderator/recordManagement';
import Chat from './assets/Component/Moderator/chat';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} />
      <Route path='/moderatorDashboard' element={<Moderator />} />
      <Route path='/usermanagement' element={<UserManagement />} />
      <Route path='/vaccinationRecord' element={<RecordManagement />} />
      <Route path='/chat' element={<Chat />} />



      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forgetPassword' element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;
