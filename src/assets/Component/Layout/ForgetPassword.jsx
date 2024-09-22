import React, { useState } from 'react';
import Button from './Button';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function ForgetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forget password logic here
    console.log("Email for password reset:", email);
  };

  return (
  
    <div>
      <div><Navbar/></div>
    <div className="min-h-screen flex items-center justify-center p-4 ">
      
      {/* Container for form and image */}
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left side: Forget Password Form */}
        <div className="w-1/2 p-8 ">
          <h2 className="text-3xl font-bold text-center mb-6">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Link to='/login'>
        
            <Button 
              style="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
              text={'Send OTP'} 
            /></Link>
          </form>
        </div>

        {/* Right side: Image */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_image/media_image/2023-04/syringe%20and%20bottle%20mrna%20vaccine.jpg?itok=8ubjgoVe")',
          }}
        ></div>
      </div>
    </div>
    </div>
  );
}

export default ForgetPassword;
