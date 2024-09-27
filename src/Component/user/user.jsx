import React from 'react';
import UserNavbar from './UserNav';

const User = () => {
  // You can fetch the username from localStorage if it's stored after login
  const username = localStorage.getItem('username') || 'User'; 

  return (
    <>
      <div className="flex min-h-screen">
    
        <div className="w-1/4">
          <UserNavbar />
        </div>

        <div className="w-3/4 p-8">
       
          <h1 className="text-3xl font-bold mb-6">Welcome, {username}</h1>

      
          <div className="flex justify-between">
            <div className="w-1/2 p-4 bg-white shadow rounded mr-4">
              <h2 className="text-xl font-semibold mb-4">Vaccination Record</h2>
            
            </div>
            <div className="w-1/2 p-4 bg-white shadow rounded ml-4">
              <h2 className="text-xl font-semibold mb-4">Upcoming Vaccines</h2>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
