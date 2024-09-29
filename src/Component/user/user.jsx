import React,{useEffect} from 'react';
import toast from 'react-hot-toast';
import UserNavbar from './UserNav';
import { useNavigate } from 'react-router-dom';
//import GetAuthToken from '../Layout/GetAuthToken.jsx';
import VaccinationRecords from './UserVaccinationRecord';


const User = () => {
  
  const navigate=useNavigate();
  const username = localStorage.getItem('username') || 'User'; 
//const token=GetAuthToken();
 



  return (
    <>
      <div className="flex min-h-screen">
    
        <div className="">
          <UserNavbar />
        </div>
        <div className='w-full'>

        <div className="w-3/4 p-8">
       
          <h1 className="text-3xl font-bold mb-6">Welcome, {username}</h1>

          <div className="usedetails m-10">
            <p className="font-bold">User Information</p>
            <h2>Email:sumildumre555@gmail.com</h2>
            <h2>Name:Sunil Dumre Sharma</h2>
            
          </div>

      
        
       
        </div>
        <div className='mt-10'>
          <p className="font-bold ">Vaccination Record</p>
          <VaccinationRecords/>
        </div>
        </div>
      
      </div>
    </>
  );
};

export default User;
