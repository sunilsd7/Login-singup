import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Navbar from './Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Container for both form and image */}
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left side: Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="items-center justify-between">
              <Button style="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" text={"Login"} />
            </div>
            <div className="mt-4 text-center">
              <Link
                to="/forgetPassword"
                className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-700"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="text-center mt-2">
              <span className="inline-block align-baseline font-bold text-sm text-gray-700">
                Don't have an account? <Link to='/signup' className="text-red-500 hover:text-red-700">Signup</Link>
              </span>
            </div>
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
    </>
  );
}

export default Login;
